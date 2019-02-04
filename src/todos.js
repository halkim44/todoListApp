const Todos = function (title) {
    var obj = {}, _completed = false;
    obj.title = title;
    obj.isCompleted = function() {
        return _completed;
    };

    obj.toggleCompletion = function() {
        _completed = !_completed;
    }

    return obj;
}

export default Todos;
