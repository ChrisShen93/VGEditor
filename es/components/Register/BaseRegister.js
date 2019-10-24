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
          return _this[key];
        });

        (_host = host)["register" + upperFirst(type)].apply(_host, args);
      });
    }
  },
  inject: ['root'],
  props: {
    name: String,
    config: Object,
    extend: String,
    behaviour: Function,
    dependences: Array
  },
  render: function render() {
    return null;
  }
};