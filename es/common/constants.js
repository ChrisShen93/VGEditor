export var FLOW_CONTAINER = 'J_FlowContainer';
export var MIND_CONTAINER = 'J_MindContainer';
export var KONI_CONTAINER = 'J_KoniContainer';
export var TOOLBAR_CONTAINER = 'J_ToolbarContainer';
export var MINIMAP_CONTAINER = 'J_MinimapContainer';
export var CONTEXT_MENU_CONTAINER = 'J_ContextMenuContainer';
export var FLOW_CLASS_NAME = 'Flow';
export var MIND_CLASS_NAME = 'Mind';
export var KONI_CLASS_NAME = 'Koni';
export var EVENT_BEFORE_ADD_PAGE = 'beforeAddPage';
export var EVENT_AFTER_ADD_PAGE = 'afterAddPage';
export var STATUS_CANVAS_SELECTED = 'canvas-selected';
export var STATUS_NODE_SELECTED = 'node-selected';
export var STATUS_EDGE_SELECTED = 'edge-selected';
export var STATUS_GROUP_SELECTED = 'group-selected';
export var STATUS_MULTI_SELECTED = 'multi-selected';
export var GRAPH_MOUSE_REACT_EVENTS = {
  click: 'Click',
  contextmenu: 'ContextMenu',
  dblclick: 'DoubleClick',
  drag: 'Drag',
  dragend: 'DragEnd',
  dragenter: 'DragEnter',
  dragleave: 'DragLeave',
  dragstart: 'DragStart',
  drop: 'Drop',
  mousedown: 'MouseDown',
  mouseenter: 'MouseEnter',
  mouseleave: 'MouseLeave',
  mousemove: 'MouseMove',
  mouseup: 'MouseUp'
};
export var GRAPH_OTHER_REACT_EVENTS = {
  afterchange: 'onAfterChange',
  afterchangesize: 'onAfterChangeSize',
  afterviewportchange: 'onAfterViewportChange',
  beforechange: 'onBeforeChange',
  beforechangesize: 'onBeforeChangeSize',
  beforeviewportchange: 'onBeforeViewportChange',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  mousewheel: 'onMouseWheel'
};
export var PAGE_REACT_EVENTS = {
  afteritemactived: 'onAfterItemActived',
  afteriteminactivated: 'onAfterItemInactivated',
  afteritemselected: 'onAfterItemSelected',
  afteritemunactived: 'onAfterItemInactivated',
  afteritemunselected: 'onAfterItemUnselected',
  beforeitemactived: 'onBeforeItemActived',
  beforeiteminactivated: 'onBeforeItemInactivated',
  beforeitemselected: 'onBeforeItemSelected',
  beforeitemunactived: 'onBeforeItemInactivated',
  beforeitemunselected: 'onBeforeItemUnselected',
  keyUpEditLabel: 'onKeyUpEditLabel'
};
export var EDITOR_REACT_EVENTS = {
  aftercommandexecute: 'onAfterCommandExecute',
  beforecommandexecute: 'onBeforeCommandExecute'
};
export var GRAPH_MOUSE_EVENTS = Object.keys(GRAPH_MOUSE_REACT_EVENTS);
export var GRAPH_OTHER_EVENTS = Object.keys(GRAPH_OTHER_REACT_EVENTS);
export var PAGE_EVENTS = Object.keys(PAGE_REACT_EVENTS);
export var EDITOR_EVENTS = Object.keys(EDITOR_REACT_EVENTS);