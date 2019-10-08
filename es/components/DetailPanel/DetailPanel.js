import { STATUS_CANVAS_SELECTED } from "../../common/constants";
import { uniqueId } from "../../utils";
export default {
  name: 'DetailPanel',
  created: function created() {
    this.bindEvent();
  },
  methods: {
    bindEvent: function bindEvent() {
      var _this = this;

      this.root.handleAfterAddPage(function (_ref) {
        var page = _ref.page;
        _this.status = STATUS_CANVAS_SELECTED;
        page.on('statuschange', function (_ref2) {
          var status = _ref2.status;
          _this.status = status;
          _this.uniqueId = uniqueId();
        });
      });
    }
  },
  inject: ['root'],
  data: function data() {
    return {
      status: '',
      uniqueId: ''
    };
  },
  render: function render() {
    var h = arguments[0];
    var status = this.status,
        uniqueId = this.uniqueId;

    if (!status) {
      return null;
    }

    return h("div", {
      "key": uniqueId
    }, [this.$scopedSlots.default ? this.$scopedSlots.default({
      status: status,
      uniqueId: uniqueId
    }) : this.$slots.default]);
  }
};