import React,{useRef, useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';

const Write = ({fn}) => { 
    
    const nav = useNavigate();
    const [data,setData] = useState({});

    //초기에 한번만 실행 => []
    //변수의 값이 업데이트 될때마다 실행 =>[변수명]
    //컴포넌트가 언마운트될때 useEffect안에 return 실행
    useEffect(function(){
        console.log("useEffect")
        return function(){
            console.log(data)
        }
    },[data]);
 

    function pageChange(){
        fn(data);
        nav('/');
    };


    function writeFn(e){
        e.preventDefault();
        let {name,value} = e.target;
        setData(`${name}  = ${value}`)
    };
    function writeFn2(e){
        e.preventDefault();
        let {name,value} = e.target;
        setData(`${name} = ${value}`)
    };
  return (
  <div>
    <form>
        <p><input onChange={writeFn} type="text" name="id" placeholder="아이디"></input></p>
        <p><input onChange={writeFn2} type="password" name="password" placeholder="비밀번호"></input></p>
        <p><button onClick={pageChange}>저장</button></p>
    </form>
    {/* <button onClick={pageChange}>리스트</button> */}
    </div>
    );
};

export default Write;