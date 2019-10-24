"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BasePanel = _interopRequireDefault(require("./BasePanel"));

var _default = {
  mixins: [_BasePanel.default],
  name: 'MultiPanel',
  created: function created() {
    this.type = 'multi';
  }
};
exports.default = _default;