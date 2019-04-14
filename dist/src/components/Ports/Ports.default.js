"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../");
var __2 = require("../../");
exports.PortsDefault = function (_a) {
    var children = _a.children, onClickAddButton = _a.onClickAddButton, node = _a.node, links = _a.links;
    var rightPorts = children.filter(function (child) { return ['right'].includes(child.props.port.type); });
    var addButton;
    if (rightPorts.length > 0) {
        var port_1 = rightPorts[0].props.port;
        var portIsConnected = links.some(function (link) {
            return (link.from.nodeId === node.id && link.from.portId === port_1.id) ||
                (link.to.nodeId === node.id && link.to.portId === port_1.id);
        });
        if (!portIsConnected) {
            addButton = React.createElement(__2.AddButton, { node: node, onClickAddButton: onClickAddButton, port: port_1 });
        }
        else {
            addButton = null;
        }
    }
    else {
        addButton = null;
    }
    return (React.createElement("div", null,
        React.createElement(__1.PortsGroupDefault, { side: "top" }, children.filter(function (child) { return ['input', 'top'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "bottom" }, children.filter(function (child) { return ['output', 'bottom'].includes(child.props.port.type); })),
        React.createElement(__1.PortsGroupDefault, { side: "right" },
            addButton,
            rightPorts),
        React.createElement(__1.PortsGroupDefault, { side: "left" }, children.filter(function (child) { return ['left'].includes(child.props.port.type); }))));
};
//# sourceMappingURL=Ports.default.js.map