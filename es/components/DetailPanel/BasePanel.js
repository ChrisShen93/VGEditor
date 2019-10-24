export default {
  props: ['status'],
  data: function data() {
    return {
      type: ''
    };
  },
  render: function render() {
    var h = arguments[0];
    var type = this.type,
        status = this.status;

    if (type + "-selected" !== status) {
      return null;
    }

    return h("div", [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
};