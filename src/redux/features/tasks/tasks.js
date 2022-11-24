import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
            console.log(state)
            
        }
    }
})


export const {addTask} = tasksSlice.actions;
export default tasksSlice.reducer