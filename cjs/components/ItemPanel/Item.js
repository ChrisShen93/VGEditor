"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _default2 = {
  name: 'Item',
  created: function created() {
    this.bindEvent();
  },
  methods: {
    bindEvent: function bindEvent() {
      var _this = this;

      this.root.handleAfterAddPage(function (_ref) {
        var page = _ref.page;
        _this.page = page;
      });
    },
    handleMouseDown: function handleMouseDown() {
      var type = this.type,
          size = this.size,
          shape = this.shape,
          model = this.model;

      if (this.page) {
        this.page.beginAdd(type, (0, _extends2.default)({
          type: type,
          size: size,
          shape: shape
        }, model));
      }
    }
  },
  inject: ['root'],
  props: {
    type: {
      type: String,
      default: 'node'
    },
    size: String,
    shape: String,
    src: String,
    model: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      page: null
    };
  },
  render: function render() {
    var h = arguments[0];
    var src = this.src,
        shape = this.shape;
    return h("div", {
      "style": {
        cursor: 'pointer'
      },
      "on": {
        "mousedown": this.handleMouseDown
      }
    }, [src ? h("img", {
      "attrs": {
        "src": src,
        "alt": shape,
        "draggable": false
      }
    }) : this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
};
exports.default = _default2;