import Editor from "../Base/Editor";
import { MIND_CONTAINER, MIND_CLASS_NAME, EVENT_BEFORE_ADD_PAGE, EVENT_AFTER_ADD_PAGE } from "../../common/constants";
import Page from "../Page";
export default {
  mixins: [Page],
  name: 'Mind',
  methods: {
    initPage: function initPage() {
      var editor = this.root.editor;
      editor.emit(EVENT_BEFORE_ADD_PAGE, {
        className: MIND_CLASS_NAME
      });
      this.page = new Editor.Mind(this.config);
      editor.add(this.page);
      editor.emit(EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    },
    bindEvent: function bindEvent() {
      Page.methods.bindEvent.call(this);
      this.bindKeyUpEditLabel();
    },
    bindKeyUpEditLabel: function bindKeyUpEditLabel() {
      var _this = this;

      var editLabel = this.page.get('labelTextArea');
      editLabel.on('keyup', function (e) {
        e.stopPropagation();
        var item = editLabel.focusItem;
        var text = editLabel.textContent;

        _this.page.emit('keyUpEditLabel', {
          item: item,
          text: text
        });
      });
    },
    getPageId: function getPageId() {
      return MIND_CONTAINER + "_" + this.root.editor.id;
    }
  },
  props: {
    data: {
      default: function _default() {
        return {
          roots: []
        };
      }
    },
    graph: Object,
    shortcut: Object
  }
};