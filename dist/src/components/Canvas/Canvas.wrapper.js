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
var react_draggable_1 = require("react-draggable");
var __1 = require("../../");
var CanvasWrapper = /** @class */ (function (_super) {
    __extends(CanvasWrapper, _super);
    function CanvasWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanvasWrapper.prototype.render = function () {
        var _a = this.props, ComponentInner = _a.ComponentInner, ComponentOuter = _a.ComponentOuter, position = _a.position, onDragCanvas = _a.onDragCanvas, children = _a.children, onCanvasClick = _a.onCanvasClick, onDeleteKey = _a.onDeleteKey, onCanvasDrop = _a.onCanvasDrop;
        return (React.createElement(ComponentOuter, null,
            React.createElement(react_draggable_1.default, { axis: "both", position: position, grid: [1, 1], onDrag: function (e, dragData) { return onDragCanvas(e, dragData); } },
                React.createElement(ComponentInner, { children: children, onClick: onCanvasClick, tabIndex: 0, onKeyDown: function (e) {
                        if (e.keyCode === 46) {
                            onDeleteKey();
                        }
                    }, onDrop: function (e) {
                        var data = JSON.parse(e.dataTransfer.getData(__1.REACT_FLOW_CHART));
                        onCanvasDrop({ data: data, position: {
                                x: e.clientX - position.x,
                                y: e.clientY - position.y,
                            } });
                    }, onDragOver: function (e) {
                        e.preventDefault();
                    } }))));
    };
    return CanvasWrapper;
}(React.Component));
exports.CanvasWrapper = CanvasWrapper;
//# sourceMappingURL=Canvas.wrapper.js.map