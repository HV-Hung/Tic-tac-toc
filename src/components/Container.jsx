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
    else setIsWin(false);
  },[mapGame]) ;
  const resetGame =()=>{
    dispatch({type: "reset", paylpoad: null})
  } 
  return (
    <>
    
    <div className='container'>
      <div className={isWin?'play-box win': 'play-box'} >
        
        {mapGame.map((type, index) =>
            <Node type = {type} index = {index}></Node>
        )}
      </div>
      {isWin &&<button className='button-play-again' onClick={resetGame}>Chơi lại</button>}
    </div>
    
    </>

  )
}
export default Container;
