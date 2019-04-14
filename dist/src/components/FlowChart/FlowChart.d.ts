import * as React from 'react';
import { ICanvasInnerDefaultProps, ICanvasOuterDefaultProps, IChart, ILinkDefaultProps, INodeDefaultProps, INodeInnerDefaultProps, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragNode, IOnLinkCancel, IOnLinkClick, IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkMove, IOnLinkStart, IOnNodeClick, IOnPortPositionChange, IPortDefaultProps, IPortsDefaultProps, IOnClickAddButton, IOnClickLinkAddButton } from '../../';
export interface IFlowChartCallbacks {
    onDragNode: IOnDragNode;
    onDragCanvas: IOnDragCanvas;
    onCanvasDrop: IOnCanvasDrop;
    onLinkStart: IOnLinkStart;
    onLinkMove: IOnLinkMove;
    onLinkComplete: IOnLinkComplete;
    onLinkCancel: IOnLinkCancel;
    onPortPositionChange: IOnPortPositionChange;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
    onCanvasClick: IOnCanvasClick;
    onDeleteKey: IOnDeleteKey;
    onNodeClick: IOnNodeClick;
    onClickAddButton: IOnClickAddButton;
    onClickLinkAddButton: IOnClickLinkAddButton;
}
export interface IFlowChartComponents {
    CanvasOuter?: React.SFC<ICanvasOuterDefaultProps>;
    CanvasInner?: React.SFC<ICanvasInnerDefaultProps>;
    NodeInner?: React.SFC<INodeInnerDefaultProps>;
    Ports?: React.SFC<IPortsDefaultProps>;
    Port?: React.SFC<IPortDefaultProps>;
    Node?: React.SFC<INodeDefaultProps>;
    Link?: React.SFC<ILinkDefaultProps>;
}
export interface IFlowChartProps {
    /**
     * The current chart state
     */
    chart: IChart;
    /**
     * Callbacks for updating chart state.
     * See container/actions.ts for example state mutations
     */
    callbacks: IFlowChartCallbacks;
    /**
     * Custom components
     */
    Components?: IFlowChartComponents;
}
export declare const FlowChart: (props: IFlowChartProps) => JSX.Element;
