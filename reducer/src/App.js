import { useState,useContext } from 'react';
import Main from './Main';
import ReducerContext, { RContext } from './ReducerContext';

function App() {


  return (
    <ReducerContext>
      <Main/>
    </ReducerContext>
  );
}

export default App;


// function Main(){
//   const {data,dispatch} = useContext(RContext);
//   const [ip, setIp] = useState('');
//   return(
//       <div className="App">
//         <h1>데이터값 = {data} </h1>
//         <input type="text" value={ip} onChange={(e)=>setIp(e.target.value)} />

//         <button onClick={()=>dispatch({type:'plus',value:ip})}>
//           더하기
//         </button>
//         <button onClick={()=>dispatch({type:'minus',value:ip})}>
//           빼기
//         </button>
//       </div>  
//   )
// }
