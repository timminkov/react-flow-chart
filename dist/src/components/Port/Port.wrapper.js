"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var uuid_1 = require("uuid");
var Port_default_1 = require("./Port.default");
/** Construct the composed path by traversing parentElements */
var composedPath = function (el) {
    var path = [];
    while (el) {
        path.push(el);
        el = el.parentElement;
    }
    return path;
};
var PortWrapper = /** @class */ (function (_super) {
    __extends(PortWrapper, _super);
    function PortWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getNodRef = function (el) {
            if (el) {
                var _a = _this.props, node = _a.node, port = _a.port, onPortPositionChange = _a.onPortPositionChange;
                _this.nodeRef = el;
                // Ports component should be positions absolute
                // Factor this in so we get position relative to the node
                var nodesEl = el.parentElement
                    ? el.parentElement
                    : { offsetLeft: 0, offsetTop: 0 };
                var position = {
                    x: el.offsetLeft + nodesEl.offsetLeft + el.offsetWidth / 2,
                    y: el.offsetTop + nodesEl.offsetTop + el.offsetHeight / 2,
                };
                onPortPositionChange(node, port, position);
            }
        };
        _this.onMouseDown = function (startEvent) {
            var _a = _this.props, chart = _a.chart, node = _a.node, port = _a.port, onLinkStart = _a.onLinkStart, onLinkCancel = _a.onLinkCancel, onLinkComplete = _a.onLinkComplete, onLinkMove = _a.onLinkMove;
            var linkId = uuid_1.v4();
            var fromNodeId = node.id;
            var fromPortId = port.id;
            // Create the move handler
            // This will update the position as the mouse moves
            var mouseMoveHandler = function (e) {
                onLinkMove({
                    linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId,
                    toPosition: {
                        x: e.clientX - chart.offset.x,
                        y: e.clientY - chart.offset.y,
                    },
                });
            };
            // Create and bind the mouse up handler
            // This is used to check if the link is complete or cancelled
            var mouseUpHandler = function (e) {
                // We traverse up the event path until we find an element with 'data-port-id' and data-node-id'
                // e.toElement cannot be used because it may be a child element of the port
                var path = composedPath(e.target);
                var portEl = path.find(function (el) {
                    var toPortId = el.getAttribute && el.getAttribute('data-port-id');
                    var toNodeId = el.getAttribute && el.getAttribute('data-node-id');
                    return !!(toPortId && toNodeId);
                });
                // If both node-id and port-id are defined as data attributes, we are mouse-upping
                // on another port. Run the success handler
                if (portEl) {
                    var toPortId = portEl.getAttribute('data-port-id');
                    var toNodeId = portEl.getAttribute('data-node-id');
                    onLinkComplete({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId, toNodeId: toNodeId, toPortId: toPortId });
                }
                else {
                    onLinkCancel({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
                }
                // Remove the listeners if the link is complete or canceled
                window.removeEventListener('mouseup', mouseUpHandler, false);
                window.removeEventListener('mousemove', mouseMoveHandler, false);
            };
            // Add listeners
            window.addEventListener('mouseup', mouseUpHandler, false);
            window.addEventListener('mousemove', mouseMoveHandler, false);
            // Notify state of link start
            onLinkStart({ linkId: linkId, startEvent: startEvent, fromNodeId: fromNodeId, fromPortId: fromPortId });
            // Prevent default and stop propagation to prevent text selection
            startEvent.preventDefault();
            startEvent.stopPropagation();
        };
        return _this;
    }
    PortWrapper.prototype.render = function () {
        var _a = this.props, chart = _a.chart, style = _a.style, port = _a.port, node = _a.node, _b = _a.Component, Component = _b === void 0 ? Port_default_1.PortDefault : _b;
        var selectedLink = chart.selected.type === 'link' && chart.selected.id && chart.links[chart.selected.id];
        var hoveredLink = chart.selected.type === 'link' && chart.selected.id && chart.links[chart.selected.id];
        return (React.createElement("div", { "data-port-id": port.id, "data-node-id": node.id, onMouseDown: this.onMouseDown, ref: this.getNodRef, style: style },
            React.createElement(Component, { port: port, isSelected: chart.selected.type === 'port' && chart.selected.id === port.id, isHovered: chart.hovered.type === 'port' && chart.hovered.id === port.id, isLinkSelected: selectedLink
                    ? ((selectedLink.from.portId === port.id && selectedLink.from.nodeId === node.id) ||
                        (selectedLink.to.portId === port.id && selectedLink.to.nodeId === node.id))
                    : false, isLinkHovered: hoveredLink
                    ? ((hoveredLink.from.portId === port.id && hoveredLink.from.nodeId === node.id) ||
                        (hoveredLink.to.portId === port.id && hoveredLink.to.nodeId === node.id))
                    : false })));
    };
    return PortWrapper;
}(React.Component));
exports.PortWrapper = PortWrapper;
//# sourceMappingURL=Port.wrapper.js.map