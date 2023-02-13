import { createContext, useState } from "react";
export const AppC = createContext(null);

const AttContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState(['insert',0]);
  console.log(children);

  function dataCtl(type, value) {
    switch (type) {
        //추가
      case "insert":
        const insert = [...data, value];
        setData(insert);
        console.log('저장버튼임다')
        break;
        //수정
      case 'modify' : setData(data.map((obj) => (obj.id === value.id) ? {...obj,name : value.name} : obj));
      setType(['insert',0])
        console.log('수정버튼임다')
      break;
        //
        case 'remove' : 
        console.log(value)
        setData(data.filter((obj)=>obj.id !== value))
        console.log('지우는버튼임다')
        break;
    }
}
  console.log(data);

  //추가
  function insert() {
    const insert = [...data, { id: 5, name: "aaa" }];
    setData(insert);
  }

  //수정
  function modify(num) {
    setData(
      data.map((obj) => (obj.id === num ? { ...obj, name: "안녕" } : obj))
    );

    //위와 같은방법
    /*  const modify = data.map((obj)=>{
        if(obj.id === num){
          return (obj === num) ? {...obj, name : '안녕'} : obj;
          return obj;
        }
      }) */
  }

  //삭제
  function remove(num) {
    setData(data.filter((obj) => obj.num !== num));
    //위와 같은 방법
    /* setState(
          data.filter(
            function(obj){
              return obj.num !== num;
            }
            )
            ) */
  }

  return (
    <AppC.Provider value={{ dataCtl, data, type, setType }}>{children}</AppC.Provider>
  );
};

export default AttContext;
