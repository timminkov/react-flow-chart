import * as React from 'react'
import { PortsGroupDefault } from '../../'
import { AddButton, IOnClickAddButton, INode, ILink } from '../../'

export interface IPortsDefaultProps {
  children: Array<React.ReactElement<any>>
  onClickAddButton: IOnClickAddButton
  node: INode
  links: Array<ILink>
}

export const PortsDefault = ({ children, onClickAddButton, node, links }: IPortsDefaultProps) => {
  let rightPorts = children.filter((child) => ['right'].includes(child.props.port.type))
  let addButton

  if (rightPorts.length > 0) {
    let port = rightPorts[0].props.port
    let portIsConnected = links.some((link) => {
      return (link.from.nodeId === node.id && link.from.portId === port.id) ||
        (link.to.nodeId === node.id && link.to.portId === port.id)
    })

    if (!portIsConnected) {
      addButton = <AddButton node={node} onClickAddButton={onClickAddButton} port={port} />
    } else {
      addButton = null
    }
  } else {
    addButton = null
  }

  return (
    <div>
      <PortsGroupDefault side="top">
        {children.filter((child) => ['input', 'top'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault side="bottom">
        {children.filter((child) => ['output', 'bottom'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault side="right">
        {addButton}
        {rightPorts}
      </PortsGroupDefault>
      <PortsGroupDefault side="left">
        {children.filter((child) => ['left'].includes(child.props.port.type))}
      </PortsGroupDefault>
    </div>
  )
}
