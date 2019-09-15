"use strict";

var _interopRequireDefault = require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseMenu = _interopRequireDefault(require("./BaseMenu"));

var _default = {
  mixins: [_BaseMenu.default],
  name: 'MultiMenu',
  created: function created() {
    this.type = 'multi';
  }
};
exports.default = _default;