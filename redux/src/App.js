import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './createSlice'


//createSlice.js(스토어에 등록할 리듀서 작성)
//store.js(리듀서를 등록)dasd
//index.js(사용할수 있도록 스토어 활용)
function App() {
  const {count} = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  console.log(count)
  console.log(increment())
  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement(10))}> - </button>
      {count}
      <button onClick={()=>dispatch(increment(10))}> + </button>
      <button onClick={()=>dispatch(decrement(10))}> - </button>
      {count}
      <button onClick={()=>dispatch(increment(10))}> + </button>
    </div>
    
  );
}

export default App;
