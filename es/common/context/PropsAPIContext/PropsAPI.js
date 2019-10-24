import _createClass from "@babel/runtime/helpers/createClass";

var PropsAPI =
/*#__PURE__*/
function () {
  function PropsAPI(editor) {
    var _this = this;

    this.editor = null;
    this.editor = editor;
    ['executeCommand'].forEach(function (key) {
      _this[key] = function () {
        var _this$editor;

        return (_this$editor = _this.editor)[key].apply(_this$editor, arguments);
      };
    });
    ['read', 'save', 'add', 'find', 'update', 'remove', 'getSelected'].forEach(function (key) {
      _this[key] = function () {
        var _this$currentPage;

        return (_this$currentPage = _this.currentPage)[key].apply(_this$currentPage, arguments);
      };
    });
  }

  _createClass(PropsAPI, [{
    key: "currentPage",
    get: function get() {
      return this.editor.getCurrentPage();
    }
  }]);

  return PropsAPI;
}();

export { PropsAPI as default };