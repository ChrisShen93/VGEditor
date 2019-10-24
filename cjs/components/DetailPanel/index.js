"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NodePanel", {
  enumerable: true,
  get: function get() {
    return _NodePanel.default;
  }
});
Object.defineProperty(exports, "EdgePanel", {
  enumerable: true,
  get: function get() {
    return _EdgePanel.default;
  }
});
Object.defineProperty(exports, "GroupPanel", {
  enumerable: true,
  get: function get() {
    return _GroupPanel.default;
  }
});
Object.defineProperty(exports, "MultiPanel", {
  enumerable: true,
  get: function get() {
    return _MultiPanel.default;
  }
});
Object.defineProperty(exports, "CanvasPanel", {
  enumerable: true,
  get: function get() {
    return _CanvasPanel.default;
  }
});
exports.default = void 0;

var _DetailPanel = _interopRequireDefault(require("./DetailPanel"));

var _NodePanel = _interopRequireDefault(require("./NodePanel"));

var _EdgePanel = _interopRequireDefault(require("./EdgePanel"));

var _GroupPanel = _interopRequireDefault(require("./GroupPanel"));

var _MultiPanel = _interopRequireDefault(require("./MultiPanel"));

var _CanvasPanel = _interopRequireDefault(require("./CanvasPanel"));

var _default = _DetailPanel.default;
exports.default = _default;