import React, { createContext, useState } from "react";
import axios from "axios";
export const DataContext = createContext(null);
const MyContext = ({ children }) => {
  const [data, setData] = useState();
console.log(children,'어린이')
  async function dataFun(type, obj) {
    let trans;
    if (type == "get") {
      trans = await axios.get("/api").then();
      console.log(trans);
    } else if (type == "post") {
      trans = await axios.post("/api", obj);
    } else if (type == "put") {
      trans = await axios.put(`/api/${obj.id}`, obj);
    } else {
      trans = await axios.delete(`/api/${obj.id}`);
    }
    setData(trans);
  }
  console.log(data);
  return (
    <DataContext.Provider value={{ data, dataFun }}>
      {children}
    </DataContext.Provider>
  );
};

export default MyContext;
