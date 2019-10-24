"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseMenu = _interopRequireDefault(require("./BaseMenu"));

var _default = {
  mixins: [_BaseMenu.default],
  name: 'EdgeMenu',
  created: function created() {
    this.type = 'edge';
  }
};
exports.default = _default;