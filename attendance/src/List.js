import { AppC } from "./AttContext";
import React, { useContext, useEffect } from "react";
import $ from "jquery";


const List = () => {
    const {data,setType, dataCtl} = useContext(AppC);

  return (
    <div>
        <ul>
            {data.map((obj)=>{
                return<li key={obj.id}>
                    {obj.name}
                    <button onClick={()=>{dataCtl('modify', obj.id)}}>수정</button>
                    <button onClick={()=>{dataCtl('remove', obj.id)}}>삭제</button>
                    </li>;
            })
            }
        </ul>
    </div>
  )
}

export default List