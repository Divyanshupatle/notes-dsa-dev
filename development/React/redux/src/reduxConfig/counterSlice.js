import {createSlice} from "@reduxjs/toolkit";

const counterSlice =  createSlice({
    name : 'counter',
    initialState : {
        count : 4,
    },
    reducers : {
        increment : (state) =>{
            state.count = state.count + 1
        }
    }
});

export const {increment} = counterSlice.actions;
export default counterSlice;