import * as React from 'react'
import {
  generateCurvePath, ILink, IOnLinkClick,
  IOnLinkMouseEnter, IOnLinkMouseLeave, IPosition,
  IOnClickLinkAddButton
} from '../../'

export interface ILinkDefaultProps {
  link: ILink
  startPos: IPosition
  endPos: IPosition
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkClick
  isHovered: boolean
  isSelected: boolean
  onClickLinkAddButton: IOnClickLinkAddButton
}

export const LinkDefault = ({
  link,
  startPos,
  endPos,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick,
  isHovered,
  isSelected,
  onClickLinkAddButton,
}: ILinkDefaultProps) => {
  const points = generateCurvePath(startPos, endPos)
  const midpoint = { x: (startPos.x + endPos.x) / 2, y: (startPos.y + endPos.y) / 2 }

  return (
    <svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
      <circle
        r="4"
        cx={startPos.x}
        cy={startPos.y}
        fill="cornflowerblue"
      />
      {/* Main line */}
      <path
        d={points}
        stroke="cornflowerblue"
        strokeWidth="3"
        fill="none"
      />
      {/* Thick line to make selection easier */}
      <path
        d={points}
        stroke="cornflowerblue"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
        strokeOpacity={(isHovered || isSelected) ? 0.1 : 0}
        onMouseEnter={() => onLinkMouseEnter({ linkId: link.id })}
        onMouseLeave={() => onLinkMouseLeave({ linkId: link.id })}
        onClick={(e) => {
          onLinkClick({ linkId: link.id })
          e.stopPropagation()
        } }
      />
      { (isHovered || isSelected) &&
        <circle
          r="6"
          cx={midpoint.x}
          cy={midpoint.y}
          fill="red"
          onMouseEnter={() => onLinkMouseEnter({ linkId: link.id })}
          onMouseLeave={() => onLinkMouseLeave({ linkId: link.id })}
          onClick={(e) => {
            onClickLinkAddButton(link, midpoint)
            e.stopPropagation()
          } }
        />
      }
      <circle
        r="4"
        cx={endPos.x}
        cy={endPos.y}
        fill="cornflowerblue"
      />
    </svg>
  )
}
