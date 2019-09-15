"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.function.name");

var _default = {
  name: 'Command',
  props: {
    name: String,
    required: true
  },
  render: function render() {
    var h = arguments[0];
    var name = this.name;
    return h("div", {
      "attrs": {
        "data-command": name
      },
      "class": 'command'
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : null]);
  }
};
exports.default = _default;