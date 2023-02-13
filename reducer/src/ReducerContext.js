import {useReducer, createContext} from 'react';
export const RContext = createContext(null);

const reducerFn = (state, action)=>{
    switch(action.type){
      case 'plus':
        return state + Number(action.value);
      case 'minus':
        return state - Number(action.value);
      default : return state;
    }
  }

const ReducerContext = ({children}) => {
    const [data,dispatch] = useReducer(reducerFn, 0);

    return (
        <RContext.Provider value={    {data,dispatch}  }>
            {children}
        </RContext.Provider>
    )
  }
  
  export default ReducerContext