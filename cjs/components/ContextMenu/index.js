"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NodeMenu", {
  enumerable: true,
  get: function get() {
    return _NodeMenu.default;
  }
});
Object.defineProperty(exports, "EdgeMenu", {
  enumerable: true,
  get: function get() {
    return _EdgeMenu.default;
  }
});
Object.defineProperty(exports, "GroupMenu", {
  enumerable: true,
  get: function get() {
    return _GroupMenu.default;
  }
});
Object.defineProperty(exports, "MultiMenu", {
  enumerable: true,
  get: function get() {
    return _MultiMenu.default;
  }
});
Object.defineProperty(exports, "CanvasMenu", {
  enumerable: true,
  get: function get() {
    return _CanvasMenu.default;
  }
});
exports.default = void 0;

var _NodeMenu = _interopRequireDefault(require("./NodeMenu"));

var _EdgeMenu = _interopRequireDefault(require("./EdgeMenu"));

var _GroupMenu = _interopRequireDefault(require("./GroupMenu"));

var _MultiMenu = _interopRequireDefault(require("./MultiMenu"));

var _CanvasMenu = _interopRequireDefault(require("./CanvasMenu"));

var _ContextMenu = _interopRequireDefault(require("./ContextMenu"));

var _default = _ContextMenu.default;
exports.default = _default;