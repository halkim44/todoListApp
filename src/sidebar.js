import {
    subscribe,
    addProject,
    chooseProject
} from './userData';
(function () {
    document.querySelector('.project-btn').addEventListener("click", function () {
        let projectTitleInput = document.querySelector('.project-title-input');

        addProject(projectTitleInput.value);
        projectTitleInput.value = "";
    });

    function renderprojectArray(projectArray) {
        let listContainer = document.querySelector('.project-list > ul');

        while (listContainer.children.length > 0) {
            listContainer.removeChild(listContainer.children[0]);
        }

        for (let i = 0; i < projectArray.length; i++) {

            let li = document.createElement('li');
            li.appendChild(document.createElement('span'));
            li.children[0].textContent = projectArray[i].name;
            li.onclick = function () {
                chooseProject(i);
            }
            listContainer.appendChild(li);
        }
    }


    subscribe("projectArray", renderprojectArray);
})()
