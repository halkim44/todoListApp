import Project from "./project";

let User = [];
let callbackFnList = {};

export function subscribe(dataType, callbackFn) {
    if (!callbackFnList.hasOwnProperty(dataType)) {
        callbackFnList[dataType] = [];
    }

    callbackFnList[dataType].push(callbackFn);
}

export function addProject(title) {
    User.push(Project(title));

    User[User.length -1].setAsActive();
    publish();
}

export  function addTodoInCurrentProject(todoName) {
    let currentProject;
    User.forEach(function (proj) {
        if (proj.isActive()) {
            currentProject = proj;
        }
    });
    currentProject.addTodo(todoName);
    publish();
}

export function publish() {
    let param;

    for (let prop in callbackFnList) {

        switch (prop) {
            case "projectArray":
                param = User;
                break;
            case "activeProject":
                param = undefined;
                User.forEach(function (proj) {
                    if (proj.isActive()) {
                        param = proj;
                    }
                });
                break;
            default:
                console.log("invalid property name");
        }

        callbackFnList[prop].forEach(func => {
            func(param);
        });
    }
}

export function chooseProject(index) {

    for (let i = 0; i < User.length; i++) {
        if (i === index) {
            User[i].setAsActive();
            console.log(User[i].isActive());
        } else {
            User[i].setAsInactive();
            console.log(User[i].isActive());
        }
    }
    console.log(User);
    publish();
}
