import {useState} from 'react'
import Component from './Component';
import Todoitem from './Todoitem';

const Box = (props) => {
    const [input,setInput] = useState();
    const [todolist,setTodolist] = useState([]);

    const addItem = () =>{
        setTodolist([...todolist,input]);
        console.log(todolist);

    }
  return (
    <main>
        <input value={input} type="text" onChange={(event)=>setInput(event.target.value)}></input>
        <button onClick={addItem}> 추 가</button>
        <Component todolist={todolist}/>
    </main>

  )
}


export default Box;