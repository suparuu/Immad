import { useState, useRef, useEffect } from "react";
import Item from "./Item";

function List() {
    const [todoNum,setTodoNum] = useState(0);






  return (
    <div>
      <h1>Todolist</h1>
      <p>할일 {todoNum}개 남음</p>
      <Item></Item>
    </div>
  );
}
export default List;
