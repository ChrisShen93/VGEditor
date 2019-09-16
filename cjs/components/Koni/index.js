"use strict";

var _interopRequireDefault = require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _constants = require("../../common/constants");

var _Page = _interopRequireDefault(require("../Page"));

var _default2 = {
  mixins: [_Page.default],
  name: 'Koni',
  methods: {
    initPage: function initPage() {
      var editor = this.root.editor;
      editor.emit(_constants.EVENT_BEFORE_ADD_PAGE, {
        className: _constants.KONI_CLASS_NAME
      });
      this.page = new _Editor.default.Koni(this.config);
      editor.add(this.page);
      editor.emit(_constants.EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    },
    getPageId: function getPageId() {
      return "".concat(_constants.KONI_CONTAINER, "_").concat(this.root.editor.id);
    }
  },
  props: {
    data: {
      default: function _default() {
        return {
          nodes: [],
          edges: []
        };
      }
    }
  }
};
exports.default = _default2;