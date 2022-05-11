import React, { useEffect, useState } from 'react'
import Node from "./Node"
import "./Container.css";
import { useSelector, useDispatch } from "react-redux";
import checkWin from "../checkWin.js"


const Container=()=> {
  const dispatch = useDispatch();
  const [isWin, setIsWin] = useState(false);
  const mapGame = useSelector(state => (state.map));  
  useEffect(()=>{
    if(checkWin(mapGame)) setIsWin(true);
  },[mapGame]) ;
  const reset =()=>{
    dispatch({type: "reset", paylpoad: null})
  } 
  return (
    isWin?<div onClick={reset}>Chơi lại</div>:
    <div className='container'>
        {mapGame.map((type, index) =>
            <Node type = {type} index = {index}></Node>
        )}
    </div>

  )
}
export default Container;
