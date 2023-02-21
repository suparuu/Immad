import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./MyContext";

const List = (qq) => {
  const router = useRouter();
  const { dataFun, data } = useContext(DataContext);

  console.log(data, "데이터");
  useEffect(()=>{
  dataFun('get')
  },[])
  

  /* if (!data.length)
    return (
      <>
        loading....<Link href="/src/Write"> 글쓰기 </Link>
      </>
    ); */
  return (
    <>
      <article>
        <h2>LIST</h2>
        <ul>
          {data?.map((obj) => (
            <li key={obj.id}>
              {obj.name} / {obj.email} / {obj.date}
              <button
                onClick={() =>
                  router.push({ pathname: "/src/Update", query: obj })
                }//수정버튼
              >
                수정
              </button>
              <button onClick={() => dataFun('delete',obj)}>삭제</button>
            </li>
          ))}
        </ul>
      </article>
      <Link href="/src/Write"> 글쓰기 </Link>
    </>
  );
};

export default List;
