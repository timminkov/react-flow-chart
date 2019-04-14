import * as React from 'react';
import { IChart, ILink, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnClickLinkAddButton } from '../../';
import { ILinkDefaultProps } from './Link.default';
export interface ILinkWrapperProps {
    link: ILink;
    chart: IChart;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkMouseLeave;
    Component?: React.SFC<ILinkDefaultProps>;
    onClickLinkAddButton: IOnClickLinkAddButton;
}
export declare const LinkWrapper: ({ Component, link, chart, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, onClickLinkAddButton, }: ILinkWrapperProps) => JSX.Element | null;
