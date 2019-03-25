import todo from './todo';
import Storage from "./storage";

const Project = (function () {

    const create = (projectTitle, id) => {
        if (projectTitle) {
            let newProject = {
                id: id,
                title: projectTitle,
                isCurrentlyViewed: true,
                todos: []
            }

            Storage.addData( "projects", id, newProject );
        }
    }

    const addTodo = function (currentProject, title, dueDate, description, todoId) {
        currentProject.todos.push(todoId);
        let newTodo = todo.create(title, dueDate, description);
        newTodo.id = todoId;
        Storage.addData( "todos", todoId, newTodo );
    }

    return {
        create,
        addTodo
    }
})();
export default Project
