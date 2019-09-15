"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      type: ''
    };
  },
  render: function render() {
    var h = arguments[0];
    var type = this.type;
    return h("div", {
      "class": 'menu',
      "attrs": {
        "data-status": "".concat(type, "-selected")
      }
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : null]);
  }
};
exports.default = _default;