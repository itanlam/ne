exports.ids = [13];
exports.modules = {

/***/ "./plugins/buncms-user/sign-in/services/signInService.tsx":
/*!****************************************************************!*\
  !*** ./plugins/buncms-user/sign-in/services/signInService.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/config */ \"./src/utils/config/index.tsx\");\n/* harmony import */ var _utils_scripts_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/scripts/request */ \"./src/utils/scripts/request.tsx\");\n\n\n\nasync function userSignInService(params) {\n  return Object(_utils_scripts_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/auth/login\", {\n    prefix: _utils_config__WEBPACK_IMPORTED_MODULE_0__[\"ENV\"].AUTH_URL,\n    method: \"POST\",\n    data: params\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSignInService);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbHVnaW5zL2J1bmNtcy11c2VyL3NpZ24taW4vc2VydmljZXMvc2lnbkluU2VydmljZS50c3g/ZDBkYSJdLCJuYW1lcyI6WyJ1c2VyU2lnbkluU2VydmljZSIsInBhcmFtcyIsInJlcXVlc3QiLCJwcmVmaXgiLCJFTlYiLCJBVVRIX1VSTCIsIm1ldGhvZCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBT0EsZUFBZUEsaUJBQWYsQ0FBaUNDLE1BQWpDLEVBQTJEO0FBQ3pELFNBQU9DLHNFQUFPLENBQUMsYUFBRCxFQUFnQjtBQUM1QkMsVUFBTSxFQUFFQyxpREFBRyxDQUFDQyxRQURnQjtBQUU1QkMsVUFBTSxFQUFFLE1BRm9CO0FBRzVCQyxRQUFJLEVBQUVOO0FBSHNCLEdBQWhCLENBQWQ7QUFLRDs7QUFFY0QsZ0ZBQWYiLCJmaWxlIjoiLi9wbHVnaW5zL2J1bmNtcy11c2VyL3NpZ24taW4vc2VydmljZXMvc2lnbkluU2VydmljZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTlYgfSBmcm9tIFwiQC91dGlscy9jb25maWdcIlxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIkAvdXRpbHMvc2NyaXB0cy9yZXF1ZXN0XCJcblxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5QYXJhbXNUeXBlIHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xuICBwYXNzd29yZDogc3RyaW5nXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVzZXJTaWduSW5TZXJ2aWNlKHBhcmFtczogU2lnbkluUGFyYW1zVHlwZSkge1xuICByZXR1cm4gcmVxdWVzdChcIi9hdXRoL2xvZ2luXCIsIHtcbiAgICBwcmVmaXg6IEVOVi5BVVRIX1VSTCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGRhdGE6IHBhcmFtc1xuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyU2lnbkluU2VydmljZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./plugins/buncms-user/sign-in/services/signInService.tsx\n");

/***/ })

};;