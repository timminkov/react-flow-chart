import * as React from 'react';
import { IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas } from '../../';
import { ICanvasInnerDefaultProps } from './CanvasInner.default';
import { ICanvasOuterDefaultProps } from './CanvasOuter.default';
export interface ICanvasWrapperProps {
    position: {
        x: number;
        y: number;
    };
    onDragCanvas: IOnDragCanvas;
    onDeleteKey: IOnDeleteKey;
    onCanvasClick: IOnCanvasClick;
    onCanvasDrop: IOnCanvasDrop;
    ComponentInner: React.SFC<ICanvasInnerDefaultProps>;
    ComponentOuter: React.SFC<ICanvasOuterDefaultProps>;
    children: any;
}
export declare class CanvasWrapper extends React.Component<ICanvasWrapperProps> {
    render(): JSX.Element;
}
