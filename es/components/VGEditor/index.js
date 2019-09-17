import "core-js/modules/es6.array.map";
import _toConsumableArray from "E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/toConsumableArray";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.for-each";
import Editor from "../Base/Editor";
import { EDITOR_EVENTS, EDITOR_REACT_EVENTS, EVENT_BEFORE_ADD_PAGE, EVENT_AFTER_ADD_PAGE } from "../../common/constants";
import PropsAPI from "../../common/context/PropsAPIContext/PropsAPI";
export default {
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
      this.editor.on(EVENT_BEFORE_ADD_PAGE, func);
    },
    handleAfterAddPage: function handleAfterAddPage(func) {
      var page = this.editor.getCurrentPage();

      if (page) {
        func({
          page: page
        });
        return;
      }

      this.editor.on(EVENT_AFTER_ADD_PAGE, func);
    },
    init: function init() {
      this.editor = new Editor();
      this.propsAPI = new PropsAPI(this.editor);
    },
    bindEvent: function bindEvent() {
      var _this = this;

      EDITOR_EVENTS.forEach(function (event) {
        _this.addListener(_this.editor, [event], _this[EDITOR_REACT_EVENTS[event]]);
      });
    }
  },
  props: _toConsumableArray(EDITOR_EVENTS.map(function (event) {
    return EDITOR_REACT_EVENTS[event];
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
    return h("div", [this.$slots.default]);
  }
};