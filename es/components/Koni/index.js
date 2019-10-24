import Editor from "../Base/Editor";
import { KONI_CONTAINER, KONI_CLASS_NAME, EVENT_BEFORE_ADD_PAGE, EVENT_AFTER_ADD_PAGE } from "../../common/constants";
import Page from "../Page";
export default {
  mixins: [Page],
  name: 'Koni',
  methods: {
    initPage: function initPage() {
      var editor = this.root.editor;
      editor.emit(EVENT_BEFORE_ADD_PAGE, {
        className: KONI_CLASS_NAME
      });
      this.page = new Editor.Koni(this.config);
      editor.add(this.page);
      editor.emit(EVENT_AFTER_ADD_PAGE, {
        page: this.page
      });
    },
    getPageId: function getPageId() {
      return KONI_CONTAINER + "_" + this.root.editor.id;
    }
  },
  props: {
    data: {
      default: function _default() {
        return {
          nodes: [],
          edges: []
        };
      }
    },
    graph: Object,
    align: Object,
    grid: Object,
    shortcut: Object,
    noEndEdge: {
      default: true,
      type: Boolean
    }
  }
};