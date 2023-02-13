import React from "react";
import { useEffect, useContext } from "react";
import Context from "./Context";

const Textbox = () => {
  const { data, setData } = useContext(Context);
  console.log(data);

  const remove = (n) => {
    let removeData = data.filter((obj) => obj.num !== n);
    setData(removeData);
  };
  const modify = (e) => {
    let pro = prompt();

    data.map((obj, key) => {
      console.log(data);
      if (obj.num == e) {
        return (obj.todo = pro);
      }
    });
    console.log(data);
    setData(data);
  };

  console.log(data.length);

  return (
    <>
      <ul className="list">
        <p>참여인원: {data && data.length}명</p>
        {data &&
          data.map((obj, key) => {
            return (
              <li>
                {key + 1}.{obj.todo}
                <button onClick={() => remove(obj.num)}>삭제</button>
                <button onClick={() => modify(obj.num)}>수정</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Textbox;
