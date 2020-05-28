(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./plugins/data-source-strapi/services/deleteSer.tsx":
/*!***********************************************************!*\
  !*** ./plugins/data-source-strapi/services/deleteSer.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteSer; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _utils_scripts_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/scripts/request */ \"./src/utils/scripts/request.tsx\");\n/* harmony import */ var _utils_scripts_storedToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/scripts/storedToken */ \"./src/utils/scripts/storedToken.tsx\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/config */ \"./src/utils/config/index.tsx\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core */ \"./src/core/index.tsx\");\n\n\n\n\n\n\nfunction deleteSer(_x) {\n  return _deleteSer.apply(this, arguments);\n}\n\nfunction _deleteSer() {\n  _deleteSer = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var oldData, SchemaName, token, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            oldData = _ref.oldData, SchemaName = _ref.SchemaName;\n            _context.next = 3;\n            return Object(_utils_scripts_storedToken__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n          case 3:\n            token = _context.sent;\n            _context.next = 6;\n            return Object(_utils_scripts_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/content-manager/explorer/application::\".concat(SchemaName, \".\").concat(SchemaName, \"/\").concat(oldData.id), {\n              prefix: _utils_config__WEBPACK_IMPORTED_MODULE_4__[\"ENV\"].MAIN_URL,\n              method: \"DELETE\",\n              headers: {\n                Authorization: \"Bearer \".concat(token)\n              }\n            });\n\n          case 6:\n            res = _context.sent;\n\n            if (!res.error) {\n              _context.next = 12;\n              break;\n            }\n\n            _context.next = 10;\n            return Object(_core__WEBPACK_IMPORTED_MODULE_5__[\"notice\"])({\n              title: \"Sorry, you can't delete this item\",\n              severity: \"warning\",\n              content: JSON.stringify(oldData)\n            });\n\n          case 10:\n            _context.next = 14;\n            break;\n\n          case 12:\n            _context.next = 14;\n            return Object(_core__WEBPACK_IMPORTED_MODULE_5__[\"notice\"])({\n              title: \"Successful\",\n              severity: \"success\"\n            });\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _deleteSer.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbHVnaW5zL2RhdGEtc291cmNlLXN0cmFwaS9zZXJ2aWNlcy9kZWxldGVTZXIudHN4PzVmNWUiXSwibmFtZXMiOlsiZGVsZXRlU2VyIiwib2xkRGF0YSIsIlNjaGVtYU5hbWUiLCJzdG9yZWRUb2tlbiIsInRva2VuIiwicmVxdWVzdCIsImlkIiwicHJlZml4IiwiRU5WIiwiTUFJTl9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcyIsImVycm9yIiwibm90aWNlIiwidGl0bGUiLCJzZXZlcml0eSIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT2UsU0FBZUEsU0FBOUI7QUFBQTtBQUFBOzs7Z01BQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCQyxtQkFBM0IsUUFBMkJBLE9BQTNCLEVBQW9DQyxVQUFwQyxRQUFvQ0EsVUFBcEM7QUFBQTtBQUFBLG1CQUNPQywwRUFBVyxFQURsQjs7QUFBQTtBQUNQQyxpQkFETztBQUFBO0FBQUEsbUJBR0tDLHNFQUFPLGtEQUNtQkgsVUFEbkIsY0FDaUNBLFVBRGpDLGNBQytDRCxPQUFPLENBQUNLLEVBRHZELEdBRXZCO0FBQ0VDLG9CQUFNLEVBQUVDLGlEQUFHLENBQUNDLFFBRGQ7QUFFRUMsb0JBQU0sRUFBRSxRQUZWO0FBR0VDLHFCQUFPLEVBQUU7QUFDUEMsNkJBQWEsbUJBQVlSLEtBQVo7QUFETjtBQUhYLGFBRnVCLENBSFo7O0FBQUE7QUFHUFMsZUFITzs7QUFBQSxpQkFjVEEsR0FBRyxDQUFDQyxLQWRLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBZUxDLG9EQUFNLENBQUM7QUFDWEMsbUJBQUssRUFBRSxtQ0FESTtBQUVYQyxzQkFBUSxFQUFFLFNBRkM7QUFHWEMscUJBQU8sRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVuQixPQUFmO0FBSEUsYUFBRCxDQWZEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBcUJMYyxvREFBTSxDQUFDO0FBQ1hDLG1CQUFLLEVBQUUsWUFESTtBQUVYQyxzQkFBUSxFQUFFO0FBRkMsYUFBRCxDQXJCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vcGx1Z2lucy9kYXRhLXNvdXJjZS1zdHJhcGkvc2VydmljZXMvZGVsZXRlU2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCJAL3V0aWxzL3NjcmlwdHMvcmVxdWVzdFwiXG5pbXBvcnQgc3RvcmVkVG9rZW4gZnJvbSBcIkAvdXRpbHMvc2NyaXB0cy9zdG9yZWRUb2tlblwiXG5pbXBvcnQgeyBFTlYgfSBmcm9tIFwiQC91dGlscy9jb25maWdcIlxuaW1wb3J0IHsgbm90aWNlIH0gZnJvbSBcIkAvY29yZVwiXG5pbXBvcnQgeyBFZGl0YWJsZUN0cmwgfSBmcm9tIFwiLi4vdHlwZXNcIlxuXG5pbnRlcmZhY2UgUHJvcHM8Um93RGF0YT4gZXh0ZW5kcyBFZGl0YWJsZUN0cmwge1xuICBvbGREYXRhOiBSb3dEYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlcih7IG9sZERhdGEsIFNjaGVtYU5hbWUgfTogUHJvcHM8YW55Pikge1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IHN0b3JlZFRva2VuKClcblxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KFxuICAgIGAvY29udGVudC1tYW5hZ2VyL2V4cGxvcmVyL2FwcGxpY2F0aW9uOjoke1NjaGVtYU5hbWV9LiR7U2NoZW1hTmFtZX0vJHtvbGREYXRhLmlkfWAsXG4gICAge1xuICAgICAgcHJlZml4OiBFTlYuTUFJTl9VUkwsXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgaWYgKHJlcy5lcnJvcikge1xuICAgIGF3YWl0IG5vdGljZSh7XG4gICAgICB0aXRsZTogXCJTb3JyeSwgeW91IGNhbid0IGRlbGV0ZSB0aGlzIGl0ZW1cIixcbiAgICAgIHNldmVyaXR5OiBcIndhcm5pbmdcIixcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KG9sZERhdGEpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBub3RpY2Uoe1xuICAgICAgdGl0bGU6IFwiU3VjY2Vzc2Z1bFwiLFxuICAgICAgc2V2ZXJpdHk6IFwic3VjY2Vzc1wiXG4gICAgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./plugins/data-source-strapi/services/deleteSer.tsx\n");

/***/ })

}]);