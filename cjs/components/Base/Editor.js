"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _ggEditorCore = _interopRequireDefault(require("gg-editor-core"));

var _utils = require("../../utils");

var Editor =
/*#__PURE__*/
function (_GGEditorCore) {
  (0, _inheritsLoose2.default)(Editor, _GGEditorCore);

  function Editor(opt) {
    var _this;

    _this = _GGEditorCore.call(this, opt) || this;
    _this.id = (0, _utils.uniqueId)();
    return _this;
  }

  return Editor;
}(_ggEditorCore.default);

exports.default = Editor;