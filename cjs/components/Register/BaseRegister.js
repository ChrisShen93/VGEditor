"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _utils = require("../../utils");

var _default = {
  methods: {
    bindEvent: function bindEvent() {
      var _this = this;

      var type = this.type;
      var handleBeforeAddPage = this.root.handleBeforeAddPage;
      handleBeforeAddPage(function (_ref) {
        var _host;

        var className = _ref.className;
        var host = _Editor.default[className];
        var keys = ['name', 'config', 'extend'];

        if (type === 'command') {
          host = _Editor.default;
        }

        if (type === 'behaviour') {
          keys = ['name', 'behaviour', 'dependences'];
        }

        var args = keys.map(function (key) {
          return _this[key];
        });

        (_host = host)["register" + (0, _utils.upperFirst)(type)].apply(_host, args);
      });
    }
  },
  inject: ['root'],
  props: {
    name: String,
    config: Object,
    extend: String,
    behaviour: Function,
    dependences: Array
  },
  render: function render() {
    return null;
  }
};
exports.default = _default;