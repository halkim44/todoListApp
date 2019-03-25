import {
    MDCDialog
} from '@material/dialog';

export default function View(controller, projectNavDOM, todolistViewerDOM) {

    // function to create project nav buttons element
    function createProjectPill(projectObj) {
        let listItem = document.createElement('a');
        listItem.classList = "list-item mdc-list-item";
        listItem.textContent = projectObj.title;
        listItem.dataset.id = projectObj.id;
        listItem.dataset.eventFor = "projects-data"; //for events use
        listItem.dataset.eventType = "view-project";
        if (projectObj.isCurrentlyViewed) {
            listItem.classList.add("mdc-list-item--activated");
        }

        listItem.addEventListener('click', controller);

        listItem.appendChild(createDeleteBtn(projectObj.id, "project"));
        return listItem;
    }


    function createTodoPill(todoObject) {
        let todoDOM = document.createElement('li');
        todoDOM.classList = "todolist__list-item item mdc-list-item mdc-ripple-upgraded";
        todoDOM.innerHTML = `
        <div class="mdc-checkbox">
            <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1" />
            <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                </svg>
                <div class="mdc-checkbox__mixedmark"></div>
            </div>
        </div>
        <span class="mdc-list-item__text">
            <span class="mdc-list-item__primary-text todolist--title mdc-typography mdc-typography--headline6">${todoObject.title}</span>
            <span class="mdc-list-item__secondary-text todolist--due-date">due: ${todoObject.dueDate}</span>
        </span>
        `;
        let listCheckbox = todoDOM.querySelector('input[type="checkbox"]');

        listCheckbox.dataset.id = todoObject.id;
        listCheckbox.dataset.eventFor = 'todo-data'; // for events use

        if (todoObject.isCompleted) {
            listCheckbox.checked = true;
        }
        listCheckbox.addEventListener('click', controller);
        todoDOM.addEventListener('click', function (e) {
            if (!e.target.dataset.eventFor) { // not triggers when clicking on checkbox
                listCheckbox.checked = !listCheckbox.checked; // covering up MDC's default events
            }
        });

        const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

        todoDOM.addEventListener('dblclick', function (e) {
            if (todoObject.description && e.target.tagName !== 'INPUT' && e.target.tagName !== 'A') {
                document.getElementById('my-dialog-title').textContent = todoObject.title;
                document.getElementById('my-dialog-content').textContent = todoObject.description;

                document.querySelector('button[data-mdc-dialog-action="yes"] > span').dataset.id = todoObject.id; // for event handler

                function handler(e) {
                    if (!todoObject.isCompleted) {
                        controller.handleEvent(e);
                    }
                    // remove the eventlistener before closing dialog = to prevent the same element to be attached multiple times
                    document.querySelector('button[data-mdc-dialog-action="yes"]').removeEventListener('click', handler);
                }

                document.querySelector('button[data-mdc-dialog-action="yes"]').addEventListener('click', handler);
                dialog.open();
            }
        });

        todoDOM.appendChild(createDeleteBtn(todoObject.id, 'todo'));

        return todoDOM;
    }


    function createDeleteBtn(dataId, dataType) {
        let temporaryParent = document.createElement('div');

        temporaryParent.innerHTML = `
        <a href="#" data-event-for='deleting--${dataType}' data-id="${dataId}" class="delete-btn--todo mdc-list-item__meta material-icons noBgColor" aria-label="View more information" onclick="event.preventDefault();" tabindex="-1">
            delete
        </a>
        `

        temporaryParent.firstElementChild.addEventListener('click', function (e) {
            let promptString = dataType === "todos" ? "delete todo item ?" :
                "this will delete the entire project's todos. are you sure you want to delete?"
            let isUserConfirmed = confirm(promptString);
            if (isUserConfirmed) {
                controller.handleEvent(e)
            }
        });

        return temporaryParent.firstElementChild;
    }
    // for rendering the project nav list on the sidebar
    function renderProjectNav(model) {
        // remove all children
        let projectsArray = model.get('projectsData');

        while (projectNavDOM.children.length > 0) {
            projectNavDOM.removeChild(projectNavDOM.children[0]);

        }
        if (projectsArray.length) {
            projectsArray.forEach(function (projectObj) {
                projectNavDOM.appendChild(createProjectPill(projectObj));
            });
        }
    }

    function renderTodolist(model) {
        let todolist = model.get('todos');
        let currentProject = model.get('currentProject');
        let todolistContainer = todolistViewerDOM.querySelector('.todolist-container');

        todolistViewerDOM.querySelector('.add-todos--container').style.display = "none";
        //remove all element first
        while (todolistContainer.children.length > 0) {
            todolistContainer.removeChild(todolistContainer.children[0]);
        }

        if(currentProject) {
            todolistViewerDOM.querySelector('.add-todos--container').style.display = "";
            todolistViewerDOM.querySelector('.project-viewer__header__title').textContent = currentProject.title;
        }
        if (todolist.length > 0) {

            todolist.forEach(todo => {
                todolistContainer.appendChild(createTodoPill(todo));
            })
        }
    }


    // src = https://plainjs.com/javascript/ajax/serialize-form-data-into-an-array-46/
    function serializeArray(form) {
        var field, l, s = {};
        if (typeof form == 'object' && form.nodeName == "FORM") {
            var len = form.elements.length;
            for (var i = 0; i < len; i++) {
                field = form.elements[i];
                if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                    if (field.type == 'select-multiple') {
                        l = form.elements[i].options.length;
                        for (j = 0; j < l; j++) {
                            if (field.options[j].selected)
                                s[field.name] = field.value;
                        }
                    } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                        s[field.name] = field.value;
                    }
                }
            }
        }
        return s;
    }


    // set event to add-button for adding project
    document.querySelector('.add-button--projects').addEventListener('click', function (e) {
        let titleTextField = document.querySelector('.project-title-input');

        controller.addProjectHandler(e, titleTextField.value);
        titleTextField.value = "";

        // to reset the css styling of textfield
        titleTextField.focus();
        window.setTimeout(function () {
            titleTextField.blur()
        }, 1);
    })

    let todoInterfaceContainer = todolistViewerDOM.querySelector('.add-todos--container');
    // add event to "+ add todo" button
    todolistViewerDOM.querySelector('.button--display-todo-form').addEventListener('click', function (e) {
        todoInterfaceContainer.classList.remove('todo-form--closed');
    });

    let todoFormEl = todolistViewerDOM.querySelector('.todo-form');

    // prevent page from refreshing when form is submited
    todoFormEl.addEventListener("submit", function (e) {
        e.preventDefault();
        let formData = serializeArray(todoFormEl);
        controller.handleForm(formData);

        todoFormEl.reset();
    })
    todoFormEl.addEventListener("reset", function () {
        todoInterfaceContainer.classList.add('todo-form--closed');
    })

    controller.model.event.attach(renderProjectNav);
    controller.model.event.attach(renderTodolist);
}
