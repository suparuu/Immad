import React, { createContext, useState } from "react";
import axios from "axios";
export const DataContext = createContext(null);

const MyContext = ({ children }) => {
  const [data, setData] = useState();

  async function dataFun(type, obj) {
    let trans;
    if (type == "get") {//데이터 가져오기
      await axios.get("/api").then((res) => (trans = res.data));
      console.log(trans);
    } else if (type == "post") {//글쓰기
      trans = await axios.post("/api", obj);
    } else if (type == "put") {//수정
      trans = await axios.put(`/api/${obj.id}`, obj);
    } else{//데이터 삭제
      trans = await axios.delete(`/api/${obj.id}`);
    }
    console.log(trans);
    setData(trans);
  }


 
  return (
    <DataContext.Provider value={{ data, dataFun }}>
      {children}
    </DataContext.Provider>
  );
};

export default MyContext;
