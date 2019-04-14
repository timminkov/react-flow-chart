"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
/**
 * This file contains actions for updating state after each of the required callbacks
 */
exports.onDragNode = function (event, data, id) { return function (chart) {
    var nodechart = chart.nodes[id];
    if (nodechart) {
        nodechart.position = {
            x: data.x,
            y: data.y,
        };
    }
    return chart;
}; };
exports.onDragCanvas = function (event, data) { return function (chart) {
    chart.offset.x = data.x;
    chart.offset.y = data.y;
    return chart;
}; };
exports.onLinkStart = function (_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, fromPortId = _a.fromPortId;
    return function (chart) {
        chart.links[linkId] = {
            id: linkId,
            from: {
                nodeId: fromNodeId,
                portId: fromPortId,
            },
            to: {},
        };
        return chart;
    };
};
exports.onLinkMove = function (_a) {
    var linkId = _a.linkId, toPosition = _a.toPosition;
    return function (chart) {
        chart.links[linkId].to.position = toPosition;
        return chart;
    };
};
exports.onLinkComplete = function (_a) {
    var linkId = _a.linkId, fromNodeId = _a.fromNodeId, toNodeId = _a.toNodeId, toPortId = _a.toPortId;
    return function (chart) {
        if (fromNodeId !== toPortId) {
            chart.links[linkId].to = {
                nodeId: toNodeId,
                portId: toPortId,
            };
        }
        return chart;
    };
};
exports.onLinkCancel = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        delete chart.links[linkId];
        return chart;
    };
};
exports.onLinkMouseEnter = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        // Set the link to hover
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            chart.hovered = {
                type: 'link',
                id: linkId,
            };
        }
        return chart;
    };
};
exports.onLinkMouseLeave = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        var link = chart.links[linkId];
        // Set the connected ports to hover
        if (link.to.nodeId && link.to.portId) {
            chart.hovered = {};
        }
        return chart;
    };
};
exports.onLinkClick = function (_a) {
    var linkId = _a.linkId;
    return function (chart) {
        chart.selected = {
            type: 'link',
            id: linkId,
        };
        return chart;
    };
};
exports.onCanvasClick = function () { return function (chart) {
    chart.selected = {};
    return chart;
}; };
exports.onDeleteKey = function () { return function (chart) {
    if (chart.selected.type === 'node' && chart.selected.id) {
        var node_1 = chart.nodes[chart.selected.id];
        // Delete the connected links
        Object.keys(chart.links).forEach(function (linkId) {
            var link = chart.links[linkId];
            if (link.from.nodeId === node_1.id || link.to.nodeId === node_1.id) {
                delete chart.links[link.id];
            }
        });
        // Delete the node
        delete chart.nodes[chart.selected.id];
    }
    else if (chart.selected.type === 'link' && chart.selected.id) {
        delete chart.links[chart.selected.id];
    }
    chart.selected = {};
    return chart;
}; };
exports.onNodeClick = function (_a) {
    var nodeId = _a.nodeId;
    return function (chart) {
        chart.selected = {
            type: 'node',
            id: nodeId,
        };
        return chart;
    };
};
exports.onPortPositionChange = function (nodeToUpdate, port, position) {
    return function (chart) {
        chart.nodes[nodeToUpdate.id].ports[port.id].position = {
            x: position.x,
            y: position.y,
        };
        return chart;
    };
};
exports.onCanvasDrop = function (_a) {
    var data = _a.data, position = _a.position;
    return function (chart) {
        var id = uuid_1.v4();
        chart.nodes[id] = {
            id: id,
            position: position,
            type: data.type,
            ports: data.ports,
            properties: data.properties,
        };
        return chart;
    };
};
exports.onClickAddButton = function (node, port) { return function (chart) {
    var nodeId = uuid_1.v4();
    var leftPortId = uuid_1.v4();
    var rightPortId = uuid_1.v4();
    chart.nodes[nodeId] = {
        id: nodeId,
        position: {
            x: node.position.x + 300,
            y: node.position.y
        },
        type: 'input-output',
        ports: {},
    };
    chart.nodes[nodeId].ports[rightPortId] = {
        id: rightPortId,
        type: 'right',
    };
    chart.nodes[nodeId].ports[leftPortId] = {
        id: leftPortId,
        type: 'left',
    };
    var linkId = uuid_1.v4();
    chart.links[linkId] = {
        id: linkId,
        from: {
            nodeId: node.id,
            portId: port.id,
        },
        to: {
            nodeId: nodeId,
            portId: leftPortId,
        },
    };
    return chart;
}; };
exports.onClickLinkAddButton = function (link, midpoint) { return function (chart) {
    var nodeId = uuid_1.v4();
    var leftPortId = uuid_1.v4();
    var rightPortId = uuid_1.v4();
    chart.nodes[nodeId] = {
        id: nodeId,
        position: midpoint,
        type: 'input-output',
        ports: {},
    };
    chart.nodes[nodeId].ports[rightPortId] = {
        id: rightPortId,
        type: 'right',
    };
    chart.nodes[nodeId].ports[leftPortId] = {
        id: leftPortId,
        type: 'left',
    };
    var linkId = uuid_1.v4();
    chart.links[linkId] = {
        id: linkId,
        from: {
            nodeId: link.from.nodeId,
            portId: link.from.portId,
        },
        to: {
            nodeId: nodeId,
            portId: leftPortId,
        },
    };
    var linkId2 = uuid_1.v4();
    chart.links[linkId2] = {
        id: linkId2,
        from: {
            nodeId: nodeId,
            portId: rightPortId,
        },
        to: {
            nodeId: link.to.nodeId,
            portId: link.to.portId,
        }
    };
    delete chart.links[link.id];
    return chart;
}; };
//# sourceMappingURL=actions.js.map