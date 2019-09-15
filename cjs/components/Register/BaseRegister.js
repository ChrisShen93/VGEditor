"use strict";

var _interopRequireDefault = require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray"));

require("core-js/modules/es6.array.map");

var _Editor = _interopRequireDefault(require("@components/Base/Editor"));

var _utils = require("@utils");

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
          return _this.$attrs[key];
        });

        (_host = host)["register".concat((0, _utils.upperFirst)(type))].apply(_host, (0, _toConsumableArray2.default)(args));
      });
    }
  },
  inject: ['root'],
  render: function render() {
    return null;
  }
};
exports.default = _default;