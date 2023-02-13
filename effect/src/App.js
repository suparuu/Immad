import "./App.css";
import {useState} from "react";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import List from "./page/List";
import Write from "./page/Write";

function App() {
  let [itemData,setItemData] = useState();
  function prams(e) {
    setItemData(e);
    // JSON.prams('{"name":"aaa"}')
    console.log(e)
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<List item={itemData} />}></Route>
        <Route path="/Write" element={<Write fn={prams} />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
