"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var u=o?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(t,n,u):t[n]=e[n]}return t.default=e,r&&r.set(e,t),t}function guardMyroute(e,r,t){var o;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(JSON.parse(localStorage.getItem("isAuth")));case 2:o=e.sent,console.log(o),o?t():t({path:r.path});case 5:case"end":return e.stop()}})}_vue.default.use(_vueRouter.default);var routes=[{path:"/table",name:"Home",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("@/views/Home.vue"))})},beforeEnter:guardMyroute},{path:"/",name:"Login",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("@/views/Login.vue"))})}},{path:"/edit/:id",name:"Edit",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("@/views/Edit.vue"))})},beforeEnter:guardMyroute},{path:"/add",name:"Added",component:function(){return Promise.resolve().then(function(){return _interopRequireWildcard(require("@/views/Added.vue"))})},beforeEnter:guardMyroute}],router=new _vueRouter.default({mode:"history",base:process.env.BASE_URL,routes:routes}),_default=router;exports.default=_default;