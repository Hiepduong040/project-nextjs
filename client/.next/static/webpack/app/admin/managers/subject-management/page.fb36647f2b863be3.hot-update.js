"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/managers/subject-management/page",{

/***/ "(app-pages-browser)/./app/admin/managers/subject-management/page.tsx":
/*!********************************************************!*\
  !*** ./app/admin/managers/subject-management/page.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubjectManager; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Layouts/DefaultLayout */ \"(app-pages-browser)/./components/Layouts/DefaultLayout.tsx\");\n/* harmony import */ var _components_SubjectManager_AddSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/SubjectManager/AddSubject */ \"(app-pages-browser)/./components/SubjectManager/AddSubject.tsx\");\n/* harmony import */ var _components_SubjectManager_TableSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/SubjectManager/TableSubject */ \"(app-pages-browser)/./components/SubjectManager/TableSubject.tsx\");\n/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/subject.service */ \"(app-pages-browser)/./services/subject.service.ts\");\n/* harmony import */ var _services_courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/courses.service */ \"(app-pages-browser)/./services/courses.service.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the service to fetch courses\nfunction SubjectManager() {\n    _s();\n    const [subjects, setSubjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State for storing courses\n    const [editingSubject, setEditingSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchSubjects();\n        fetchCourses(); // Fetch courses on component mount\n    }, []);\n    const fetchSubjects = async ()=>{\n        const data = await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.getSubject)();\n        setSubjects(data);\n    };\n    const fetchCourses = async ()=>{\n        const data = await (0,_services_courses_service__WEBPACK_IMPORTED_MODULE_6__.getCourses)(); // Fetch the courses from the API\n        setCourses(data);\n    };\n    const handleSubjectAdded = async (newSubject)=>{\n        await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.addSubject)(newSubject);\n        fetchSubjects(); // Refresh the list after adding\n    };\n    const handleSubjectUpdated = async (id, updatedData)=>{\n        await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.updateSubject)(id, updatedData);\n        fetchSubjects(); // Refresh the list after updating\n        setEditingSubject(null); // Reset to add mode\n    };\n    const handleEditSubject = (subject)=>{\n        setEditingSubject(subject); // Set subject for editing\n    };\n    const handleDeleteSubject = async (id)=>{\n        await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.deleteSubject)(id);\n        fetchSubjects(); // Refresh the list after deleting\n    };\n    // Find the course title based on coursesId\n    const getCourseTitle = (coursesId)=>{\n        const course = courses.find((course)=>course.id === coursesId);\n        return course ? course.title : \"Unknown Course\"; // Return course title or 'Unknown Course' if not found\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-2xl font-bold\",\n                children: \"Subject Manager\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubjectManager_TableSubject__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                subjects: subjects,\n                getCourseTitle: getCourseTitle,\n                onEditSubject: handleEditSubject,\n                onDeleteSubject: handleDeleteSubject\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubjectManager_AddSubject__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onSubjectAdded: handleSubjectAdded,\n                editingSubject: editingSubject,\n                onSubjectUpdated: handleSubjectUpdated\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(SubjectManager, \"hkwvqDdcyCfcNeSvwBdE6+LTOjM=\");\n_c = SubjectManager;\nvar _c;\n$RefreshReg$(_c, \"SubjectManager\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2Vycy9zdWJqZWN0LW1hbmFnZW1lbnQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDNkI7QUFDQztBQUNJO0FBT2hDO0FBQ29CLENBQUMsc0NBQXNDO0FBRTFGLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUMsRUFBRSxHQUFHLDRCQUE0QjtJQUN4RSxNQUFNLENBQUNjLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXJERCxnREFBU0EsQ0FBQztRQUNSaUI7UUFDQUMsZ0JBQWdCLG1DQUFtQztJQUNyRCxHQUFHLEVBQUU7SUFFTCxNQUFNRCxnQkFBZ0I7UUFDcEIsTUFBTUUsT0FBTyxNQUFNZCxxRUFBVUE7UUFDN0JPLFlBQVlPO0lBQ2Q7SUFFQSxNQUFNRCxlQUFlO1FBQ25CLE1BQU1DLE9BQU8sTUFBTVYscUVBQVVBLElBQUksaUNBQWlDO1FBQ2xFSyxXQUFXSztJQUNiO0lBRUEsTUFBTUMscUJBQXFCLE9BQU9DO1FBS2hDLE1BQU1mLHFFQUFVQSxDQUFDZTtRQUNqQkosaUJBQWlCLGdDQUFnQztJQUNuRDtJQUVBLE1BQU1LLHVCQUF1QixPQUMzQkMsSUFDQUM7UUFFQSxNQUFNakIsd0VBQWFBLENBQUNnQixJQUFJQztRQUN4QlAsaUJBQWlCLGtDQUFrQztRQUNuREQsa0JBQWtCLE9BQU8sb0JBQW9CO0lBQy9DO0lBRUEsTUFBTVMsb0JBQW9CLENBQUNDO1FBQ3pCVixrQkFBa0JVLFVBQVUsMEJBQTBCO0lBQ3hEO0lBRUEsTUFBTUMsc0JBQXNCLE9BQU9KO1FBQ2pDLE1BQU1mLHdFQUFhQSxDQUFDZTtRQUNwQk4saUJBQWlCLGtDQUFrQztJQUNyRDtJQUVBLDJDQUEyQztJQUMzQyxNQUFNVyxpQkFBaUIsQ0FBQ0M7UUFDdEIsTUFBTUMsU0FBU2pCLFFBQVFrQixJQUFJLENBQUMsQ0FBQ0QsU0FBV0EsT0FBT1AsRUFBRSxLQUFLTTtRQUN0RCxPQUFPQyxTQUFTQSxPQUFPRSxLQUFLLEdBQUcsa0JBQWtCLHVEQUF1RDtJQUMxRztJQUVBLHFCQUNFLDhEQUFDOUIseUVBQWFBOzswQkFDWiw4REFBQytCO2dCQUFHQyxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQzlCLCtFQUFZQTtnQkFDWE8sVUFBVUE7Z0JBQ1ZpQixnQkFBZ0JBO2dCQUNoQk8sZUFBZVY7Z0JBQ2ZXLGlCQUFpQlQ7Ozs7OzswQkFFbkIsOERBQUN4Qiw2RUFBVUE7Z0JBQ1RrQyxnQkFBZ0JqQjtnQkFDaEJMLGdCQUFnQkE7Z0JBQ2hCdUIsa0JBQWtCaEI7Ozs7Ozs7Ozs7OztBQUkxQjtHQXJFd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9tYW5hZ2Vycy9zdWJqZWN0LW1hbmFnZW1lbnQvcGFnZS50c3g/NzU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzL0RlZmF1bHRMYXlvdXRcIjtcclxuaW1wb3J0IEFkZFN1YmplY3QgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3ViamVjdE1hbmFnZXIvQWRkU3ViamVjdFwiO1xyXG5pbXBvcnQgVGFibGVTdWJqZWN0IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1N1YmplY3RNYW5hZ2VyL1RhYmxlU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRTdWJqZWN0LFxyXG4gIGFkZFN1YmplY3QsXHJcbiAgdXBkYXRlU3ViamVjdCxcclxuICBkZWxldGVTdWJqZWN0LFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9zdWJqZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0Q291cnNlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb3Vyc2VzLnNlcnZpY2VcIjsgLy8gSW1wb3J0IHRoZSBzZXJ2aWNlIHRvIGZldGNoIGNvdXJzZXNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YmplY3RNYW5hZ2VyKCkge1xyXG4gIGNvbnN0IFtzdWJqZWN0cywgc2V0U3ViamVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhdGUgZm9yIHN0b3JpbmcgY291cnNlc1xyXG4gIGNvbnN0IFtlZGl0aW5nU3ViamVjdCwgc2V0RWRpdGluZ1N1YmplY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFN1YmplY3RzKCk7XHJcbiAgICBmZXRjaENvdXJzZXMoKTsgLy8gRmV0Y2ggY291cnNlcyBvbiBjb21wb25lbnQgbW91bnRcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoU3ViamVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U3ViamVjdCgpO1xyXG4gICAgc2V0U3ViamVjdHMoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENvdXJzZXMoKTsgLy8gRmV0Y2ggdGhlIGNvdXJzZXMgZnJvbSB0aGUgQVBJXHJcbiAgICBzZXRDb3Vyc2VzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1YmplY3RBZGRlZCA9IGFzeW5jIChuZXdTdWJqZWN0OiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGNvdXJzZXNJZDogbnVtYmVyO1xyXG4gIH0pID0+IHtcclxuICAgIGF3YWl0IGFkZFN1YmplY3QobmV3U3ViamVjdCk7XHJcbiAgICBmZXRjaFN1YmplY3RzKCk7IC8vIFJlZnJlc2ggdGhlIGxpc3QgYWZ0ZXIgYWRkaW5nXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViamVjdFVwZGF0ZWQgPSBhc3luYyAoXHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgdXBkYXRlZERhdGE6IHsgdGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZzsgY291cnNlc0lkOiBudW1iZXIgfSxcclxuICApID0+IHtcclxuICAgIGF3YWl0IHVwZGF0ZVN1YmplY3QoaWQsIHVwZGF0ZWREYXRhKTtcclxuICAgIGZldGNoU3ViamVjdHMoKTsgLy8gUmVmcmVzaCB0aGUgbGlzdCBhZnRlciB1cGRhdGluZ1xyXG4gICAgc2V0RWRpdGluZ1N1YmplY3QobnVsbCk7IC8vIFJlc2V0IHRvIGFkZCBtb2RlXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdFN1YmplY3QgPSAoc3ViamVjdDogUmVhY3QuU2V0U3RhdGVBY3Rpb248bnVsbD4pID0+IHtcclxuICAgIHNldEVkaXRpbmdTdWJqZWN0KHN1YmplY3QpOyAvLyBTZXQgc3ViamVjdCBmb3IgZWRpdGluZ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVN1YmplY3QgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgYXdhaXQgZGVsZXRlU3ViamVjdChpZCk7XHJcbiAgICBmZXRjaFN1YmplY3RzKCk7IC8vIFJlZnJlc2ggdGhlIGxpc3QgYWZ0ZXIgZGVsZXRpbmdcclxuICB9O1xyXG5cclxuICAvLyBGaW5kIHRoZSBjb3Vyc2UgdGl0bGUgYmFzZWQgb24gY291cnNlc0lkXHJcbiAgY29uc3QgZ2V0Q291cnNlVGl0bGUgPSAoY291cnNlc0lkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGNvdXJzZSA9IGNvdXJzZXMuZmluZCgoY291cnNlKSA9PiBjb3Vyc2UuaWQgPT09IGNvdXJzZXNJZCk7XHJcbiAgICByZXR1cm4gY291cnNlID8gY291cnNlLnRpdGxlIDogXCJVbmtub3duIENvdXJzZVwiOyAvLyBSZXR1cm4gY291cnNlIHRpdGxlIG9yICdVbmtub3duIENvdXJzZScgaWYgbm90IGZvdW5kXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEZWZhdWx0TGF5b3V0PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTJ4bCBmb250LWJvbGRcIj5TdWJqZWN0IE1hbmFnZXI8L2gxPlxyXG4gICAgICA8VGFibGVTdWJqZWN0XHJcbiAgICAgICAgc3ViamVjdHM9e3N1YmplY3RzfVxyXG4gICAgICAgIGdldENvdXJzZVRpdGxlPXtnZXRDb3Vyc2VUaXRsZX0gLy8gUGFzcyB0aGUgZ2V0Q291cnNlVGl0bGUgZnVuY3Rpb24gdG8gdGhlIFRhYmxlU3ViamVjdCBjb21wb25lbnRcclxuICAgICAgICBvbkVkaXRTdWJqZWN0PXtoYW5kbGVFZGl0U3ViamVjdH1cclxuICAgICAgICBvbkRlbGV0ZVN1YmplY3Q9e2hhbmRsZURlbGV0ZVN1YmplY3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxBZGRTdWJqZWN0XHJcbiAgICAgICAgb25TdWJqZWN0QWRkZWQ9e2hhbmRsZVN1YmplY3RBZGRlZH1cclxuICAgICAgICBlZGl0aW5nU3ViamVjdD17ZWRpdGluZ1N1YmplY3R9XHJcbiAgICAgICAgb25TdWJqZWN0VXBkYXRlZD17aGFuZGxlU3ViamVjdFVwZGF0ZWR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0RlZmF1bHRMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZWZhdWx0TGF5b3V0IiwiQWRkU3ViamVjdCIsIlRhYmxlU3ViamVjdCIsImdldFN1YmplY3QiLCJhZGRTdWJqZWN0IiwidXBkYXRlU3ViamVjdCIsImRlbGV0ZVN1YmplY3QiLCJnZXRDb3Vyc2VzIiwiU3ViamVjdE1hbmFnZXIiLCJzdWJqZWN0cyIsInNldFN1YmplY3RzIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJlZGl0aW5nU3ViamVjdCIsInNldEVkaXRpbmdTdWJqZWN0IiwiZmV0Y2hTdWJqZWN0cyIsImZldGNoQ291cnNlcyIsImRhdGEiLCJoYW5kbGVTdWJqZWN0QWRkZWQiLCJuZXdTdWJqZWN0IiwiaGFuZGxlU3ViamVjdFVwZGF0ZWQiLCJpZCIsInVwZGF0ZWREYXRhIiwiaGFuZGxlRWRpdFN1YmplY3QiLCJzdWJqZWN0IiwiaGFuZGxlRGVsZXRlU3ViamVjdCIsImdldENvdXJzZVRpdGxlIiwiY291cnNlc0lkIiwiY291cnNlIiwiZmluZCIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJvbkVkaXRTdWJqZWN0Iiwib25EZWxldGVTdWJqZWN0Iiwib25TdWJqZWN0QWRkZWQiLCJvblN1YmplY3RVcGRhdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/managers/subject-management/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./services/courses.service.ts":
/*!*************************************!*\
  !*** ./services/courses.service.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCourse: function() { return /* binding */ addCourse; },\n/* harmony export */   deleteCourse: function() { return /* binding */ deleteCourse; },\n/* harmony export */   getCourses: function() { return /* binding */ getCourses; },\n/* harmony export */   updateCourse: function() { return /* binding */ updateCourse; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst API_URL = \"http://localhost:8080/courses\";\n// Thêm khóa học mới\nconst addCourse = async (course)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(API_URL, course);\n    return response.data;\n};\n// Lấy danh sách khóa học\nconst getCourses = async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(API_URL);\n    return response.data;\n};\n// Xóa khóa học\nconst deleteCourse = async (courseId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"\".concat(API_URL, \"/\").concat(courseId));\n    return response.data;\n};\n// Cập nhật khóa học\nconst updateCourse = async (courseId, updatedCourse)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"\".concat(API_URL, \"/\").concat(courseId), updatedCourse);\n    return response.data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlcnZpY2VzL2NvdXJzZXMuc2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVO0FBRWhCLG9CQUFvQjtBQUNiLE1BQU1DLFlBQVksT0FBT0M7SUFDOUIsTUFBTUMsV0FBVyxNQUFNSiw2Q0FBS0EsQ0FBQ0ssSUFBSSxDQUFDSixTQUFTRTtJQUMzQyxPQUFPQyxTQUFTRSxJQUFJO0FBQ3RCLEVBQUU7QUFFRix5QkFBeUI7QUFDbEIsTUFBTUMsYUFBYTtJQUN4QixNQUFNSCxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDUSxHQUFHLENBQUNQO0lBQ2pDLE9BQU9HLFNBQVNFLElBQUk7QUFDdEIsRUFBRTtBQUVGLGVBQWU7QUFDUixNQUFNRyxlQUFlLE9BQU9DO0lBQ2pDLE1BQU1OLFdBQVcsTUFBTUosNkNBQUtBLENBQUNXLE1BQU0sQ0FBQyxHQUFjRCxPQUFYVCxTQUFRLEtBQVksT0FBVFM7SUFDbEQsT0FBT04sU0FBU0UsSUFBSTtBQUN0QixFQUFFO0FBRUYsb0JBQW9CO0FBQ2IsTUFBTU0sZUFBZSxPQUFPRixVQUFrQkc7SUFDbkQsTUFBTVQsV0FBVyxNQUFNSiw2Q0FBS0EsQ0FBQ2MsR0FBRyxDQUFDLEdBQWNKLE9BQVhULFNBQVEsS0FBWSxPQUFUUyxXQUFZRztJQUMzRCxPQUFPVCxTQUFTRSxJQUFJO0FBQ3RCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvY291cnNlcy5zZXJ2aWNlLnRzPzg2NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jb3Vyc2VzXCI7XHJcblxyXG4vLyBUaMOqbSBraMOzYSBo4buNYyBt4bubaVxyXG5leHBvcnQgY29uc3QgYWRkQ291cnNlID0gYXN5bmMgKGNvdXJzZTogeyB0aXRsZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nOyBudW1iZXJPZlF1ZXN0aW9uczogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoQVBJX1VSTCwgY291cnNlKTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbi8vIEzhuqV5IGRhbmggc8OhY2gga2jDs2EgaOG7jWNcclxuZXhwb3J0IGNvbnN0IGdldENvdXJzZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoQVBJX1VSTCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG4vLyBYw7NhIGtow7NhIGjhu41jXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb3Vyc2UgPSBhc3luYyAoY291cnNlSWQ6IG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0FQSV9VUkx9LyR7Y291cnNlSWR9YCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcblxyXG4vLyBD4bqtcCBuaOG6rXQga2jDs2EgaOG7jWNcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvdXJzZSA9IGFzeW5jIChjb3Vyc2VJZDogbnVtYmVyLCB1cGRhdGVkQ291cnNlOiB7IHRpdGxlOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmc7IG51bWJlck9mUXVlc3Rpb25zOiBudW1iZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke0FQSV9VUkx9LyR7Y291cnNlSWR9YCwgdXBkYXRlZENvdXJzZSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9VUkwiLCJhZGRDb3Vyc2UiLCJjb3Vyc2UiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiZ2V0Q291cnNlcyIsImdldCIsImRlbGV0ZUNvdXJzZSIsImNvdXJzZUlkIiwiZGVsZXRlIiwidXBkYXRlQ291cnNlIiwidXBkYXRlZENvdXJzZSIsInB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./services/courses.service.ts\n"));

/***/ })

});