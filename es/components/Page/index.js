import { merge } from "../../utils";
import { GRAPH_MOUSE_EVENTS, GRAPH_OTHER_EVENTS, PAGE_EVENTS, GRAPH_MOUSE_REACT_EVENTS, GRAPH_OTHER_REACT_EVENTS, PAGE_REACT_EVENTS } from "../../common/constants";
export default {
  mounted: function mounted() {
    this.init().then(this.bindEvent);
  },
  methods: {
    getPageId: function getPageId() {// should be extend
    },
    initPage: function initPage() {// should be extend
    },
    readData: function readData() {
      if (this.data) {
        this.page.read(this.data);
      }
    },
    addListener: function addListener(target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler);
    },
    init: function init() {
      var _this = this;

      return new Promise(function (resolve) {
        _this.pageId = _this.getPageId();
        merge(_this.config, _this.$props, {
          graph: {
            container: _this.pageId
          }
        });

        _this.$nextTick(function () {
          _this.initPage();

          _this.readData();

          resolve();
        });
      });
    },
    bindEvent: function bindEvent() {
      var _this2 = this;

      var addListener = this.addListener;
      var graph = this.getGraph();
      GRAPH_MOUSE_EVENTS.forEach(function (event) {
        var eventName = GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(graph, "" + event, _this2["on" + eventName]);
        addListener(graph, "node:" + event, _this2["onNode" + eventName]);
        addListener(graph, "edge:" + event, _this2["onEdge" + eventName]);
        addListener(graph, "group:" + event, _this2["onGroup" + eventName]);
        addListener(graph, "guide:" + event, _this2["onGuide" + eventName]);
        addListener(graph, "anchor:" + event, _this2["onAnchor" + eventName]);
      });
      GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(graph, [event], _this2[GRAPH_OTHER_REACT_EVENTS[event]]);
      });
      PAGE_EVENTS.forEach(function (event) {
        addListener(_this2.page, [event], _this2[PAGE_REACT_EVENTS[event]]);
      });
    },
    getGraph: function getGraph() {
      return this.page.getGraph();
    }
  },
  inject: ['root'],
  props: [].concat(GRAPH_MOUSE_EVENTS.map(function (event) {
    var evN = GRAPH_MOUSE_REACT_EVENTS[event];
    return ["on" + evN, "onNode" + evN, "onEdge" + evN, "onGroup" + evN, "onGuide" + evN, "onAnchor" + evN];
  }).flat(), GRAPH_OTHER_EVENTS.map(function (event) {
    return GRAPH_OTHER_REACT_EVENTS[event];
  }), PAGE_EVENTS.map(function (event) {
    return PAGE_REACT_EVENTS[event];
  })),
  data: function data() {
    return {
      config: {},
      page: null,
      pageId: ''
    };
  },
  render: function render() {
    var h = arguments[0];
    var page = this.page,
        pageId = this.pageId;
    return h("div", {
      "attrs": {
        "id": pageId
      },
      "style": {
        height: '100%'
      }
    }, [page ? this.$scopedSlots.default ? this.$scopedSlots.default() : this.$slots.default : null]);
  }
};