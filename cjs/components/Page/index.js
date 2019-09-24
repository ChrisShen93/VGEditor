"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.map");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/toConsumableArray"));

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _utils = require("../../utils");

var _constants = require("../../common/constants");

var _default = {
  mounted: function mounted() {
    this.init().then(this.bindEvent);
  },
  // beforeDestroy () {
  //   this.page && this.page.destroy()
  //   this.page = null
  // },
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
        (0, _utils.merge)(_this.config, _this.$props, {
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

      _constants.GRAPH_MOUSE_EVENTS.forEach(function (event) {
        var eventName = _constants.GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(graph, "".concat(event), _this2["on".concat(eventName)]);
        addListener(graph, "node:".concat(event), _this2["onNode".concat(eventName)]);
        addListener(graph, "edge:".concat(event), _this2["onEdge".concat(eventName)]);
        addListener(graph, "group:".concat(event), _this2["onGroup".concat(eventName)]);
        addListener(graph, "guide:".concat(event), _this2["onGuide".concat(eventName)]);
        addListener(graph, "anchor:".concat(event), _this2["onAnchor".concat(eventName)]);
      });

      _constants.GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(graph, event, _this2[_constants.GRAPH_OTHER_REACT_EVENTS[event]]);
      });

      _constants.PAGE_EVENTS.forEach(function (event) {
        addListener(_this2.page, event, _this2[_constants.PAGE_REACT_EVENTS[event]]);
      });
    },
    getGraph: function getGraph() {
      return this.page.getGraph();
    }
  },
  inject: ['root'],
  props: [].concat((0, _toConsumableArray2.default)(_constants.GRAPH_MOUSE_EVENTS.map(function (event) {
    var evN = _constants.GRAPH_MOUSE_REACT_EVENTS[event];
    return ["on".concat(evN), "onNode".concat(evN), "onEdge".concat(evN), "onGroup".concat(evN), "onGuide".concat(evN), "onAnchor".concat(evN)];
  }).flat()), (0, _toConsumableArray2.default)(_constants.GRAPH_OTHER_EVENTS.map(function (event) {
    return _constants.GRAPH_OTHER_REACT_EVENTS[event];
  })), (0, _toConsumableArray2.default)(_constants.PAGE_EVENTS.map(function (event) {
    return _constants.PAGE_REACT_EVENTS[event];
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
    }, [page ? this.$slots.default ? this.$slots.default : null : null]);
  }
};
exports.default = _default;