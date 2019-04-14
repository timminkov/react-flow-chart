"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../");
exports.LinkDefault = function (_a) {
    var link = _a.link, startPos = _a.startPos, endPos = _a.endPos, onLinkMouseEnter = _a.onLinkMouseEnter, onLinkMouseLeave = _a.onLinkMouseLeave, onLinkClick = _a.onLinkClick, isHovered = _a.isHovered, isSelected = _a.isSelected, onClickLinkAddButton = _a.onClickLinkAddButton;
    var points = __1.generateCurvePath(startPos, endPos);
    var midpoint = { x: (startPos.x + endPos.x) / 2, y: (startPos.y + endPos.y) / 2 };
    return (React.createElement("svg", { style: { overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 } },
        React.createElement("circle", { r: "4", cx: startPos.x, cy: startPos.y, fill: "cornflowerblue" }),
        React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "3", fill: "none" }),
        React.createElement("path", { d: points, stroke: "cornflowerblue", strokeWidth: "20", fill: "none", strokeLinecap: "round", strokeOpacity: (isHovered || isSelected) ? 0.1 : 0, onMouseEnter: function () { return onLinkMouseEnter({ linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ linkId: link.id }); }, onClick: function (e) {
                onLinkClick({ linkId: link.id });
                e.stopPropagation();
            } }),
        (isHovered || isSelected) &&
            React.createElement("circle", { r: "6", cx: midpoint.x, cy: midpoint.y, fill: "red", onMouseEnter: function () { return onLinkMouseEnter({ linkId: link.id }); }, onMouseLeave: function () { return onLinkMouseLeave({ linkId: link.id }); }, onClick: function (e) {
                    onClickLinkAddButton(link, midpoint);
                    e.stopPropagation();
                } }),
        React.createElement("circle", { r: "4", cx: endPos.x, cy: endPos.y, fill: "cornflowerblue" })));
};
//# sourceMappingURL=Link.default.js.map