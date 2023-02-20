import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./MyContext";

const List = (qq) => {
    const test2 = useContext(DataContext)
    console.log(test2, 'context test')

  const [data, setData] = useState([]);
  const router = useRouter();

  function dataget() {
    axios.get(`/api/`).then((res) => setData(res.data));
  }

   function dataDelete(id) {
    console.log(id)
    axios.delete(`/api/${id}`).then((res) => setData(res.data));;
    dataget();
  }
  useEffect(dataget, []);
  console.log(data,'aasd')

  if (!data.length)
    return (
      <>
        loading....<Link href="/src/Write"> 글쓰기 </Link>
      </>
    );
  return (
    <>
      <article>
        <h2>LIST</h2>
        <ul>
          {data.map((obj) => (
            <li key={obj.id}>
              {obj.name} / {obj.email} / {obj.tel}
              <button
                onClick={() =>
                  router.push({ pathname: "/src/Update", query: obj })
                }
              >
                수정
              </button>
              <button onClick={() => dataDelete(obj.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </article>
      <Link href="/src/Write"> 글쓰기 </Link>
    </>
  );
};

export default List;
