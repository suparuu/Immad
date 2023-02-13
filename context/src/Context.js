// Context.js

// 컨텍스트 생성( 전달할 값들을 value을 통해 등록할수 있음)
import {createContext} from 'react';
export const MyContext = createContext(null);


// <MyContext.Provider value={자식들에게 전달할 값}>
//     컨포넌트들.....(자식이됨)
// </MyContext.Provider>


// //자식 컴포넌트에서 사용방법
// import {MyContext} from './Context';
// import {useContext} from 'react';
// const Item = ({obj}) => {
//     const {data,setData} = useContext(MyContext);
// }




