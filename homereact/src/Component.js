import {useState} from 'react';
import Todoitem from './Todoitem';


const Component = (props) => {

    console.log("todoboard",props.todolist)
  return (
    <div>
        투두리스트
        {props.todolist.map((item)=><Todoitem item={item}></Todoitem>)}
        </div>
  );
}

export default Component