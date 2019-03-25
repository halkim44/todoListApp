let Storage = (function () {

    let userData = {
        projects: {
            byId: {
                "welcome-template": {
                    id: "welcome-template",
                    title: "welcome 👋",
                    isCurrentlyViewed: true,
                    todos: ["todo1", "todo2", "todo3"]
                }
            },
            allIds: ["welcome-template"]
        },
        todos: {
            byId: {
                "todo1": {
                    id: "todo1",
                    title: "todo-title1",
                    isCompleted: false,
                    dueDate: "dd-mm-yyyy",
                    description: "todo-description",
                    note: "todo-note",
                },
                "todo2": {
                    id: "todo2",
                    title: "todo-title2",
                    isCompleted: false,
                    dueDate: "dd-mm-yyyy",
                    description: "todo-description",
                    note: "todo-note",
                },
                "todo3": {
                    id: "todo3",
                    title: "todo-title3",
                    isCompleted: false,
                    dueDate: "dd-mm-yyyy",
                    description: "todo-description",
                    note: "todo-note",
                }
            },
            allIds: ["todo1", "todo2", "todo3"],
        },
    };
    if (storageAvailable()) {
        // replace data template with stored useData

        userData = JSON.parse(localStorage.getItem('userData')) || userData;
    }

    function storageAvailable() {
        try {
            var storage = window['localStorage'],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return e instanceof DOMException && (
                    // everything except Firefox
                    e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === 'QuotaExceededError' ||
                    // Firefox
                    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage.length !== 0;
        }
    }

    function getData(eventFor, testFn) {
        let dataGroup = userData[eventFor].byId;
        for (let data in dataGroup) {

            let fetched = testFn(dataGroup[data]);

            if (fetched !== undefined) {
                return fetched;
            }
        }
    }

    function update() {
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    function getAllId(eventFor) {
        return userData[eventFor].allIds;
    }

    function editData(eventFor, id, prop, value) {
        userData[eventFor].byId[id][prop] = value;
        update();
    }

    function addData(dataType, id, data) {
        if (dataType && data && id) {
            userData[dataType].byId[id] = data;
            userData[dataType].allIds.push(id);
        } else {
            console.error('parameter not complete');
        }
        update();
    }

    function deleteData(dataType, id) {
        delete userData[dataType].byId[id];
        let idIndex = userData[dataType].allIds.indexOf(id);
        //delete id of data in allIds of [dataType]
        userData[dataType].allIds.splice(idIndex,1);
        update();
    }
    update();
    return {
        update,
        getAllId,
        getData,
        editData,
        addData,
        deleteData
    }
})()

export default Storage
