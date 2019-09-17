import "core-js/modules/es6.array.map";
import _toConsumableArray from "E:\\workspace\\VGEditor\\node_modules\\@babel\\runtime-corejs2/helpers/esm/toConsumableArray";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.for-each";
import { merge } from "../../utils";
import { GRAPH_MOUSE_EVENTS, GRAPH_OTHER_EVENTS, PAGE_EVENTS, GRAPH_MOUSE_REACT_EVENTS, GRAPH_OTHER_REACT_EVENTS, PAGE_REACT_EVENTS } from "../../common/constants";
export default {
  mounted: function mounted() {
    this.init().then(this.bindEvent);
  },
  beforeDestroy: function beforeDestroy() {
    this.page && this.page.destroy();
    this.page = null;
  },
  methods: {
    getPageId: function getPageId() {// should be extend
    },
    initPage: function initPage() {// should be extend
    },
    readData: function readData() {
      var data = this.config.data;

      if (data) {
        this.page.read(data);
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
        addListener(graph, "".concat(event), _this2["on".concat(eventName)]);
        addListener(graph, "node:".concat(event), _this2["onNode".concat(eventName)]);
        addListener(graph, "edge:".concat(event), _this2["onEdge".concat(eventName)]);
        addListener(graph, "group:".concat(event), _this2["onGroup".concat(eventName)]);
        addListener(graph, "guide:".concat(event), _this2["onGuide".concat(eventName)]);
        addListener(graph, "anchor:".concat(event), _this2["onAnchor".concat(eventName)]);
      });
      GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(_this2.graph, [event], _this2[GRAPH_OTHER_REACT_EVENTS[event]]);
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
  props: [].concat(_toConsumableArray(GRAPH_MOUSE_EVENTS.map(function (event) {
    var evN = GRAPH_MOUSE_REACT_EVENTS[event];
    return ["on".concat(evN), "onNode".concat(evN), "onEdge".concat(evN), "onGroup".concat(evN), "onGuide".concat(evN), "onAnchor".concat(evN)];
  }).flat()), _toConsumableArray(GRAPH_OTHER_EVENTS.map(function (event) {
    return GRAPH_OTHER_REACT_EVENTS[event];
  })), _toConsumableArray(PAGE_EVENTS.map(function (event) {
    return PAGE_REACT_EVENTS[event];
  }))),
  watch: {
    data: {
      deep: true,
      handler: function handler(value) {
        var _this3 = this;

        this.$nextTick(function () {
          _this3.page.read(value);
        });
      }
    }
  },
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
    }, [page ? this.$scopedSlots.default ? this.$scopedSlots.default() : null : null]);
  }
};