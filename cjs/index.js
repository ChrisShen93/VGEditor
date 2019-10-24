"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Flow", {
  enumerable: true,
  get: function get() {
    return _Flow.default;
  }
});
Object.defineProperty(exports, "Koni", {
  enumerable: true,
  get: function get() {
    return _Koni.default;
  }
});
Object.defineProperty(exports, "Mind", {
  enumerable: true,
  get: function get() {
    return _Mind.default;
  }
});
Object.defineProperty(exports, "Command", {
  enumerable: true,
  get: function get() {
    return _Command.default;
  }
});
Object.defineProperty(exports, "ItemPanel", {
  enumerable: true,
  get: function get() {
    return _ItemPanel.default;
  }
});
Object.defineProperty(exports, "Item", {
  enumerable: true,
  get: function get() {
    return _ItemPanel.Item;
  }
});
Object.defineProperty(exports, "DetailPanel", {
  enumerable: true,
  get: function get() {
    return _DetailPanel.default;
  }
});
Object.defineProperty(exports, "NodePanel", {
  enumerable: true,
  get: function get() {
    return _DetailPanel.NodePanel;
  }
});
Object.defineProperty(exports, "EdgePanel", {
  enumerable: true,
  get: function get() {
    return _DetailPanel.EdgePanel;
  }
});
Object.defineProperty(exports, "GroupPanel", {
  enumerable: true,
  get: function get() {
    return _DetailPanel.GroupPanel;
  }
});
Object.defineProperty(exports, "MultiPanel", {
  enumerable: true,
  get: function get() {
    return _DetailPanel.MultiPanel;
  }
});
Object.defineProperty(exports, "CanvasPanel", {
  enumerable: true,
  get: function get() {
    return _DetailPanel.CanvasPanel;
  }
});
Object.defineProperty(exports, "Minimap", {
  enumerable: true,
  get: function get() {
    return _Minimap.default;
  }
});
Object.defineProperty(exports, "ContextMenu", {
  enumerable: true,
  get: function get() {
    return _ContextMenu.default;
  }
});
Object.defineProperty(exports, "NodeMenu", {
  enumerable: true,
  get: function get() {
    return _ContextMenu.NodeMenu;
  }
});
Object.defineProperty(exports, "EdgeMenu", {
  enumerable: true,
  get: function get() {
    return _ContextMenu.EdgeMenu;
  }
});
Object.defineProperty(exports, "GroupMenu", {
  enumerable: true,
  get: function get() {
    return _ContextMenu.GroupMenu;
  }
});
Object.defineProperty(exports, "MultiMenu", {
  enumerable: true,
  get: function get() {
    return _ContextMenu.MultiMenu;
  }
});
Object.defineProperty(exports, "CanvasMenu", {
  enumerable: true,
  get: function get() {
    return _ContextMenu.CanvasMenu;
  }
});
Object.defineProperty(exports, "Toolbar", {
  enumerable: true,
  get: function get() {
    return _Toolbar.default;
  }
});
Object.defineProperty(exports, "RegisterNode", {
  enumerable: true,
  get: function get() {
    return _Register.RegisterNode;
  }
});
Object.defineProperty(exports, "RegisterEdge", {
  enumerable: true,
  get: function get() {
    return _Register.RegisterEdge;
  }
});
Object.defineProperty(exports, "RegisterGroup", {
  enumerable: true,
  get: function get() {
    return _Register.RegisterGroup;
  }
});
Object.defineProperty(exports, "RegisterGuide", {
  enumerable: true,
  get: function get() {
    return _Register.RegisterGuide;
  }
});
Object.defineProperty(exports, "RegisterCommand", {
  enumerable: true,
  get: function get() {
    return _Register.RegisterCommand;
  }
});
Object.defineProperty(exports, "RegisterBehaviour", {
  enumerable: true,
  get: function get() {
    return _Register.RegisterBehaviour;
  }
});
exports.default = void 0;

var _VGEditor = _interopRequireDefault(require("./components/VGEditor"));

var _Flow = _interopRequireDefault(require("./components/Flow"));

var _Koni = _interopRequireDefault(require("./components/Koni"));

var _Mind = _interopRequireDefault(require("./components/Mind"));

var _Command = _interopRequireDefault(require("./components/Command"));

var _ItemPanel = _interopRequireWildcard(require("./components/ItemPanel"));

var _DetailPanel = _interopRequireWildcard(require("./components/DetailPanel"));

var _Minimap = _interopRequireDefault(require("./components/Minimap"));

var _ContextMenu = _interopRequireWildcard(require("./components/ContextMenu"));

var _Toolbar = _interopRequireDefault(require("./components/Toolbar"));

var _Register = require("./components/Register");

var _default = _VGEditor.default;
exports.default = _default;