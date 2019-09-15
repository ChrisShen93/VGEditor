"use strict";

var _interopRequireDefault = require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.object.keys");

var _defineProperty2 = _interopRequireDefault(require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        this.page.beginAdd(type, _objectSpread({
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
    }) : this.$scopedSlots.default ? this.$scopedSlots.default() : null]);
  }
};
exports.default = _default2;