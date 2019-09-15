"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _utils = require("@utils");

var _constants = require("@common/constants");

var _default = {
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
      var props = this.$props || {};

      _constants.GRAPH_MOUSE_EVENTS.forEach(function (event) {
        var eventName = _constants.GRAPH_MOUSE_REACT_EVENTS[event];
        addListener(_this2.graph, "".concat(event), props["on".concat(eventName)]);
        addListener(_this2.graph, "node:".concat(event), props["onNode".concat(eventName)]);
        addListener(_this2.graph, "edge:".concat(event), props["onEdge".concat(eventName)]);
        addListener(_this2.graph, "group:".concat(event), props["onGroup".concat(eventName)]);
        addListener(_this2.graph, "guide:".concat(event), props["onGuide".concat(eventName)]);
        addListener(_this2.graph, "anchor:".concat(event), props["onAnchor".concat(eventName)]);
      });

      _constants.GRAPH_OTHER_EVENTS.forEach(function (event) {
        addListener(_this2.graph, [event], props[_constants.GRAPH_OTHER_REACT_EVENTS[event]]);
      });

      _constants.PAGE_EVENTS.forEach(function (event) {
        addListener(_this2.page, [event], props[_constants.PAGE_REACT_EVENTS[event]]);
      });
    }
  },
  inject: ['root'],
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
exports.default = _default;