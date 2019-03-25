import Storage from "./storage";
import Event from './EventDispatcher';
import Project from "./project";

export default function Model() {
    let _projectsArray = getProjectsArrayFromStore(),
        _currentlyViewedProject = getCurrentlyViewedProject();


    function getCurrentlyViewedProject() {
        let currentProject;
        Storage.getData("projects", (project) => {
            if (project.isCurrentlyViewed) {
                currentProject = project;
            }
        });

        return currentProject;
    }

    function getProjectsArrayFromStore() {
        let projectIds = Storage.getAllId("projects");

        return projectIds.map(id => {

            return Storage.getData("projects", function (project) {
                if (project.id == id) {
                    let obj = {};
                    // information need to be displayed in DOM
                    obj.title = project.title;
                    obj.id = project.id;
                    obj.isCurrentlyViewed = project.isCurrentlyViewed;
                    return obj;
                }
            })

        })
    }
    this.project = Project;
    this.event = new Event(this);

    this.get = function (eventFor) {
            switch (eventFor) {
                case 'projectsData':
                    return _projectsArray;
                case 'todos':
                if(!_currentlyViewedProject){
                    return [];
                }
                    return getProjectTodos();
                case 'currentProject':
                    return _currentlyViewedProject;
            }
    };

    this.setProjectAsCurrentlyViewed = function (id) {
        _projectsArray.forEach(project => {
            Storage.editData("projects", project.id, 'isCurrentlyViewed', false);
        })

        Storage.editData("projects", id, 'isCurrentlyViewed', true);

        _projectsArray = getProjectsArrayFromStore();
        _currentlyViewedProject = getCurrentlyViewedProject();
    }
    this.toggleTodoCompletion = function (id) {
        let initialStatus = Storage.getData("todos", (todo) => {
            if (todo.id + "" === id) { // need to convert todo.id (number) to string because id is string
                return todo.isCompleted;
            }
        })
        Storage.editData("todos", id, 'isCompleted', !initialStatus);
    }
    this.deleteProject = function (projectId) {

        let projectSelected = Storage.getData("projects", (project) => {
            if ([project.id === projectId]) {
                return project;
            }
        });
        projectSelected.todos.forEach(todoId => {
            Storage.deleteData('todos', todoId);
        })

        Storage.deleteData('projects', projectId);
        _currentlyViewedProject = getCurrentlyViewedProject();
        _projectsArray = getProjectsArrayFromStore();
    }
    this.deleteTodo = function (todoId) {
        Storage.deleteData("todos", todoId);

        let todosArray = _currentlyViewedProject.todos;
        let todoIndex = todosArray.indexOf(todoId);
        if (todoIndex !== -1) {
            todosArray.splice(todoIndex, 1);
            Storage.editData("projects", _currentlyViewedProject.id, 'todos', todosArray);
        }
    }

    function getProjectTodos() {
        return _currentlyViewedProject.todos.map(todoId => {

            return Storage.getData("todos", (todo) => {
                if (todo.id === todoId) {
                    return todo
                }
            })
        })
    }
};
