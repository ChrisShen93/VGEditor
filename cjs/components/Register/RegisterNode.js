"use strict";

var _interopRequireDefault = require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseRegister = _interopRequireDefault(require("./BaseRegister"));

var _default = {
  mixins: [_BaseRegister.default],
  name: 'RegisterNode',
  created: function created() {
    this.type = 'node';
    this.bindEvent();
  }
};
exports.default = _default;