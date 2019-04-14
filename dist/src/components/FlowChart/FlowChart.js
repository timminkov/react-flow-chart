"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../");
exports.FlowChart = function (props) {
    var chart = props.chart, _a = props.callbacks, onDragNode = _a.onDragNode, onDragCanvas = _a.onDragCanvas, onCanvasDrop = _a.onCanvasDrop, onLinkStart = _a.onLinkStart, onLinkMove = _a.onLinkMove, onLinkComplete = _a.onLinkComplete, onLinkCancel = _a.onLinkCancel, onPortPositionChange = _a.onPortPositionChange, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, onCanvasClick = _a.onCanvasClick, onDeleteKey = _a.onDeleteKey, onNodeClick = _a.onNodeClick, onClickAddButton = _a.onClickAddButton, onClickLinkAddButton = _a.onClickLinkAddButton, _b = props.Components, _c = _b === void 0 ? {} : _b, _d = _c.CanvasOuter, CanvasOuter = _d === void 0 ? __1.CanvasOuterDefault : _d, _e = _c.CanvasInner, CanvasInner = _e === void 0 ? __1.CanvasInnerDefault : _e, _f = _c.NodeInner, NodeInner = _f === void 0 ? __1.NodeInnerDefault : _f, _g = _c.Ports, Ports = _g === void 0 ? __1.PortsDefault : _g, _h = _c.Port, Port = _h === void 0 ? __1.PortDefault : _h, _j = _c.Node, Node = _j === void 0 ? __1.NodeDefault : _j, _k = _c.Link, Link = _k === void 0 ? __1.LinkDefault : _k;
    var links = chart.links, nodes = chart.nodes, selected = chart.selected;
    var canvasCallbacks = { onDragCanvas: onDragCanvas, onCanvasClick: onCanvasClick, onDeleteKey: onDeleteKey, onCanvasDrop: onCanvasDrop };
    var linkCallbacks = { onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave, onLinkClick: onLinkClick, onClickLinkAddButton: onClickLinkAddButton };
    var nodeCallbacks = { onDragNode: onDragNode, onNodeClick: onNodeClick };
    var portCallbacks = { onPortPositionChange: onPortPositionChange, onLinkStart: onLinkStart, onLinkMove: onLinkMove, onLinkComplete: onLinkComplete, onLinkCancel: onLinkCancel };
    return (React.createElement(__1.CanvasWrapper, __assign({ position: chart.offset, ComponentInner: CanvasInner, ComponentOuter: CanvasOuter }, canvasCallbacks),
        Object.keys(links).map(function (linkId) { return (React.createElement(__1.LinkWrapper, __assign({ chart: chart, key: linkId, link: links[linkId], Component: Link }, linkCallbacks))); }),
        Object.keys(nodes).map(function (nodeId) { return (React.createElement(__1.NodeWrapper, __assign({ key: nodeId, node: nodes[nodeId], selected: selected, Component: Node }, nodeCallbacks),
            React.createElement(NodeInner, { node: nodes[nodeId] }),
            React.createElement(Ports, { links: Object.values(links), onClickAddButton: onClickAddButton, node: nodes[nodeId] }, Object.keys(nodes[nodeId].ports).map(function (portId) { return (React.createElement(__1.PortWrapper, __assign({ key: portId, chart: chart, node: nodes[nodeId], port: nodes[nodeId].ports[portId], Component: Port }, portCallbacks))); })))); })));
};
//# sourceMappingURL=FlowChart.js.map