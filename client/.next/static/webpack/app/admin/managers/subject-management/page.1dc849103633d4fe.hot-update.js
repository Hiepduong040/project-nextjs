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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubjectManager; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Layouts/DefaultLayout */ \"(app-pages-browser)/./components/Layouts/DefaultLayout.tsx\");\n/* harmony import */ var _components_SubjectManager_AddSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/SubjectManager/AddSubject */ \"(app-pages-browser)/./components/SubjectManager/AddSubject.tsx\");\n/* harmony import */ var _components_SubjectManager_TableSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/SubjectManager/TableSubject */ \"(app-pages-browser)/./components/SubjectManager/TableSubject.tsx\");\n/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/subject.service */ \"(app-pages-browser)/./services/subject.service.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SubjectManager() {\n    _s();\n    const [subjects, setSubjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editingSubject, setEditingSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchSubjects();\n    }, []);\n    const fetchSubjects = async ()=>{\n        const data = await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.getSubject)();\n        setSubjects(data);\n    };\n    const handleSubjectAdded = async (newSubject)=>{\n        await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.addSubject)(newSubject);\n        fetchSubjects(); // Refresh the list after adding\n    };\n    const handleSubjectUpdated = async (id, updatedData)=>{\n        await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.updateSubject)(id, updatedData);\n        fetchSubjects(); // Refresh the list after updating\n        setEditingSubject(null); // Reset to add mode\n    };\n    const handleEditSubject = (subject)=>{\n        setEditingSubject(subject); // Set subject for editing\n    };\n    const handleDeleteSubject = async (id)=>{\n        await (0,_services_subject_service__WEBPACK_IMPORTED_MODULE_5__.deleteSubject)(id);\n        fetchSubjects(); // Refresh the list after deleting\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-2xl font-bold\",\n                children: \"Subject Manager\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubjectManager_TableSubject__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                subjects: subjects,\n                onEditSubject: handleEditSubject,\n                onDeleteSubject: handleDeleteSubject\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubjectManager_AddSubject__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onSubjectAdded: handleSubjectAdded,\n                editingSubject: editingSubject,\n                onSubjectUpdated: handleSubjectUpdated\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\app\\\\admin\\\\managers\\\\subject-management\\\\page.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(SubjectManager, \"Yr29OzmV/L/1oUSgiuzIhjYAQH0=\");\n_c = SubjectManager;\nvar _c;\n$RefreshReg$(_c, \"SubjectManager\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2Vycy9zdWJqZWN0LW1hbmFnZW1lbnQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM0QztBQUM2QjtBQUNDO0FBQ0k7QUFPaEM7QUFFL0IsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQUM7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1JjO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsZ0JBQWdCO1FBQ3BCLE1BQU1DLE9BQU8sTUFBTVYscUVBQVVBO1FBQzdCTSxZQUFZSTtJQUNkO0lBRUEsTUFBTUMscUJBQXFCLE9BQU9DO1FBS2hDLE1BQU1YLHFFQUFVQSxDQUFDVztRQUNqQkgsaUJBQWlCLGdDQUFnQztJQUNuRDtJQUVBLE1BQU1JLHVCQUF1QixPQUMzQkMsSUFDQUM7UUFFQSxNQUFNYix3RUFBYUEsQ0FBQ1ksSUFBSUM7UUFDeEJOLGlCQUFpQixrQ0FBa0M7UUFDbkRELGtCQUFrQixPQUFPLG9CQUFvQjtJQUMvQztJQUVBLE1BQU1RLG9CQUFvQixDQUFDQztRQUN6QlQsa0JBQWtCUyxVQUFVLDBCQUEwQjtJQUN4RDtJQUVBLE1BQU1DLHNCQUFzQixPQUFPSjtRQUNqQyxNQUFNWCx3RUFBYUEsQ0FBQ1c7UUFDcEJMLGlCQUFpQixrQ0FBa0M7SUFDckQ7SUFFQSxxQkFDRSw4REFBQ1oseUVBQWFBOzswQkFDWiw4REFBQ3NCO2dCQUFHQyxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ3JCLCtFQUFZQTtnQkFDWE0sVUFBVUE7Z0JBQ1ZnQixlQUFlTDtnQkFDZk0saUJBQWlCSjs7Ozs7OzBCQUVuQiw4REFBQ3BCLDZFQUFVQTtnQkFDVHlCLGdCQUFnQlo7Z0JBQ2hCSixnQkFBZ0JBO2dCQUNoQmlCLGtCQUFrQlg7Ozs7Ozs7Ozs7OztBQUkxQjtHQXZEd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9tYW5hZ2Vycy9zdWJqZWN0LW1hbmFnZW1lbnQvcGFnZS50c3g/NzU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dHMvRGVmYXVsdExheW91dFwiO1xyXG5pbXBvcnQgQWRkU3ViamVjdCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TdWJqZWN0TWFuYWdlci9BZGRTdWJqZWN0XCI7XHJcbmltcG9ydCBUYWJsZVN1YmplY3QgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3ViamVjdE1hbmFnZXIvVGFibGVTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFN1YmplY3QsXHJcbiAgYWRkU3ViamVjdCxcclxuICB1cGRhdGVTdWJqZWN0LFxyXG4gIGRlbGV0ZVN1YmplY3QsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3N1YmplY3Quc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViamVjdE1hbmFnZXIoKSB7XHJcbiAgY29uc3QgW3N1YmplY3RzLCBzZXRTdWJqZWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VkaXRpbmdTdWJqZWN0LCBzZXRFZGl0aW5nU3ViamVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoU3ViamVjdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoU3ViamVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U3ViamVjdCgpO1xyXG4gICAgc2V0U3ViamVjdHMoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3ViamVjdEFkZGVkID0gYXN5bmMgKG5ld1N1YmplY3Q6IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgY291cnNlc0lkOiBudW1iZXI7XHJcbiAgfSkgPT4ge1xyXG4gICAgYXdhaXQgYWRkU3ViamVjdChuZXdTdWJqZWN0KTtcclxuICAgIGZldGNoU3ViamVjdHMoKTsgLy8gUmVmcmVzaCB0aGUgbGlzdCBhZnRlciBhZGRpbmdcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJqZWN0VXBkYXRlZCA9IGFzeW5jIChcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICB1cGRhdGVkRGF0YTogeyB0aXRsZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nOyBjb3Vyc2VzSWQ6IG51bWJlciB9LFxyXG4gICkgPT4ge1xyXG4gICAgYXdhaXQgdXBkYXRlU3ViamVjdChpZCwgdXBkYXRlZERhdGEpO1xyXG4gICAgZmV0Y2hTdWJqZWN0cygpOyAvLyBSZWZyZXNoIHRoZSBsaXN0IGFmdGVyIHVwZGF0aW5nXHJcbiAgICBzZXRFZGl0aW5nU3ViamVjdChudWxsKTsgLy8gUmVzZXQgdG8gYWRkIG1vZGVcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0U3ViamVjdCA9IChzdWJqZWN0OiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudWxsPikgPT4ge1xyXG4gICAgc2V0RWRpdGluZ1N1YmplY3Qoc3ViamVjdCk7IC8vIFNldCBzdWJqZWN0IGZvciBlZGl0aW5nXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlU3ViamVjdCA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBhd2FpdCBkZWxldGVTdWJqZWN0KGlkKTtcclxuICAgIGZldGNoU3ViamVjdHMoKTsgLy8gUmVmcmVzaCB0aGUgbGlzdCBhZnRlciBkZWxldGluZ1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGVmYXVsdExheW91dD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC0yeGwgZm9udC1ib2xkXCI+U3ViamVjdCBNYW5hZ2VyPC9oMT5cclxuICAgICAgPFRhYmxlU3ViamVjdFxyXG4gICAgICAgIHN1YmplY3RzPXtzdWJqZWN0c31cclxuICAgICAgICBvbkVkaXRTdWJqZWN0PXtoYW5kbGVFZGl0U3ViamVjdH1cclxuICAgICAgICBvbkRlbGV0ZVN1YmplY3Q9e2hhbmRsZURlbGV0ZVN1YmplY3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxBZGRTdWJqZWN0XHJcbiAgICAgICAgb25TdWJqZWN0QWRkZWQ9e2hhbmRsZVN1YmplY3RBZGRlZH1cclxuICAgICAgICBlZGl0aW5nU3ViamVjdD17ZWRpdGluZ1N1YmplY3R9XHJcbiAgICAgICAgb25TdWJqZWN0VXBkYXRlZD17aGFuZGxlU3ViamVjdFVwZGF0ZWR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0RlZmF1bHRMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGVmYXVsdExheW91dCIsIkFkZFN1YmplY3QiLCJUYWJsZVN1YmplY3QiLCJnZXRTdWJqZWN0IiwiYWRkU3ViamVjdCIsInVwZGF0ZVN1YmplY3QiLCJkZWxldGVTdWJqZWN0IiwiU3ViamVjdE1hbmFnZXIiLCJzdWJqZWN0cyIsInNldFN1YmplY3RzIiwiZWRpdGluZ1N1YmplY3QiLCJzZXRFZGl0aW5nU3ViamVjdCIsImZldGNoU3ViamVjdHMiLCJkYXRhIiwiaGFuZGxlU3ViamVjdEFkZGVkIiwibmV3U3ViamVjdCIsImhhbmRsZVN1YmplY3RVcGRhdGVkIiwiaWQiLCJ1cGRhdGVkRGF0YSIsImhhbmRsZUVkaXRTdWJqZWN0Iiwic3ViamVjdCIsImhhbmRsZURlbGV0ZVN1YmplY3QiLCJoMSIsImNsYXNzTmFtZSIsIm9uRWRpdFN1YmplY3QiLCJvbkRlbGV0ZVN1YmplY3QiLCJvblN1YmplY3RBZGRlZCIsIm9uU3ViamVjdFVwZGF0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/managers/subject-management/page.tsx\n"));

/***/ })

});