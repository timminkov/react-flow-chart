import * as React from 'react';
import { IChart, INode, IOnLinkCancel, IOnLinkComplete, IOnLinkMove, IOnLinkStart, IOnPortPositionChange, IPort } from '../../';
import { IPortDefaultProps } from './Port.default';
export interface IPortWrapperProps {
    style?: object;
    chart: IChart;
    port: IPort;
    node: INode;
    onPortPositionChange: IOnPortPositionChange;
    Component: React.SFC<IPortDefaultProps>;
    onLinkStart: IOnLinkStart;
    onLinkMove: IOnLinkMove;
    onLinkCancel: IOnLinkCancel;
    onLinkComplete: IOnLinkComplete;
}
export declare class PortWrapper extends React.Component<IPortWrapperProps> {
    nodeRef?: HTMLDivElement;
    getNodRef: (el: HTMLDivElement) => void;
    onMouseDown: (startEvent: any) => void;
    render(): JSX.Element;
}
