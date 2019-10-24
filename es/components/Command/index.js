export default {
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
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
};