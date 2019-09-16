"use strict";

var _interopRequireDefault = require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _merge.default;
  }
});
Object.defineProperty(exports, "pick", {
  enumerable: true,
  get: function get() {
    return _pick.default;
  }
});
Object.defineProperty(exports, "uniqueId", {
  enumerable: true,
  get: function get() {
    return _uniqueId.default;
  }
});
Object.defineProperty(exports, "upperFirst", {
  enumerable: true,
  get: function get() {
    return _upperFirst.default;
  }
});

var _merge = _interopRequireDefault(require("lodash/merge"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

var _upperFirst = _interopRequireDefault(require("lodash/upperFirst"));