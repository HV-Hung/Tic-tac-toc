import React from 'react';
import './Node.css';// Tell webpack that Button.js uses these styles
import { useDispatch} from "react-redux";
// eslint-disable-next-line import/no-anonymous-default-export
 const Node= ({type, index})=> {
  const dispatch = useDispatch();
  const handleSet=()=>{
    dispatch({
      type: "x",
      payload: index
  })}

  return (
    <div className='node' onClick={handleSet} >
        <div 
        className={type === 1? 'node-x': (type === 2?'node-o': 'node-null')}>
        </div>
    </div>
  )
}
export default Node;
