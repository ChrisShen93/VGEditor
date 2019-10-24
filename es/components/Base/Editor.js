import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import GGEditorCore from 'gg-editor-core';
import { uniqueId } from "../../utils";

var Editor =
/*#__PURE__*/
function (_GGEditorCore) {
  _inheritsLoose(Editor, _GGEditorCore);

  function Editor(opt) {
    var _this;

    _this = _GGEditorCore.call(this, opt) || this;
    _this.id = uniqueId();
    return _this;
  }

  return Editor;
}(GGEditorCore);

export { Editor as default };