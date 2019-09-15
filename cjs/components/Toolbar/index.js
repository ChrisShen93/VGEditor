"use strict";

var _interopRequireDefault = require("/Users/chris/Workspace/VGEditor/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Editor = _interopRequireDefault(require("@components/Base/Editor"));

var _constants = require("@common/constants");

var _default = {
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
      _this.toolbar = new _Editor.default.Toolbar({
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
      this.containerId = "".concat(_constants.TOOLBAR_CONTAINER, "_").concat(editor.id);
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
    }, [this.$scopedSlots.default ? this.$scopedSlots.default() : null]);
  }
};
exports.default = _default;