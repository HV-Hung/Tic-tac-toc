import React, { useEffect, useState } from 'react'
import Node from "./Node"
import "./Container.css";
import { useSelector, useDispatch } from "react-redux";
const Container=()=> {
  const dispatch = useDispatch();   
  const mapGame = useSelector(state => (state));
  console.log(mapGame)
  return (
    <div className='container'>
        {mapGame.map((type, index) =>
            <Node type = {type} index = {index}></Node>
        )}
    </div>
  )
}
export default Container;
