import {createSlice} from "@reduxjs/toolkit"

export const exampleSlice = createSlice({
    name:"example",
    initialState:{
        count:0
    },
    reducers:{
        increment: (state)=> state.count = state.count + 1,
        decrement: (state)=> state.count = state.count - 1,
        reset: (state)=> state.count = 0,
    }
})

export const {increment,decrement,reset} = exampleSlice.actions;
export default exampleSlice.reducer;