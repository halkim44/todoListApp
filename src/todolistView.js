import {
    subscribe,
    addTodoInCurrentProject,
    publish
} from './userData';
(function(){
    
    document.querySelector('.add-todo-btn').onclick = function() {
        let titleInp = document.querySelector('.todo-title-input');
        addTodoInCurrentProject(titleInp.value);
        titleInp.value = "";
    }

function renderActiveProject(activeProject) {
    if (activeProject) {
        document.querySelector('.project-title').textContent = activeProject.name;

        renderTodolist(activeProject.getTodolist());
    }

}

function renderTodolist(todoArray) {
    let todolistHolder = document.querySelector('.todolist-holder');

    while (todolistHolder.children.length > 0) {
        todolistHolder.removeChild(todolistHolder.children[0]);
    }
    todoArray.forEach(todo => {
        let todoContainer = document.createElement('div');
        let checkbox = document.createElement('input');
        let titleHolder = document.createElement('h3');

        todoContainer.classList.add('todo-container');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checker');
        titleHolder.textContent = todo.title;

        todoContainer.onclick = function () {
            todo.toggleCompletion();
            publish();
        }
        if(todo.isCompleted()) {
            todoContainer.classList.add("todo-complete");
            checkbox.checked = true;
        } else {
            todoContainer.classList.remove('todo-complete');
            checkbox.checked = false;
        }

        todoContainer.appendChild(checkbox);
        todoContainer.appendChild(titleHolder);
        todolistHolder.appendChild(todoContainer);
    });
}
subscribe('activeProject', renderActiveProject);
})();
