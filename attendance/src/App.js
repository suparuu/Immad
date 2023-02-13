import { useState } from "react";
import "./App.scss";
import AttContext, { AppC } from "./AttContext";
import Insert from "./Insert";
import List from "./List"

function App() {
  
  return (
    <AttContext>
      <main>
        <List></List>
        <Insert></Insert>
      </main>
    </AttContext>
  );
}

export default App;
