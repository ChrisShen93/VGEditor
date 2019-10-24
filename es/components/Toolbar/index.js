import Editor from "../Base/Editor";
import { TOOLBAR_CONTAINER } from "../../common/constants";
export default {
  name: 'Toolbar',
  created: function created() {
    this.getContainerId();
  },
  mounted: function mounted() {
    var _this = this;

    var _this$root = this.root,
        editor = _this$root.editor,
        handleAfterAddPage = _this$root.handleAfterAddPage;
    handleAfterAddPage(function () {
      _this.toolbar = new Editor.Toolbar({
        container: _this.containerId
      });
      editor.add(_this.toolbar);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.toolbar && this.toolbar.destroy();
    this.toolbar = null;
  },
  methods: {
    getContainerId: function getContainerId() {
      var editor = this.root.editor;
      this.containerId = TOOLBAR_CONTAINER + "_" + editor.id;
    }
  },
  inject: ['root'],
  data: function data() {
    return {
      containerId: '',
      toolbar: null
    };
  },
  render: function render() {
    var h = arguments[0];
    var containerId = this.containerId;
    return h("div", {
      "attrs": {
        "id": containerId
      }
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
};