import { useState, useRef, useEffect } from "react";

function Item() {

  const [data,setData] = useState([]),
  elItems = useRef([]);


  const remove = (n)=>{
    let removeData = data.filter((obj)=>obj.num !== n)
    setData(removeData)
    console.log('asd')
  };

  const state = (e)=>{
    if(e.target.tagName != 'button'){
      e.target.classList.toggle('active');
    }
  };//삭제버튼


  return (
    <ul className="list">
      {
            data && data.map((obj,key)=>{
              return(
              <li ref={(el)=>elItems.current[key]=el} onClick={state} key={obj.num}>
              {obj.todo}
              <button onClick={()=>remove(obj.num)}>삭제</button>
              </li>
              )
            })
          }
    </ul>
  );
}

export default Item;
