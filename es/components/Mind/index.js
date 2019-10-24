import Editor from "../Base/Editor";
import { MIND_CONTAINER, MIND_CLASS_NAME, EVENT_BEFORE_ADD_PAGE, EVENT_AFTER_ADD_PAGE, GRAPH_MOUSE_EVENTS, GRAPH_OTHER_EVENTS, PAGE_EVENTS, GRAPH_MOUSE_REACT_EVENTS, GRAPH_OTHER_REACT_EVENTS, PAGE_REACT_EVENTS } from "../../common/constants";
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
      var _this = this;

      /* todo: find a way to extend from super       begin */
      var addListener = this.addListener;
      var props = this.$props || {};
      GRAPH_MOUSE_EVENTS.forEach(function (event) {
        var eventName = GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(_this.graph, "" + event, props["on" + eventName]);
        addListener(_this.graph, "node:" + event, props["onNode" + eventName]);
        addListener(_this.graph, "edge:" + event, props["onEdge" + eventName]);
        addListener(_this.graph, "group:" + event, props["onGroup" + eventName]);
        addListener(_this.graph, "guide:" + event, props["onGuide" + eventName]);
        addListener(_this.graph, "anchor:" + event, props["onAnchor" + eventName]);
      });
      GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(_this.graph, [event], props[GRAPH_OTHER_REACT_EVENTS[event]]);
      });
      PAGE_EVENTS.forEach(function (event) {
        addListener(_this.page, [event], props[PAGE_REACT_EVENTS[event]]);
      });
      /* todo: find a way to extend from super     end */

      this.bindKeyUpEditLabel();
    },
    bindKeyUpEditLabel: function bindKeyUpEditLabel() {
      var _this2 = this;

      var editLabel = this.page.get('labelTextArea');
      editLabel.on('keyup', function (e) {
        e.stopPropagation();
        var item = editLabel.focusItem;
        var text = editLabel.textContent;

        _this2.page.emit('keyUpEditLabel', {
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