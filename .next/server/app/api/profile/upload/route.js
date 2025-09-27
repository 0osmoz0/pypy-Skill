"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/profile/upload/route";
exports.ids = ["app/api/profile/upload/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Fupload%2Froute&page=%2Fapi%2Fprofile%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fupload%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Fupload%2Froute&page=%2Fapi%2Fprofile%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fupload%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_admin_Documents_GitHub_pypy_Skill_src_app_api_profile_upload_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/profile/upload/route.ts */ \"(rsc)/./src/app/api/profile/upload/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/upload/route\",\n        pathname: \"/api/profile/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/upload/route\"\n    },\n    resolvedPagePath: \"/Users/admin/Documents/GitHub/pypy-Skill/src/app/api/profile/upload/route.ts\",\n    nextConfigOutput,\n    userland: _Users_admin_Documents_GitHub_pypy_Skill_src_app_api_profile_upload_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/profile/upload/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGdXBsb2FkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGdXBsb2FkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFkbWluJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGcHlweS1Ta2lsbCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhZG1pbiUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRnB5cHktU2tpbGwmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQzBDO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL3B5cHktc2tpbGwvPzVjNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvcHlweS1Ta2lsbC9zcmMvYXBwL2FwaS9wcm9maWxlL3VwbG9hZC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvZmlsZS91cGxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9maWxlL3VwbG9hZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZmlsZS91cGxvYWQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9weXB5LVNraWxsL3NyYy9hcHAvYXBpL3Byb2ZpbGUvdXBsb2FkL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3Byb2ZpbGUvdXBsb2FkL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Fupload%2Froute&page=%2Fapi%2Fprofile%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fupload%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/profile/upload/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/profile/upload/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nasync function POST(req) {\n    try {\n        // Vérifier l'authentification\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.email) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Non authentifi\\xe9\"\n            }, {\n                status: 401\n            });\n        }\n        const data = await req.formData();\n        const file = data.get(\"file\");\n        if (!file) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Aucun fichier fourni\"\n            }, {\n                status: 400\n            });\n        }\n        // Vérifier le type de fichier\n        if (!file.type.startsWith(\"image/\")) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Le fichier doit \\xeatre une image\"\n            }, {\n                status: 400\n            });\n        }\n        // Vérifier la taille du fichier (max 5MB)\n        if (file.size > 5 * 1024 * 1024) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Le fichier ne peut pas d\\xe9passer 5MB\"\n            }, {\n                status: 400\n            });\n        }\n        const bytes = await file.arrayBuffer();\n        const buffer = Buffer.from(bytes);\n        // Créer le dossier uploads s'il n'existe pas\n        const uploadsDir = (0,path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), \"public\", \"uploads\", \"avatars\");\n        if (!(0,fs__WEBPACK_IMPORTED_MODULE_5__.existsSync)(uploadsDir)) {\n            (0,fs__WEBPACK_IMPORTED_MODULE_5__.mkdirSync)(uploadsDir, {\n                recursive: true\n            });\n        }\n        // Générer un nom de fichier unique\n        const timestamp = Date.now();\n        const extension = file.name.split(\".\").pop();\n        const filename = `${session.user.email}_${timestamp}.${extension}`;\n        const path = (0,path__WEBPACK_IMPORTED_MODULE_4__.join)(uploadsDir, filename);\n        // Sauvegarder le fichier\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_3__.writeFile)(path, buffer);\n        // Retourner l'URL de l'image\n        const imageUrl = `/uploads/avatars/${filename}`;\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Image upload\\xe9e avec succ\\xe8s\",\n            imageUrl\n        });\n    } catch (error) {\n        console.error(\"Erreur lors de l'upload:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erreur interne du serveur\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3VwbG9hZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNYO0FBQ0o7QUFDRDtBQUNaO0FBQ2U7QUFFcEMsZUFBZU8sS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLDhCQUE4QjtRQUM5QixNQUFNQyxVQUFVLE1BQU1SLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBQ2xELElBQUksQ0FBQ08sU0FBU0MsTUFBTUMsT0FBTztZQUN6QixPQUFPWCxrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWtCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUN2RTtRQUVBLE1BQU1DLE9BQU8sTUFBTVAsSUFBSVEsUUFBUTtRQUMvQixNQUFNQyxPQUFvQkYsS0FBS0csR0FBRyxDQUFDO1FBRW5DLElBQUksQ0FBQ0QsTUFBTTtZQUNULE9BQU9qQixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXVCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM1RTtRQUVBLDhCQUE4QjtRQUM5QixJQUFJLENBQUNHLEtBQUtFLElBQUksQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7WUFDbkMsT0FBT3BCLGtGQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RGO1FBRUEsMENBQTBDO1FBQzFDLElBQUlHLEtBQUtJLElBQUksR0FBRyxJQUFJLE9BQU8sTUFBTTtZQUMvQixPQUFPckIsa0ZBQVlBLENBQUNZLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDM0Y7UUFFQSxNQUFNUSxRQUFRLE1BQU1MLEtBQUtNLFdBQVc7UUFDcEMsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSjtRQUUzQiw2Q0FBNkM7UUFDN0MsTUFBTUssYUFBYXZCLDBDQUFJQSxDQUFDd0IsUUFBUUMsR0FBRyxJQUFJLFVBQVUsV0FBVztRQUM1RCxJQUFJLENBQUN4Qiw4Q0FBVUEsQ0FBQ3NCLGFBQWE7WUFDM0JyQiw2Q0FBU0EsQ0FBQ3FCLFlBQVk7Z0JBQUVHLFdBQVc7WUFBSztRQUMxQztRQUVBLG1DQUFtQztRQUNuQyxNQUFNQyxZQUFZQyxLQUFLQyxHQUFHO1FBQzFCLE1BQU1DLFlBQVlqQixLQUFLa0IsSUFBSSxDQUFDQyxLQUFLLENBQUMsS0FBS0MsR0FBRztRQUMxQyxNQUFNQyxXQUFXLENBQUMsRUFBRTdCLFFBQVFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRW9CLFVBQVUsQ0FBQyxFQUFFRyxVQUFVLENBQUM7UUFDbEUsTUFBTUssT0FBT25DLDBDQUFJQSxDQUFDdUIsWUFBWVc7UUFFOUIseUJBQXlCO1FBQ3pCLE1BQU1uQyxzREFBU0EsQ0FBQ29DLE1BQU1mO1FBRXRCLDZCQUE2QjtRQUM3QixNQUFNZ0IsV0FBVyxDQUFDLGlCQUFpQixFQUFFRixTQUFTLENBQUM7UUFFL0MsT0FBT3RDLGtGQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFDdkI2QixTQUFTO1lBQ1REO1FBQ0Y7SUFFRixFQUFFLE9BQU8zQixPQUFPO1FBQ2Q2QixRQUFRN0IsS0FBSyxDQUFDLDRCQUE2QkE7UUFDM0MsT0FBT2Isa0ZBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTRCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9weXB5LXNraWxsLy4vc3JjL2FwcC9hcGkvcHJvZmlsZS91cGxvYWQvcm91dGUudHM/OWJiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnO1xuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZXhpc3RzU3luYywgbWtkaXJTeW5jIH0gZnJvbSAnZnMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgLy8gVsOpcmlmaWVyIGwnYXV0aGVudGlmaWNhdGlvblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vbiBhdXRoZW50aWZpw6knIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgfCBudWxsID0gZGF0YS5nZXQoJ2ZpbGUnKSBhcyB1bmtub3duIGFzIEZpbGU7XG5cbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQXVjdW4gZmljaGllciBmb3VybmknIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgLy8gVsOpcmlmaWVyIGxlIHR5cGUgZGUgZmljaGllclxuICAgIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0xlIGZpY2hpZXIgZG9pdCDDqnRyZSB1bmUgaW1hZ2UnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgLy8gVsOpcmlmaWVyIGxhIHRhaWxsZSBkdSBmaWNoaWVyIChtYXggNU1CKVxuICAgIGlmIChmaWxlLnNpemUgPiA1ICogMTAyNCAqIDEwMjQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTGUgZmljaGllciBuZSBwZXV0IHBhcyBkw6lwYXNzZXIgNU1CJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcblxuICAgIC8vIENyw6llciBsZSBkb3NzaWVyIHVwbG9hZHMgcydpbCBuJ2V4aXN0ZSBwYXNcbiAgICBjb25zdCB1cGxvYWRzRGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3VwbG9hZHMnLCAnYXZhdGFycycpO1xuICAgIGlmICghZXhpc3RzU3luYyh1cGxvYWRzRGlyKSkge1xuICAgICAgbWtkaXJTeW5jKHVwbG9hZHNEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8vIEfDqW7DqXJlciB1biBub20gZGUgZmljaGllciB1bmlxdWVcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gYCR7c2Vzc2lvbi51c2VyLmVtYWlsfV8ke3RpbWVzdGFtcH0uJHtleHRlbnNpb259YDtcbiAgICBjb25zdCBwYXRoID0gam9pbih1cGxvYWRzRGlyLCBmaWxlbmFtZSk7XG5cbiAgICAvLyBTYXV2ZWdhcmRlciBsZSBmaWNoaWVyXG4gICAgYXdhaXQgd3JpdGVGaWxlKHBhdGgsIGJ1ZmZlcik7XG5cbiAgICAvLyBSZXRvdXJuZXIgbCdVUkwgZGUgbCdpbWFnZVxuICAgIGNvbnN0IGltYWdlVXJsID0gYC91cGxvYWRzL2F2YXRhcnMvJHtmaWxlbmFtZX1gO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXG4gICAgICBtZXNzYWdlOiAnSW1hZ2UgdXBsb2Fkw6llIGF2ZWMgc3VjY8OocycsXG4gICAgICBpbWFnZVVybCBcbiAgICB9KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCd1cGxvYWQ6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRXJyZXVyIGludGVybmUgZHUgc2VydmV1cicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIndyaXRlRmlsZSIsImpvaW4iLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwiUE9TVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwiZm9ybURhdGEiLCJmaWxlIiwiZ2V0IiwidHlwZSIsInN0YXJ0c1dpdGgiLCJzaXplIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJ1cGxvYWRzRGlyIiwicHJvY2VzcyIsImN3ZCIsInJlY3Vyc2l2ZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJleHRlbnNpb24iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJmaWxlbmFtZSIsInBhdGgiLCJpbWFnZVVybCIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"(rsc)/./node_modules/next-auth/providers/email.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"(rsc)/./src/lib/config.ts\");\n\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n    providers: [\n        (0,next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            server: {\n                host: _config__WEBPACK_IMPORTED_MODULE_5__.config.email.host,\n                port: _config__WEBPACK_IMPORTED_MODULE_5__.config.email.port,\n                auth: {\n                    user: _config__WEBPACK_IMPORTED_MODULE_5__.config.email.user,\n                    pass: _config__WEBPACK_IMPORTED_MODULE_5__.config.email.password\n                }\n            },\n            from: _config__WEBPACK_IMPORTED_MODULE_5__.config.email.from\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.emailVerified) {\n                    return null;\n                }\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].compare(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    image: user.image\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    pages: {\n        signIn: \"/login\",\n        signUp: \"/register\",\n        verifyRequest: \"/verify-email\",\n        error: \"/auth/error\"\n    },\n    callbacks: {\n        async jwt ({ token, user, trigger }) {\n            if (user) {\n                token.id = user.id;\n                token.image = user.image;\n                token.name = user.name;\n            }\n            // Si c'est un trigger de mise à jour, récupérer les données fraîches de la DB\n            if (trigger === \"update\" && token.email) {\n                const freshUser = await prisma.user.findUnique({\n                    where: {\n                        email: token.email\n                    }\n                });\n                if (freshUser) {\n                    token.name = freshUser.name;\n                    token.image = freshUser.image;\n                }\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.image = token.image;\n                session.user.name = token.name;\n            }\n            return session;\n        }\n    },\n    secret: _config__WEBPACK_IMPORTED_MODULE_5__.config.nextAuthSecret\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ2UsS0FBSyxHQUFHVyxNQUFNWCxLQUFLO2dCQUNoQ0MsUUFBUWhCLElBQUksQ0FBQ0ksSUFBSSxHQUFHc0IsTUFBTXRCLElBQUk7WUFDaEM7WUFDQSxPQUFPWTtRQUNUO0lBQ0Y7SUFDQWEsUUFBUXZDLDJDQUFNQSxDQUFDd0MsY0FBYztBQUMvQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHlweS1za2lsbC8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbFwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBFbWFpbFByb3ZpZGVyKHtcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiBjb25maWcuZW1haWwuaG9zdCxcbiAgICAgICAgcG9ydDogY29uZmlnLmVtYWlsLnBvcnQsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBjb25maWcuZW1haWwudXNlcixcbiAgICAgICAgICBwYXNzOiBjb25maWcuZW1haWwucGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogY29uZmlnLmVtYWlsLmZyb20sXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5lbWFpbFZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBqb3Vyc1xuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgICBzaWduVXA6IFwiL3JlZ2lzdGVyXCIsXG4gICAgdmVyaWZ5UmVxdWVzdDogXCIvdmVyaWZ5LWVtYWlsXCIsXG4gICAgZXJyb3I6IFwiL2F1dGgvZXJyb3JcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIHRyaWdnZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5pbWFnZSA9IHVzZXIuaW1hZ2U7XG4gICAgICAgIHRva2VuLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFNpIGMnZXN0IHVuIHRyaWdnZXIgZGUgbWlzZSDDoCBqb3VyLCByw6ljdXDDqXJlciBsZXMgZG9ubsOpZXMgZnJhw65jaGVzIGRlIGxhIERCXG4gICAgICBpZiAodHJpZ2dlciA9PT0gXCJ1cGRhdGVcIiAmJiB0b2tlbi5lbWFpbCkge1xuICAgICAgICBjb25zdCBmcmVzaFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBlbWFpbDogdG9rZW4uZW1haWwgYXMgc3RyaW5nIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmcmVzaFVzZXIpIHtcbiAgICAgICAgICB0b2tlbi5uYW1lID0gZnJlc2hVc2VyLm5hbWU7XG4gICAgICAgICAgdG9rZW4uaW1hZ2UgPSBmcmVzaFVzZXIuaW1hZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZCBhcyBzdHJpbmc7XG4gICAgICAgIHNlc3Npb24udXNlci5pbWFnZSA9IHRva2VuLmltYWdlIGFzIHN0cmluZztcbiAgICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSB0b2tlbi5uYW1lIGFzIHN0cmluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlY3JldDogY29uZmlnLm5leHRBdXRoU2VjcmV0LFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiRW1haWxQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJQcmlzbWFDbGllbnQiLCJiY3J5cHQiLCJjb25maWciLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJzZXJ2ZXIiLCJob3N0IiwiZW1haWwiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwicGFzc3dvcmQiLCJmcm9tIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibGFiZWwiLCJ0eXBlIiwiYXV0aG9yaXplIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWxWZXJpZmllZCIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJpZCIsImltYWdlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwicGFnZXMiLCJzaWduSW4iLCJzaWduVXAiLCJ2ZXJpZnlSZXF1ZXN0IiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInRyaWdnZXIiLCJmcmVzaFVzZXIiLCJzZWNyZXQiLCJuZXh0QXV0aFNlY3JldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/config.ts":
/*!***************************!*\
  !*** ./src/lib/config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\n    // Database\n    databaseUrl: process.env.DATABASE_URL || \"file:./dev.db\",\n    // NextAuth.js\n    nextAuthUrl: process.env.NEXTAUTH_URL || \"http://localhost:3001\",\n    nextAuthSecret: process.env.NEXTAUTH_SECRET || \"your-secret-key-here-change-in-production\",\n    // Email Configuration\n    email: {\n        host: process.env.EMAIL_SERVER_HOST || \"smtp.gmail.com\",\n        port: parseInt(process.env.EMAIL_SERVER_PORT || \"587\"),\n        user: process.env.EMAIL_SERVER_USER || \"your-email@gmail.com\",\n        password: process.env.EMAIL_SERVER_PASSWORD || \"your-app-password\",\n        from: process.env.EMAIL_FROM || \"your-email@gmail.com\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2NvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUztJQUNwQixXQUFXO0lBQ1hDLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxJQUFJO0lBRXpDLGNBQWM7SUFDZEMsYUFBYUgsUUFBUUMsR0FBRyxDQUFDRyxZQUFZLElBQUk7SUFDekNDLGdCQUFnQkwsUUFBUUMsR0FBRyxDQUFDSyxlQUFlLElBQUk7SUFFL0Msc0JBQXNCO0lBQ3RCQyxPQUFPO1FBQ0xDLE1BQU1SLFFBQVFDLEdBQUcsQ0FBQ1EsaUJBQWlCLElBQUk7UUFDdkNDLE1BQU1DLFNBQVNYLFFBQVFDLEdBQUcsQ0FBQ1csaUJBQWlCLElBQUk7UUFDaERDLE1BQU1iLFFBQVFDLEdBQUcsQ0FBQ2EsaUJBQWlCLElBQUk7UUFDdkNDLFVBQVVmLFFBQVFDLEdBQUcsQ0FBQ2UscUJBQXFCLElBQUk7UUFDL0NDLE1BQU1qQixRQUFRQyxHQUFHLENBQUNpQixVQUFVLElBQUk7SUFDbEM7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHlweS1za2lsbC8uL3NyYy9saWIvY29uZmlnLnRzP2EzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gRGF0YWJhc2VcbiAgZGF0YWJhc2VVcmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fCBcImZpbGU6Li9kZXYuZGJcIixcbiAgXG4gIC8vIE5leHRBdXRoLmpzXG4gIG5leHRBdXRoVXJsOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIixcbiAgbmV4dEF1dGhTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCBcInlvdXItc2VjcmV0LWtleS1oZXJlLWNoYW5nZS1pbi1wcm9kdWN0aW9uXCIsXG4gIFxuICAvLyBFbWFpbCBDb25maWd1cmF0aW9uXG4gIGVtYWlsOiB7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX0hPU1QgfHwgXCJzbXRwLmdtYWlsLmNvbVwiLFxuICAgIHBvcnQ6IHBhcnNlSW50KHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QT1JUIHx8IFwiNTg3XCIpLFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSIHx8IFwieW91ci1lbWFpbEBnbWFpbC5jb21cIixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BBU1NXT1JEIHx8IFwieW91ci1hcHAtcGFzc3dvcmRcIixcbiAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NIHx8IFwieW91ci1lbWFpbEBnbWFpbC5jb21cIixcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJjb25maWciLCJkYXRhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJuZXh0QXV0aFVybCIsIk5FWFRBVVRIX1VSTCIsIm5leHRBdXRoU2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiZW1haWwiLCJob3N0IiwiRU1BSUxfU0VSVkVSX0hPU1QiLCJwb3J0IiwicGFyc2VJbnQiLCJFTUFJTF9TRVJWRVJfUE9SVCIsInVzZXIiLCJFTUFJTF9TRVJWRVJfVVNFUiIsInBhc3N3b3JkIiwiRU1BSUxfU0VSVkVSX1BBU1NXT1JEIiwiZnJvbSIsIkVNQUlMX0ZST00iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/config.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/nodemailer","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Fupload%2Froute&page=%2Fapi%2Fprofile%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Fupload%2Froute.ts&appDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2FGitHub%2Fpypy-Skill&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();