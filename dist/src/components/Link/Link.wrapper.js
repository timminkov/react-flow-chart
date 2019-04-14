"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Link_default_1 = require("./Link.default");
var utils_1 = require("./utils");
exports.LinkWrapper = function (_a) {
    var _b = _a.Component, Component = _b === void 0 ? Link_default_1.LinkDefault : _b, link = _a.link, chart = _a.chart, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, onClickLinkAddButton = _a.onClickLinkAddButton;
    var startPos = utils_1.getLinkPosition(chart, link.from.nodeId, link.from.portId);
    var endPos = link.to.nodeId && link.to.portId
        ? utils_1.getLinkPosition(chart, link.to.nodeId, link.to.portId)
        : link.to.position;
    // Don't render the link yet if there is no end pos
    // This will occur if the link was just created
    if (!endPos) {
        return null;
    }
    return (React.createElement(Component, { link: link, startPos: startPos, endPos: endPos, onLinkMouseEnter: onLinkMouseEnter, onLinkMouseLeave: onLinkMouseLeave, onLinkClick: onLinkClick, isSelected: chart.selected.type === 'link' && chart.selected.id === link.id, isHovered: chart.hovered.type === 'link' && chart.hovered.id === link.id, onClickLinkAddButton: onClickLinkAddButton }));
};
//# sourceMappingURL=Link.wrapper.js.map