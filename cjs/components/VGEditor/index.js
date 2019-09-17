"use strict";

var _interopRequireDefault = require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.map");

var _toConsumableArray2 = _interopRequireDefault(require("E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/toConsumableArray"));

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _Editor = _interopRequireDefault(require("../Base/Editor"));

var _constants = require("../../common/constants");

var _PropsAPI = _interopRequireDefault(require("../../common/context/PropsAPIContext/PropsAPI"));

var _default = {
  name: 'VGEditor',
  created: function created() {
    this.init();
    this.bindEvent();
  },
  beforeDestroy: function beforeDestroy() {
    this.editor && this.editor.destroy();
    this.propsAPI = null;
  },
  methods: {
    addListener: function addListener(target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler);
    },
    handleBeforeAddPage: function handleBeforeAddPage(func) {
      this.editor.on(_constants.EVENT_BEFORE_ADD_PAGE, func);
    },
    handleAfterAddPage: function handleAfterAddPage(func) {
      var page = this.editor.getCurrentPage();

      if (page) {
        func({
          page: page
        });
        return;
      }

      this.editor.on(_constants.EVENT_AFTER_ADD_PAGE, func);
    },
    init: function init() {
      this.editor = new _Editor.default();
      this.propsAPI = new _PropsAPI.default(this.editor);
    },
    bindEvent: function bindEvent() {
      var _this = this;

      _constants.EDITOR_EVENTS.forEach(function (event) {
        _this.addListener(_this.editor, [event], _this[_constants.EDITOR_REACT_EVENTS[event]]);
      });
    }
  },
  props: (0, _toConsumableArray2.default)(_constants.EDITOR_EVENTS.map(function (event) {
    return _constants.EDITOR_REACT_EVENTS[event];
  })),
  data: function data() {
    return {
      editor: null,
      propsAPI: null
    };
  },
  provide: function provide() {
    return {
      root: this
    };
  },
  render: function render() {
    var h = arguments[0];
    return h("div", [this.$scopedSlots.default ? this.$scopedSlots.default() : null]);
  }
};
exports.default = _default;