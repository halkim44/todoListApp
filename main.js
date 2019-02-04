/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _todolistView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolistView.js */ \"./src/todolistView.js\");\n\n\nconsole.log(\"helloist\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\nconst Project = function(name) {\n    let obj = {},\n     _todolist = [],\n     _active = false;\n\n    obj.name = name;\n    obj.getTodolist = function() {\n        return _todolist;\n    };\n    obj.addTodo = function (title) {\n        _todolist.push(Object(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title));\n    }\n    obj.isActive = function () {\n        return _active;\n    }\n    obj.setAsActive = function () {\n        _active = true;\n    }\n    obj.setAsInactive = function () {\n        _active = false;\n    }\n    return obj;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userData */ \"./src/userData.js\");\n\n(function () {\n    document.querySelector('.project-btn').addEventListener(\"click\", function () {\n        let projectTitleInput = document.querySelector('.project-title-input');\n\n        Object(_userData__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])(projectTitleInput.value);\n        projectTitleInput.value = \"\";\n    });\n\n    function renderprojectArray(projectArray) {\n        let listContainer = document.querySelector('.project-list > ul');\n\n        while (listContainer.children.length > 0) {\n            listContainer.removeChild(listContainer.children[0]);\n        }\n\n        for (let i = 0; i < projectArray.length; i++) {\n\n            let li = document.createElement('li');\n            li.appendChild(document.createElement('span'));\n            li.children[0].textContent = projectArray[i].name;\n            li.onclick = function () {\n                Object(_userData__WEBPACK_IMPORTED_MODULE_0__[\"chooseProject\"])(i);\n            }\n            listContainer.appendChild(li);\n        }\n    }\n\n\n    Object(_userData__WEBPACK_IMPORTED_MODULE_0__[\"subscribe\"])(\"projectArray\", renderprojectArray);\n})()\n\n\n//# sourceURL=webpack:///./src/sidebar.js?");

/***/ }),

/***/ "./src/todolistView.js":
/*!*****************************!*\
  !*** ./src/todolistView.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userData */ \"./src/userData.js\");\n\n(function(){\n    \n    document.querySelector('.add-todo-btn').onclick = function() {\n        let titleInp = document.querySelector('.todo-title-input');\n        Object(_userData__WEBPACK_IMPORTED_MODULE_0__[\"addTodoInCurrentProject\"])(titleInp.value);\n        titleInp.value = \"\";\n    }\n\nfunction renderActiveProject(activeProject) {\n    if (activeProject) {\n        document.querySelector('.project-title').textContent = activeProject.name;\n\n        renderTodolist(activeProject.getTodolist());\n    }\n\n}\n\nfunction renderTodolist(todoArray) {\n    let todolistHolder = document.querySelector('.todolist-holder');\n\n    while (todolistHolder.children.length > 0) {\n        todolistHolder.removeChild(todolistHolder.children[0]);\n    }\n    todoArray.forEach(todo => {\n        let todoContainer = document.createElement('div');\n        let checkbox = document.createElement('input');\n        let titleHolder = document.createElement('h3');\n\n        todoContainer.classList.add('todo-container');\n        checkbox.setAttribute('type', 'checkbox');\n        checkbox.classList.add('checker');\n        titleHolder.textContent = todo.title;\n\n        todoContainer.onclick = function () {\n            todo.toggleCompletion();\n            Object(_userData__WEBPACK_IMPORTED_MODULE_0__[\"publish\"])();\n        }\n        if(todo.isCompleted()) {\n            todoContainer.classList.add(\"todo-complete\");\n            checkbox.checked = true;\n        } else {\n            todoContainer.classList.remove('todo-complete');\n            checkbox.checked = false;\n        }\n\n        todoContainer.appendChild(checkbox);\n        todoContainer.appendChild(titleHolder);\n        todolistHolder.appendChild(todoContainer);\n    });\n}\nObject(_userData__WEBPACK_IMPORTED_MODULE_0__[\"subscribe\"])('activeProject', renderActiveProject);\n})();\n\n\n//# sourceURL=webpack:///./src/todolistView.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Todos = function (title) {\n    var obj = {}, _completed = false;\n    obj.title = title;\n    obj.isCompleted = function() {\n        return _completed;\n    };\n\n    obj.toggleCompletion = function() {\n        _completed = !_completed;\n    }\n\n    return obj;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\n\n\n//# sourceURL=webpack:///./src/todos.js?");

/***/ }),

/***/ "./src/userData.js":
/*!*************************!*\
  !*** ./src/userData.js ***!
  \*************************/
/*! exports provided: subscribe, addProject, addTodoInCurrentProject, publish, chooseProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscribe\", function() { return subscribe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodoInCurrentProject\", function() { return addTodoInCurrentProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"publish\", function() { return publish; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chooseProject\", function() { return chooseProject; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nlet User = [];\nlet callbackFnList = {};\n\nfunction subscribe(dataType, callbackFn) {\n    if (!callbackFnList.hasOwnProperty(dataType)) {\n        callbackFnList[dataType] = [];\n    }\n\n    callbackFnList[dataType].push(callbackFn);\n}\n\nfunction addProject(title) {\n    User.push(Object(_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title));\n\n    User[User.length -1].setAsActive();\n    publish();\n}\n\nfunction addTodoInCurrentProject(todoName) {\n    let currentProject;\n    User.forEach(function (proj) {\n        if (proj.isActive()) {\n            currentProject = proj;\n        }\n    });\n    currentProject.addTodo(todoName);\n    publish();\n}\n\nfunction publish() {\n    let param;\n\n    for (let prop in callbackFnList) {\n\n        switch (prop) {\n            case \"projectArray\":\n                param = User;\n                break;\n            case \"activeProject\":\n                param = undefined;\n                User.forEach(function (proj) {\n                    if (proj.isActive()) {\n                        param = proj;\n                    }\n                });\n                break;\n            default:\n                console.log(\"invalid property name\");\n        }\n\n        callbackFnList[prop].forEach(func => {\n            func(param);\n        });\n    }\n}\n\nfunction chooseProject(index) {\n\n    for (let i = 0; i < User.length; i++) {\n        if (i === index) {\n            User[i].setAsActive();\n            console.log(User[i].isActive());\n        } else {\n            User[i].setAsInactive();\n            console.log(User[i].isActive());\n        }\n    }\n    console.log(User);\n    publish();\n}\n\n\n//# sourceURL=webpack:///./src/userData.js?");

/***/ })

/******/ });