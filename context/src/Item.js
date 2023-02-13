import {MyContext} from './Context';
import React,{useContext} from 'react';

const Item = ({obj}) => {
  const {data,setData} = useContext(MyContext);

  const modify = (n)=>{
    let content = data.map(obj=>{
                        if(obj.num==n){
                            return {...obj, todo:'수정되었음'};
                        }
                        return obj;
                  });
                  
    setData(content);
  }

  return (
    <p> {obj.todo} <button onClick={()=>modify(obj.num)}>수정</button></p>
  )
}

export default Item