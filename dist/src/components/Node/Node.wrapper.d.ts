import * as React from 'react';
import { INode, IOnDragNode, IOnNodeClick, ISelectedOrHovered } from '../../';
import { INodeDefaultProps } from './Node.default';
export interface INodeWrapperProps {
    node: INode;
    onDragNode: IOnDragNode;
    onNodeClick: IOnNodeClick;
    children: any;
    selected: ISelectedOrHovered;
    Component?: React.SFC<INodeDefaultProps>;
}
export declare const NodeWrapper: ({ node, onDragNode, children, onNodeClick, selected, Component, }: INodeWrapperProps) => JSX.Element;
