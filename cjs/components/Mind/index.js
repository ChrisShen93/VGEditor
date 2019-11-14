"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _constants = require("../../common/constants");

var _Page = _interopRequireDefault(require("../Page"));

var _default2 = {
  mixins: [_Page.default],
  name: 'Mind',
  methods: {
    initPage: function initPage() {
      var editor = this.root.editor;
      editor.emit(_constants.EVENT_BEFORE_ADD_PAGE, {
        className: _constants.MIND_CLASS_NAME
      });
      this.page = new _Editor.default.Mind(this.config);
      editor.add(this.page);
      editor.emit(_constants.EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    },
    bindEvent: function bindEvent() {
      _Page.default.methods.bindEvent.call(this);

      this.bindKeyUpEditLabel();
    },
    bindKeyUpEditLabel: function bindKeyUpEditLabel() {
      var _this = this;

      var editLabel = this.page.get('labelTextArea');
      editLabel.on('keyup', function (e) {
        e.stopPropagation();
        var item = editLabel.focusItem;
        var text = editLabel.textContent;

        _this.page.emit('keyUpEditLabel', {
          item: item,
          text: text
        });
      });
    },
    getPageId: function getPageId() {
      return _constants.MIND_CONTAINER + "_" + this.root.editor.id;
    }
  },
  props: {
    data: {
      default: function _default() {
        return {
          roots: []
        };
      }
    },
    graph: Object,
    shortcut: Object
  }
};
exports.default = _default2;