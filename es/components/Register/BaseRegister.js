import _toConsumableArray from "E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/toConsumableArray";
import "core-js/modules/es6.array.map";
import Editor from "../Base/Editor";
import { upperFirst } from "../../utils";
export default {
  methods: {
    bindEvent: function bindEvent() {
      var _this = this;

      var type = this.type;
      var handleBeforeAddPage = this.root.handleBeforeAddPage;
      handleBeforeAddPage(function (_ref) {
        var _host;

        var className = _ref.className;
        var host = Editor[className];
        var keys = ['name', 'config', 'extend'];

        if (type === 'command') {
          host = Editor;
        }

        if (type === 'behaviour') {
          keys = ['name', 'behaviour', 'dependences'];
        }

        var args = keys.map(function (key) {
          return _this.$attrs[key];
        });

        (_host = host)["register".concat(upperFirst(type))].apply(_host, _toConsumableArray(args));
      });
    }
  },
  inject: ['root'],
  render: function render() {
    return null;
  }
};