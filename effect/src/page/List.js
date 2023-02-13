import React from "react";
import { Link } from "react-router-dom";
const List = ({item}) => {
        console.log({item})
  return (
    <div>
        <ul>
            <li>{item}</li>
        </ul>
      <Link to="/write">글쓰기</Link>
    </div>
  );
};

export default List;