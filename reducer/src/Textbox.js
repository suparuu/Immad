import React from 'react'
import  ReducerContext from "./ReducerContext";
import AppC from "./ReducerContext";
import {useReducer, useState, useContext} from 'react';



const Textbox = () => {
    const [ip,setIp] = useState();
    const [data,dispatch] = useReducer(reducerFn,0);
    console.log('a')

  return (

    <>
    <h1>데이터 값 : {bbb} </h1>
    <input type="text" value={ip} onChange={(e)=>setIp(e.target.value)}></input>
     <button onClick={()=>dispatch({type:'plus',value:ip})}>더하기 </button>
     <button onClick={()=>dispatch({type:'minus',value:ip})}>빼기 </button>
     </>

  )
}

export default Textbox;