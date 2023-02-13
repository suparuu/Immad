import './App.scss';
import Context from './Context'
import {useState, useReducer} from 'react';



const initData= {
  totalCount: null,
  list: []
}
function reducer(state,action){

  console.log('state',state)
  switch(action.type){
    case 'plus':
      return {
        totalCount: state.totalCount + action.price,
        list:[
          ...state.list,
          {id:0, price:action.price, msg:action.msg, day:action.day}
        ]
      }; 
      case 'minus':
        return {
          totalCount: state.totalCount - action.price,
          list:[
            ...state.list,
            {id:0, price:action.price, msg:action.msg, day:action.day}
          ]
        };; 
        default : return state;
      }
      
      
    }
    
    function App() {
      const [data,dispatch] = useReducer(reducer,initData); //useReducer(함수,데이터);
      /* dispatch({type:'plus', price:0, msg:0, day:0},{type:'minus', price:0, msg:0, day:0}); */
      
      console.log('data',data)

      function plus(){
        let date = new Date();
        date = (date.getMonth() +1 ) + '.' + date.getDate();

        const content = {type:'plus',price:5000, msg:'예금',day:date}
        dispatch(content);
      }
      function minus(){
        let date = new Date();
        date = (date.getMonth() +1 ) + '.' + date.getDate();

        const content = {type:'minus',price:2500, msg:'출금',day:date}
        dispatch(content);

      }



  return (

    <div>
      총 가격: {data.totalCount}원
      <input type='text' ></input>
      <button onClick={plus}>예금</button>
      <button onClick={minus}>출금</button>
      <p>메시지 </p>
    </div>
  );
}

export default App;
