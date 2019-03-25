export default function Controller(model) {
    this.model = model;

    this.init = function () {
        model.event.notify();
    }
    this.handleEvent = function (e) {
        let isDataModified = false;
        switch (e.target.dataset.eventFor) {
            case 'projects-data':
                if (e.type === 'click') {
                    model.setProjectAsCurrentlyViewed(e.target.dataset.id);
                    isDataModified = true;
                }
                break;
            case 'todo-data':
                model.toggleTodoCompletion(e.target.dataset.id);
                isDataModified = true;
                break;
            case 'deleting--todo':
                model.deleteTodo(e.target.dataset.id);
                isDataModified = true;
                break;
            case 'deleting--project':
                if (e.currentTarget.dataset.eventFor === 'deleting--project') {
                    model.deleteProject(e.target.dataset.id);
                    isDataModified = true;
                }
                break;
        }
        if (isDataModified) {
            model.event.notify();
        }
    }

    this.addProjectHandler = function (e, projectTitle) {
        let newId = Math.floor(Math.random() * 10000) + ""; // the value type is string

        this.model.project.create(projectTitle, newId);
        model.setProjectAsCurrentlyViewed(newId);

        model.event.notify();
    };
    this.handleForm = function (formData) {
        let newId = Math.floor(Math.random() * 10000) + "";
        let currentProject = model.get('currentProject');

        model.project.addTodo(currentProject, formData.title, formData.duedate, formData.description, newId);
        model.event.notify();
    }
}
