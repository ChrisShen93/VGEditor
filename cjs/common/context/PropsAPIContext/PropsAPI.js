"use strict";

var _interopRequireDefault = require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _classCallCheck2 = _interopRequireDefault(require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/esm/createClass"));

var _defineProperty2 = _interopRequireDefault(require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty"));

var PropsAPI =
/*#__PURE__*/
function () {
  function PropsAPI(editor) {
    var _this = this;

    (0, _classCallCheck2.default)(this, PropsAPI);
    (0, _defineProperty2.default)(this, "editor", null);
    this.editor = editor;
    ['executeCommand'].forEach(function (key) {
      _this[key] = function () {
        var _this$editor;

        return (_this$editor = _this.editor)[key].apply(_this$editor, arguments);
      };
    });
    ['read', 'save', 'add', 'find', 'update', 'remove', 'getSelected'].forEach(function (key) {
      _this[key] = function () {
        var _this$currentPage;

        return (_this$currentPage = _this.currentPage)[key].apply(_this$currentPage, arguments);
      };
    });
  }

  (0, _createClass2.default)(PropsAPI, [{
    key: "currentPage",
    get: function get() {
      return this.editor.getCurrentPage();
    }
  }]);
  return PropsAPI;
}();

exports.default = PropsAPI;