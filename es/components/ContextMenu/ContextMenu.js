import Editor from "../Base/Editor";
import { CONTEXT_MENU_CONTAINER } from "../../common/constants";
export default {
  name: 'ContextMenu',
  mounted: function mounted() {
    var _this = this;

    var editor = this.root.editor;
    this.getContainerId();
    this.$nextTick(function () {
      _this.contextMenu = new Editor.Contextmenu({
        container: _this.containerId
      });
      editor.add(_this.contextMenu);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.contextMenu && this.contextMenu.destroy();
    this.contextMenu = null;
  },
  methods: {
    getContainerId: function getContainerId() {
      var editor = this.root.editor;
      this.containerId = CONTEXT_MENU_CONTAINER + "_" + editor.id;
    }
  },
  inject: ['root'],
  data: function data() {
    return {
      contextMenu: null,
      containerId: ''
    };
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "id": this.containerId
      }
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default]);
  }
};