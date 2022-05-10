import React from 'react'
import Node from "./Node"
import "./Container.css"
export default function Container() {
  return (
    <div className='container'>
        <Node type="1"></Node>
        <Node type="1"></Node>
        <Node type="1"></Node>
        <Node type="0"></Node>
        <Node type="2"></Node>
        <Node type="0"></Node>
        <Node type="2"></Node>
        <Node type="2"></Node>
        <Node type="1"></Node>
    </div>
  )
}
