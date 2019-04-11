import * as React from 'react'
import styled from 'styled-components'
import { IPort, IOnClickAddButton, INode } from '../../'

export interface IAddButtonDefaultProps {
  port: IPort
  onClickAddButton: IOnClickAddButton
  node: INode
}

const AddButtonOuter = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover > div {
    background: cornflowerblue;
  }
`

const AddButtonInner = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: red;
  cursor: pointer;
`
export const AddButton = ({ port, onClickAddButton, node }: IAddButtonDefaultProps) => {
  return (
    <AddButtonOuter onClick={(e) => onClickAddButton(node, port)} >
      <AddButtonInner />
    </AddButtonOuter>
  )
}
