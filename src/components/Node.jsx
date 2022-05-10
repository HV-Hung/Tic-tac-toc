import React from 'react';
import './Node.css';// Tell webpack that Button.js uses these styles
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <div className='node'>
        <div className={props.type == 1? 'node-x': (props.type == 2?'node-o': 'node-null')}>
        </div>
    </div>
  )
}
