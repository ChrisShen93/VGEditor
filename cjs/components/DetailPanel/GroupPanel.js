"use strict";

var _interopRequireDefault = require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BasePanel = _interopRequireDefault(require("./BasePanel"));

var _default = {
  mixins: [_BasePanel.default],
  name: 'GroupPanel',
  created: function created() {
    this.type = 'group';
  }
};
exports.default = _default;