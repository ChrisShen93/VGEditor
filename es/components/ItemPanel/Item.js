import _extends from "@babel/runtime/helpers/extends";
export default {
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
        this.page.beginAdd(type, _extends({
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