import React, { useState } from 'react';
import './Node.css';// Tell webpack that Button.js uses these styles
import { useDispatch, useSelector} from "react-redux";
// eslint-disable-next-line import/no-anonymous-default-export
const Node= ({type, index})=> {
  const dispatch = useDispatch();
  const [isMarked, setIsMarked] = useState(false);
  const typeNode = useSelector(state=>state.typeNode);
  const handleSet=()=>{
    if(isMarked) return;
    else{
      dispatch({
      type: typeNode,
      payload: index
      });
    setIsMarked(true);
  }
    
}

  return (
    <div className='node' onClick={handleSet} >
        <div 
        className={type === 1? 'node-x': (type === 2?'node-o': 'node-null')}>
        </div>
    </div>
  )
}
export default Node;
