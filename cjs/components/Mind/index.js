"use strict";

var _interopRequireDefault = require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _Editor = _interopRequireDefault(require("@components/Base/Editor"));

var _constants = require("@common/constants");

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
      var _this = this;

      /* todo: find a way to extend from super       begin */
      var addListener = this.addListener;
      var props = this.$props || {};

      _constants.GRAPH_MOUSE_EVENTS.forEach(function (event) {
        var eventName = _constants.GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(_this.graph, "".concat(event), props["on".concat(eventName)]);
        addListener(_this.graph, "node:".concat(event), props["onNode".concat(eventName)]);
        addListener(_this.graph, "edge:".concat(event), props["onEdge".concat(eventName)]);
        addListener(_this.graph, "group:".concat(event), props["onGroup".concat(eventName)]);
        addListener(_this.graph, "guide:".concat(event), props["onGuide".concat(eventName)]);
        addListener(_this.graph, "anchor:".concat(event), props["onAnchor".concat(eventName)]);
      });

      _constants.GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(_this.graph, [event], props[_constants.GRAPH_OTHER_REACT_EVENTS[event]]);
      });

      _constants.PAGE_EVENTS.forEach(function (event) {
        addListener(_this.page, [event], props[_constants.PAGE_REACT_EVENTS[event]]);
      });
      /* todo: find a way to extend from super     end */


      this.bindKeyUpEditLabel();
    },
    bindKeyUpEditLabel: function bindKeyUpEditLabel() {
      var _this2 = this;

      var editLabel = this.page.get('labelTextArea');
      editLabel.on('keyup', function (e) {
        e.stopPropagation();
        var item = editLabel.focusItem;
        var text = editLabel.textContent;

        _this2.page.emit('keyUpEditLabel', {
          item: item,
          text: text
        });
      });
    },
    getPageId: function getPageId() {
      return "".concat(_constants.MIND_CONTAINER, "_").concat(this.root.editor.id);
    }
  },
  props: {
    data: {
      default: function _default() {
        return {
          roots: []
        };
      }
    }
  }
};
exports.default = _default2;