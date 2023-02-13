import { configureStore } from "@reduxjs/toolkit";
import testSlice from './createSlice';



export const store = configureStore({
    reducer:{counter : testSlice}
});