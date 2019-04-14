/// <reference types="react" />
import { IPort, IOnClickAddButton, INode } from '../../';
export interface IAddButtonDefaultProps {
    port: IPort;
    onClickAddButton: IOnClickAddButton;
    node: INode;
}
export declare const AddButton: ({ port, onClickAddButton, node }: IAddButtonDefaultProps) => JSX.Element;
