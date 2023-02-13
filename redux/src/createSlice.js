import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:0};
//aaaaaaa
const testSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state,action){state.count += action.payload},
        decrement(state,action){state.count -= action.payload}
    }
});

const initialState2 = {count:0};

const testSlice2 = createSlice({
    name:'counter',
    initialState : initialState2,
    reducers:{
        increment(state,action){state.count += action.payload},
        decrement(state,action){state.count -= action.payload}
    }
});

export const {increment,decrement} = testSlice.actions;
export default testSlice.reducer;
    