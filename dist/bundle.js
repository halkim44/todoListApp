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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* harmony export (immutable) */ __webpack_exports__["d"] = __values;
/* unused harmony export __read */
/* harmony export (immutable) */ __webpack_exports__["c"] = __spread;
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function (v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
    }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
            resolve({ value: v, done: d });
        }, reject);
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) {
            adapter = {};
        }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}();

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Storage = function () {

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
                    note: "todo-note"
                },
                "todo2": {
                    id: "todo2",
                    title: "todo-title2",
                    isCompleted: false,
                    dueDate: "dd-mm-yyyy",
                    description: "todo-description",
                    note: "todo-note"
                },
                "todo3": {
                    id: "todo3",
                    title: "todo-title3",
                    isCompleted: false,
                    dueDate: "dd-mm-yyyy",
                    description: "todo-description",
                    note: "todo-note"
                }
            },
            allIds: ["todo1", "todo2", "todo3"]
        }
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
        userData[dataType].allIds.splice(idIndex, 1);
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
    };
}();

/* harmony default export */ __webpack_exports__["a"] = (Storage);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createFocusTrapInstance;
/* harmony export (immutable) */ __webpack_exports__["c"] = isScrollable;
/* harmony export (immutable) */ __webpack_exports__["a"] = areTopsMisaligned;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
    if (focusTrapFactory === void 0) {
        focusTrapFactory = __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;
    }
    return focusTrapFactory(surfaceEl, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        initialFocus: initialFocusEl
    });
}
function isScrollable(el) {
    return el ? el.scrollHeight > el.offsetHeight : false;
}
function areTopsMisaligned(els) {
    var tops = new Set();
    [].forEach.call(els, function (el) {
        return tops.add(el.offsetTop);
    });
    return tops.size > 1;
}
//# sourceMappingURL=util.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(1);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __spread */](args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* MDCFoundation */]({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler) {
        this.root_.addEventListener(evtType, handler);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) {
            shouldBubble = false;
        }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData
            });
        } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}();

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["closest"] = closest;
/* harmony export (immutable) */ __webpack_exports__["matches"] = matches;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["b"] = getNormalizedEventCoords;
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    node.remove();
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) {
        forceRefresh = false;
    }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    } else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) {
        globalObj = window;
    }
    if (forceRefresh === void 0) {
        forceRefresh = false;
    }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () {
                return undefined;
            }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                }
            });
        } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x,
        y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialogFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(28);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCDialogFoundation = /** @class */function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCDialogFoundation, _super);
    function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;
        _this.isOpen_ = false;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        _this.layoutFrame_ = 0;
        _this.escapeKeyAction_ = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].CLOSE_ACTION;
        _this.scrimClickAction_ = __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].CLOSE_ACTION;
        _this.autoStackButtons_ = true;
        _this.areButtonsStacked_ = false;
        return _this;
    }
    Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function () {
            return {
                addBodyClass: function () {
                    return undefined;
                },
                addClass: function () {
                    return undefined;
                },
                areButtonsStacked: function () {
                    return false;
                },
                clickDefaultButton: function () {
                    return undefined;
                },
                eventTargetMatches: function () {
                    return false;
                },
                getActionFromEvent: function () {
                    return '';
                },
                hasClass: function () {
                    return false;
                },
                isContentScrollable: function () {
                    return false;
                },
                notifyClosed: function () {
                    return undefined;
                },
                notifyClosing: function () {
                    return undefined;
                },
                notifyOpened: function () {
                    return undefined;
                },
                notifyOpening: function () {
                    return undefined;
                },
                releaseFocus: function () {
                    return undefined;
                },
                removeBodyClass: function () {
                    return undefined;
                },
                removeClass: function () {
                    return undefined;
                },
                reverseButtons: function () {
                    return undefined;
                },
                trapFocus: function () {
                    return undefined;
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCDialogFoundation.prototype.init = function () {
        if (this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].STACKED)) {
            this.setAutoStackButtons(false);
        }
    };
    MDCDialogFoundation.prototype.destroy = function () {
        if (this.isOpen_) {
            this.close(__WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].DESTROY_ACTION);
        }
        if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
            this.handleAnimationTimerEnd_();
        }
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
            this.layoutFrame_ = 0;
        }
    };
    MDCDialogFoundation.prototype.open = function () {
        var _this = this;
        this.isOpen_ = true;
        this.adapter_.notifyOpening();
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPEN);
            _this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SCROLL_LOCK);
            _this.layout();
            _this.animationTimer_ = setTimeout(function () {
                _this.handleAnimationTimerEnd_();
                _this.adapter_.trapFocus();
                _this.adapter_.notifyOpened();
            }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    };
    MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;
        if (action === void 0) {
            action = '';
        }
        if (!this.isOpen_) {
            // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
            return;
        }
        this.isOpen_ = false;
        this.adapter_.notifyClosing(action);
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING);
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPEN);
        this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SCROLL_LOCK);
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
            _this.adapter_.releaseFocus();
            _this.handleAnimationTimerEnd_();
            _this.adapter_.notifyClosed(action);
        }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    MDCDialogFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction_;
    };
    MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction_ = action;
    };
    MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction_;
    };
    MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction_ = action;
    };
    MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons_;
    };
    MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons_ = autoStack;
    };
    MDCDialogFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCDialogFoundation.prototype.handleInteraction = function (evt) {
        var isClick = evt.type === 'click';
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        var isScrim = this.adapter_.eventTargetMatches(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].SCRIM_SELECTOR);
        var isDefault = !this.adapter_.eventTargetMatches(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].SUPPRESS_DEFAULT_PRESS_SELECTOR);
        // Check for scrim click first since it doesn't require querying ancestors
        if (isClick && isScrim && this.scrimClickAction_ !== '') {
            this.close(this.scrimClickAction_);
        } else if (isClick || isSpace || isEnter) {
            var action = this.adapter_.getActionFromEvent(evt);
            if (action) {
                this.close(action);
            } else if (isEnter && isDefault) {
                this.adapter_.clickDefaultButton();
            }
        }
    };
    MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscape && this.escapeKeyAction_ !== '') {
            this.close(this.escapeKeyAction_);
        }
    };
    MDCDialogFoundation.prototype.layoutInternal_ = function () {
        if (this.autoStackButtons_) {
            this.detectStackedButtons_();
        }
        this.detectScrollableContent_();
    };
    MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
        this.animationTimer_ = 0;
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].OPENING);
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].STACKED);
        var areButtonsStacked = this.adapter_.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked_) {
            this.adapter_.reverseButtons();
            this.areButtonsStacked_ = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
        // Remove the class first to let us measure the natural height of the content.
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SCROLLABLE);
        if (this.adapter_.isContentScrollable()) {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SCROLLABLE);
        }
    };
    return MDCDialogFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]);

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCDialogFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__materialSetup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view__ = __webpack_require__(18);





let model = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */]();
let controller = new __WEBPACK_IMPORTED_MODULE_2__controller__["a" /* default */](model);
let view = Object(__WEBPACK_IMPORTED_MODULE_3__view__["a" /* default */])(controller, document.querySelector('.project-list'), document.querySelector('.project-viewer'));
controller.init();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_list__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__material_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_textfield__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_textfield___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_textfield__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ripple__);




const textField = document.querySelectorAll('.mdc-text-field');
for (let i = 0; i < textField.length; i++) {
    new __WEBPACK_IMPORTED_MODULE_1__material_textfield__["MDCTextField"](textField[i]);
}

let listContainer = document.querySelectorAll('.mdc-list');
for (let i = 0; i < listContainer.length; i++) {
    new __WEBPACK_IMPORTED_MODULE_0__material_list__["MDCList"](listContainer[i]);
}

new __WEBPACK_IMPORTED_MODULE_2__material_ripple__["MDCRipple"](document.querySelector('.add-button'));

let lists = document.querySelectorAll('.mdc-list-item');
for (let i = 0; i < lists.length; i++) {
    new __WEBPACK_IMPORTED_MODULE_2__material_ripple__["MDCRipple"](lists[i]);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 Material Components for the Web
 Copyright (c) 2019 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["list"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["list"] = factory();
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 25);
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/0:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @template A
         */
        var MDCFoundation = function () {
          _createClass(MDCFoundation, null, [{
            key: "cssClasses",

            /** @return enum{cssClasses} */
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports every
              // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
              return {};
            }

            /** @return enum{strings} */

          }, {
            key: "strings",
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
              return {};
            }

            /** @return enum{numbers} */

          }, {
            key: "numbers",
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
              return {};
            }

            /** @return {!Object} */

          }, {
            key: "defaultAdapter",
            get: function get() {
              // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
              // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
              // validation.
              return {};
            }

            /**
             * @param {A=} adapter
             */

          }]);

          function MDCFoundation() {
            var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, MDCFoundation);

            /** @protected {!A} */
            this.adapter_ = adapter;
          }

          _createClass(MDCFoundation, [{
            key: "init",
            value: function init() {
              // Subclasses should override this method to perform initialization routines (registering events, etc.)
            }
          }, {
            key: "destroy",
            value: function destroy() {
              // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
            }
          }]);

          return MDCFoundation;
        }();

        /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

        /***/
      },

      /***/1:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @template F
         */

        var MDCComponent = function () {
          _createClass(MDCComponent, null, [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCComponent}
             */
            value: function attachTo(root) {
              // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
              // returns an instantiated component with its root set to that element. Also note that in the cases of
              // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
              // from getDefaultFoundation().
              return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
            }

            /**
             * @param {!Element} root
             * @param {F=} foundation
             * @param {...?} args
             */

          }]);

          function MDCComponent(root) {
            var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            _classCallCheck(this, MDCComponent);

            /** @protected {!Element} */
            this.root_ = root;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }

            this.initialize.apply(this, args);
            // Note that we initialize foundation here and not within the constructor's default param so that
            // this.root_ is defined and can be used within the foundation class.
            /** @protected {!F} */
            this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
            this.foundation_.init();
            this.initialSyncWithDOM();
          }

          _createClass(MDCComponent, [{
            key: 'initialize',
            value: function initialize() /* ...args */{}
            // Subclasses can override this to do any additional setup work that would be considered part of a
            // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
            // initialized. Any additional arguments besides root and foundation will be passed in here.


            /**
             * @return {!F} foundation
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              // Subclasses must override this method to return a properly configured foundation class for the
              // component.
              throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
            }
          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              // Subclasses should override this method if they need to perform work to synchronize with a host DOM
              // object. An example of this would be a form control wrapper that needs to synchronize its internal state
              // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
              // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              // Subclasses may implement this method to release any resources / deregister any listeners they have
              // attached. An example of this might be deregistering a resize event from the window object.
              this.foundation_.destroy();
            }

            /**
             * Wrapper method to add an event listener to the component's root element. This is most useful when
             * listening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: 'listen',
            value: function listen(evtType, handler) {
              this.root_.addEventListener(evtType, handler);
            }

            /**
             * Wrapper method to remove an event listener to the component's root element. This is most useful when
             * unlistening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: 'unlisten',
            value: function unlisten(evtType, handler) {
              this.root_.removeEventListener(evtType, handler);
            }

            /**
             * Fires a cross-browser-compatible custom event from the component root of the given type,
             * with the given data.
             * @param {string} evtType
             * @param {!Object} evtData
             * @param {boolean=} shouldBubble
             */

          }, {
            key: 'emit',
            value: function emit(evtType, evtData) {
              var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              var evt = void 0;
              if (typeof CustomEvent === 'function') {
                evt = new CustomEvent(evtType, {
                  detail: evtData,
                  bubbles: shouldBubble
                });
              } else {
                evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(evtType, shouldBubble, false, evtData);
              }

              this.root_.dispatchEvent(evt);
            }
          }]);

          return MDCComponent;
        }();

        /* harmony default export */__webpack_exports__["a"] = MDCComponent;

        /***/
      },

      /***/10:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC List. Provides an interface for managing focus.
         *
         * Additionally, provides type information for the adapter to the Closure
         * compiler.
         *
         * Implement this adapter for your framework of choice to delegate updates to
         * the component in your framework of choice. See architecture documentation
         * for more details.
         * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
         *
         * @record
         */
        var MDCListAdapter = function () {
          function MDCListAdapter() {
            _classCallCheck(this, MDCListAdapter);
          }

          _createClass(MDCListAdapter, [{
            key: "getListItemCount",

            /** @return {number} */
            value: function getListItemCount() {}

            /**
             * @return {number} */

          }, {
            key: "getFocusedElementIndex",
            value: function getFocusedElementIndex() {}

            /**
             * @param {number} index
             * @param {string} attribute
             * @param {string} value
             */

          }, {
            key: "setAttributeForElementIndex",
            value: function setAttributeForElementIndex(index, attribute, value) {}

            /**
             * @param {number} index
             * @param {string} attribute
             */

          }, {
            key: "removeAttributeForElementIndex",
            value: function removeAttributeForElementIndex(index, attribute) {}

            /**
             * @param {number} index
             * @param {string} className
             */

          }, {
            key: "addClassForElementIndex",
            value: function addClassForElementIndex(index, className) {}

            /**
             * @param {number} index
             * @param {string} className
             */

          }, {
            key: "removeClassForElementIndex",
            value: function removeClassForElementIndex(index, className) {}

            /**
             * Focuses list item at the index specified.
             * @param {number} index
             */

          }, {
            key: "focusItemAtIndex",
            value: function focusItemAtIndex(index) {}

            /**
             * Sets the tabindex to the value specified for all button/a element children of
             * the list item at the index specified.
             * @param {number} listItemIndex
             * @param {number} tabIndexValue
             */

          }, {
            key: "setTabIndexForListItemChildren",
            value: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}

            /**
             * @param {number} index
             * @return {boolean} Returns true if radio button is present at given list item index.
             */

          }, {
            key: "hasRadioAtIndex",
            value: function hasRadioAtIndex(index) {}

            /**
             * @param {number} index
             * @return {boolean} Returns true if checkbox is present at given list item index.
             */

          }, {
            key: "hasCheckboxAtIndex",
            value: function hasCheckboxAtIndex(index) {}

            /**
             * @param {number} index
             * @return {boolean} Returns true if checkbox inside a list item is checked.
             */

          }, {
            key: "isCheckboxCheckedAtIndex",
            value: function isCheckboxCheckedAtIndex(index) {}

            /**
             * Sets the checked status of checkbox or radio at given list item index.
             * @param {number} index
             * @param {boolean} isChecked
             */

          }, {
            key: "setCheckedCheckboxOrRadioAtIndex",
            value: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {}

            /**
             * Notifies user action on list item.
             */

          }, {
            key: "notifyAction",
            value: function notifyAction(index) {}

            /**
             * @return {boolean} Returns true when the current focused element is inside list root.
             */

          }, {
            key: "isFocusInsideList",
            value: function isFocusInsideList() {}
          }]);

          return MDCListAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCListAdapter;

        /***/
      },

      /***/11:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* unused harmony export Index */
        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var cssClasses = {
          ROOT: 'mdc-list',
          LIST_ITEM_CLASS: 'mdc-list-item',
          LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
          LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
        };

        /** @enum {string} */
        var strings = {
          ARIA_ORIENTATION: 'aria-orientation',
          ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
          ARIA_SELECTED: 'aria-selected',
          ARIA_CHECKED: 'aria-checked',
          ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
          ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
          ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
          RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
          CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
          CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
          CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' a',
          FOCUSABLE_CHILD_ELEMENTS: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled), .' + cssClasses.LIST_ITEM_CLASS + ' a,\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)',
          ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)',
          ACTION_EVENT: 'MDCList:action'
        };

        /** @typedef {number|!Array<number>} */
        var Index = void 0;

        /***/
      },

      /***/15:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(10);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(11);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        // eslint-disable-line no-unused-vars

        var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

        var MDCListFoundation = function (_MDCFoundation) {
          _inherits(MDCListFoundation, _MDCFoundation);

          _createClass(MDCListFoundation, null, [{
            key: 'strings',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
            }

            /** @return enum {string} */

          }, {
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /**
             * {@see MDCListAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCListAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCListAdapter} */{
                  getListItemCount: function getListItemCount() {},
                  getFocusedElementIndex: function getFocusedElementIndex() {},
                  setAttributeForElementIndex: function setAttributeForElementIndex() {},
                  removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
                  addClassForElementIndex: function addClassForElementIndex() {},
                  removeClassForElementIndex: function removeClassForElementIndex() {},
                  focusItemAtIndex: function focusItemAtIndex() {},
                  setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {},
                  hasRadioAtIndex: function hasRadioAtIndex() {},
                  hasCheckboxAtIndex: function hasCheckboxAtIndex() {},
                  isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {},
                  setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {},
                  notifyAction: function notifyAction() {},
                  isFocusInsideList: function isFocusInsideList() {}
                }
              );
            }

            /**
             * @param {!MDCListAdapter=} adapter
             */

          }]);

          function MDCListFoundation(adapter) {
            _classCallCheck(this, MDCListFoundation);

            /** @private {boolean} */
            var _this = _possibleConstructorReturn(this, (MDCListFoundation.__proto__ || Object.getPrototypeOf(MDCListFoundation)).call(this, _extends(MDCListFoundation.defaultAdapter, adapter)));

            _this.wrapFocus_ = false;

            /** @private {boolean} */
            _this.isVertical_ = true;

            /** @private {boolean} */
            _this.isSingleSelectionList_ = false;

            /** @private {!Index} */
            _this.selectedIndex_ = -1;

            /** @private {number} */
            _this.focusedItemIndex_ = -1;

            /** @private {boolean} */
            _this.useActivatedClass_ = false;

            /** @private {boolean} */
            _this.isCheckboxList_ = false;

            /** @private {boolean} */
            _this.isRadioList_ = false;
            return _this;
          }

          _createClass(MDCListFoundation, [{
            key: 'layout',
            value: function layout() {
              if (this.adapter_.getListItemCount() === 0) return;

              if (this.adapter_.hasCheckboxAtIndex(0)) {
                this.isCheckboxList_ = true;
              } else if (this.adapter_.hasRadioAtIndex(0)) {
                this.isRadioList_ = true;
              }
            }

            /**
             * Sets the private wrapFocus_ variable.
             * @param {boolean} value
             */

          }, {
            key: 'setWrapFocus',
            value: function setWrapFocus(value) {
              this.wrapFocus_ = value;
            }

            /**
             * Sets the isVertical_ private variable.
             * @param {boolean} value
             */

          }, {
            key: 'setVerticalOrientation',
            value: function setVerticalOrientation(value) {
              this.isVertical_ = value;
            }

            /**
             * Sets the isSingleSelectionList_ private variable.
             * @param {boolean} value
             */

          }, {
            key: 'setSingleSelection',
            value: function setSingleSelection(value) {
              this.isSingleSelectionList_ = value;
            }

            /**
             * Sets the useActivatedClass_ private variable.
             * @param {boolean} useActivated
             */

          }, {
            key: 'setUseActivatedClass',
            value: function setUseActivatedClass(useActivated) {
              this.useActivatedClass_ = useActivated;
            }

            /** @return {!Index} */

          }, {
            key: 'getSelectedIndex',
            value: function getSelectedIndex() {
              return this.selectedIndex_;
            }

            /** @param {!Index} index */

          }, {
            key: 'setSelectedIndex',
            value: function setSelectedIndex(index) {
              if (!this.isIndexValid_(index)) return;

              if (this.isCheckboxList_) {
                this.setCheckboxAtIndex_( /** @type {!Array<number>} */index);
              } else if (this.isRadioList_) {
                this.setRadioAtIndex_( /** @type {number} */index);
              } else {
                this.setSingleSelectionAtIndex_( /** @type {number} */index);
              }
            }

            /**
             * Focus in handler for the list items.
             * @param evt
             * @param {number} listItemIndex
             */

          }, {
            key: 'handleFocusIn',
            value: function handleFocusIn(evt, listItemIndex) {
              if (listItemIndex >= 0) {
                this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
              }
            }

            /**
             * Focus out handler for the list items.
             * @param {Event} evt
             * @param {number} listItemIndex
             */

          }, {
            key: 'handleFocusOut',
            value: function handleFocusOut(evt, listItemIndex) {
              var _this2 = this;

              if (listItemIndex >= 0) {
                this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
              }

              /**
               * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
               * is moved to next element.
               */
              setTimeout(function () {
                if (!_this2.adapter_.isFocusInsideList()) {
                  _this2.setTabindexToFirstSelectedItem_();
                }
              }, 0);
            }

            /**
             * Key handler for the list.
             * @param {Event} evt
             * @param {boolean} isRootListItem
             * @param {number} listItemIndex
             */

          }, {
            key: 'handleKeydown',
            value: function handleKeydown(evt, isRootListItem, listItemIndex) {
              var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
              var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
              var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
              var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
              var isHome = evt.key === 'Home' || evt.keyCode === 36;
              var isEnd = evt.key === 'End' || evt.keyCode === 35;
              var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
              var isSpace = evt.key === 'Space' || evt.keyCode === 32;

              var currentIndex = this.adapter_.getFocusedElementIndex();
              var nextIndex = -1;
              if (currentIndex === -1) {
                currentIndex = listItemIndex;
                if (currentIndex < 0) {
                  // If this event doesn't have a mdc-list-item ancestor from the
                  // current list (not from a sublist), return early.
                  return;
                }
              }

              if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
                this.preventDefaultEvent_(evt);
                nextIndex = this.focusNextElement(currentIndex);
              } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
                this.preventDefaultEvent_(evt);
                nextIndex = this.focusPrevElement(currentIndex);
              } else if (isHome) {
                this.preventDefaultEvent_(evt);
                nextIndex = this.focusFirstElement();
              } else if (isEnd) {
                this.preventDefaultEvent_(evt);
                nextIndex = this.focusLastElement();
              } else if (isEnter || isSpace) {
                if (isRootListItem) {
                  // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
                  if (evt.target.tagName === 'A' && isEnter) return;
                  this.preventDefaultEvent_(evt);

                  if (this.isSelectableList_()) {
                    this.setSelectedIndexOnAction_(currentIndex);
                  }

                  this.adapter_.notifyAction(currentIndex);
                }
              }

              this.focusedItemIndex_ = currentIndex;

              if (nextIndex >= 0) {
                this.setTabindexAtIndex_(nextIndex);
                this.focusedItemIndex_ = nextIndex;
              }
            }

            /**
             * Click handler for the list.
             * @param {number} index
             * @param {boolean} toggleCheckbox
             */

          }, {
            key: 'handleClick',
            value: function handleClick(index, toggleCheckbox) {
              if (index === -1) return;

              if (this.isSelectableList_()) {
                this.setSelectedIndexOnAction_(index, toggleCheckbox);
              }

              this.adapter_.notifyAction(index);

              this.setTabindexAtIndex_(index);
              this.focusedItemIndex_ = index;
            }

            /**
             * Ensures that preventDefault is only called if the containing element doesn't
             * consume the event, and it will cause an unintended scroll.
             * @param {Event} evt
             * @private
             */

          }, {
            key: 'preventDefaultEvent_',
            value: function preventDefaultEvent_(evt) {
              var tagName = ('' + evt.target.tagName).toLowerCase();
              if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
                evt.preventDefault();
              }
            }

            /**
             * Focuses the next element on the list.
             * @param {number} index
             * @return {number}
             */

          }, {
            key: 'focusNextElement',
            value: function focusNextElement(index) {
              var count = this.adapter_.getListItemCount();
              var nextIndex = index + 1;
              if (nextIndex >= count) {
                if (this.wrapFocus_) {
                  nextIndex = 0;
                } else {
                  // Return early because last item is already focused.
                  return index;
                }
              }
              this.adapter_.focusItemAtIndex(nextIndex);

              return nextIndex;
            }

            /**
             * Focuses the previous element on the list.
             * @param {number} index
             * @return {number}
             */

          }, {
            key: 'focusPrevElement',
            value: function focusPrevElement(index) {
              var prevIndex = index - 1;
              if (prevIndex < 0) {
                if (this.wrapFocus_) {
                  prevIndex = this.adapter_.getListItemCount() - 1;
                } else {
                  // Return early because first item is already focused.
                  return index;
                }
              }
              this.adapter_.focusItemAtIndex(prevIndex);

              return prevIndex;
            }

            /**
             * @return {number}
             */

          }, {
            key: 'focusFirstElement',
            value: function focusFirstElement() {
              this.adapter_.focusItemAtIndex(0);
              return 0;
            }

            /**
             * @return {number}
             */

          }, {
            key: 'focusLastElement',
            value: function focusLastElement() {
              var lastIndex = this.adapter_.getListItemCount() - 1;
              this.adapter_.focusItemAtIndex(lastIndex);
              return lastIndex;
            }

            /**
             * @param {number} index
             * @private
             */

          }, {
            key: 'setSingleSelectionAtIndex_',
            value: function setSingleSelectionAtIndex_(index) {
              var selectedClassName = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS;
              if (this.useActivatedClass_) {
                selectedClassName = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS;
              }

              if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
                this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
                this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'false');
              }

              this.adapter_.addClassForElementIndex(index, selectedClassName);
              this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'true');

              this.selectedIndex_ = index;
            }

            /**
             * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
             * @param {number} index
             * @private
             */

          }, {
            key: 'setRadioAtIndex_',
            value: function setRadioAtIndex_(index) {
              this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

              if (this.selectedIndex_ >= 0) {
                this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, 'false');
              }

              this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, 'true');

              this.selectedIndex_ = index;
            }

            /**
             * @param {!Array<number>} index
             * @private
             */

          }, {
            key: 'setCheckboxAtIndex_',
            value: function setCheckboxAtIndex_(index) {
              for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
                var isChecked = false;
                if (index.indexOf(i) >= 0) {
                  isChecked = true;
                }

                this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
                this.adapter_.setAttributeForElementIndex(i, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, isChecked ? 'true' : 'false');
              }

              this.selectedIndex_ = index;
            }

            /**
             * @param {number} index
             * @private
             */

          }, {
            key: 'setTabindexAtIndex_',
            value: function setTabindexAtIndex_(index) {
              if (this.focusedItemIndex_ === -1 && index !== 0) {
                // If no list item was selected set first list item's tabindex to -1.
                // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
                this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
              } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
                this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', -1);
              }

              this.adapter_.setAttributeForElementIndex(index, 'tabindex', 0);
            }

            /**
             * @return {boolean} Return true if it is single selectin list, checkbox list or radio list.
             * @private
             */

          }, {
            key: 'isSelectableList_',
            value: function isSelectableList_() {
              return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
            }

            /** @private */

          }, {
            key: 'setTabindexToFirstSelectedItem_',
            value: function setTabindexToFirstSelectedItem_() {
              var targetIndex = 0;

              if (this.isSelectableList_()) {
                if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== -1) {
                  targetIndex = this.selectedIndex_;
                } else if (this.selectedIndex_ instanceof Array && this.selectedIndex_.length > 0) {
                  targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
                    return Math.min(currentIndex, minIndex);
                  });
                }
              }

              this.setTabindexAtIndex_(targetIndex);
            }

            /**
             * @param {!Index} index
             * @return {boolean}
             * @private
             */

          }, {
            key: 'isIndexValid_',
            value: function isIndexValid_(index) {
              var _this3 = this;

              if (index instanceof Array) {
                if (!this.isCheckboxList_) {
                  throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
                }

                if (index.length === 0) {
                  return true;
                } else {
                  return index.some(function (i) {
                    return _this3.isIndexInRange_(i);
                  });
                }
              } else if (typeof index === 'number') {
                if (this.isCheckboxList_) {
                  throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
                }
                return this.isIndexInRange_(index);
              } else {
                return false;
              }
            }

            /**
             * @param {number} index
             * @return {boolean}
             * @private
             */

          }, {
            key: 'isIndexInRange_',
            value: function isIndexInRange_(index) {
              var listSize = this.adapter_.getListItemCount();
              return index >= 0 && index < listSize;
            }

            /**
             * @param {number} index
             * @param {boolean=} toggleCheckbox
             * @private
             */

          }, {
            key: 'setSelectedIndexOnAction_',
            value: function setSelectedIndexOnAction_(index) {
              var toggleCheckbox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

              if (this.isCheckboxList_) {
                this.toggleCheckboxAtIndex_(index, toggleCheckbox);
              } else {
                this.setSelectedIndex(index);
              }
            }

            /**
             * @param {number} index
             * @param {boolean} toggleCheckbox
             * @private
             */

          }, {
            key: 'toggleCheckboxAtIndex_',
            value: function toggleCheckboxAtIndex_(index, toggleCheckbox) {
              var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

              if (toggleCheckbox) {
                isChecked = !isChecked;
                this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
              }

              this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, isChecked ? 'true' : 'false');

              // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
              if (this.selectedIndex_ === -1) {
                this.selectedIndex_ = [];
              }

              if (isChecked) {
                this.selectedIndex_.push(index);
              } else {
                this.selectedIndex_ = this.selectedIndex_.filter(function (i) {
                  return i !== index;
                });
              }
            }
          }]);

          return MDCListFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCListFoundation;

        /***/
      },

      /***/25:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCList", function () {
          return MDCList;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(15);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(10);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__ = __webpack_require__(8);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(11);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCListFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        // eslint-disable-line no-unused-vars

        /**
         * @extends MDCComponent<!MDCListFoundation>
         */

        var MDCList = function (_MDCComponent) {
          _inherits(MDCList, _MDCComponent);

          /** @param {...?} args */
          function MDCList() {
            var _ref;

            _classCallCheck(this, MDCList);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @private {!Function} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCList.__proto__ || Object.getPrototypeOf(MDCList)).call.apply(_ref, [this].concat(args)));

            _this.handleKeydown_;
            /** @private {!Function} */
            _this.handleClick_;
            /** @private {!Function} */
            _this.focusInEventListener_;
            /** @private {!Function} */
            _this.focusOutEventListener_;
            return _this;
          }

          /**
           * @param {!Element} root
           * @return {!MDCList}
           */

          _createClass(MDCList, [{
            key: 'destroy',
            value: function destroy() {
              this.root_.removeEventListener('keydown', this.handleKeydown_);
              this.root_.removeEventListener('click', this.handleClick_);
              this.root_.removeEventListener('focusin', this.focusInEventListener_);
              this.root_.removeEventListener('focusout', this.focusOutEventListener_);
            }
          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              this.handleClick_ = this.handleClickEvent_.bind(this);
              this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
              this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
              this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
              this.root_.addEventListener('keydown', this.handleKeydown_);
              this.root_.addEventListener('focusin', this.focusInEventListener_);
              this.root_.addEventListener('focusout', this.focusOutEventListener_);
              this.root_.addEventListener('click', this.handleClick_);
              this.layout();
              this.initializeListType();
            }
          }, {
            key: 'layout',
            value: function layout() {
              var direction = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION);
              this.vertical = direction !== __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION_HORIZONTAL;

              // List items need to have at least tabindex=-1 to be focusable.
              [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
                ele.setAttribute('tabindex', -1);
              });

              // Child button/a elements are not tabbable until the list item is focused.
              [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
                return ele.setAttribute('tabindex', -1);
              });

              this.foundation_.layout();
            }

            /**
             * Used to figure out which list item this event is targetting. Or returns -1 if
             * there is no list item
             * @param {Event} evt
             * @private
             */

          }, {
            key: 'getListItemIndex_',
            value: function getListItemIndex_(evt) {
              var eventTarget = /** @type {HTMLElement} */evt.target;
              var index = -1;

              // Find the first ancestor that is a list item or the list.
              while (!eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS) && !eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].ROOT)) {
                eventTarget = eventTarget.parentElement;
              }

              // Get the index of the element if it is a list item.
              if (eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS)) {
                index = this.listElements.indexOf(eventTarget);
              }

              return index;
            }

            /**
             * Used to figure out which element was clicked before sending the event to the foundation.
             * @param {Event} evt
             * @private
             */

          }, {
            key: 'handleFocusInEvent_',
            value: function handleFocusInEvent_(evt) {
              var index = this.getListItemIndex_(evt);
              this.foundation_.handleFocusIn(evt, index);
            }

            /**
             * Used to figure out which element was clicked before sending the event to the foundation.
             * @param {Event} evt
             * @private
             */

          }, {
            key: 'handleFocusOutEvent_',
            value: function handleFocusOutEvent_(evt) {
              var index = this.getListItemIndex_(evt);
              this.foundation_.handleFocusOut(evt, index);
            }

            /**
             * Used to figure out which element was focused when keydown event occurred before sending the event to the
             * foundation.
             * @param {Event} evt
             * @private
             */

          }, {
            key: 'handleKeydownEvent_',
            value: function handleKeydownEvent_(evt) {
              var index = this.getListItemIndex_(evt);

              if (index >= 0) {
                this.foundation_.handleKeydown(evt, evt.target.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS), index);
              }
            }

            /**
             * Used to figure out which element was clicked before sending the event to the foundation.
             * @param {Event} evt
             * @private
             */

          }, {
            key: 'handleClickEvent_',
            value: function handleClickEvent_(evt) {
              var index = this.getListItemIndex_(evt);

              // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
              var toggleCheckbox = !Object(__WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__["matches"])( /** @type {!Element} */evt.target, __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
              this.foundation_.handleClick(index, toggleCheckbox);
            }

            /**
             * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
             */

          }, {
            key: 'initializeListType',
            value: function initializeListType() {
              var _this2 = this;

              var checkboxListItems = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ROLE_CHECKBOX_SELECTOR);
              var singleSelectedListItem = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS + ',\n        .' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS);
              var radioSelectedListItem = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_CHECKED_RADIO_SELECTOR);

              if (checkboxListItems.length) {
                var preselectedItems = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_CHECKED_CHECKBOX_SELECTOR);
                this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
                  return _this2.listElements.indexOf(listItem);
                });
              } else if (singleSelectedListItem) {
                if (singleSelectedListItem.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS)) {
                  this.foundation_.setUseActivatedClass(true);
                }

                this.singleSelection = true;
                this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
              } else if (radioSelectedListItem) {
                this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
              }
            }

            /** @param {boolean} value */

          }, {
            key: 'getDefaultFoundation',

            /** @return {!MDCListFoundation} */
            value: function getDefaultFoundation() {
              var _this3 = this;

              return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]( /** @type {!MDCListAdapter} */_extends({
                getListItemCount: function getListItemCount() {
                  return _this3.listElements.length;
                },
                getFocusedElementIndex: function getFocusedElementIndex() {
                  return _this3.listElements.indexOf(document.activeElement);
                },
                setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
                  var element = _this3.listElements[index];
                  if (element) {
                    element.setAttribute(attr, value);
                  }
                },
                removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
                  var element = _this3.listElements[index];
                  if (element) {
                    element.removeAttribute(attr);
                  }
                },
                addClassForElementIndex: function addClassForElementIndex(index, className) {
                  var element = _this3.listElements[index];
                  if (element) {
                    element.classList.add(className);
                  }
                },
                removeClassForElementIndex: function removeClassForElementIndex(index, className) {
                  var element = _this3.listElements[index];
                  if (element) {
                    element.classList.remove(className);
                  }
                },
                focusItemAtIndex: function focusItemAtIndex(index) {
                  var element = _this3.listElements[index];
                  if (element) {
                    element.focus();
                  }
                },
                setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
                  var element = _this3.listElements[listItemIndex];
                  var listItemChildren = [].slice.call(element.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                  listItemChildren.forEach(function (ele) {
                    return ele.setAttribute('tabindex', tabIndexValue);
                  });
                },
                hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
                  var listItem = _this3.listElements[index];
                  return !!listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_SELECTOR);
                },
                hasRadioAtIndex: function hasRadioAtIndex(index) {
                  var listItem = _this3.listElements[index];
                  return !!listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].RADIO_SELECTOR);
                },
                isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
                  var listItem = _this3.listElements[index];
                  var toggleEl = listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_SELECTOR);
                  return toggleEl.checked;
                },
                setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
                  var listItem = _this3.listElements[index];
                  var toggleEl = listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
                  toggleEl.checked = isChecked;

                  var event = document.createEvent('Event');
                  event.initEvent('change', true, true);
                  toggleEl.dispatchEvent(event);
                },
                notifyAction: function notifyAction(index) {
                  _this3.emit(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ACTION_EVENT, index, /** shouldBubble */true);
                },
                isFocusInsideList: function isFocusInsideList() {
                  return _this3.root_.contains(document.activeElement);
                }
              }));
            }
          }, {
            key: 'vertical',
            set: function set(value) {
              this.foundation_.setVerticalOrientation(value);
            }

            /** @return Array<!Element>*/

          }, {
            key: 'listElements',
            get: function get() {
              return [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ENABLED_ITEMS_SELECTOR));
            }

            /** @param {boolean} value */

          }, {
            key: 'wrapFocus',
            set: function set(value) {
              this.foundation_.setWrapFocus(value);
            }

            /** @param {boolean} isSingleSelectionList */

          }, {
            key: 'singleSelection',
            set: function set(isSingleSelectionList) {
              this.foundation_.setSingleSelection(isSingleSelectionList);
            }

            /** @return {!Index} */

          }, {
            key: 'selectedIndex',
            get: function get() {
              return this.foundation_.getSelectedIndex();
            }

            /** @param {!Index} index */

            , set: function set(index) {
              this.foundation_.setSelectedIndex(index);
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              return new MDCList(root);
            }
          }]);

          return MDCList;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/8:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "closest", function () {
          return closest;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "matches", function () {
          return matches;
        });
        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
         * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
         */

        /**
         * @param {!Element} element
         * @param {string} selector
         * @return {?Element}
         */
        function closest(element, selector) {
          if (element.closest) {
            return element.closest(selector);
          }

          var el = element;
          while (el) {
            if (matches(el, selector)) {
              return el;
            }
            el = el.parentElement;
          }
          return null;
        }

        /**
         * @param {!Element} element
         * @param {string} selector
         * @return {boolean}
         */
        function matches(element, selector) {
          var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
          return nativeMatches.call(element, selector);
        }

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=mdc.list.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 Material Components for the Web
 Copyright (c) 2019 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["textfield"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["textfield"] = factory();
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 159);
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/0:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @template A
         */
        var MDCFoundation = function () {
          _createClass(MDCFoundation, null, [{
            key: "cssClasses",

            /** @return enum{cssClasses} */
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports every
              // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
              return {};
            }

            /** @return enum{strings} */

          }, {
            key: "strings",
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
              return {};
            }

            /** @return enum{numbers} */

          }, {
            key: "numbers",
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
              return {};
            }

            /** @return {!Object} */

          }, {
            key: "defaultAdapter",
            get: function get() {
              // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
              // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
              // validation.
              return {};
            }

            /**
             * @param {A=} adapter
             */

          }]);

          function MDCFoundation() {
            var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, MDCFoundation);

            /** @protected {!A} */
            this.adapter_ = adapter;
          }

          _createClass(MDCFoundation, [{
            key: "init",
            value: function init() {
              // Subclasses should override this method to perform initialization routines (registering events, etc.)
            }
          }, {
            key: "destroy",
            value: function destroy() {
              // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
            }
          }]);

          return MDCFoundation;
        }();

        /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

        /***/
      },

      /***/1:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @template F
         */

        var MDCComponent = function () {
          _createClass(MDCComponent, null, [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCComponent}
             */
            value: function attachTo(root) {
              // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
              // returns an instantiated component with its root set to that element. Also note that in the cases of
              // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
              // from getDefaultFoundation().
              return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
            }

            /**
             * @param {!Element} root
             * @param {F=} foundation
             * @param {...?} args
             */

          }]);

          function MDCComponent(root) {
            var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            _classCallCheck(this, MDCComponent);

            /** @protected {!Element} */
            this.root_ = root;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }

            this.initialize.apply(this, args);
            // Note that we initialize foundation here and not within the constructor's default param so that
            // this.root_ is defined and can be used within the foundation class.
            /** @protected {!F} */
            this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
            this.foundation_.init();
            this.initialSyncWithDOM();
          }

          _createClass(MDCComponent, [{
            key: 'initialize',
            value: function initialize() /* ...args */{}
            // Subclasses can override this to do any additional setup work that would be considered part of a
            // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
            // initialized. Any additional arguments besides root and foundation will be passed in here.


            /**
             * @return {!F} foundation
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              // Subclasses must override this method to return a properly configured foundation class for the
              // component.
              throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
            }
          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              // Subclasses should override this method if they need to perform work to synchronize with a host DOM
              // object. An example of this would be a form control wrapper that needs to synchronize its internal state
              // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
              // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              // Subclasses may implement this method to release any resources / deregister any listeners they have
              // attached. An example of this might be deregistering a resize event from the window object.
              this.foundation_.destroy();
            }

            /**
             * Wrapper method to add an event listener to the component's root element. This is most useful when
             * listening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: 'listen',
            value: function listen(evtType, handler) {
              this.root_.addEventListener(evtType, handler);
            }

            /**
             * Wrapper method to remove an event listener to the component's root element. This is most useful when
             * unlistening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: 'unlisten',
            value: function unlisten(evtType, handler) {
              this.root_.removeEventListener(evtType, handler);
            }

            /**
             * Fires a cross-browser-compatible custom event from the component root of the given type,
             * with the given data.
             * @param {string} evtType
             * @param {!Object} evtData
             * @param {boolean=} shouldBubble
             */

          }, {
            key: 'emit',
            value: function emit(evtType, evtData) {
              var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              var evt = void 0;
              if (typeof CustomEvent === 'function') {
                evt = new CustomEvent(evtType, {
                  detail: evtData,
                  bubbles: shouldBubble
                });
              } else {
                evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(evtType, shouldBubble, false, evtData);
              }

              this.root_.dispatchEvent(evt);
            }
          }]);

          return MDCComponent;
        }();

        /* harmony default export */__webpack_exports__["a"] = MDCComponent;

        /***/
      },

      /***/12:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Floating Label.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the floating label into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCFloatingLabelAdapter = function () {
          function MDCFloatingLabelAdapter() {
            _classCallCheck(this, MDCFloatingLabelAdapter);
          }

          _createClass(MDCFloatingLabelAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the label element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the label element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * Returns the width of the label element.
             * @return {number}
             */

          }, {
            key: "getWidth",
            value: function getWidth() {}

            /**
             * Registers an event listener on the root element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the root element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}
          }]);

          return MDCFloatingLabelAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCFloatingLabelAdapter;

        /***/
      },

      /***/159:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextField", function () {
          return MDCTextField;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(4);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(2);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(83);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(84);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(163);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__ = __webpack_require__(30);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__helper_text_index__ = __webpack_require__(164);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__character_counter_index__ = __webpack_require__(165);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__icon_index__ = __webpack_require__(166);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__material_floating_label_index__ = __webpack_require__(16);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__material_notched_outline_index__ = __webpack_require__(35);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_5__foundation__["a"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function () {
          return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["b"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function () {
          return __WEBPACK_IMPORTED_MODULE_8__character_counter_index__["a"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_8__character_counter_index__["b"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function () {
          return __WEBPACK_IMPORTED_MODULE_9__icon_index__["a"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_9__icon_index__["b"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        var _get = function get(object, property, receiver) {
          if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;if (getter === undefined) {
              return undefined;
            }return getter.call(receiver);
          }
        };

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /**
         * @extends {MDCComponent<!MDCTextFieldFoundation>}
         * @final
         */

        var MDCTextField = function (_MDCComponent) {
          _inherits(MDCTextField, _MDCComponent);

          /**
           * @param {...?} args
           */
          function MDCTextField() {
            var _ref;

            _classCallCheck(this, MDCTextField);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @private {?Element} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCTextField.__proto__ || Object.getPrototypeOf(MDCTextField)).call.apply(_ref, [this].concat(args)));

            _this.input_;
            /** @type {?MDCRipple} */
            _this.ripple;
            /** @private {?MDCLineRipple} */
            _this.lineRipple_;
            /** @private {?MDCTextFieldHelperText} */
            _this.helperText_;
            /** @private {?MDCTextFieldCharacterCounter} */
            _this.characterCounter_;
            /** @private {?MDCTextFieldIcon} */
            _this.leadingIcon_;
            /** @private {?MDCTextFieldIcon} */
            _this.trailingIcon_;
            /** @private {?MDCFloatingLabel} */
            _this.label_;
            /** @private {?MDCNotchedOutline} */
            _this.outline_;
            return _this;
          }

          /**
           * @param {!Element} root
           * @return {!MDCTextField}
           */

          _createClass(MDCTextField, [{
            key: 'initialize',

            /**
             * @param {(function(!Element, MDCRippleFoundation): !MDCRipple)=} rippleFactory A function which
             * creates a new MDCRipple.
             * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
             * creates a new MDCLineRipple.
             * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
             * creates a new MDCTextFieldHelperText.
             * @param {(function(!Element): !MDCTextFieldCharacterCounter)=} characterCounterFactory A function which
             * creates a new MDCTextFieldCharacterCounter.
             * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
             * creates a new MDCTextFieldIcon.
             * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
             * creates a new MDCFloatingLabel.
             * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
             * creates a new MDCNotchedOutline.
             */
            value: function initialize() {
              var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
                return new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](el, foundation);
              };
              var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__["MDCLineRipple"](el);
              };
              var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a" /* MDCTextFieldHelperText */](el);
              };
              var characterCounterFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_8__character_counter_index__["a" /* MDCTextFieldCharacterCounter */](el);
              };
              var iconFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_9__icon_index__["a" /* MDCTextFieldIcon */](el);
              };

              var _this2 = this;

              var labelFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_10__material_floating_label_index__["MDCFloatingLabel"](el);
              };
              var outlineFactory = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_11__material_notched_outline_index__["MDCNotchedOutline"](el);
              };

              this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].INPUT_SELECTOR);
              var labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].LABEL_SELECTOR);
              if (labelElement) {
                this.label_ = labelFactory(labelElement);
              }
              var lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].LINE_RIPPLE_SELECTOR);
              if (lineRippleElement) {
                this.lineRipple_ = lineRippleFactory(lineRippleElement);
              }
              var outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].OUTLINE_SELECTOR);
              if (outlineElement) {
                this.outline_ = outlineFactory(outlineElement);
              }

              // Helper text
              var helperTextStrings = __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["b" /* MDCTextFieldHelperTextFoundation */].strings;
              var nextElementSibling = this.root_.nextElementSibling;
              var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* cssClasses */].HELPER_LINE);
              var helperTextEl = hasHelperLine && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
              if (helperTextEl) {
                this.helperText_ = helperTextFactory(helperTextEl);
              }

              // Character counter
              var characterCounterStrings = __WEBPACK_IMPORTED_MODULE_8__character_counter_index__["b" /* MDCTextFieldCharacterCounterFoundation */].strings;
              var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR);
              // If character counter is not found in root element search in sibling element.
              if (!characterCounterEl && hasHelperLine) {
                characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
              }

              if (characterCounterEl) {
                this.characterCounter_ = characterCounterFactory(characterCounterEl);
              }

              var iconElements = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].ICON_SELECTOR);
              if (iconElements.length > 0) {
                if (iconElements.length > 1) {
                  // Has both icons.
                  this.leadingIcon_ = iconFactory(iconElements[0]);
                  this.trailingIcon_ = iconFactory(iconElements[1]);
                } else {
                  if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* cssClasses */].WITH_LEADING_ICON)) {
                    this.leadingIcon_ = iconFactory(iconElements[0]);
                  } else {
                    this.trailingIcon_ = iconFactory(iconElements[0]);
                  }
                }
              }

              this.ripple = null;
              if (!this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* cssClasses */].TEXTAREA) && !this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* cssClasses */].OUTLINED)) {
                var MATCHES = Object(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["getMatchesProperty"])(HTMLElement.prototype);
                var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"].createAdapter( /** @type {!RippleCapableSurface} */this), {
                  isSurfaceActive: function isSurfaceActive() {
                    return _this2.input_[MATCHES](':active');
                  },
                  registerInteractionHandler: function registerInteractionHandler(type, handler) {
                    return _this2.input_.addEventListener(type, handler);
                  },
                  deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                    return _this2.input_.removeEventListener(type, handler);
                  }
                });
                var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRippleFoundation"](adapter);
                this.ripple = rippleFactory(this.root_, foundation);
              }
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              if (this.ripple) {
                this.ripple.destroy();
              }
              if (this.lineRipple_) {
                this.lineRipple_.destroy();
              }
              if (this.helperText_) {
                this.helperText_.destroy();
              }
              if (this.characterCounter_) {
                this.characterCounter_.destroy();
              }
              if (this.leadingIcon_) {
                this.leadingIcon_.destroy();
              }
              if (this.trailingIcon_) {
                this.trailingIcon_.destroy();
              }
              if (this.label_) {
                this.label_.destroy();
              }
              if (this.outline_) {
                this.outline_.destroy();
              }
              _get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
            }

            /**
             * Initiliazes the Text Field's internal state based on the environment's
             * state.
             */

          }, {
            key: 'initialSyncWithDom',
            value: function initialSyncWithDom() {
              this.disabled = this.input_.disabled;
            }

            /**
             * @return {string} The value of the input.
             */

          }, {
            key: 'focus',

            /**
             * Focuses the input element.
             */
            value: function focus() {
              this.input_.focus();
            }

            /**
             * Recomputes the outline SVG path for the outline element.
             */

          }, {
            key: 'layout',
            value: function layout() {
              var openNotch = this.foundation_.shouldFloat;
              this.foundation_.notchOutline(openNotch);
            }

            /**
             * @return {!MDCTextFieldFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this3 = this;

              return new __WEBPACK_IMPORTED_MODULE_5__foundation__["a" /* default */](
              /** @type {!MDCTextFieldAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this3.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this3.root_.classList.remove(className);
                },
                hasClass: function hasClass(className) {
                  return _this3.root_.classList.contains(className);
                },
                registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
                  return _this3.root_.addEventListener(evtType, handler);
                },
                deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
                  return _this3.root_.removeEventListener(evtType, handler);
                },
                registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
                  var getAttributesList = function getAttributesList(mutationsList) {
                    return mutationsList.map(function (mutation) {
                      return mutation.attributeName;
                    });
                  };
                  var observer = new MutationObserver(function (mutationsList) {
                    return handler(getAttributesList(mutationsList));
                  });
                  var targetNode = _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].INPUT_SELECTOR);
                  var config = { attributes: true };
                  observer.observe(targetNode, config);
                  return observer;
                },
                deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
                  return observer.disconnect();
                },
                isFocused: function isFocused() {
                  return document.activeElement === _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].INPUT_SELECTOR);
                }
              }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
            }

            /**
             * @return {!{
             *   shakeLabel: function(boolean): undefined,
             *   floatLabel: function(boolean): undefined,
             *   hasLabel: function(): boolean,
             *   getLabelWidth: function(): number,
             * }}
             */

          }, {
            key: 'getLabelAdapterMethods_',
            value: function getLabelAdapterMethods_() {
              var _this4 = this;

              return {
                shakeLabel: function shakeLabel(shouldShake) {
                  return _this4.label_.shake(shouldShake);
                },
                floatLabel: function floatLabel(shouldFloat) {
                  return _this4.label_.float(shouldFloat);
                },
                hasLabel: function hasLabel() {
                  return !!_this4.label_;
                },
                getLabelWidth: function getLabelWidth() {
                  return _this4.label_ ? _this4.label_.getWidth() : 0;
                }
              };
            }

            /**
             * @return {!{
             *   activateLineRipple: function(): undefined,
             *   deactivateLineRipple: function(): undefined,
             *   setLineRippleTransformOrigin: function(number): undefined,
             * }}
             */

          }, {
            key: 'getLineRippleAdapterMethods_',
            value: function getLineRippleAdapterMethods_() {
              var _this5 = this;

              return {
                activateLineRipple: function activateLineRipple() {
                  if (_this5.lineRipple_) {
                    _this5.lineRipple_.activate();
                  }
                },
                deactivateLineRipple: function deactivateLineRipple() {
                  if (_this5.lineRipple_) {
                    _this5.lineRipple_.deactivate();
                  }
                },
                setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
                  if (_this5.lineRipple_) {
                    _this5.lineRipple_.setRippleCenter(normalizedX);
                  }
                }
              };
            }

            /**
             * @return {!{
             *   notchOutline: function(number, boolean): undefined,
             *   hasOutline: function(): boolean,
             * }}
             */

          }, {
            key: 'getOutlineAdapterMethods_',
            value: function getOutlineAdapterMethods_() {
              var _this6 = this;

              return {
                notchOutline: function notchOutline(labelWidth) {
                  return _this6.outline_.notch(labelWidth);
                },
                closeOutline: function closeOutline() {
                  return _this6.outline_.closeNotch();
                },
                hasOutline: function hasOutline() {
                  return !!_this6.outline_;
                }
              };
            }

            /**
             * @return {!{
             *   registerInputInteractionHandler: function(string, function()): undefined,
             *   deregisterInputInteractionHandler: function(string, function()): undefined,
             *   getNativeInput: function(): ?Element,
             * }}
             */

          }, {
            key: 'getInputAdapterMethods_',
            value: function getInputAdapterMethods_() {
              var _this7 = this;

              return {
                registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
                  return _this7.input_.addEventListener(evtType, handler);
                },
                deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
                  return _this7.input_.removeEventListener(evtType, handler);
                },
                getNativeInput: function getNativeInput() {
                  return _this7.input_;
                }
              };
            }

            /**
             * Returns a map of all subcomponents to subfoundations.
             * @return {!FoundationMapType}
             */

          }, {
            key: 'getFoundationMap_',
            value: function getFoundationMap_() {
              return {
                helperText: this.helperText_ ? this.helperText_.foundation : undefined,
                characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
                leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
                trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined
              };
            }
          }, {
            key: 'value',
            get: function get() {
              return this.foundation_.getValue();
            }

            /**
             * @param {string} value The value to set on the input.
             */

            , set: function set(value) {
              this.foundation_.setValue(value);
            }

            /**
             * @return {boolean} True if the Text Field is disabled.
             */

          }, {
            key: 'disabled',
            get: function get() {
              return this.foundation_.isDisabled();
            }

            /**
             * @param {boolean} disabled Sets the Text Field disabled or enabled.
             */

            , set: function set(disabled) {
              this.foundation_.setDisabled(disabled);
            }

            /**
             * @return {boolean} valid True if the Text Field is valid.
             */

          }, {
            key: 'valid',
            get: function get() {
              return this.foundation_.isValid();
            }

            /**
             * @param {boolean} valid Sets the Text Field valid or invalid.
             */

            , set: function set(valid) {
              this.foundation_.setValid(valid);
            }

            /**
             * @return {boolean} True if the Text Field is required.
             */

          }, {
            key: 'required',
            get: function get() {
              return this.input_.required;
            }

            /**
             * @param {boolean} required Sets the Text Field to required.
             */

            , set: function set(required) {
              this.input_.required = required;
            }

            /**
             * @return {string} The input element's validation pattern.
             */

          }, {
            key: 'pattern',
            get: function get() {
              return this.input_.pattern;
            }

            /**
             * @param {string} pattern Sets the input element's validation pattern.
             */

            , set: function set(pattern) {
              this.input_.pattern = pattern;
            }

            /**
             * @return {number} The input element's minLength.
             */

          }, {
            key: 'minLength',
            get: function get() {
              return this.input_.minLength;
            }

            /**
             * @param {number} minLength Sets the input element's minLength.
             */

            , set: function set(minLength) {
              this.input_.minLength = minLength;
            }

            /**
             * @return {number} The input element's maxLength.
             */

          }, {
            key: 'maxLength',
            get: function get() {
              return this.input_.maxLength;
            }

            /**
             * @param {number} maxLength Sets the input element's maxLength.
             */

            , set: function set(maxLength) {
              // Chrome throws exception if maxLength is set < 0
              if (maxLength < 0) {
                this.input_.removeAttribute('maxLength');
              } else {
                this.input_.maxLength = maxLength;
              }
            }

            /**
             * @return {string} The input element's min.
             */

          }, {
            key: 'min',
            get: function get() {
              return this.input_.min;
            }

            /**
             * @param {string} min Sets the input element's min.
             */

            , set: function set(min) {
              this.input_.min = min;
            }

            /**
             * @return {string} The input element's max.
             */

          }, {
            key: 'max',
            get: function get() {
              return this.input_.max;
            }

            /**
             * @param {string} max Sets the input element's max.
             */

            , set: function set(max) {
              this.input_.max = max;
            }

            /**
             * @return {string} The input element's step.
             */

          }, {
            key: 'step',
            get: function get() {
              return this.input_.step;
            }

            /**
             * @param {string} step Sets the input element's step.
             */

            , set: function set(step) {
              this.input_.step = step;
            }

            /**
             * Sets the helper text element content.
             * @param {string} content
             */

          }, {
            key: 'helperTextContent',
            set: function set(content) {
              this.foundation_.setHelperTextContent(content);
            }

            /**
             * Sets the aria label of the leading icon.
             * @param {string} label
             */

          }, {
            key: 'leadingIconAriaLabel',
            set: function set(label) {
              this.foundation_.setLeadingIconAriaLabel(label);
            }

            /**
             * Sets the text content of the leading icon.
             * @param {string} content
             */

          }, {
            key: 'leadingIconContent',
            set: function set(content) {
              this.foundation_.setLeadingIconContent(content);
            }

            /**
             * Sets the aria label of the trailing icon.
             * @param {string} label
             */

          }, {
            key: 'trailingIconAriaLabel',
            set: function set(label) {
              this.foundation_.setTrailingIconAriaLabel(label);
            }

            /**
             * Sets the text content of the trailing icon.
             * @param {string} content
             */

          }, {
            key: 'trailingIconContent',
            set: function set(content) {
              this.foundation_.setTrailingIconContent(content);
            }

            /**
             * Enables or disables the use of native validation. Use this for custom validation.
             * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
             */

          }, {
            key: 'useNativeValidation',
            set: function set(useNativeValidation) {
              this.foundation_.setUseNativeValidation(useNativeValidation);
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              return new MDCTextField(root);
            }
          }]);

          return MDCTextField;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/16:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function () {
          return MDCFloatingLabel;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(12);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(26);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
         * @final
         */

        var MDCFloatingLabel = function (_MDCComponent) {
          _inherits(MDCFloatingLabel, _MDCComponent);

          function MDCFloatingLabel() {
            _classCallCheck(this, MDCFloatingLabel);

            return _possibleConstructorReturn(this, (MDCFloatingLabel.__proto__ || Object.getPrototypeOf(MDCFloatingLabel)).apply(this, arguments));
          }

          _createClass(MDCFloatingLabel, [{
            key: 'shake',

            /**
             * Styles the label to produce the label shake for errors.
             * @param {boolean} shouldShake styles the label to shake by adding shake class
             * if true, otherwise will stop shaking by removing shake class.
             */
            value: function shake(shouldShake) {
              this.foundation_.shake(shouldShake);
            }

            /**
             * Styles label to float/dock.
             * @param {boolean} shouldFloat styles the label to float by adding float class
             * if true, otherwise docks the label by removing the float class.
             */

          }, {
            key: 'float',
            value: function float(shouldFloat) {
              this.foundation_.float(shouldFloat);
            }

            /**
             * @return {number}
             */

          }, {
            key: 'getWidth',
            value: function getWidth() {
              return this.foundation_.getWidth();
            }

            /**
             * @return {!MDCFloatingLabelFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                getWidth: function getWidth() {
                  return _this2.root_.scrollWidth;
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return _this2.root_.addEventListener(evtType, handler);
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return _this2.root_.removeEventListener(evtType, handler);
                }
              });
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCFloatingLabel}
             */
            value: function attachTo(root) {
              return new MDCFloatingLabel(root);
            }
          }]);

          return MDCFloatingLabel;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/160:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var cssClasses = {
          ROOT: 'mdc-text-field-helper-text',
          HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
          HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
        };

        /** @enum {string} */
        var strings = {
          ARIA_HIDDEN: 'aria-hidden',
          ROLE: 'role',
          ROOT_SELECTOR: '.' + cssClasses.ROOT
        };

        /***/
      },

      /***/161:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var cssClasses = {
          ROOT: 'mdc-text-field-character-counter'
        };

        /** @enum {string} */
        var strings = {
          ROOT_SELECTOR: '.' + cssClasses.ROOT
        };

        /***/
      },

      /***/162:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return strings;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var strings = {
          ICON_EVENT: 'MDCTextField:icon',
          ICON_ROLE: 'button'
        };

        /***/
      },

      /***/163:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_text_foundation__ = __webpack_require__(60);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__character_counter_foundation__ = __webpack_require__(61);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__icon_foundation__ = __webpack_require__(62);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(84);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(83);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /**
         * @extends {MDCFoundation<!MDCTextFieldAdapter>}
         * @final
         */

        var MDCTextFieldFoundation = function (_MDCFoundation) {
          _inherits(MDCTextFieldFoundation, _MDCFoundation);

          _createClass(MDCTextFieldFoundation, [{
            key: 'shouldShake',

            /** @return {boolean} */
            get: function get() {
              return !this.isValid() && !this.isFocused_ && !!this.getValue();
            }

            /**
             * @return {boolean}
             * @private
             */

          }, {
            key: 'shouldAlwaysFloat_',
            get: function get() {
              var type = this.getNativeInput_().type;
              return __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* ALWAYS_FLOAT_TYPES */].indexOf(type) >= 0;
            }

            /** @return {boolean} */

          }, {
            key: 'shouldFloat',
            get: function get() {
              return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
            }

            /**
             * {@see MDCTextFieldAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldAdapter}
             */

          }], [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_5__constants__["c" /* cssClasses */];
            }

            /** @return enum {string} */

          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_5__constants__["e" /* strings */];
            }

            /** @return enum {string} */

          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_5__constants__["d" /* numbers */];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCTextFieldAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  hasClass: function hasClass() {},
                  registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
                  deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
                  registerInputInteractionHandler: function registerInputInteractionHandler() {},
                  deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
                  registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
                  deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
                  getNativeInput: function getNativeInput() {},
                  isFocused: function isFocused() {},
                  activateLineRipple: function activateLineRipple() {},
                  deactivateLineRipple: function deactivateLineRipple() {},
                  setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
                  shakeLabel: function shakeLabel() {},
                  floatLabel: function floatLabel() {},
                  hasLabel: function hasLabel() {},
                  getLabelWidth: function getLabelWidth() {},
                  hasOutline: function hasOutline() {},
                  notchOutline: function notchOutline() {},
                  closeOutline: function closeOutline() {}
                }
              );
            }

            /**
             * @param {!MDCTextFieldAdapter} adapter
             * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
             */

          }]);

          function MDCTextFieldFoundation(adapter) {
            var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

            _classCallCheck(this, MDCTextFieldFoundation);

            /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
            var _this = _possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, _extends(MDCTextFieldFoundation.defaultAdapter, adapter)));

            _this.helperText_ = foundationMap.helperText;
            /** @type {!MDCTextFieldCharacterCounterFoundation|undefined} */
            _this.characterCounter_ = foundationMap.characterCounter;
            /** @type {!MDCTextFieldIconFoundation|undefined} */
            _this.leadingIcon_ = foundationMap.leadingIcon;
            /** @type {!MDCTextFieldIconFoundation|undefined} */
            _this.trailingIcon_ = foundationMap.trailingIcon;

            /** @private {boolean} */
            _this.isFocused_ = false;
            /** @private {boolean} */
            _this.receivedUserInput_ = false;
            /** @private {boolean} */
            _this.useCustomValidityChecking_ = false;
            /** @private {boolean} */
            _this.isValid_ = true;

            /** @private {boolean} */
            _this.useNativeValidation_ = true;

            /** @private {function(): undefined} */
            _this.inputFocusHandler_ = function () {
              return _this.activateFocus();
            };
            /** @private {function(): undefined} */
            _this.inputBlurHandler_ = function () {
              return _this.deactivateFocus();
            };
            /** @private {function(): undefined} */
            _this.inputInputHandler_ = function () {
              return _this.handleInput();
            };
            /** @private {function(!Event): undefined} */
            _this.setPointerXOffset_ = function (evt) {
              return _this.setTransformOrigin(evt);
            };
            /** @private {function(!Event): undefined} */
            _this.textFieldInteractionHandler_ = function () {
              return _this.handleTextFieldInteraction();
            };
            /** @private {function(!Array): undefined} */
            _this.validationAttributeChangeHandler_ = function (attributesList) {
              return _this.handleValidationAttributeChange(attributesList);
            };

            /** @private {!MutationObserver} */
            _this.validationObserver_;
            return _this;
          }

          _createClass(MDCTextFieldFoundation, [{
            key: 'init',
            value: function init() {
              var _this2 = this;

              if (this.adapter_.isFocused()) {
                this.inputFocusHandler_();
              } else if (this.adapter_.hasLabel() && this.shouldFloat) {
                this.notchOutline(true);
                this.adapter_.floatLabel(true);
              }

              this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
              this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
              this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
              ['mousedown', 'touchstart'].forEach(function (evtType) {
                _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
              });
              ['click', 'keydown'].forEach(function (evtType) {
                _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
              });
              this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
              this.setCharacterCounter_(this.getValue().length);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
              this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
              this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
              ['mousedown', 'touchstart'].forEach(function (evtType) {
                _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
              });
              ['click', 'keydown'].forEach(function (evtType) {
                _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
              });
              this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
            }

            /**
             * Handles user interactions with the Text Field.
             */

          }, {
            key: 'handleTextFieldInteraction',
            value: function handleTextFieldInteraction() {
              if (this.adapter_.getNativeInput().disabled) {
                return;
              }
              this.receivedUserInput_ = true;
            }

            /**
             * Handles validation attribute changes
             * @param {!Array<string>} attributesList
             */

          }, {
            key: 'handleValidationAttributeChange',
            value: function handleValidationAttributeChange(attributesList) {
              var _this4 = this;

              attributesList.some(function (attributeName) {
                if (__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* VALIDATION_ATTR_WHITELIST */].indexOf(attributeName) > -1) {
                  _this4.styleValidity_(true);
                  return true;
                }
              });

              if (attributesList.indexOf('maxlength') > -1) {
                this.setCharacterCounter_(this.getValue().length);
              }
            }

            /**
             * Opens/closes the notched outline.
             * @param {boolean} openNotch
             */

          }, {
            key: 'notchOutline',
            value: function notchOutline(openNotch) {
              if (!this.adapter_.hasOutline()) {
                return;
              }

              if (openNotch) {
                var isDense = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_5__constants__["c" /* cssClasses */].DENSE);
                var labelScale = isDense ? __WEBPACK_IMPORTED_MODULE_5__constants__["d" /* numbers */].DENSE_LABEL_SCALE : __WEBPACK_IMPORTED_MODULE_5__constants__["d" /* numbers */].LABEL_SCALE;
                var labelWidth = this.adapter_.getLabelWidth() * labelScale;
                this.adapter_.notchOutline(labelWidth);
              } else {
                this.adapter_.closeOutline();
              }
            }

            /**
             * Activates the text field focus state.
             */

          }, {
            key: 'activateFocus',
            value: function activateFocus() {
              this.isFocused_ = true;
              this.styleFocused_(this.isFocused_);
              this.adapter_.activateLineRipple();
              if (this.adapter_.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter_.floatLabel(this.shouldFloat);
                this.adapter_.shakeLabel(this.shouldShake);
              }
              if (this.helperText_) {
                this.helperText_.showToScreenReader();
              }
            }

            /**
             * Sets the line ripple's transform origin, so that the line ripple activate
             * animation will animate out from the user's click location.
             * @param {!Event} evt
             */

          }, {
            key: 'setTransformOrigin',
            value: function setTransformOrigin(evt) {
              var targetEvent = void 0;
              if (evt.touches) {
                targetEvent = evt.touches[0];
              } else {
                targetEvent = evt;
              }
              var targetClientRect = targetEvent.target.getBoundingClientRect();
              var normalizedX = targetEvent.clientX - targetClientRect.left;
              this.adapter_.setLineRippleTransformOrigin(normalizedX);
            }

            /**
             * Handles input change of text input and text area.
             */

          }, {
            key: 'handleInput',
            value: function handleInput() {
              this.autoCompleteFocus();
              this.setCharacterCounter_(this.getValue().length);
            }

            /**
             * Activates the Text Field's focus state in cases when the input value
             * changes without user input (e.g. programatically).
             */

          }, {
            key: 'autoCompleteFocus',
            value: function autoCompleteFocus() {
              if (!this.receivedUserInput_) {
                this.activateFocus();
              }
            }

            /**
             * Deactivates the Text Field's focus state.
             */

          }, {
            key: 'deactivateFocus',
            value: function deactivateFocus() {
              this.isFocused_ = false;
              this.adapter_.deactivateLineRipple();
              var isValid = this.isValid();
              this.styleValidity_(isValid);
              this.styleFocused_(this.isFocused_);
              if (this.adapter_.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter_.floatLabel(this.shouldFloat);
                this.adapter_.shakeLabel(this.shouldShake);
              }
              if (!this.shouldFloat) {
                this.receivedUserInput_ = false;
              }
            }

            /**
             * @return {string} The value of the input Element.
             */

          }, {
            key: 'getValue',
            value: function getValue() {
              return this.getNativeInput_().value;
            }

            /**
             * @param {string} value The value to set on the input Element.
             */

          }, {
            key: 'setValue',
            value: function setValue(value) {
              // Prevent Safari from moving the caret to the end of the input when the value has not changed.
              if (this.getValue() !== value) {
                this.getNativeInput_().value = value;
              }
              var isValid = this.isValid();
              this.styleValidity_(isValid);
              if (this.adapter_.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter_.floatLabel(this.shouldFloat);
                this.adapter_.shakeLabel(this.shouldShake);
              }
            }

            /**
             * @return {boolean} If a custom validity is set, returns that value.
             *     Otherwise, returns the result of native validity checks.
             */

          }, {
            key: 'isValid',
            value: function isValid() {
              return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
            }

            /**
             * @param {boolean} isValid Sets the validity state of the Text Field.
             */

          }, {
            key: 'setValid',
            value: function setValid(isValid) {
              this.isValid_ = isValid;
              this.styleValidity_(isValid);

              var shouldShake = !isValid && !this.isFocused_;
              if (this.adapter_.hasLabel()) {
                this.adapter_.shakeLabel(shouldShake);
              }
            }

            /**
             * Enables or disables the use of native validation. Use this for custom validation.
             * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
             */

          }, {
            key: 'setUseNativeValidation',
            value: function setUseNativeValidation(useNativeValidation) {
              this.useNativeValidation_ = useNativeValidation;
            }

            /**
             * @return {boolean} True if the Text Field is disabled.
             */

          }, {
            key: 'isDisabled',
            value: function isDisabled() {
              return this.getNativeInput_().disabled;
            }

            /**
             * @param {boolean} disabled Sets the text-field disabled or enabled.
             */

          }, {
            key: 'setDisabled',
            value: function setDisabled(disabled) {
              this.getNativeInput_().disabled = disabled;
              this.styleDisabled_(disabled);
            }

            /**
             * @param {string} content Sets the content of the helper text.
             */

          }, {
            key: 'setHelperTextContent',
            value: function setHelperTextContent(content) {
              if (this.helperText_) {
                this.helperText_.setContent(content);
              }
            }

            /**
             * Sets character counter values that shows characters used and the total character limit.
             * @param {number} currentLength
             * @private
             */

          }, {
            key: 'setCharacterCounter_',
            value: function setCharacterCounter_(currentLength) {
              if (!this.characterCounter_) return;

              var maxLength = this.getNativeInput_().maxLength;
              if (maxLength === -1) {
                throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
              }

              this.characterCounter_.setCounterValue(currentLength, maxLength);
            }

            /**
             * Sets the aria label of the leading icon.
             * @param {string} label
             */

          }, {
            key: 'setLeadingIconAriaLabel',
            value: function setLeadingIconAriaLabel(label) {
              if (this.leadingIcon_) {
                this.leadingIcon_.setAriaLabel(label);
              }
            }

            /**
             * Sets the text content of the leading icon.
             * @param {string} content
             */

          }, {
            key: 'setLeadingIconContent',
            value: function setLeadingIconContent(content) {
              if (this.leadingIcon_) {
                this.leadingIcon_.setContent(content);
              }
            }

            /**
             * Sets the aria label of the trailing icon.
             * @param {string} label
             */

          }, {
            key: 'setTrailingIconAriaLabel',
            value: function setTrailingIconAriaLabel(label) {
              if (this.trailingIcon_) {
                this.trailingIcon_.setAriaLabel(label);
              }
            }

            /**
             * Sets the text content of the trailing icon.
             * @param {string} content
             */

          }, {
            key: 'setTrailingIconContent',
            value: function setTrailingIconContent(content) {
              if (this.trailingIcon_) {
                this.trailingIcon_.setContent(content);
              }
            }

            /**
             * @return {boolean} True if the Text Field input fails in converting the
             *     user-supplied value.
             * @private
             */

          }, {
            key: 'isBadInput_',
            value: function isBadInput_() {
              return this.getNativeInput_().validity.badInput;
            }

            /**
             * @return {boolean} The result of native validity checking
             *     (ValidityState.valid).
             */

          }, {
            key: 'isNativeInputValid_',
            value: function isNativeInputValid_() {
              return this.getNativeInput_().validity.valid;
            }

            /**
             * Styles the component based on the validity state.
             * @param {boolean} isValid
             * @private
             */

          }, {
            key: 'styleValidity_',
            value: function styleValidity_(isValid) {
              var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

              if (isValid) {
                this.adapter_.removeClass(INVALID);
              } else {
                this.adapter_.addClass(INVALID);
              }
              if (this.helperText_) {
                this.helperText_.setValidity(isValid);
              }
            }

            /**
             * Styles the component based on the focused state.
             * @param {boolean} isFocused
             * @private
             */

          }, {
            key: 'styleFocused_',
            value: function styleFocused_(isFocused) {
              var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

              if (isFocused) {
                this.adapter_.addClass(FOCUSED);
              } else {
                this.adapter_.removeClass(FOCUSED);
              }
            }

            /**
             * Styles the component based on the disabled state.
             * @param {boolean} isDisabled
             * @private
             */

          }, {
            key: 'styleDisabled_',
            value: function styleDisabled_(isDisabled) {
              var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
                  DISABLED = _MDCTextFieldFoundati.DISABLED,
                  INVALID = _MDCTextFieldFoundati.INVALID;

              if (isDisabled) {
                this.adapter_.addClass(DISABLED);
                this.adapter_.removeClass(INVALID);
              } else {
                this.adapter_.removeClass(DISABLED);
              }

              if (this.leadingIcon_) {
                this.leadingIcon_.setDisabled(isDisabled);
              }

              if (this.trailingIcon_) {
                this.trailingIcon_.setDisabled(isDisabled);
              }
            }

            /**
             * @return {!Element|!NativeInputType} The native text input from the
             * host environment, or a dummy if none exists.
             * @private
             */

          }, {
            key: 'getNativeInput_',
            value: function getNativeInput_() {
              return this.adapter_.getNativeInput() ||
              /** @type {!NativeInputType} */{
                value: '',
                disabled: false,
                validity: {
                  badInput: false,
                  valid: true
                }
              };
            }
          }]);

          return MDCTextFieldFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCTextFieldFoundation;

        /***/
      },

      /***/164:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return MDCTextFieldHelperText;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(85);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(60);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
         * @final
         */

        var MDCTextFieldHelperText = function (_MDCComponent) {
          _inherits(MDCTextFieldHelperText, _MDCComponent);

          function MDCTextFieldHelperText() {
            _classCallCheck(this, MDCTextFieldHelperText);

            return _possibleConstructorReturn(this, (MDCTextFieldHelperText.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperText)).apply(this, arguments));
          }

          _createClass(MDCTextFieldHelperText, [{
            key: 'getDefaultFoundation',

            /**
             * @return {!MDCTextFieldHelperTextFoundation}
             */
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCTextFieldHelperTextAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                hasClass: function hasClass(className) {
                  return _this2.root_.classList.contains(className);
                },
                setAttr: function setAttr(attr, value) {
                  return _this2.root_.setAttribute(attr, value);
                },
                removeAttr: function removeAttr(attr) {
                  return _this2.root_.removeAttribute(attr);
                },
                setContent: function setContent(content) {
                  _this2.root_.textContent = content;
                }
              }));
            }
          }, {
            key: 'foundation',

            /**
             * @return {!MDCTextFieldHelperTextFoundation}
             */
            get: function get() {
              return this.foundation_;
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCTextFieldHelperText}
             */
            value: function attachTo(root) {
              return new MDCTextFieldHelperText(root);
            }
          }]);

          return MDCTextFieldHelperText;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/165:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return MDCTextFieldCharacterCounter;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(86);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(61);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCTextFieldCharacterCounterFoundation>}
         * @final
         */

        var MDCTextFieldCharacterCounter = function (_MDCComponent) {
          _inherits(MDCTextFieldCharacterCounter, _MDCComponent);

          function MDCTextFieldCharacterCounter() {
            _classCallCheck(this, MDCTextFieldCharacterCounter);

            return _possibleConstructorReturn(this, (MDCTextFieldCharacterCounter.__proto__ || Object.getPrototypeOf(MDCTextFieldCharacterCounter)).apply(this, arguments));
          }

          _createClass(MDCTextFieldCharacterCounter, [{
            key: 'getDefaultFoundation',

            /**
             * @return {!MDCTextFieldCharacterCounterFoundation}
             */
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](
              /** @type {!MDCTextFieldCharacterCounterAdapter} */_extends({
                setContent: function setContent(content) {
                  _this2.root_.textContent = content;
                }
              }));
            }
          }, {
            key: 'foundation',

            /**
             * @return {!MDCTextFieldCharacterCounterFoundation}
             */
            get: function get() {
              return this.foundation_;
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCTextFieldCharacterCounter}
             */
            value: function attachTo(root) {
              return new MDCTextFieldCharacterCounter(root);
            }
          }]);

          return MDCTextFieldCharacterCounter;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/166:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return MDCTextFieldIcon;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(87);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(62);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
         * @final
         */

        var MDCTextFieldIcon = function (_MDCComponent) {
          _inherits(MDCTextFieldIcon, _MDCComponent);

          function MDCTextFieldIcon() {
            _classCallCheck(this, MDCTextFieldIcon);

            return _possibleConstructorReturn(this, (MDCTextFieldIcon.__proto__ || Object.getPrototypeOf(MDCTextFieldIcon)).apply(this, arguments));
          }

          _createClass(MDCTextFieldIcon, [{
            key: 'getDefaultFoundation',

            /**
             * @return {!MDCTextFieldIconFoundation}
             */
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCTextFieldIconAdapter} */_extends({
                getAttr: function getAttr(attr) {
                  return _this2.root_.getAttribute(attr);
                },
                setAttr: function setAttr(attr, value) {
                  return _this2.root_.setAttribute(attr, value);
                },
                removeAttr: function removeAttr(attr) {
                  return _this2.root_.removeAttribute(attr);
                },
                setContent: function setContent(content) {
                  _this2.root_.textContent = content;
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return _this2.root_.addEventListener(evtType, handler);
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return _this2.root_.removeEventListener(evtType, handler);
                },
                notifyIconAction: function notifyIconAction() {
                  return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
                }
              }));
            }
          }, {
            key: 'foundation',

            /**
             * @return {!MDCTextFieldIconFoundation}
             */
            get: function get() {
              return this.foundation_;
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCTextFieldIcon}
             */
            value: function attachTo(root) {
              return new MDCTextFieldIcon(root);
            }
          }]);

          return MDCTextFieldIcon;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/2:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () {
          return supportsCssVariables;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "applyPassive", function () {
          return applyPassive;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getMatchesProperty", function () {
          return getMatchesProperty;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () {
          return getNormalizedEventCoords;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
         * @private {boolean|undefined}
         */
        var supportsCssVariables_ = void 0;

        /**
         * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
         * @private {boolean|undefined}
         */
        var supportsPassive_ = void 0;

        /**
         * @param {!Window} windowObj
         * @return {boolean}
         */
        function detectEdgePseudoVarBug(windowObj) {
          // Detect versions of Edge with buggy var() support
          // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
          var document = windowObj.document;
          var node = document.createElement('div');
          node.className = 'mdc-ripple-surface--test-edge-var-bug';
          document.body.appendChild(node);

          // The bug exists if ::before style ends up propagating to the parent element.
          // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
          // but Firefox is known to support CSS custom properties correctly.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
          var computedStyle = windowObj.getComputedStyle(node);
          var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
          node.remove();
          return hasPseudoVarBug;
        }

        /**
         * @param {!Window} windowObj
         * @param {boolean=} forceRefresh
         * @return {boolean|undefined}
         */

        function supportsCssVariables(windowObj) {
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          var supportsCssVariables = supportsCssVariables_;
          if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
            return supportsCssVariables;
          }

          var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
          if (!supportsFunctionPresent) {
            return;
          }

          var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
          // See: https://bugs.webkit.org/show_bug.cgi?id=154669
          // See: README section on Safari
          var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

          if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
            supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
          } else {
            supportsCssVariables = false;
          }

          if (!forceRefresh) {
            supportsCssVariables_ = supportsCssVariables;
          }
          return supportsCssVariables;
        }

        //
        /**
         * Determine whether the current browser supports passive event listeners, and if so, use them.
         * @param {!Window=} globalObj
         * @param {boolean=} forceRefresh
         * @return {boolean|!EventListenerOptions}
         */
        function applyPassive() {
          var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (supportsPassive_ === undefined || forceRefresh) {
            var isSupported = false;
            try {
              globalObj.document.addEventListener('test', null, { get passive() {
                  isSupported = true;
                  return isSupported;
                } });
            } catch (e) {}

            supportsPassive_ = isSupported;
          }

          return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
        }

        /**
         * @param {!Object} HTMLElementPrototype
         * @return {string}
         */
        function getMatchesProperty(HTMLElementPrototype) {
          /**
           * Order is important because we return the first existing method we find.
           * Do not change the order of the items in the below array.
           */
          var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
          var method = 'matches';
          for (var i = 0; i < matchesMethods.length; i++) {
            var matchesMethod = matchesMethods[i];
            if (matchesMethod in HTMLElementPrototype) {
              method = matchesMethod;
              break;
            }
          }

          return method;
        }

        /**
         * @param {!Event} ev
         * @param {{x: number, y: number}} pageOffset
         * @param {!ClientRect} clientRect
         * @return {{x: number, y: number}}
         */
        function getNormalizedEventCoords(ev, pageOffset, clientRect) {
          var x = pageOffset.x,
              y = pageOffset.y;

          var documentX = x + clientRect.left;
          var documentY = y + clientRect.top;

          var normalizedX = void 0;
          var normalizedY = void 0;
          // Determine touch point relative to the ripple container.
          if (ev.type === 'touchstart') {
            ev = /** @type {!TouchEvent} */ev;
            normalizedX = ev.changedTouches[0].pageX - documentX;
            normalizedY = ev.changedTouches[0].pageY - documentY;
          } else {
            ev = /** @type {!MouseEvent} */ev;
            normalizedX = ev.pageX - documentX;
            normalizedY = ev.pageY - documentY;
          }

          return { x: normalizedX, y: normalizedY };
        }

        /***/
      },

      /***/20:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC TextField Line Ripple.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the line ripple into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCLineRippleAdapter = function () {
          function MDCLineRippleAdapter() {
            _classCallCheck(this, MDCLineRippleAdapter);
          }

          _createClass(MDCLineRippleAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the line ripple element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the line ripple element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * @param {string} className
             * @return {boolean}
             */

          }, {
            key: "hasClass",
            value: function hasClass(className) {}

            /**
             * Sets the style property with propertyName to value on the root element.
             * @param {string} propertyName
             * @param {string} value
             */

          }, {
            key: "setStyle",
            value: function setStyle(propertyName, value) {}

            /**
             * Registers an event listener on the line ripple element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "registerEventHandler",
            value: function registerEventHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the line ripple element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "deregisterEventHandler",
            value: function deregisterEventHandler(evtType, handler) {}
          }]);

          return MDCLineRippleAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCLineRippleAdapter;

        /***/
      },

      /***/22:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Notched Outline.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the Notched Outline into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCNotchedOutlineAdapter = function () {
          function MDCNotchedOutlineAdapter() {
            _classCallCheck(this, MDCNotchedOutlineAdapter);
          }

          _createClass(MDCNotchedOutlineAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the root element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the root element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * Sets the width style property of the notch element.
             * @param {number} width
             */

          }, {
            key: "setNotchWidthProperty",
            value: function setNotchWidthProperty(width) {}

            /**
             * Removes the width style property from the notch element.
             */

          }, {
            key: "removeNotchWidthProperty",
            value: function removeNotchWidthProperty() {}
          }]);

          return MDCNotchedOutlineAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCNotchedOutlineAdapter;

        /***/
      },

      /***/23:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return numbers;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
          return strings;
        });
        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var strings = {
          NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
        };

        /** @enum {number} */
        var numbers = {
          // This should stay in sync with $mdc-notched-outline-padding * 2.
          NOTCH_ELEMENT_PADDING: 8
        };

        /** @enum {string} */
        var cssClasses = {
          OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
          OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
          NO_LABEL: 'mdc-notched-outline--no-label'
        };

        /***/
      },

      /***/26:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(12);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(27);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
         * @final
         */

        var MDCFloatingLabelFoundation = function (_MDCFoundation) {
          _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

          _createClass(MDCFloatingLabelFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /**
             * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCFloatingLabelAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCFloatingLabelAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  getWidth: function getWidth() {},
                  registerInteractionHandler: function registerInteractionHandler() {},
                  deregisterInteractionHandler: function deregisterInteractionHandler() {}
                }
              );
            }

            /**
             * @param {!MDCFloatingLabelAdapter} adapter
             */

          }]);

          function MDCFloatingLabelFoundation(adapter) {
            _classCallCheck(this, MDCFloatingLabelFoundation);

            /** @private {function(!Event): undefined} */
            var _this = _possibleConstructorReturn(this, (MDCFloatingLabelFoundation.__proto__ || Object.getPrototypeOf(MDCFloatingLabelFoundation)).call(this, _extends(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

            _this.shakeAnimationEndHandler_ = function () {
              return _this.handleShakeAnimationEnd_();
            };
            return _this;
          }

          _createClass(MDCFloatingLabelFoundation, [{
            key: 'init',
            value: function init() {
              this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
            }

            /**
             * Returns the width of the label element.
             * @return {number}
             */

          }, {
            key: 'getWidth',
            value: function getWidth() {
              return this.adapter_.getWidth();
            }

            /**
             * Styles the label to produce the label shake for errors.
             * @param {boolean} shouldShake adds shake class if true,
             * otherwise removes shake class.
             */

          }, {
            key: 'shake',
            value: function shake(shouldShake) {
              var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

              if (shouldShake) {
                this.adapter_.addClass(LABEL_SHAKE);
              } else {
                this.adapter_.removeClass(LABEL_SHAKE);
              }
            }

            /**
             * Styles the label to float or dock.
             * @param {boolean} shouldFloat adds float class if true, otherwise remove
             * float and shake class to dock label.
             */

          }, {
            key: 'float',
            value: function float(shouldFloat) {
              var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
                  LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
                  LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

              if (shouldFloat) {
                this.adapter_.addClass(LABEL_FLOAT_ABOVE);
              } else {
                this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
                this.adapter_.removeClass(LABEL_SHAKE);
              }
            }

            /**
             * Handles an interaction event on the root element.
             */

          }, {
            key: 'handleShakeAnimationEnd_',
            value: function handleShakeAnimationEnd_() {
              var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

              this.adapter_.removeClass(LABEL_SHAKE);
            }
          }]);

          return MDCFloatingLabelFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCFloatingLabelFoundation;

        /***/
      },

      /***/27:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var cssClasses = {
          LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
          LABEL_SHAKE: 'mdc-floating-label--shake',
          ROOT: 'mdc-floating-label'
        };

        /***/
      },

      /***/3:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Ripple. Provides an interface for managing
         * - classes
         * - dom
         * - CSS variables
         * - position
         * - dimensions
         * - scroll position
         * - event handlers
         * - unbounded, active and disabled states
         *
         * Additionally, provides type information for the adapter to the Closure
         * compiler.
         *
         * Implement this adapter for your framework of choice to delegate updates to
         * the component in your framework of choice. See architecture documentation
         * for more details.
         * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
         *
         * @record
         */
        var MDCRippleAdapter = function () {
          function MDCRippleAdapter() {
            _classCallCheck(this, MDCRippleAdapter);
          }

          _createClass(MDCRippleAdapter, [{
            key: "browserSupportsCssVars",

            /** @return {boolean} */
            value: function browserSupportsCssVars() {}

            /** @return {boolean} */

          }, {
            key: "isUnbounded",
            value: function isUnbounded() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceActive",
            value: function isSurfaceActive() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceDisabled",
            value: function isSurfaceDisabled() {}

            /** @param {string} className */

          }, {
            key: "addClass",
            value: function addClass(className) {}

            /** @param {string} className */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /** @param {!EventTarget} target */

          }, {
            key: "containsEventTarget",
            value: function containsEventTarget(target) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerDocumentInteractionHandler",
            value: function registerDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterDocumentInteractionHandler",
            value: function deregisterDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "registerResizeHandler",
            value: function registerResizeHandler(handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "deregisterResizeHandler",
            value: function deregisterResizeHandler(handler) {}

            /**
             * @param {string} varName
             * @param {?number|string} value
             */

          }, {
            key: "updateCssVariable",
            value: function updateCssVariable(varName, value) {}

            /** @return {!ClientRect} */

          }, {
            key: "computeBoundingRect",
            value: function computeBoundingRect() {}

            /** @return {{x: number, y: number}} */

          }, {
            key: "getWindowPageOffset",
            value: function getWindowPageOffset() {}
          }]);

          return MDCRippleAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCRippleAdapter;

        /***/
      },

      /***/30:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCLineRipple", function () {
          return MDCLineRipple;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(20);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(31);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCLineRippleFoundation>}
         * @final
         */

        var MDCLineRipple = function (_MDCComponent) {
          _inherits(MDCLineRipple, _MDCComponent);

          function MDCLineRipple() {
            _classCallCheck(this, MDCLineRipple);

            return _possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
          }

          _createClass(MDCLineRipple, [{
            key: 'activate',

            /**
             * Activates the line ripple
             */
            value: function activate() {
              this.foundation_.activate();
            }

            /**
             * Deactivates the line ripple
             */

          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.foundation_.deactivate();
            }

            /**
             * Sets the transform origin given a user's click location. The `rippleCenter` is the
             * x-coordinate of the middle of the ripple.
             * @param {number} xCoordinate
             */

          }, {
            key: 'setRippleCenter',
            value: function setRippleCenter(xCoordinate) {
              this.foundation_.setRippleCenter(xCoordinate);
            }

            /**
             * @return {!MDCLineRippleFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCLineRippleAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                hasClass: function hasClass(className) {
                  return _this2.root_.classList.contains(className);
                },
                setStyle: function setStyle(propertyName, value) {
                  return _this2.root_.style[propertyName] = value;
                },
                registerEventHandler: function registerEventHandler(evtType, handler) {
                  return _this2.root_.addEventListener(evtType, handler);
                },
                deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
                  return _this2.root_.removeEventListener(evtType, handler);
                }
              }));
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCLineRipple}
             */
            value: function attachTo(root) {
              return new MDCLineRipple(root);
            }
          }]);

          return MDCLineRipple;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/31:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(20);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(32);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCLineRippleAdapter>}
         * @final
         */

        var MDCLineRippleFoundation = function (_MDCFoundation) {
          _inherits(MDCLineRippleFoundation, _MDCFoundation);

          _createClass(MDCLineRippleFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /**
             * {@see MDCLineRippleAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCLineRippleAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCLineRippleAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  hasClass: function hasClass() {},
                  setStyle: function setStyle() {},
                  registerEventHandler: function registerEventHandler() {},
                  deregisterEventHandler: function deregisterEventHandler() {}
                }
              );
            }

            /**
             * @param {!MDCLineRippleAdapter=} adapter
             */

          }]);

          function MDCLineRippleFoundation(adapter) {
            _classCallCheck(this, MDCLineRippleFoundation);

            /** @private {function(!Event): undefined} */
            var _this = _possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, _extends(MDCLineRippleFoundation.defaultAdapter, adapter)));

            _this.transitionEndHandler_ = function (evt) {
              return _this.handleTransitionEnd(evt);
            };
            return _this;
          }

          _createClass(MDCLineRippleFoundation, [{
            key: 'init',
            value: function init() {
              this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
            }

            /**
             * Activates the line ripple
             */

          }, {
            key: 'activate',
            value: function activate() {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
            }

            /**
             * Sets the center of the ripple animation to the given X coordinate.
             * @param {number} xCoordinate
             */

          }, {
            key: 'setRippleCenter',
            value: function setRippleCenter(xCoordinate) {
              this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
            }

            /**
             * Deactivates the line ripple
             */

          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
            }

            /**
             * Handles a transition end event
             * @param {!Event} evt
             */

          }, {
            key: 'handleTransitionEnd',
            value: function handleTransitionEnd(evt) {
              // Wait for the line ripple to be either transparent or opaque
              // before emitting the animation end event
              var isDeactivating = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);

              if (evt.propertyName === 'opacity') {
                if (isDeactivating) {
                  this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
                  this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
                }
              }
            }
          }]);

          return MDCLineRippleFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCLineRippleFoundation;

        /***/
      },

      /***/32:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var cssClasses = {
          LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
          LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
        };

        /***/
      },

      /***/35:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function () {
          return MDCNotchedOutline;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(22);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(36);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__ = __webpack_require__(16);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(23);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
         * @final
         */

        var MDCNotchedOutline = function (_MDCComponent) {
          _inherits(MDCNotchedOutline, _MDCComponent);

          _createClass(MDCNotchedOutline, null, [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCNotchedOutline}
             */
            value: function attachTo(root) {
              return new MDCNotchedOutline(root);
            }
            /** @param {...?} args */

          }]);

          function MDCNotchedOutline() {
            var _ref;

            _classCallCheck(this, MDCNotchedOutline);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @private {Element} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCNotchedOutline.__proto__ || Object.getPrototypeOf(MDCNotchedOutline)).call.apply(_ref, [this].concat(args)));

            _this.notchElement_;
            return _this;
          }

          _createClass(MDCNotchedOutline, [{
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              var label = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__["MDCFloatingLabelFoundation"].cssClasses.ROOT);
              this.notchElement_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* strings */].NOTCH_ELEMENT_SELECTOR);

              if (label) {
                label.style.transitionDuration = '0s';
                this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].OUTLINE_UPGRADED);
                requestAnimationFrame(function () {
                  label.style.transitionDuration = '';
                });
              } else {
                this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].NO_LABEL);
              }
            }

            /**
              * Updates classes and styles to open the notch to the specified width.
              * @param {number} notchWidth The notch width in the outline.
              */

          }, {
            key: 'notch',
            value: function notch(notchWidth) {
              this.foundation_.notch(notchWidth);
            }

            /**
             * Updates classes and styles to close the notch.
             */

          }, {
            key: 'closeNotch',
            value: function closeNotch() {
              this.foundation_.closeNotch();
            }

            /**
             * @return {!MDCNotchedOutlineFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](
              /** @type {!MDCNotchedOutlineAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                setNotchWidthProperty: function setNotchWidthProperty(width) {
                  return _this2.notchElement_.style.setProperty('width', width + 'px');
                },
                removeNotchWidthProperty: function removeNotchWidthProperty() {
                  return _this2.notchElement_.style.removeProperty('width');
                }
              }));
            }
          }]);

          return MDCNotchedOutline;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/36:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(22);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(23);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
         * @final
         */

        var MDCNotchedOutlineFoundation = function (_MDCFoundation) {
          _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

          _createClass(MDCNotchedOutlineFoundation, null, [{
            key: 'strings',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
            }

            /** @return enum {string} */

          }, {
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /** @return enum {number} */

          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
            }

            /**
             * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCNotchedOutlineAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCNotchedOutlineAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  setNotchWidthProperty: function setNotchWidthProperty() {},
                  removeNotchWidthProperty: function removeNotchWidthProperty() {}
                }
              );
            }

            /**
             * @param {!MDCNotchedOutlineAdapter} adapter
             */

          }]);

          function MDCNotchedOutlineFoundation(adapter) {
            _classCallCheck(this, MDCNotchedOutlineFoundation);

            return _possibleConstructorReturn(this, (MDCNotchedOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCNotchedOutlineFoundation)).call(this, _extends(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
          }

          /**
           * Adds the outline notched selector and updates the notch width
           * calculated based off of notchWidth.
           * @param {number} notchWidth
           */

          _createClass(MDCNotchedOutlineFoundation, [{
            key: 'notch',
            value: function notch(notchWidth) {
              var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

              if (notchWidth > 0) {
                notchWidth += __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
              }

              this.adapter_.setNotchWidthProperty(notchWidth);
              this.adapter_.addClass(OUTLINE_NOTCHED);
            }

            /**
             * Removes notched outline selector to close the notch in the outline.
             */

          }, {
            key: 'closeNotch',
            value: function closeNotch() {
              var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

              this.adapter_.removeClass(OUTLINE_NOTCHED);
              this.adapter_.removeNotchWidthProperty();
            }
          }]);

          return MDCNotchedOutlineFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCNotchedOutlineFoundation;

        /***/
      },

      /***/4:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCRipple", function () {
          return MDCRipple;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function () {
          return RippleCapableSurface;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
          return __WEBPACK_IMPORTED_MODULE_3__util__;
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends MDCComponent<!MDCRippleFoundation>
         */

        var MDCRipple = function (_MDCComponent) {
          _inherits(MDCRipple, _MDCComponent);

          /** @param {...?} args */
          function MDCRipple() {
            var _ref;

            _classCallCheck(this, MDCRipple);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @type {boolean} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

            _this.disabled = false;

            /** @private {boolean} */
            _this.unbounded_;
            return _this;
          }

          /**
           * @param {!Element} root
           * @param {{isUnbounded: (boolean|undefined)}=} options
           * @return {!MDCRipple}
           */

          _createClass(MDCRipple, [{
            key: 'setUnbounded_',

            /**
             * Closure Compiler throws an access control error when directly accessing a
             * protected or private property inside a getter/setter, like unbounded above.
             * By accessing the protected property inside a method, we solve that problem.
             * That's why this function exists.
             * @private
             */
            value: function setUnbounded_() {
              this.foundation_.setUnbounded(this.unbounded_);
            }
          }, {
            key: 'activate',
            value: function activate() {
              this.foundation_.activate();
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.foundation_.deactivate();
            }
          }, {
            key: 'layout',
            value: function layout() {
              this.foundation_.layout();
            }

            /**
             * @return {!MDCRippleFoundation}
             * @override
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
            }

            /** @override */

          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
            }
          }, {
            key: 'unbounded',

            /** @return {boolean} */
            get: function get() {
              return this.unbounded_;
            }

            /** @param {boolean} unbounded */

            , set: function set(unbounded) {
              this.unbounded_ = Boolean(unbounded);
              this.setUnbounded_();
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref2$isUnbounded = _ref2.isUnbounded,
                  isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

              var ripple = new MDCRipple(root);
              // Only override unbounded behavior if option is explicitly specified
              if (isUnbounded !== undefined) {
                ripple.unbounded = /** @type {boolean} */isUnbounded;
              }
              return ripple;
            }

            /**
             * @param {!RippleCapableSurface} instance
             * @return {!MDCRippleAdapter}
             */

          }, {
            key: 'createAdapter',
            value: function createAdapter(instance) {
              var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

              return {
                browserSupportsCssVars: function browserSupportsCssVars() {
                  return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
                },
                isUnbounded: function isUnbounded() {
                  return instance.unbounded;
                },
                isSurfaceActive: function isSurfaceActive() {
                  return instance.root_[MATCHES](':active');
                },
                isSurfaceDisabled: function isSurfaceDisabled() {
                  return instance.disabled;
                },
                addClass: function addClass(className) {
                  return instance.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return instance.root_.classList.remove(className);
                },
                containsEventTarget: function containsEventTarget(target) {
                  return instance.root_.contains(target);
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerResizeHandler: function registerResizeHandler(handler) {
                  return window.addEventListener('resize', handler);
                },
                deregisterResizeHandler: function deregisterResizeHandler(handler) {
                  return window.removeEventListener('resize', handler);
                },
                updateCssVariable: function updateCssVariable(varName, value) {
                  return instance.root_.style.setProperty(varName, value);
                },
                computeBoundingRect: function computeBoundingRect() {
                  return instance.root_.getBoundingClientRect();
                },
                getWindowPageOffset: function getWindowPageOffset() {
                  return { x: window.pageXOffset, y: window.pageYOffset };
                }
              };
            }
          }]);

          return MDCRipple;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /**
         * See Material Design spec for more details on when to use ripples.
         * https://material.io/guidelines/motion/choreography.html#choreography-creation
         * @record
         */

        var RippleCapableSurface = function RippleCapableSurface() {
          _classCallCheck(this, RippleCapableSurface);
        };

        /** @protected {!Element} */

        RippleCapableSurface.prototype.root_;

        /**
         * Whether or not the ripple bleeds out of the bounds of the element.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.unbounded;

        /**
         * Whether or not the ripple is attached to a disabled component.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.disabled;

        /***/
      },

      /***/5:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @typedef {{
         *   isActivated: (boolean|undefined),
         *   hasDeactivationUXRun: (boolean|undefined),
         *   wasActivatedByPointer: (boolean|undefined),
         *   wasElementMadeActive: (boolean|undefined),
         *   activationEvent: (!Event|undefined),
         *   isProgrammatic: (boolean|undefined)
         * }}
         */
        var ActivationStateType = void 0;

        /**
         * @typedef {{
         *   activate: (string|undefined),
         *   deactivate: (string|undefined),
         *   focus: (string|undefined),
         *   blur: (string|undefined)
         * }}
         */
        var ListenerInfoType = void 0;

        /**
         * @typedef {{
         *   activate: function(!Event),
         *   deactivate: function(!Event=),
         *   focus: function(),
         *   blur: function()
         * }}
         */
        var ListenersType = void 0;

        /**
         * @typedef {{
         *   x: number,
         *   y: number
         * }}
         */
        var PointType = void 0;

        // Activation events registered on the root element of each instance for activation
        var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

        // Deactivation events registered on documentElement when a pointer-related down event occurs
        var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

        // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
        /** @type {!Array<!EventTarget>} */
        var activatedTargets = [];

        /**
         * @extends {MDCFoundation<!MDCRippleAdapter>}
         */

        var MDCRippleFoundation = function (_MDCFoundation) {
          _inherits(MDCRippleFoundation, _MDCFoundation);

          _createClass(MDCRippleFoundation, null, [{
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }
          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
            }
          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return {
                browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
                isUnbounded: function isUnbounded() /* boolean */{},
                isSurfaceActive: function isSurfaceActive() /* boolean */{},
                isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
                addClass: function addClass() /* className: string */{},
                removeClass: function removeClass() /* className: string */{},
                containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
                registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
                deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
                updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
                computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
                getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
              };
            }
          }]);

          function MDCRippleFoundation(adapter) {
            _classCallCheck(this, MDCRippleFoundation);

            /** @private {number} */
            var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

            _this.layoutFrame_ = 0;

            /** @private {!ClientRect} */
            _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

            /** @private {!ActivationStateType} */
            _this.activationState_ = _this.defaultActivationState_();

            /** @private {number} */
            _this.initialSize_ = 0;

            /** @private {number} */
            _this.maxRadius_ = 0;

            /** @private {function(!Event)} */
            _this.activateHandler_ = function (e) {
              return _this.activate_(e);
            };

            /** @private {function(!Event=)} */
            _this.deactivateHandler_ = function () {
              return _this.deactivate_();
            };

            /** @private {function(!Event=)} */
            _this.focusHandler_ = function () {
              return _this.handleFocus();
            };

            /** @private {function(!Event=)} */
            _this.blurHandler_ = function () {
              return _this.handleBlur();
            };

            /** @private {!Function} */
            _this.resizeHandler_ = function () {
              return _this.layout();
            };

            /** @private {{left: number, top:number}} */
            _this.unboundedCoords_ = {
              left: 0,
              top: 0
            };

            /** @private {number} */
            _this.fgScale_ = 0;

            /** @private {number} */
            _this.activationTimer_ = 0;

            /** @private {number} */
            _this.fgDeactivationRemovalTimer_ = 0;

            /** @private {boolean} */
            _this.activationAnimationHasEnded_ = false;

            /** @private {!Function} */
            _this.activationTimerCallback_ = function () {
              _this.activationAnimationHasEnded_ = true;
              _this.runDeactivationUXLogicIfReady_();
            };

            /** @private {!Event|undefined} */
            _this.previousActivationEvent_;
            return _this;
          }

          /**
           * We compute this property so that we are not querying information about the client
           * until the point in time where the foundation requests it. This prevents scenarios where
           * client-side feature-detection may happen too early, such as when components are rendered on the server
           * and then initialized at mount time on the client.
           * @return {boolean}
           * @private
           */

          _createClass(MDCRippleFoundation, [{
            key: 'supportsPressRipple_',
            value: function supportsPressRipple_() {
              return this.adapter_.browserSupportsCssVars();
            }

            /**
             * @return {!ActivationStateType}
             */

          }, {
            key: 'defaultActivationState_',
            value: function defaultActivationState_() {
              return {
                isActivated: false,
                hasDeactivationUXRun: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
                activationEvent: undefined,
                isProgrammatic: false
              };
            }

            /** @override */

          }, {
            key: 'init',
            value: function init() {
              var _this2 = this;

              var supportsPressRipple = this.supportsPressRipple_();

              this.registerRootHandlers_(supportsPressRipple);

              if (supportsPressRipple) {
                var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this2.adapter_.addClass(ROOT);
                  if (_this2.adapter_.isUnbounded()) {
                    _this2.adapter_.addClass(UNBOUNDED);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this2.layoutInternal_();
                  }
                });
              }
            }

            /** @override */

          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              if (this.supportsPressRipple_()) {
                if (this.activationTimer_) {
                  clearTimeout(this.activationTimer_);
                  this.activationTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                }

                if (this.fgDeactivationRemovalTimer_) {
                  clearTimeout(this.fgDeactivationRemovalTimer_);
                  this.fgDeactivationRemovalTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                }

                var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$2.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this3.adapter_.removeClass(ROOT);
                  _this3.adapter_.removeClass(UNBOUNDED);
                  _this3.removeCssVars_();
                });
              }

              this.deregisterRootHandlers_();
              this.deregisterDeactivationHandlers_();
            }

            /**
             * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
             * @private
             */

          }, {
            key: 'registerRootHandlers_',
            value: function registerRootHandlers_(supportsPressRipple) {
              var _this4 = this;

              if (supportsPressRipple) {
                ACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
                });
                if (this.adapter_.isUnbounded()) {
                  this.adapter_.registerResizeHandler(this.resizeHandler_);
                }
              }

              this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
              this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            }

            /**
             * @param {!Event} e
             * @private
             */

          }, {
            key: 'registerDeactivationHandlers_',
            value: function registerDeactivationHandlers_(e) {
              var _this5 = this;

              if (e.type === 'keydown') {
                this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
              } else {
                POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
                });
              }
            }

            /** @private */

          }, {
            key: 'deregisterRootHandlers_',
            value: function deregisterRootHandlers_() {
              var _this6 = this;

              ACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
              });
              this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
              this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

              if (this.adapter_.isUnbounded()) {
                this.adapter_.deregisterResizeHandler(this.resizeHandler_);
              }
            }

            /** @private */

          }, {
            key: 'deregisterDeactivationHandlers_',
            value: function deregisterDeactivationHandlers_() {
              var _this7 = this;

              this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
              });
            }

            /** @private */

          }, {
            key: 'removeCssVars_',
            value: function removeCssVars_() {
              var _this8 = this;

              var strings = MDCRippleFoundation.strings;

              Object.keys(strings).forEach(function (k) {
                if (k.indexOf('VAR_') === 0) {
                  _this8.adapter_.updateCssVariable(strings[k], null);
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'activate_',
            value: function activate_(e) {
              var _this9 = this;

              if (this.adapter_.isSurfaceDisabled()) {
                return;
              }

              var activationState = this.activationState_;
              if (activationState.isActivated) {
                return;
              }

              // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
              var previousActivationEvent = this.previousActivationEvent_;
              var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
              if (isSameInteraction) {
                return;
              }

              activationState.isActivated = true;
              activationState.isProgrammatic = e === undefined;
              activationState.activationEvent = e;
              activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

              var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
                return _this9.adapter_.containsEventTarget(target);
              });
              if (hasActivatedChild) {
                // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                this.resetActivationState_();
                return;
              }

              if (e !== undefined) {
                activatedTargets.push( /** @type {!EventTarget} */e.target);
                this.registerDeactivationHandlers_(e);
              }

              activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
              if (activationState.wasElementMadeActive) {
                this.animateActivation_();
              }

              requestAnimationFrame(function () {
                // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                activatedTargets = [];

                if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
                  // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                  // active states inconsistently when they're called within event handling code:
                  // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                  // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                  // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                  // variable is set within a rAF callback for a submit button interaction (#2241).
                  activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
                  if (activationState.wasElementMadeActive) {
                    _this9.animateActivation_();
                  }
                }

                if (!activationState.wasElementMadeActive) {
                  // Reset activation state immediately if element was not made active.
                  _this9.activationState_ = _this9.defaultActivationState_();
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'checkElementMadeActive_',
            value: function checkElementMadeActive_(e) {
              return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
            }

            /**
             * @param {!Event=} event Optional event containing position information.
             */

          }, {
            key: 'activate',
            value: function activate(event) {
              this.activate_(event);
            }

            /** @private */

          }, {
            key: 'animateActivation_',
            value: function animateActivation_() {
              var _this10 = this;

              var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                  VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                  VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
              var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                  FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                  FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
              var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;

              this.layoutInternal_();

              var translateStart = '';
              var translateEnd = '';

              if (!this.adapter_.isUnbounded()) {
                var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                    startPoint = _getFgTranslationCoor.startPoint,
                    endPoint = _getFgTranslationCoor.endPoint;

                translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
                translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
              }

              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
              // Cancel any ongoing activation/deactivation animations
              clearTimeout(this.activationTimer_);
              clearTimeout(this.fgDeactivationRemovalTimer_);
              this.rmBoundedActivationClasses_();
              this.adapter_.removeClass(FG_DEACTIVATION);

              // Force layout in order to re-trigger the animation.
              this.adapter_.computeBoundingRect();
              this.adapter_.addClass(FG_ACTIVATION);
              this.activationTimer_ = setTimeout(function () {
                return _this10.activationTimerCallback_();
              }, DEACTIVATION_TIMEOUT_MS);
            }

            /**
             * @private
             * @return {{startPoint: PointType, endPoint: PointType}}
             */

          }, {
            key: 'getFgTranslationCoordinates_',
            value: function getFgTranslationCoordinates_() {
              var _activationState_ = this.activationState_,
                  activationEvent = _activationState_.activationEvent,
                  wasActivatedByPointer = _activationState_.wasActivatedByPointer;

              var startPoint = void 0;
              if (wasActivatedByPointer) {
                startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
                /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
              } else {
                startPoint = {
                  x: this.frame_.width / 2,
                  y: this.frame_.height / 2
                };
              }
              // Center the element around the start point.
              startPoint = {
                x: startPoint.x - this.initialSize_ / 2,
                y: startPoint.y - this.initialSize_ / 2
              };

              var endPoint = {
                x: this.frame_.width / 2 - this.initialSize_ / 2,
                y: this.frame_.height / 2 - this.initialSize_ / 2
              };

              return { startPoint: startPoint, endPoint: endPoint };
            }

            /** @private */

          }, {
            key: 'runDeactivationUXLogicIfReady_',
            value: function runDeactivationUXLogicIfReady_() {
              var _this11 = this;

              // This method is called both when a pointing device is released, and when the activation animation ends.
              // The deactivation animation should only run after both of those occur.
              var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
              var _activationState_2 = this.activationState_,
                  hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                  isActivated = _activationState_2.isActivated;

              var activationHasEnded = hasDeactivationUXRun || !isActivated;

              if (activationHasEnded && this.activationAnimationHasEnded_) {
                this.rmBoundedActivationClasses_();
                this.adapter_.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                  _this11.adapter_.removeClass(FG_DEACTIVATION);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
              }
            }

            /** @private */

          }, {
            key: 'rmBoundedActivationClasses_',
            value: function rmBoundedActivationClasses_() {
              var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

              this.adapter_.removeClass(FG_ACTIVATION);
              this.activationAnimationHasEnded_ = false;
              this.adapter_.computeBoundingRect();
            }
          }, {
            key: 'resetActivationState_',
            value: function resetActivationState_() {
              var _this12 = this;

              this.previousActivationEvent_ = this.activationState_.activationEvent;
              this.activationState_ = this.defaultActivationState_();
              // Touch devices may fire additional events for the same interaction within a short time.
              // Store the previous event until it's safe to assume that subsequent events are for new interactions.
              setTimeout(function () {
                return _this12.previousActivationEvent_ = undefined;
              }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
            }

            /**
             * @private
             */

          }, {
            key: 'deactivate_',
            value: function deactivate_() {
              var _this13 = this;

              var activationState = this.activationState_;
              // This can happen in scenarios such as when you have a keyup event that blurs the element.
              if (!activationState.isActivated) {
                return;
              }

              var state = /** @type {!ActivationStateType} */_extends({}, activationState);

              if (activationState.isProgrammatic) {
                requestAnimationFrame(function () {
                  return _this13.animateDeactivation_(state);
                });
                this.resetActivationState_();
              } else {
                this.deregisterDeactivationHandlers_();
                requestAnimationFrame(function () {
                  _this13.activationState_.hasDeactivationUXRun = true;
                  _this13.animateDeactivation_(state);
                  _this13.resetActivationState_();
                });
              }
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.deactivate_();
            }

            /**
             * @param {!ActivationStateType} options
             * @private
             */

          }, {
            key: 'animateDeactivation_',
            value: function animateDeactivation_(_ref) {
              var wasActivatedByPointer = _ref.wasActivatedByPointer,
                  wasElementMadeActive = _ref.wasElementMadeActive;

              if (wasActivatedByPointer || wasElementMadeActive) {
                this.runDeactivationUXLogicIfReady_();
              }
            }
          }, {
            key: 'layout',
            value: function layout() {
              var _this14 = this;

              if (this.layoutFrame_) {
                cancelAnimationFrame(this.layoutFrame_);
              }
              this.layoutFrame_ = requestAnimationFrame(function () {
                _this14.layoutInternal_();
                _this14.layoutFrame_ = 0;
              });
            }

            /** @private */

          }, {
            key: 'layoutInternal_',
            value: function layoutInternal_() {
              var _this15 = this;

              this.frame_ = this.adapter_.computeBoundingRect();
              var maxDim = Math.max(this.frame_.height, this.frame_.width);

              // Surface diameter is treated differently for unbounded vs. bounded ripples.
              // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
              // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
              // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
              // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
              // `overflow: hidden`.
              var getBoundedRadius = function getBoundedRadius() {
                var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
                return hypotenuse + MDCRippleFoundation.numbers.PADDING;
              };

              this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

              // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
              this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
              this.fgScale_ = this.maxRadius_ / this.initialSize_;

              this.updateLayoutCssVars_();
            }

            /** @private */

          }, {
            key: 'updateLayoutCssVars_',
            value: function updateLayoutCssVars_() {
              var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                  VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                  VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                  VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                  VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;

              this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
              this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

              if (this.adapter_.isUnbounded()) {
                this.unboundedCoords_ = {
                  left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                  top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                };

                this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
                this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
              }
            }

            /** @param {boolean} unbounded */

          }, {
            key: 'setUnbounded',
            value: function setUnbounded(unbounded) {
              var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

              if (unbounded) {
                this.adapter_.addClass(UNBOUNDED);
              } else {
                this.adapter_.removeClass(UNBOUNDED);
              }
            }
          }, {
            key: 'handleFocus',
            value: function handleFocus() {
              var _this16 = this;

              requestAnimationFrame(function () {
                return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }, {
            key: 'handleBlur',
            value: function handleBlur() {
              var _this17 = this;

              requestAnimationFrame(function () {
                return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }]);

          return MDCRippleFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCRippleFoundation;

        /***/
      },

      /***/6:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return numbers;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        var cssClasses = {
          // Ripple is a special case where the "root" component is really a "mixin" of sorts,
          // given that it's an 'upgrade' to an existing component. That being said it is the root
          // CSS class that all other CSS classes derive from.
          ROOT: 'mdc-ripple-upgraded',
          UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
          BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
          FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
          FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
        };

        var strings = {
          VAR_LEFT: '--mdc-ripple-left',
          VAR_TOP: '--mdc-ripple-top',
          VAR_FG_SIZE: '--mdc-ripple-fg-size',
          VAR_FG_SCALE: '--mdc-ripple-fg-scale',
          VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
          VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
        };

        var numbers = {
          PADDING: 10,
          INITIAL_ORIGIN_SCALE: 0.6,
          DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
          FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
          TAP_DELAY_MS: 300 };

        /***/
      },

      /***/60:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(85);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(160);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
         * @final
         */

        var MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
          _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

          _createClass(MDCTextFieldHelperTextFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /** @return enum {string} */

          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
            }

            /**
             * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldHelperTextAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCTextFieldHelperTextAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  hasClass: function hasClass() {},
                  setAttr: function setAttr() {},
                  removeAttr: function removeAttr() {},
                  setContent: function setContent() {}
                }
              );
            }

            /**
             * @param {!MDCTextFieldHelperTextAdapter} adapter
             */

          }]);

          function MDCTextFieldHelperTextFoundation(adapter) {
            _classCallCheck(this, MDCTextFieldHelperTextFoundation);

            return _possibleConstructorReturn(this, (MDCTextFieldHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperTextFoundation)).call(this, _extends(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
          }

          /**
           * Sets the content of the helper text field.
           * @param {string} content
           */

          _createClass(MDCTextFieldHelperTextFoundation, [{
            key: 'setContent',
            value: function setContent(content) {
              this.adapter_.setContent(content);
            }

            /** @param {boolean} isPersistent Sets the persistency of the helper text. */

          }, {
            key: 'setPersistent',
            value: function setPersistent(isPersistent) {
              if (isPersistent) {
                this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
              } else {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
              }
            }

            /**
             * @param {boolean} isValidation True to make the helper text act as an
             *   error validation message.
             */

          }, {
            key: 'setValidation',
            value: function setValidation(isValidation) {
              if (isValidation) {
                this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
              } else {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
              }
            }

            /** Makes the helper text visible to the screen reader. */

          }, {
            key: 'showToScreenReader',
            value: function showToScreenReader() {
              this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN);
            }

            /**
             * Sets the validity of the helper text based on the input validity.
             * @param {boolean} inputIsValid
             */

          }, {
            key: 'setValidity',
            value: function setValidity(inputIsValid) {
              var helperTextIsPersistent = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
              var helperTextIsValidationMsg = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
              var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

              if (validationMsgNeedsDisplay) {
                this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE, 'alert');
              } else {
                this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE);
              }

              if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
                this.hide_();
              }
            }

            /**
             * Hides the help text from screen readers.
             * @private
             */

          }, {
            key: 'hide_',
            value: function hide_() {
              this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN, 'true');
            }
          }]);

          return MDCTextFieldHelperTextFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCTextFieldHelperTextFoundation;

        /***/
      },

      /***/61:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(86);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(161);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCTextFieldCharacterCounterAdapter>}
         * @final
         */

        var MDCTextFieldCharacterCounterFoundation = function (_MDCFoundation) {
          _inherits(MDCTextFieldCharacterCounterFoundation, _MDCFoundation);

          _createClass(MDCTextFieldCharacterCounterFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /** @return enum {string} */

          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
            }

            /**
             * {@see MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldCharacterCounterAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCTextFieldCharacterCounterAdapter} */{
                  setContent: function setContent() {}
                }
              );
            }

            /**
             * @param {!MDCTextFieldCharacterCounterAdapter} adapter
             */

          }]);

          function MDCTextFieldCharacterCounterFoundation(adapter) {
            _classCallCheck(this, MDCTextFieldCharacterCounterFoundation);

            return _possibleConstructorReturn(this, (MDCTextFieldCharacterCounterFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldCharacterCounterFoundation)).call(this, _extends(MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)));
          }

          /**
           * @param {number} currentLength
           * @param {number} maxLength
           */

          _createClass(MDCTextFieldCharacterCounterFoundation, [{
            key: 'setCounterValue',
            value: function setCounterValue(currentLength, maxLength) {
              currentLength = Math.min(currentLength, maxLength);
              this.adapter_.setContent(currentLength + ' / ' + maxLength);
            }
          }]);

          return MDCTextFieldCharacterCounterFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCTextFieldCharacterCounterFoundation;

        /***/
      },

      /***/62:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(87);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(162);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
         * @final
         */

        var MDCTextFieldIconFoundation = function (_MDCFoundation) {
          _inherits(MDCTextFieldIconFoundation, _MDCFoundation);

          _createClass(MDCTextFieldIconFoundation, null, [{
            key: 'strings',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */];
            }

            /**
             * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldIconAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCTextFieldIconAdapter} */{
                  getAttr: function getAttr() {},
                  setAttr: function setAttr() {},
                  removeAttr: function removeAttr() {},
                  setContent: function setContent() {},
                  registerInteractionHandler: function registerInteractionHandler() {},
                  deregisterInteractionHandler: function deregisterInteractionHandler() {},
                  notifyIconAction: function notifyIconAction() {}
                }
              );
            }

            /**
             * @param {!MDCTextFieldIconAdapter} adapter
             */

          }]);

          function MDCTextFieldIconFoundation(adapter) {
            _classCallCheck(this, MDCTextFieldIconFoundation);

            /** @private {string?} */
            var _this = _possibleConstructorReturn(this, (MDCTextFieldIconFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldIconFoundation)).call(this, _extends(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

            _this.savedTabIndex_ = null;

            /** @private {function(!Event): undefined} */
            _this.interactionHandler_ = function (evt) {
              return _this.handleInteraction(evt);
            };
            return _this;
          }

          _createClass(MDCTextFieldIconFoundation, [{
            key: 'init',
            value: function init() {
              var _this2 = this;

              this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

              ['click', 'keydown'].forEach(function (evtType) {
                _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              ['click', 'keydown'].forEach(function (evtType) {
                _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
              });
            }

            /** @param {boolean} disabled */

          }, {
            key: 'setDisabled',
            value: function setDisabled(disabled) {
              if (!this.savedTabIndex_) {
                return;
              }

              if (disabled) {
                this.adapter_.setAttr('tabindex', '-1');
                this.adapter_.removeAttr('role');
              } else {
                this.adapter_.setAttr('tabindex', this.savedTabIndex_);
                this.adapter_.setAttr('role', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].ICON_ROLE);
              }
            }

            /** @param {string} label */

          }, {
            key: 'setAriaLabel',
            value: function setAriaLabel(label) {
              this.adapter_.setAttr('aria-label', label);
            }

            /** @param {string} content */

          }, {
            key: 'setContent',
            value: function setContent(content) {
              this.adapter_.setContent(content);
            }

            /**
             * Handles an interaction event
             * @param {!Event} evt
             */

          }, {
            key: 'handleInteraction',
            value: function handleInteraction(evt) {
              if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
                this.adapter_.notifyIconAction();
              }
            }
          }]);

          return MDCTextFieldIconFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCTextFieldIconFoundation;

        /***/
      },

      /***/83:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "c", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "e", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "d", function () {
          return numbers;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return VALIDATION_ATTR_WHITELIST;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
          return ALWAYS_FLOAT_TYPES;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var strings = {
          ARIA_CONTROLS: 'aria-controls',
          INPUT_SELECTOR: '.mdc-text-field__input',
          LABEL_SELECTOR: '.mdc-floating-label',
          ICON_SELECTOR: '.mdc-text-field__icon',
          OUTLINE_SELECTOR: '.mdc-notched-outline',
          LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
        };

        /** @enum {string} */
        var cssClasses = {
          ROOT: 'mdc-text-field',
          DISABLED: 'mdc-text-field--disabled',
          DENSE: 'mdc-text-field--dense',
          FOCUSED: 'mdc-text-field--focused',
          INVALID: 'mdc-text-field--invalid',
          TEXTAREA: 'mdc-text-field--textarea',
          OUTLINED: 'mdc-text-field--outlined',
          WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
          HELPER_LINE: 'mdc-text-field-helper-line'
        };

        /** @enum {number} */
        var numbers = {
          LABEL_SCALE: 0.75,
          DENSE_LABEL_SCALE: 0.923
        };

        // whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
        // under section: `Validation-related attributes`
        var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

        // Label should always float for these types as they show some UI even if value is empty.
        var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];

        /***/
      },

      /***/84:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* unused harmony export MDCTextFieldAdapter */
        /* unused harmony export NativeInputType */
        /* unused harmony export FoundationMapType */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__helper_text_foundation__ = __webpack_require__(60);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__character_counter_foundation__ = __webpack_require__(61);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__icon_foundation__ = __webpack_require__(62);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint-disable no-unused-vars */

        /* eslint-disable no-unused-vars */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * @typedef {{
         *   value: string,
         *   disabled: boolean,
         *   badInput: boolean,
         *   validity: {
         *     badInput: boolean,
         *     valid: boolean,
         *   },
         * }}
         */
        var NativeInputType = void 0;

        /**
         * @typedef {{
         *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
         *   characterCounter: (!MDCTextFieldCharacterCounterFoundation|undefined),
         *   leadingIcon: (!MDCTextFieldIconFoundation|undefined),
         *   trailingIcon: (!MDCTextFieldIconFoundation|undefined),
         * }}
         */
        var FoundationMapType = void 0;

        /**
         * Adapter for MDC Text Field.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the Text Field into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */

        var MDCTextFieldAdapter = function () {
          function MDCTextFieldAdapter() {
            _classCallCheck(this, MDCTextFieldAdapter);
          }

          _createClass(MDCTextFieldAdapter, [{
            key: 'addClass',

            /**
             * Adds a class to the root Element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the root Element.
             * @param {string} className
             */

          }, {
            key: 'removeClass',
            value: function removeClass(className) {}

            /**
             * Returns true if the root element contains the given class name.
             * @param {string} className
             * @return {boolean}
             */

          }, {
            key: 'hasClass',
            value: function hasClass(className) {}

            /**
             * Registers an event handler on the root element for a given event.
             * @param {string} type
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'registerTextFieldInteractionHandler',
            value: function registerTextFieldInteractionHandler(type, handler) {}

            /**
             * Deregisters an event handler on the root element for a given event.
             * @param {string} type
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'deregisterTextFieldInteractionHandler',
            value: function deregisterTextFieldInteractionHandler(type, handler) {}

            /**
             * Registers an event listener on the native input element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'registerInputInteractionHandler',
            value: function registerInputInteractionHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the native input element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'deregisterInputInteractionHandler',
            value: function deregisterInputInteractionHandler(evtType, handler) {}

            /**
             * Registers a validation attribute change listener on the input element.
             * Handler accepts list of attribute names.
             * @param {function(!Array<string>): undefined} handler
             * @return {!MutationObserver}
             */

          }, {
            key: 'registerValidationAttributeChangeHandler',
            value: function registerValidationAttributeChangeHandler(handler) {}

            /**
             * Disconnects a validation attribute observer on the input element.
             * @param {!MutationObserver} observer
             */

          }, {
            key: 'deregisterValidationAttributeChangeHandler',
            value: function deregisterValidationAttributeChangeHandler(observer) {}

            /**
             * Returns an object representing the native text input element, with a
             * similar API shape. The object returned should include the value, disabled
             * and badInput properties, as well as the checkValidity() function. We never
             * alter the value within our code, however we do update the disabled
             * property, so if you choose to duck-type the return value for this method
             * in your implementation it's important to keep this in mind. Also note that
             * this method can return null, which the foundation will handle gracefully.
             * @return {?Element|?NativeInputType}
             */

          }, {
            key: 'getNativeInput',
            value: function getNativeInput() {}

            /**
             * Returns true if the textfield is focused.
             * We achieve this via `document.activeElement === this.root_`.
             * @return {boolean}
             */

          }, {
            key: 'isFocused',
            value: function isFocused() {}

            /**
             * Activates the line ripple.
             */

          }, {
            key: 'activateLineRipple',
            value: function activateLineRipple() {}

            /**
             * Deactivates the line ripple.
             */

          }, {
            key: 'deactivateLineRipple',
            value: function deactivateLineRipple() {}

            /**
             * Sets the transform origin of the line ripple.
             * @param {number} normalizedX
             */

          }, {
            key: 'setLineRippleTransformOrigin',
            value: function setLineRippleTransformOrigin(normalizedX) {}

            /**
             * Only implement if label exists.
             * Shakes label if shouldShake is true.
             * @param {boolean} shouldShake
             */

          }, {
            key: 'shakeLabel',
            value: function shakeLabel(shouldShake) {}

            /**
             * Only implement if label exists.
             * Floats the label above the input element if shouldFloat is true.
             * @param {boolean} shouldFloat
             */

          }, {
            key: 'floatLabel',
            value: function floatLabel(shouldFloat) {}

            /**
             * Returns true if label element exists, false if it doesn't.
             * @return {boolean}
             */

          }, {
            key: 'hasLabel',
            value: function hasLabel() {}

            /**
             * Only implement if label exists.
             * Returns width of label in pixels.
             * @return {number}
             */

          }, {
            key: 'getLabelWidth',
            value: function getLabelWidth() {}

            /**
             * Returns true if outline element exists, false if it doesn't.
             * @return {boolean}
             */

          }, {
            key: 'hasOutline',
            value: function hasOutline() {}

            /**
             * Only implement if outline element exists.
             * @param {number} labelWidth
             */

          }, {
            key: 'notchOutline',
            value: function notchOutline(labelWidth) {}

            /**
             * Only implement if outline element exists.
             * Closes notch in outline element.
             */

          }, {
            key: 'closeOutline',
            value: function closeOutline() {}
          }]);

          return MDCTextFieldAdapter;
        }();

        /***/
      },

      /***/85:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Text Field Helper Text.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the TextField helper text into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCTextFieldHelperTextAdapter = function () {
          function MDCTextFieldHelperTextAdapter() {
            _classCallCheck(this, MDCTextFieldHelperTextAdapter);
          }

          _createClass(MDCTextFieldHelperTextAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the helper text element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the helper text element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * Returns whether or not the helper text element contains the given class.
             * @param {string} className
             * @return {boolean}
             */

          }, {
            key: "hasClass",
            value: function hasClass(className) {}

            /**
             * Sets an attribute with a given value on the helper text element.
             * @param {string} attr
             * @param {string} value
             */

          }, {
            key: "setAttr",
            value: function setAttr(attr, value) {}

            /**
             * Removes an attribute from the helper text element.
             * @param {string} attr
             */

          }, {
            key: "removeAttr",
            value: function removeAttr(attr) {}

            /**
             * Sets the text content for the helper text element.
             * @param {string} content
             */

          }, {
            key: "setContent",
            value: function setContent(content) {}
          }]);

          return MDCTextFieldHelperTextAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCTextFieldHelperTextAdapter;

        /***/
      },

      /***/86:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Text Field Character Counter.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the TextField character counter into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCTextFieldCharacterCounterAdapter = function () {
          function MDCTextFieldCharacterCounterAdapter() {
            _classCallCheck(this, MDCTextFieldCharacterCounterAdapter);
          }

          _createClass(MDCTextFieldCharacterCounterAdapter, [{
            key: "setContent",

            /**
             * Sets the text content of character counter element.
             * @param {string} content
             */
            value: function setContent(content) {}
          }]);

          return MDCTextFieldCharacterCounterAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCTextFieldCharacterCounterAdapter;

        /***/
      },

      /***/87:
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Text Field Icon.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the text field icon into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCTextFieldIconAdapter = function () {
          function MDCTextFieldIconAdapter() {
            _classCallCheck(this, MDCTextFieldIconAdapter);
          }

          _createClass(MDCTextFieldIconAdapter, [{
            key: "getAttr",

            /**
             * Gets the value of an attribute on the icon element.
             * @param {string} attr
             * @return {string}
             */
            value: function getAttr(attr) {}

            /**
             * Sets an attribute on the icon element.
             * @param {string} attr
             * @param {string} value
             */

          }, {
            key: "setAttr",
            value: function setAttr(attr, value) {}

            /**
             * Removes an attribute from the icon element.
             * @param {string} attr
             */

          }, {
            key: "removeAttr",
            value: function removeAttr(attr) {}

            /**
             * Sets the text content of the icon element.
             * @param {string} content
             */

          }, {
            key: "setContent",
            value: function setContent(content) {}

            /**
             * Registers an event listener on the icon element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the icon element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}

            /**
             * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
             */

          }, {
            key: "notifyIconAction",
            value: function notifyIconAction() {}
          }]);

          return MDCTextFieldIconAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCTextFieldIconAdapter;

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=mdc.textfield.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 Material Components for the Web
 Copyright (c) 2019 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["ripple"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["ripple"] = factory();
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 4);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @template A
       */
      var MDCFoundation = function () {
        _createClass(MDCFoundation, null, [{
          key: "cssClasses",

          /** @return enum{cssClasses} */
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
          }

          /** @return enum{strings} */

        }, {
          key: "strings",
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
          }

          /** @return enum{numbers} */

        }, {
          key: "numbers",
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
          }

          /** @return {!Object} */

        }, {
          key: "defaultAdapter",
          get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
          }

          /**
           * @param {A=} adapter
           */

        }]);

        function MDCFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, MDCFoundation);

          /** @protected {!A} */
          this.adapter_ = adapter;
        }

        _createClass(MDCFoundation, [{
          key: "init",
          value: function init() {
            // Subclasses should override this method to perform initialization routines (registering events, etc.)
          }
        }, {
          key: "destroy",
          value: function destroy() {
            // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
          }
        }]);

        return MDCFoundation;
      }();

      /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

      /***/
    },
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @template F
       */

      var MDCComponent = function () {
        _createClass(MDCComponent, null, [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCComponent}
           */
          value: function attachTo(root) {
            // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
            // returns an instantiated component with its root set to that element. Also note that in the cases of
            // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
            // from getDefaultFoundation().
            return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
          }

          /**
           * @param {!Element} root
           * @param {F=} foundation
           * @param {...?} args
           */

        }]);

        function MDCComponent(root) {
          var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          _classCallCheck(this, MDCComponent);

          /** @protected {!Element} */
          this.root_ = root;

          for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          this.initialize.apply(this, args);
          // Note that we initialize foundation here and not within the constructor's default param so that
          // this.root_ is defined and can be used within the foundation class.
          /** @protected {!F} */
          this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
          this.foundation_.init();
          this.initialSyncWithDOM();
        }

        _createClass(MDCComponent, [{
          key: 'initialize',
          value: function initialize() /* ...args */{}
          // Subclasses can override this to do any additional setup work that would be considered part of a
          // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
          // initialized. Any additional arguments besides root and foundation will be passed in here.


          /**
           * @return {!F} foundation
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            // Subclasses must override this method to return a properly configured foundation class for the
            // component.
            throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            // Subclasses should override this method if they need to perform work to synchronize with a host DOM
            // object. An example of this would be a form control wrapper that needs to synchronize its internal state
            // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
            // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            // Subclasses may implement this method to release any resources / deregister any listeners they have
            // attached. An example of this might be deregistering a resize event from the window object.
            this.foundation_.destroy();
          }

          /**
           * Wrapper method to add an event listener to the component's root element. This is most useful when
           * listening for custom events.
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: 'listen',
          value: function listen(evtType, handler) {
            this.root_.addEventListener(evtType, handler);
          }

          /**
           * Wrapper method to remove an event listener to the component's root element. This is most useful when
           * unlistening for custom events.
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: 'unlisten',
          value: function unlisten(evtType, handler) {
            this.root_.removeEventListener(evtType, handler);
          }

          /**
           * Fires a cross-browser-compatible custom event from the component root of the given type,
           * with the given data.
           * @param {string} evtType
           * @param {!Object} evtData
           * @param {boolean=} shouldBubble
           */

        }, {
          key: 'emit',
          value: function emit(evtType, evtData) {
            var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var evt = void 0;
            if (typeof CustomEvent === 'function') {
              evt = new CustomEvent(evtType, {
                detail: evtData,
                bubbles: shouldBubble
              });
            } else {
              evt = document.createEvent('CustomEvent');
              evt.initCustomEvent(evtType, shouldBubble, false, evtData);
            }

            this.root_.dispatchEvent(evt);
          }
        }]);

        return MDCComponent;
      }();

      /* harmony default export */__webpack_exports__["a"] = MDCComponent;

      /***/
    },
    /* 2 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () {
        return supportsCssVariables;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "applyPassive", function () {
        return applyPassive;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getMatchesProperty", function () {
        return getMatchesProperty;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () {
        return getNormalizedEventCoords;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
       * @private {boolean|undefined}
       */
      var supportsCssVariables_ = void 0;

      /**
       * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
       * @private {boolean|undefined}
       */
      var supportsPassive_ = void 0;

      /**
       * @param {!Window} windowObj
       * @return {boolean}
       */
      function detectEdgePseudoVarBug(windowObj) {
        // Detect versions of Edge with buggy var() support
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
        var document = windowObj.document;
        var node = document.createElement('div');
        node.className = 'mdc-ripple-surface--test-edge-var-bug';
        document.body.appendChild(node);

        // The bug exists if ::before style ends up propagating to the parent element.
        // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
        // but Firefox is known to support CSS custom properties correctly.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        var computedStyle = windowObj.getComputedStyle(node);
        var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
        node.remove();
        return hasPseudoVarBug;
      }

      /**
       * @param {!Window} windowObj
       * @param {boolean=} forceRefresh
       * @return {boolean|undefined}
       */

      function supportsCssVariables(windowObj) {
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var supportsCssVariables = supportsCssVariables_;
        if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
          return supportsCssVariables;
        }

        var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
        if (!supportsFunctionPresent) {
          return;
        }

        var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
        // See: https://bugs.webkit.org/show_bug.cgi?id=154669
        // See: README section on Safari
        var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

        if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
          supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
        } else {
          supportsCssVariables = false;
        }

        if (!forceRefresh) {
          supportsCssVariables_ = supportsCssVariables;
        }
        return supportsCssVariables;
      }

      //
      /**
       * Determine whether the current browser supports passive event listeners, and if so, use them.
       * @param {!Window=} globalObj
       * @param {boolean=} forceRefresh
       * @return {boolean|!EventListenerOptions}
       */
      function applyPassive() {
        var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (supportsPassive_ === undefined || forceRefresh) {
          var isSupported = false;
          try {
            globalObj.document.addEventListener('test', null, { get passive() {
                isSupported = true;
                return isSupported;
              } });
          } catch (e) {}

          supportsPassive_ = isSupported;
        }

        return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
      }

      /**
       * @param {!Object} HTMLElementPrototype
       * @return {string}
       */
      function getMatchesProperty(HTMLElementPrototype) {
        /**
         * Order is important because we return the first existing method we find.
         * Do not change the order of the items in the below array.
         */
        var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
        var method = 'matches';
        for (var i = 0; i < matchesMethods.length; i++) {
          var matchesMethod = matchesMethods[i];
          if (matchesMethod in HTMLElementPrototype) {
            method = matchesMethod;
            break;
          }
        }

        return method;
      }

      /**
       * @param {!Event} ev
       * @param {{x: number, y: number}} pageOffset
       * @param {!ClientRect} clientRect
       * @return {{x: number, y: number}}
       */
      function getNormalizedEventCoords(ev, pageOffset, clientRect) {
        var x = pageOffset.x,
            y = pageOffset.y;

        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;

        var normalizedX = void 0;
        var normalizedY = void 0;
        // Determine touch point relative to the ripple container.
        if (ev.type === 'touchstart') {
          ev = /** @type {!TouchEvent} */ev;
          normalizedX = ev.changedTouches[0].pageX - documentX;
          normalizedY = ev.changedTouches[0].pageY - documentY;
        } else {
          ev = /** @type {!MouseEvent} */ev;
          normalizedX = ev.pageX - documentX;
          normalizedY = ev.pageY - documentY;
        }

        return { x: normalizedX, y: normalizedY };
      }

      /***/
    },
    /* 3 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Ripple. Provides an interface for managing
       * - classes
       * - dom
       * - CSS variables
       * - position
       * - dimensions
       * - scroll position
       * - event handlers
       * - unbounded, active and disabled states
       *
       * Additionally, provides type information for the adapter to the Closure
       * compiler.
       *
       * Implement this adapter for your framework of choice to delegate updates to
       * the component in your framework of choice. See architecture documentation
       * for more details.
       * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
       *
       * @record
       */
      var MDCRippleAdapter = function () {
        function MDCRippleAdapter() {
          _classCallCheck(this, MDCRippleAdapter);
        }

        _createClass(MDCRippleAdapter, [{
          key: "browserSupportsCssVars",

          /** @return {boolean} */
          value: function browserSupportsCssVars() {}

          /** @return {boolean} */

        }, {
          key: "isUnbounded",
          value: function isUnbounded() {}

          /** @return {boolean} */

        }, {
          key: "isSurfaceActive",
          value: function isSurfaceActive() {}

          /** @return {boolean} */

        }, {
          key: "isSurfaceDisabled",
          value: function isSurfaceDisabled() {}

          /** @param {string} className */

        }, {
          key: "addClass",
          value: function addClass(className) {}

          /** @param {string} className */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /** @param {!EventTarget} target */

        }, {
          key: "containsEventTarget",
          value: function containsEventTarget(target) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "registerDocumentInteractionHandler",
          value: function registerDocumentInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "deregisterDocumentInteractionHandler",
          value: function deregisterDocumentInteractionHandler(evtType, handler) {}

          /**
           * @param {!Function} handler
           */

        }, {
          key: "registerResizeHandler",
          value: function registerResizeHandler(handler) {}

          /**
           * @param {!Function} handler
           */

        }, {
          key: "deregisterResizeHandler",
          value: function deregisterResizeHandler(handler) {}

          /**
           * @param {string} varName
           * @param {?number|string} value
           */

        }, {
          key: "updateCssVariable",
          value: function updateCssVariable(varName, value) {}

          /** @return {!ClientRect} */

        }, {
          key: "computeBoundingRect",
          value: function computeBoundingRect() {}

          /** @return {{x: number, y: number}} */

        }, {
          key: "getWindowPageOffset",
          value: function getWindowPageOffset() {}
        }]);

        return MDCRippleAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCRippleAdapter;

      /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCRipple", function () {
        return MDCRipple;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function () {
        return RippleCapableSurface;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
        return __WEBPACK_IMPORTED_MODULE_3__util__;
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends MDCComponent<!MDCRippleFoundation>
       */

      var MDCRipple = function (_MDCComponent) {
        _inherits(MDCRipple, _MDCComponent);

        /** @param {...?} args */
        function MDCRipple() {
          var _ref;

          _classCallCheck(this, MDCRipple);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @type {boolean} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

          _this.disabled = false;

          /** @private {boolean} */
          _this.unbounded_;
          return _this;
        }

        /**
         * @param {!Element} root
         * @param {{isUnbounded: (boolean|undefined)}=} options
         * @return {!MDCRipple}
         */

        _createClass(MDCRipple, [{
          key: 'setUnbounded_',

          /**
           * Closure Compiler throws an access control error when directly accessing a
           * protected or private property inside a getter/setter, like unbounded above.
           * By accessing the protected property inside a method, we solve that problem.
           * That's why this function exists.
           * @private
           */
          value: function setUnbounded_() {
            this.foundation_.setUnbounded(this.unbounded_);
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.foundation_.activate();
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.foundation_.deactivate();
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.foundation_.layout();
          }

          /**
           * @return {!MDCRippleFoundation}
           * @override
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
          }

          /** @override */

        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
          }
        }, {
          key: 'unbounded',

          /** @return {boolean} */
          get: function get() {
            return this.unbounded_;
          }

          /** @param {boolean} unbounded */

          , set: function set(unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$isUnbounded = _ref2.isUnbounded,
                isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

            var ripple = new MDCRipple(root);
            // Only override unbounded behavior if option is explicitly specified
            if (isUnbounded !== undefined) {
              ripple.unbounded = /** @type {boolean} */isUnbounded;
            }
            return ripple;
          }

          /**
           * @param {!RippleCapableSurface} instance
           * @return {!MDCRippleAdapter}
           */

        }, {
          key: 'createAdapter',
          value: function createAdapter(instance) {
            var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

            return {
              browserSupportsCssVars: function browserSupportsCssVars() {
                return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
              },
              isUnbounded: function isUnbounded() {
                return instance.unbounded;
              },
              isSurfaceActive: function isSurfaceActive() {
                return instance.root_[MATCHES](':active');
              },
              isSurfaceDisabled: function isSurfaceDisabled() {
                return instance.disabled;
              },
              addClass: function addClass(className) {
                return instance.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return instance.root_.classList.remove(className);
              },
              containsEventTarget: function containsEventTarget(target) {
                return instance.root_.contains(target);
              },
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              updateCssVariable: function updateCssVariable(varName, value) {
                return instance.root_.style.setProperty(varName, value);
              },
              computeBoundingRect: function computeBoundingRect() {
                return instance.root_.getBoundingClientRect();
              },
              getWindowPageOffset: function getWindowPageOffset() {
                return { x: window.pageXOffset, y: window.pageYOffset };
              }
            };
          }
        }]);

        return MDCRipple;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /**
       * See Material Design spec for more details on when to use ripples.
       * https://material.io/guidelines/motion/choreography.html#choreography-creation
       * @record
       */

      var RippleCapableSurface = function RippleCapableSurface() {
        _classCallCheck(this, RippleCapableSurface);
      };

      /** @protected {!Element} */

      RippleCapableSurface.prototype.root_;

      /**
       * Whether or not the ripple bleeds out of the bounds of the element.
       * @type {boolean|undefined}
       */
      RippleCapableSurface.prototype.unbounded;

      /**
       * Whether or not the ripple is attached to a disabled component.
       * @type {boolean|undefined}
       */
      RippleCapableSurface.prototype.disabled;

      /***/
    },
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @typedef {{
       *   isActivated: (boolean|undefined),
       *   hasDeactivationUXRun: (boolean|undefined),
       *   wasActivatedByPointer: (boolean|undefined),
       *   wasElementMadeActive: (boolean|undefined),
       *   activationEvent: (!Event|undefined),
       *   isProgrammatic: (boolean|undefined)
       * }}
       */
      var ActivationStateType = void 0;

      /**
       * @typedef {{
       *   activate: (string|undefined),
       *   deactivate: (string|undefined),
       *   focus: (string|undefined),
       *   blur: (string|undefined)
       * }}
       */
      var ListenerInfoType = void 0;

      /**
       * @typedef {{
       *   activate: function(!Event),
       *   deactivate: function(!Event=),
       *   focus: function(),
       *   blur: function()
       * }}
       */
      var ListenersType = void 0;

      /**
       * @typedef {{
       *   x: number,
       *   y: number
       * }}
       */
      var PointType = void 0;

      // Activation events registered on the root element of each instance for activation
      var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

      // Deactivation events registered on documentElement when a pointer-related down event occurs
      var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

      // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
      /** @type {!Array<!EventTarget>} */
      var activatedTargets = [];

      /**
       * @extends {MDCFoundation<!MDCRippleAdapter>}
       */

      var MDCRippleFoundation = function (_MDCFoundation) {
        _inherits(MDCRippleFoundation, _MDCFoundation);

        _createClass(MDCRippleFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
              isUnbounded: function isUnbounded() /* boolean */{},
              isSurfaceActive: function isSurfaceActive() /* boolean */{},
              isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
              addClass: function addClass() /* className: string */{},
              removeClass: function removeClass() /* className: string */{},
              containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
              registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
              deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
              registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
              deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
              updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
              computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
              getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
            };
          }
        }]);

        function MDCRippleFoundation(adapter) {
          _classCallCheck(this, MDCRippleFoundation);

          /** @private {number} */
          var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

          _this.layoutFrame_ = 0;

          /** @private {!ClientRect} */
          _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

          /** @private {!ActivationStateType} */
          _this.activationState_ = _this.defaultActivationState_();

          /** @private {number} */
          _this.initialSize_ = 0;

          /** @private {number} */
          _this.maxRadius_ = 0;

          /** @private {function(!Event)} */
          _this.activateHandler_ = function (e) {
            return _this.activate_(e);
          };

          /** @private {function(!Event=)} */
          _this.deactivateHandler_ = function () {
            return _this.deactivate_();
          };

          /** @private {function(!Event=)} */
          _this.focusHandler_ = function () {
            return _this.handleFocus();
          };

          /** @private {function(!Event=)} */
          _this.blurHandler_ = function () {
            return _this.handleBlur();
          };

          /** @private {!Function} */
          _this.resizeHandler_ = function () {
            return _this.layout();
          };

          /** @private {{left: number, top:number}} */
          _this.unboundedCoords_ = {
            left: 0,
            top: 0
          };

          /** @private {number} */
          _this.fgScale_ = 0;

          /** @private {number} */
          _this.activationTimer_ = 0;

          /** @private {number} */
          _this.fgDeactivationRemovalTimer_ = 0;

          /** @private {boolean} */
          _this.activationAnimationHasEnded_ = false;

          /** @private {!Function} */
          _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
          };

          /** @private {!Event|undefined} */
          _this.previousActivationEvent_;
          return _this;
        }

        /**
         * We compute this property so that we are not querying information about the client
         * until the point in time where the foundation requests it. This prevents scenarios where
         * client-side feature-detection may happen too early, such as when components are rendered on the server
         * and then initialized at mount time on the client.
         * @return {boolean}
         * @private
         */

        _createClass(MDCRippleFoundation, [{
          key: 'supportsPressRipple_',
          value: function supportsPressRipple_() {
            return this.adapter_.browserSupportsCssVars();
          }

          /**
           * @return {!ActivationStateType}
           */

        }, {
          key: 'defaultActivationState_',
          value: function defaultActivationState_() {
            return {
              isActivated: false,
              hasDeactivationUXRun: false,
              wasActivatedByPointer: false,
              wasElementMadeActive: false,
              activationEvent: undefined,
              isProgrammatic: false
            };
          }

          /** @override */

        }, {
          key: 'init',
          value: function init() {
            var _this2 = this;

            var supportsPressRipple = this.supportsPressRipple_();

            this.registerRootHandlers_(supportsPressRipple);

            if (supportsPressRipple) {
              var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

              requestAnimationFrame(function () {
                _this2.adapter_.addClass(ROOT);
                if (_this2.adapter_.isUnbounded()) {
                  _this2.adapter_.addClass(UNBOUNDED);
                  // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                  _this2.layoutInternal_();
                }
              });
            }
          }

          /** @override */

        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;

            if (this.supportsPressRipple_()) {
              if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
              }

              if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
              }

              var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$2.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

              requestAnimationFrame(function () {
                _this3.adapter_.removeClass(ROOT);
                _this3.adapter_.removeClass(UNBOUNDED);
                _this3.removeCssVars_();
              });
            }

            this.deregisterRootHandlers_();
            this.deregisterDeactivationHandlers_();
          }

          /**
           * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
           * @private
           */

        }, {
          key: 'registerRootHandlers_',
          value: function registerRootHandlers_(supportsPressRipple) {
            var _this4 = this;

            if (supportsPressRipple) {
              ACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
              });
              if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
              }
            }

            this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
            this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
          }

          /**
           * @param {!Event} e
           * @private
           */

        }, {
          key: 'registerDeactivationHandlers_',
          value: function registerDeactivationHandlers_(e) {
            var _this5 = this;

            if (e.type === 'keydown') {
              this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
            } else {
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
              });
            }
          }

          /** @private */

        }, {
          key: 'deregisterRootHandlers_',
          value: function deregisterRootHandlers_() {
            var _this6 = this;

            ACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
            });
            this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
            this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

            if (this.adapter_.isUnbounded()) {
              this.adapter_.deregisterResizeHandler(this.resizeHandler_);
            }
          }

          /** @private */

        }, {
          key: 'deregisterDeactivationHandlers_',
          value: function deregisterDeactivationHandlers_() {
            var _this7 = this;

            this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
            });
          }

          /** @private */

        }, {
          key: 'removeCssVars_',
          value: function removeCssVars_() {
            var _this8 = this;

            var strings = MDCRippleFoundation.strings;

            Object.keys(strings).forEach(function (k) {
              if (k.indexOf('VAR_') === 0) {
                _this8.adapter_.updateCssVariable(strings[k], null);
              }
            });
          }

          /**
           * @param {!Event=} e
           * @private
           */

        }, {
          key: 'activate_',
          value: function activate_(e) {
            var _this9 = this;

            if (this.adapter_.isSurfaceDisabled()) {
              return;
            }

            var activationState = this.activationState_;
            if (activationState.isActivated) {
              return;
            }

            // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
            var previousActivationEvent = this.previousActivationEvent_;
            var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
            if (isSameInteraction) {
              return;
            }

            activationState.isActivated = true;
            activationState.isProgrammatic = e === undefined;
            activationState.activationEvent = e;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

            var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
              return _this9.adapter_.containsEventTarget(target);
            });
            if (hasActivatedChild) {
              // Immediately reset activation state, while preserving logic that prevents touch follow-on events
              this.resetActivationState_();
              return;
            }

            if (e !== undefined) {
              activatedTargets.push( /** @type {!EventTarget} */e.target);
              this.registerDeactivationHandlers_(e);
            }

            activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
            if (activationState.wasElementMadeActive) {
              this.animateActivation_();
            }

            requestAnimationFrame(function () {
              // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
              activatedTargets = [];

              if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
                if (activationState.wasElementMadeActive) {
                  _this9.animateActivation_();
                }
              }

              if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this9.activationState_ = _this9.defaultActivationState_();
              }
            });
          }

          /**
           * @param {!Event=} e
           * @private
           */

        }, {
          key: 'checkElementMadeActive_',
          value: function checkElementMadeActive_(e) {
            return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
          }

          /**
           * @param {!Event=} event Optional event containing position information.
           */

        }, {
          key: 'activate',
          value: function activate(event) {
            this.activate_(event);
          }

          /** @private */

        }, {
          key: 'animateActivation_',
          value: function animateActivation_() {
            var _this10 = this;

            var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
            var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
            var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;

            this.layoutInternal_();

            var translateStart = '';
            var translateEnd = '';

            if (!this.adapter_.isUnbounded()) {
              var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                  startPoint = _getFgTranslationCoor.startPoint,
                  endPoint = _getFgTranslationCoor.endPoint;

              translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
              translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
            }

            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
            // Cancel any ongoing activation/deactivation animations
            clearTimeout(this.activationTimer_);
            clearTimeout(this.fgDeactivationRemovalTimer_);
            this.rmBoundedActivationClasses_();
            this.adapter_.removeClass(FG_DEACTIVATION);

            // Force layout in order to re-trigger the animation.
            this.adapter_.computeBoundingRect();
            this.adapter_.addClass(FG_ACTIVATION);
            this.activationTimer_ = setTimeout(function () {
              return _this10.activationTimerCallback_();
            }, DEACTIVATION_TIMEOUT_MS);
          }

          /**
           * @private
           * @return {{startPoint: PointType, endPoint: PointType}}
           */

        }, {
          key: 'getFgTranslationCoordinates_',
          value: function getFgTranslationCoordinates_() {
            var _activationState_ = this.activationState_,
                activationEvent = _activationState_.activationEvent,
                wasActivatedByPointer = _activationState_.wasActivatedByPointer;

            var startPoint = void 0;
            if (wasActivatedByPointer) {
              startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
              /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
            } else {
              startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2
              };
            }
            // Center the element around the start point.
            startPoint = {
              x: startPoint.x - this.initialSize_ / 2,
              y: startPoint.y - this.initialSize_ / 2
            };

            var endPoint = {
              x: this.frame_.width / 2 - this.initialSize_ / 2,
              y: this.frame_.height / 2 - this.initialSize_ / 2
            };

            return { startPoint: startPoint, endPoint: endPoint };
          }

          /** @private */

        }, {
          key: 'runDeactivationUXLogicIfReady_',
          value: function runDeactivationUXLogicIfReady_() {
            var _this11 = this;

            // This method is called both when a pointing device is released, and when the activation animation ends.
            // The deactivation animation should only run after both of those occur.
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _activationState_2 = this.activationState_,
                hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                isActivated = _activationState_2.isActivated;

            var activationHasEnded = hasDeactivationUXRun || !isActivated;

            if (activationHasEnded && this.activationAnimationHasEnded_) {
              this.rmBoundedActivationClasses_();
              this.adapter_.addClass(FG_DEACTIVATION);
              this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this11.adapter_.removeClass(FG_DEACTIVATION);
              }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
            }
          }

          /** @private */

        }, {
          key: 'rmBoundedActivationClasses_',
          value: function rmBoundedActivationClasses_() {
            var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

            this.adapter_.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded_ = false;
            this.adapter_.computeBoundingRect();
          }
        }, {
          key: 'resetActivationState_',
          value: function resetActivationState_() {
            var _this12 = this;

            this.previousActivationEvent_ = this.activationState_.activationEvent;
            this.activationState_ = this.defaultActivationState_();
            // Touch devices may fire additional events for the same interaction within a short time.
            // Store the previous event until it's safe to assume that subsequent events are for new interactions.
            setTimeout(function () {
              return _this12.previousActivationEvent_ = undefined;
            }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
          }

          /**
           * @private
           */

        }, {
          key: 'deactivate_',
          value: function deactivate_() {
            var _this13 = this;

            var activationState = this.activationState_;
            // This can happen in scenarios such as when you have a keyup event that blurs the element.
            if (!activationState.isActivated) {
              return;
            }

            var state = /** @type {!ActivationStateType} */_extends({}, activationState);

            if (activationState.isProgrammatic) {
              requestAnimationFrame(function () {
                return _this13.animateDeactivation_(state);
              });
              this.resetActivationState_();
            } else {
              this.deregisterDeactivationHandlers_();
              requestAnimationFrame(function () {
                _this13.activationState_.hasDeactivationUXRun = true;
                _this13.animateDeactivation_(state);
                _this13.resetActivationState_();
              });
            }
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.deactivate_();
          }

          /**
           * @param {!ActivationStateType} options
           * @private
           */

        }, {
          key: 'animateDeactivation_',
          value: function animateDeactivation_(_ref) {
            var wasActivatedByPointer = _ref.wasActivatedByPointer,
                wasElementMadeActive = _ref.wasElementMadeActive;

            if (wasActivatedByPointer || wasElementMadeActive) {
              this.runDeactivationUXLogicIfReady_();
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            var _this14 = this;

            if (this.layoutFrame_) {
              cancelAnimationFrame(this.layoutFrame_);
            }
            this.layoutFrame_ = requestAnimationFrame(function () {
              _this14.layoutInternal_();
              _this14.layoutFrame_ = 0;
            });
          }

          /** @private */

        }, {
          key: 'layoutInternal_',
          value: function layoutInternal_() {
            var _this15 = this;

            this.frame_ = this.adapter_.computeBoundingRect();
            var maxDim = Math.max(this.frame_.height, this.frame_.width);

            // Surface diameter is treated differently for unbounded vs. bounded ripples.
            // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
            // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
            // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
            // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
            // `overflow: hidden`.
            var getBoundedRadius = function getBoundedRadius() {
              var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
              return hypotenuse + MDCRippleFoundation.numbers.PADDING;
            };

            this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

            // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
            this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
            this.fgScale_ = this.maxRadius_ / this.initialSize_;

            this.updateLayoutCssVars_();
          }

          /** @private */

        }, {
          key: 'updateLayoutCssVars_',
          value: function updateLayoutCssVars_() {
            var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;

            this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
            this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

            if (this.adapter_.isUnbounded()) {
              this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
              };

              this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
              this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
            }
          }

          /** @param {boolean} unbounded */

        }, {
          key: 'setUnbounded',
          value: function setUnbounded(unbounded) {
            var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

            if (unbounded) {
              this.adapter_.addClass(UNBOUNDED);
            } else {
              this.adapter_.removeClass(UNBOUNDED);
            }
          }
        }, {
          key: 'handleFocus',
          value: function handleFocus() {
            var _this16 = this;

            requestAnimationFrame(function () {
              return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          }
        }, {
          key: 'handleBlur',
          value: function handleBlur() {
            var _this17 = this;

            requestAnimationFrame(function () {
              return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          }
        }]);

        return MDCRippleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCRippleFoundation;

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return strings;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return numbers;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var cssClasses = {
        // Ripple is a special case where the "root" component is really a "mixin" of sorts,
        // given that it's an 'upgrade' to an existing component. That being said it is the root
        // CSS class that all other CSS classes derive from.
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
      };

      var strings = {
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
      };

      var numbers = {
        PADDING: 10,
        INITIAL_ORIGIN_SCALE: 0.6,
        DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
        FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
        TAP_DELAY_MS: 300 };

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=mdc.ripple.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Model;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EventDispatcher__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__(15);




function Model() {
    let _projectsArray = getProjectsArrayFromStore(),
        _currentlyViewedProject = getCurrentlyViewedProject();

    function getCurrentlyViewedProject() {
        let currentProject;
        __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].getData("projects", project => {
            if (project.isCurrentlyViewed) {
                currentProject = project;
            }
        });

        return currentProject;
    }

    function getProjectsArrayFromStore() {
        let projectIds = __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].getAllId("projects");

        return projectIds.map(id => {

            return __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].getData("projects", function (project) {
                if (project.id == id) {
                    let obj = {};
                    // information need to be displayed in DOM
                    obj.title = project.title;
                    obj.id = project.id;
                    obj.isCurrentlyViewed = project.isCurrentlyViewed;
                    return obj;
                }
            });
        });
    }
    this.project = __WEBPACK_IMPORTED_MODULE_2__project__["a" /* default */];
    this.event = new __WEBPACK_IMPORTED_MODULE_1__EventDispatcher__["a" /* default */](this);

    this.get = function (eventFor) {
        switch (eventFor) {
            case 'projectsData':
                return _projectsArray;
            case 'todos':
                if (!_currentlyViewedProject) {
                    return [];
                }
                return getProjectTodos();
            case 'currentProject':
                return _currentlyViewedProject;
        }
    };

    this.setProjectAsCurrentlyViewed = function (id) {
        _projectsArray.forEach(project => {
            __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].editData("projects", project.id, 'isCurrentlyViewed', false);
        });

        __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].editData("projects", id, 'isCurrentlyViewed', true);

        _projectsArray = getProjectsArrayFromStore();
        _currentlyViewedProject = getCurrentlyViewedProject();
    };
    this.toggleTodoCompletion = function (id) {
        let initialStatus = __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].getData("todos", todo => {
            if (todo.id + "" === id) {
                // need to convert todo.id (number) to string because id is string
                return todo.isCompleted;
            }
        });
        __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].editData("todos", id, 'isCompleted', !initialStatus);
    };
    this.deleteProject = function (projectId) {

        let projectSelected = __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].getData("projects", project => {
            if (true) {
                return project;
            }
        });
        projectSelected.todos.forEach(todoId => {
            __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].deleteData('todos', todoId);
        });

        __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].deleteData('projects', projectId);
        _currentlyViewedProject = getCurrentlyViewedProject();
        _projectsArray = getProjectsArrayFromStore();
    };
    this.deleteTodo = function (todoId) {
        __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].deleteData("todos", todoId);

        let todosArray = _currentlyViewedProject.todos;
        let todoIndex = todosArray.indexOf(todoId);
        if (todoIndex !== -1) {
            todosArray.splice(todoIndex, 1);
            __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].editData("projects", _currentlyViewedProject.id, 'todos', todosArray);
        }
    };

    function getProjectTodos() {
        return _currentlyViewedProject.todos.map(todoId => {

            return __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */].getData("todos", todo => {
                if (todo.id === todoId) {
                    return todo;
                }
            });
        });
    }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (Event = function Event(sender) {
    this._sender = sender;
    this._listeners = [];
});

Event.prototype = {
    //add listemer closures to the list
    attach(listener) {
        this._listeners.push(listener);
    },
    notify(args) {
        this._listeners.forEach((v, i) => {
            this._listeners[i](this._sender, args);
        });
    }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(2);



const Project = function () {

    const create = (projectTitle, id) => {
        if (projectTitle) {
            let newProject = {
                id: id,
                title: projectTitle,
                isCurrentlyViewed: true,
                todos: []
            };

            __WEBPACK_IMPORTED_MODULE_1__storage__["a" /* default */].addData("projects", id, newProject);
        }
    };

    const addTodo = function (currentProject, title, dueDate, description, todoId) {
        currentProject.todos.push(todoId);
        let newTodo = __WEBPACK_IMPORTED_MODULE_0__todo__["a" /* default */].create(title, dueDate, description);
        newTodo.id = todoId;
        __WEBPACK_IMPORTED_MODULE_1__storage__["a" /* default */].addData("todos", todoId, newTodo);
    };

    return {
        create,
        addTodo
    };
}();
/* harmony default export */ __webpack_exports__["a"] = (Project);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let todo = function () {

    const create = function (title, dueDate, description) {

        return {
            title,
            dueDate,
            description,
            isCompleted: false
        };
    };
    return { create };
}();

/* harmony default export */ __webpack_exports__["a"] = (todo);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;
function Controller(model) {
    this.model = model;

    this.init = function () {
        model.event.notify();
    };
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
    };

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
    };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = View;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_dialog__ = __webpack_require__(19);


function View(controller, projectNavDOM, todolistViewerDOM) {

    // function to create project nav buttons element
    function createProjectPill(projectObj) {
        let listItem = document.createElement('a');
        listItem.classList = "list-item mdc-list-item";
        listItem.textContent = projectObj.title;
        listItem.dataset.id = projectObj.id;
        listItem.dataset.eventFor = "projects-data"; //for events use
        listItem.dataset.eventType = "view-project";
        if (projectObj.isCurrentlyViewed) {
            listItem.classList.add("mdc-list-item--activated");
        }

        listItem.addEventListener('click', controller);

        listItem.appendChild(createDeleteBtn(projectObj.id, "project"));
        return listItem;
    }

    function createTodoPill(todoObject) {
        let todoDOM = document.createElement('li');
        todoDOM.classList = "todolist__list-item item mdc-list-item mdc-ripple-upgraded";
        todoDOM.innerHTML = `
        <div class="mdc-checkbox">
            <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-1" />
            <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                </svg>
                <div class="mdc-checkbox__mixedmark"></div>
            </div>
        </div>
        <span class="mdc-list-item__text">
            <span class="mdc-list-item__primary-text todolist--title mdc-typography mdc-typography--headline6">${todoObject.title}</span>
            <span class="mdc-list-item__secondary-text todolist--due-date">due: ${todoObject.dueDate}</span>
        </span>
        `;
        let listCheckbox = todoDOM.querySelector('input[type="checkbox"]');

        listCheckbox.dataset.id = todoObject.id;
        listCheckbox.dataset.eventFor = 'todo-data'; // for events use

        if (todoObject.isCompleted) {
            listCheckbox.checked = true;
        }
        listCheckbox.addEventListener('click', controller);
        todoDOM.addEventListener('click', function (e) {
            if (!e.target.dataset.eventFor) {
                // not triggers when clicking on checkbox
                listCheckbox.checked = !listCheckbox.checked; // covering up MDC's default events
            }
        });

        const dialog = new __WEBPACK_IMPORTED_MODULE_0__material_dialog__["a" /* MDCDialog */](document.querySelector('.mdc-dialog'));

        todoDOM.addEventListener('dblclick', function (e) {
            if (todoObject.description && e.target.tagName !== 'INPUT' && e.target.tagName !== 'A') {
                document.getElementById('my-dialog-title').textContent = todoObject.title;
                document.getElementById('my-dialog-content').textContent = todoObject.description;

                document.querySelector('button[data-mdc-dialog-action="yes"] > span').dataset.id = todoObject.id; // for event handler

                function handler(e) {
                    if (!todoObject.isCompleted) {
                        controller.handleEvent(e);
                    }
                    // remove the eventlistener before closing dialog = to prevent the same element to be attached multiple times
                    document.querySelector('button[data-mdc-dialog-action="yes"]').removeEventListener('click', handler);
                }

                document.querySelector('button[data-mdc-dialog-action="yes"]').addEventListener('click', handler);
                dialog.open();
            }
        });

        todoDOM.appendChild(createDeleteBtn(todoObject.id, 'todo'));

        return todoDOM;
    }

    function createDeleteBtn(dataId, dataType) {
        let temporaryParent = document.createElement('div');

        temporaryParent.innerHTML = `
        <a href="#" data-event-for='deleting--${dataType}' data-id="${dataId}" class="delete-btn--todo mdc-list-item__meta material-icons noBgColor" aria-label="View more information" onclick="event.preventDefault();" tabindex="-1">
            delete
        </a>
        `;

        temporaryParent.firstElementChild.addEventListener('click', function (e) {
            let promptString = dataType === "todos" ? "delete todo item ?" : "this will delete the entire project's todos. are you sure you want to delete?";
            let isUserConfirmed = confirm(promptString);
            if (isUserConfirmed) {
                controller.handleEvent(e);
            }
        });

        return temporaryParent.firstElementChild;
    }
    // for rendering the project nav list on the sidebar
    function renderProjectNav(model) {
        // remove all children
        let projectsArray = model.get('projectsData');

        while (projectNavDOM.children.length > 0) {
            projectNavDOM.removeChild(projectNavDOM.children[0]);
        }
        if (projectsArray.length) {
            projectsArray.forEach(function (projectObj) {
                projectNavDOM.appendChild(createProjectPill(projectObj));
            });
        }
    }

    function renderTodolist(model) {
        let todolist = model.get('todos');
        let currentProject = model.get('currentProject');
        let todolistContainer = todolistViewerDOM.querySelector('.todolist-container');

        todolistViewerDOM.querySelector('.add-todos--container').style.display = "none";
        //remove all element first
        while (todolistContainer.children.length > 0) {
            todolistContainer.removeChild(todolistContainer.children[0]);
        }

        if (currentProject) {
            todolistViewerDOM.querySelector('.add-todos--container').style.display = "";
            todolistViewerDOM.querySelector('.project-viewer__header__title').textContent = currentProject.title;
        }
        if (todolist.length > 0) {

            todolist.forEach(todo => {
                todolistContainer.appendChild(createTodoPill(todo));
            });
        }
    }

    // src = https://plainjs.com/javascript/ajax/serialize-form-data-into-an-array-46/
    function serializeArray(form) {
        var field,
            l,
            s = {};
        if (typeof form == 'object' && form.nodeName == "FORM") {
            var len = form.elements.length;
            for (var i = 0; i < len; i++) {
                field = form.elements[i];
                if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                    if (field.type == 'select-multiple') {
                        l = form.elements[i].options.length;
                        for (j = 0; j < l; j++) {
                            if (field.options[j].selected) s[field.name] = field.value;
                        }
                    } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
                        s[field.name] = field.value;
                    }
                }
            }
        }
        return s;
    }

    // set event to add-button for adding project
    document.querySelector('.add-button--projects').addEventListener('click', function (e) {
        let titleTextField = document.querySelector('.project-title-input');

        controller.addProjectHandler(e, titleTextField.value);
        titleTextField.value = "";

        // to reset the css styling of textfield
        titleTextField.focus();
        window.setTimeout(function () {
            titleTextField.blur();
        }, 1);
    });

    let todoInterfaceContainer = todolistViewerDOM.querySelector('.add-todos--container');
    // add event to "+ add todo" button
    todolistViewerDOM.querySelector('.button--display-todo-form').addEventListener('click', function (e) {
        todoInterfaceContainer.classList.remove('todo-form--closed');
    });

    let todoFormEl = todolistViewerDOM.querySelector('.todo-form');

    // prevent page from refreshing when form is submited
    todoFormEl.addEventListener("submit", function (e) {
        e.preventDefault();
        let formData = serializeArray(todoFormEl);
        controller.handleForm(formData);

        todoFormEl.reset();
    });
    todoFormEl.addEventListener("reset", function () {
        todoInterfaceContainer.classList.add('todo-form--closed');
    });

    controller.model.event.attach(renderProjectNav);
    controller.model.event.attach(renderTodolist);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(3);
/* unused harmony reexport util */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(21);
var xtend = __webpack_require__(22);

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function (trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function (trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

function focusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true
  }, userOptions);

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function () {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function () {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error("You can't have a focus-trap without at least one focusable element");
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (!isNodeMatchingSelectorFocusable(node, untouchabilityChecker) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (node.disabled || isHiddenInput(node) || untouchabilityChecker.isUntouchable(node)) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;

  // Search for a cached result.
  var cached = find(this.cache, function (item) {
    return item === node;
  });
  if (cached) return cached[1];

  nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

  var result = false;

  if (nodeComputedStyle.display === 'none') {
    result = true;
  } else if (node.parentNode) {
    result = this.hasDisplayNone(node.parentNode);
  }

  this.cache.push([node, result]);

  return result;
};

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
};

module.exports = tabbable;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = extend;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dom_ponyfill__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ripple_component__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(3);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var strings = __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* MDCDialogFoundation */].strings;
var MDCDialog = /** @class */function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCDialog, _super);
    function MDCDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCDialog.prototype, "isOpen", {
        get: function () {
            return this.foundation_.isOpen();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "escapeKeyAction", {
        get: function () {
            return this.foundation_.getEscapeKeyAction();
        },
        set: function (action) {
            this.foundation_.setEscapeKeyAction(action);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "scrimClickAction", {
        get: function () {
            return this.foundation_.getScrimClickAction();
        },
        set: function (action) {
            this.foundation_.setScrimClickAction(action);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDialog.prototype, "autoStackButtons", {
        get: function () {
            return this.foundation_.getAutoStackButtons();
        },
        set: function (autoStack) {
            this.foundation_.setAutoStackButtons(autoStack);
        },
        enumerable: true,
        configurable: true
    });
    MDCDialog.attachTo = function (root) {
        return new MDCDialog(root);
    };
    MDCDialog.prototype.initialize = function (focusTrapFactory, initialFocusEl) {
        var e_1, _a;
        var container = this.root_.querySelector(strings.CONTAINER_SELECTOR);
        if (!container) {
            throw new Error("Dialog component requires a " + strings.CONTAINER_SELECTOR + " container element");
        }
        this.container_ = container;
        this.content_ = this.root_.querySelector(strings.CONTENT_SELECTOR);
        this.buttons_ = [].slice.call(this.root_.querySelectorAll(strings.BUTTON_SELECTOR));
        this.defaultButton_ = this.root_.querySelector(strings.DEFAULT_BUTTON_SELECTOR);
        this.focusTrapFactory_ = focusTrapFactory;
        this.initialFocusEl_ = initialFocusEl;
        this.buttonRipples_ = [];
        try {
            for (var _b = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __values */](this.buttons_), _c = _b.next(); !_c.done; _c = _b.next()) {
                var buttonEl = _c.value;
                this.buttonRipples_.push(new __WEBPACK_IMPORTED_MODULE_3__material_ripple_component__["a" /* MDCRipple */](buttonEl));
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
    };
    MDCDialog.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_5__util__["b" /* createFocusTrapInstance */](this.container_, this.focusTrapFactory_, this.initialFocusEl_);
        this.handleInteraction_ = this.foundation_.handleInteraction.bind(this.foundation_);
        this.handleDocumentKeydown_ = this.foundation_.handleDocumentKeydown.bind(this.foundation_);
        this.handleLayout_ = this.layout.bind(this);
        var LAYOUT_EVENTS = ['resize', 'orientationchange'];
        this.handleOpening_ = function () {
            LAYOUT_EVENTS.forEach(function (evtType) {
                return window.addEventListener(evtType, _this.handleLayout_);
            });
            document.addEventListener('keydown', _this.handleDocumentKeydown_);
        };
        this.handleClosing_ = function () {
            LAYOUT_EVENTS.forEach(function (evtType) {
                return window.removeEventListener(evtType, _this.handleLayout_);
            });
            document.removeEventListener('keydown', _this.handleDocumentKeydown_);
        };
        this.listen('click', this.handleInteraction_);
        this.listen('keydown', this.handleInteraction_);
        this.listen(strings.OPENING_EVENT, this.handleOpening_);
        this.listen(strings.CLOSING_EVENT, this.handleClosing_);
    };
    MDCDialog.prototype.destroy = function () {
        this.unlisten('click', this.handleInteraction_);
        this.unlisten('keydown', this.handleInteraction_);
        this.unlisten(strings.OPENING_EVENT, this.handleOpening_);
        this.unlisten(strings.CLOSING_EVENT, this.handleClosing_);
        this.handleClosing_();
        this.buttonRipples_.forEach(function (ripple) {
            return ripple.destroy();
        });
        _super.prototype.destroy.call(this);
    };
    MDCDialog.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCDialog.prototype.open = function () {
        this.foundation_.open();
    };
    MDCDialog.prototype.close = function (action) {
        if (action === void 0) {
            action = '';
        }
        this.foundation_.close(action);
    };
    MDCDialog.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addBodyClass: function (className) {
                return document.body.classList.add(className);
            },
            addClass: function (className) {
                return _this.root_.classList.add(className);
            },
            areButtonsStacked: function () {
                return __WEBPACK_IMPORTED_MODULE_5__util__["a" /* areTopsMisaligned */](_this.buttons_);
            },
            clickDefaultButton: function () {
                return _this.defaultButton_ && _this.defaultButton_.click();
            },
            eventTargetMatches: function (target, selector) {
                return target ? Object(__WEBPACK_IMPORTED_MODULE_2__material_dom_ponyfill__["matches"])(target, selector) : false;
            },
            getActionFromEvent: function (evt) {
                if (!evt.target) {
                    return '';
                }
                var element = Object(__WEBPACK_IMPORTED_MODULE_2__material_dom_ponyfill__["closest"])(evt.target, "[" + strings.ACTION_ATTRIBUTE + "]");
                return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
            },
            hasClass: function (className) {
                return _this.root_.classList.contains(className);
            },
            isContentScrollable: function () {
                return __WEBPACK_IMPORTED_MODULE_5__util__["c" /* isScrollable */](_this.content_);
            },
            notifyClosed: function (action) {
                return _this.emit(strings.CLOSED_EVENT, action ? { action: action } : {});
            },
            notifyClosing: function (action) {
                return _this.emit(strings.CLOSING_EVENT, action ? { action: action } : {});
            },
            notifyOpened: function () {
                return _this.emit(strings.OPENED_EVENT, {});
            },
            notifyOpening: function () {
                return _this.emit(strings.OPENING_EVENT, {});
            },
            releaseFocus: function () {
                return _this.focusTrap_.deactivate();
            },
            removeBodyClass: function (className) {
                return document.body.classList.remove(className);
            },
            removeClass: function (className) {
                return _this.root_.classList.remove(className);
            },
            reverseButtons: function () {
                _this.buttons_.reverse();
                _this.buttons_.forEach(function (button) {
                    button.parentElement.appendChild(button);
                });
            },
            trapFocus: function () {
                return _this.focusTrap_.activate();
            }
        };
        return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* MDCDialogFoundation */](adapter);
    };
    return MDCDialog;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]);

//# sourceMappingURL=component.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dom_index__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(6);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCRipple = /** @class */function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) {
            opts = { isUnbounded: undefined };
        }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) {
                return instance.root_.classList.add(className);
            },
            browserSupportsCssVars: function () {
                return __WEBPACK_IMPORTED_MODULE_4__util__["c" /* supportsCssVariables */](window);
            },
            computeBoundingRect: function () {
                return instance.root_.getBoundingClientRect();
            },
            containsEventTarget: function (target) {
                return instance.root_.contains(target);
            },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            deregisterResizeHandler: function (handler) {
                return window.removeEventListener('resize', handler);
            },
            getWindowPageOffset: function () {
                return { x: window.pageXOffset, y: window.pageYOffset };
            },
            isSurfaceActive: function () {
                return __WEBPACK_IMPORTED_MODULE_2__material_dom_index__["a" /* ponyfill */].matches(instance.root_, ':active');
            },
            isSurfaceDisabled: function () {
                return Boolean(instance.disabled);
            },
            isUnbounded: function () {
                return Boolean(instance.unbounded);
            },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            registerResizeHandler: function (handler) {
                return window.addEventListener('resize', handler);
            },
            removeClass: function (className) {
                return instance.root_.classList.remove(className);
            },
            updateCssVariable: function (varName, value) {
                return instance.root_.style.setProperty(varName, value);
            }
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* MDCRippleFoundation */](MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]);

//# sourceMappingURL=component.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill__ = __webpack_require__(5);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ponyfill__; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRippleFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(6);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) {
            return _this.activate_(e);
        };
        _this.deactivateHandler_ = function () {
            return _this.deactivate_();
        };
        _this.focusHandler_ = function () {
            return _this.handleFocus();
        };
        _this.blurHandler_ = function () {
            return _this.handleBlur();
        };
        _this.resizeHandler_ = function () {
            return _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () {
                    return undefined;
                },
                browserSupportsCssVars: function () {
                    return true;
                },
                computeBoundingRect: function () {
                    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                },
                containsEventTarget: function () {
                    return true;
                },
                deregisterDocumentInteractionHandler: function () {
                    return undefined;
                },
                deregisterInteractionHandler: function () {
                    return undefined;
                },
                deregisterResizeHandler: function () {
                    return undefined;
                },
                getWindowPageOffset: function () {
                    return { x: 0, y: 0 };
                },
                isSurfaceActive: function () {
                    return true;
                },
                isSurfaceDisabled: function () {
                    return true;
                },
                isUnbounded: function () {
                    return true;
                },
                registerDocumentInteractionHandler: function () {
                    return undefined;
                },
                registerInteractionHandler: function () {
                    return undefined;
                },
                registerResizeHandler: function () {
                    return undefined;
                },
                removeClass: function () {
                    return undefined;
                },
                updateCssVariable: function () {
                    return undefined;
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses,
                ROOT_1 = _a.ROOT,
                UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses,
                ROOT_2 = _a.ROOT,
                UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        } else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        } else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
            return _this.adapter_.containsEventTarget(target);
        });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings,
            VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
            VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses,
            FG_DEACTIVATION = _b.FG_DEACTIVATION,
            FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(),
                startPoint = _c.startPoint,
                endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () {
            return _this.activationTimerCallback_();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_,
            activationEvent = _a.activationEvent,
            wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* getNormalizedEventCoords */])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        } else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - this.initialSize_ / 2,
            y: startPoint.y - this.initialSize_ / 2
        };
        var endPoint = {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_,
            hasDeactivationUXRun = _a.hasDeactivationUXRun,
            isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () {
            return _this.previousActivationEvent_ = undefined;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                return _this.animateDeactivation_(state);
            });
            this.resetActivationState_();
        } else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer,
            wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings,
            VAR_FG_SIZE = _a.VAR_FG_SIZE,
            VAR_LEFT = _a.VAR_LEFT,
            VAR_TOP = _a.VAR_TOP,
            VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]);

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked'
};
var strings = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DEFAULT_BUTTON_SELECTOR: '.mdc-dialog__button--default',
    DESTROY_ACTION: 'destroy',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
    SURFACE_SELECTOR: '.mdc-dialog__surface'
};
var numbers = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
//# sourceMappingURL=constants.js.map

/***/ })
/******/ ]);