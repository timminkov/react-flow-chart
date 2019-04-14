import * as React from 'react';
import { IOnClickAddButton, INode, ILink } from '../../';
export interface IPortsDefaultProps {
    children: Array<React.ReactElement<any>>;
    onClickAddButton: IOnClickAddButton;
    node: INode;
    links: Array<ILink>;
}
export declare const PortsDefault: ({ children, onClickAddButton, node, links }: IPortsDefaultProps) => JSX.Element;
