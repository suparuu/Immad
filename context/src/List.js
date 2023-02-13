import {MyContext} from './Context';
import React,{useContext} from 'react';
import Item from './Item';

const List = () => {
  const {data} = useContext(MyContext);

  return (
    <div>
        {data.map((obj,key)=>(
            <Item key={key} obj={obj}/>
        ))}
    </div>
  )
}

export default List;