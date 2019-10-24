export default {
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
        "data-status": type + "-selected"
      }
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
};