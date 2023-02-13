import { useState } from 'react';
import './App.css';
import {MyContext} from './Context';
import List from './List';


function App() {
  const [data,setData] = useState([
          {num:0,todo:'리액트...윽...'},
          {num:1,todo:'굿'}
      ]);

  return (
    <div className="App">
      <MyContext.Provider value={{data:data, setData:setData}}>
        <List/>
      </MyContext.Provider>
    </div>
  );
}
export default App;
