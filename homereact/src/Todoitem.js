import React from 'react';
import {useState} from 'react';

const Todoitem = (props) => {

  return (
    <div className="todo-item">{props.item}</div>
  )
}

export default Todoitem