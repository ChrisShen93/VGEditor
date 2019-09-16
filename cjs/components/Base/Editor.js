"use strict";

var _interopRequireDefault = require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/inherits"));

var _ggEditorCore = _interopRequireDefault(require("gg-editor-core"));

var _utils = require("../../utils");

var Editor =
/*#__PURE__*/
function (_GGEditorCore) {
  (0, _inherits2.default)(Editor, _GGEditorCore);

  function Editor(opt) {
    var _this;

    (0, _classCallCheck2.default)(this, Editor);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Editor).call(this, opt));
    _this.id = (0, _utils.uniqueId)();
    return _this;
  }

  return Editor;
}(_ggEditorCore.default);

exports.default = Editor;