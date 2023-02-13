import React from "react";
import { useContext } from "react";
import Context from "./Context";

const Insert = () => {
    const { data, setData } = useContext(Context);

    const add = (e) => {
        //input값 받아서 data변수에 넣어주는 일
        //num:1 , todo:리액트 공부하기
        e.preventDefault();
        let value = { num: ++count.current, todo: elInput.current.value };
        setData([...data, value]);
        elInput.current.value = "";
        elInput.current.focus();
        /* update(); */
        data.map(()=>{
            if(Object.num == key){
                value = elInput.current.value
            }
        })
        
        console.log(data);
      };


  return (
    <div>
      <form onSubmit={add}>
        <input
          ref={elInput}
          type="text"
          name="w"
          placeholder="이름을 입력하세요"
        ></input>
        <input type="submit" value="저장"></input>
      </form>
    </div>
  );
};

export default Insert;
