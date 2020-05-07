"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

function guardMyroute(to, from, next) {
  var isAuth;
  return regeneratorRuntime.async(function guardMyroute$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(JSON.parse(localStorage.getItem('isAuth')));

        case 2:
          isAuth = _context.sent;
          console.log(isAuth);
          isAuth ? next() : next({
            path: from.path
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

var routes = [{
  path: '/table',
  name: 'Home',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  beforeEnter: guardMyroute
}, {
  path: '/',
  name: 'Login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Login.vue'));
    });
  }
}, {
  path: '/edit/:id',
  name: 'Edit',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Edit.vue'));
    });
  },
  beforeEnter: guardMyroute
}, {
  path: '/add',
  name: 'Added',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Added.vue'));
    });
  },
  beforeEnter: guardMyroute
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;