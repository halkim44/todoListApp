import Todos from './todos';

const Project = function(name) {
    let obj = {},
     _todolist = [],
     _active = false;

    obj.name = name;
    obj.getTodolist = function() {
        return _todolist;
    };
    obj.addTodo = function (title) {
        _todolist.push(Todos(title));
    }
    obj.isActive = function () {
        return _active;
    }
    obj.setAsActive = function () {
        _active = true;
    }
    obj.setAsInactive = function () {
        _active = false;
    }
    return obj;
}
export default Project
