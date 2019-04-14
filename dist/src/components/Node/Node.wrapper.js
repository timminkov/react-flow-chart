"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_draggable_1 = require("react-draggable");
var Node_default_1 = require("./Node.default");
exports.NodeWrapper = function (_a) {
    var node = _a.node, onDragNode = _a.onDragNode, children = _a.children, onNodeClick = _a.onNodeClick, selected = _a.selected, _b = _a.Component, Component = _b === void 0 ? Node_default_1.NodeDefault : _b;
    return (React.createElement(react_draggable_1.default, { bounds: "parent", axis: "both", position: node.position, grid: [1, 1], onStart: function (e) {
            // Stop propagation so the canvas does not move
            e.stopPropagation();
        }, onDrag: function (e, dragData) { return onDragNode(e, dragData, node.id); } },
        React.createElement(Component, { children: children, onClick: function (e) {
                onNodeClick({ nodeId: node.id });
                e.stopPropagation();
            }, isSelected: selected.type === 'node' && selected.id === node.id, node: node })));
};
//# sourceMappingURL=Node.wrapper.js.map