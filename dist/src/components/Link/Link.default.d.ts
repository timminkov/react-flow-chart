/// <reference types="react" />
import { ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPosition, IOnClickLinkAddButton } from '../../';
export interface ILinkDefaultProps {
    link: ILink;
    startPos: IPosition;
    endPos: IPosition;
    onLinkMouseEnter: IOnLinkMouseEnter;
    onLinkMouseLeave: IOnLinkMouseLeave;
    onLinkClick: IOnLinkClick;
    isHovered: boolean;
    isSelected: boolean;
    onClickLinkAddButton: IOnClickLinkAddButton;
}
export declare const LinkDefault: ({ link, startPos, endPos, onLinkMouseEnter, onLinkMouseLeave, onLinkClick, isHovered, isSelected, onClickLinkAddButton, }: ILinkDefaultProps) => JSX.Element;
