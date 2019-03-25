let todo = (function () {

    const create = function (title, dueDate, description) {

        return {
            title,
            dueDate,
            description,
            isCompleted: false
        }
    }
    return {create};
})()

export default todo;
