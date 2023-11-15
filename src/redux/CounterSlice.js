import { createSlice } from "@reduxjs/toolkit";



export  const CounterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        //actions are mentioned inside this reducers 
        // reducers key and reducers are different thing
        // logics to update state


        //function to increment
       increment:(state , action)=>{
         state.value += action.payload
         //if the function has argument it can only be accessed with action and value in payload
       } ,
       //function to dercement
       decrement:(state , action)=>{
        state.value -=action.payload
         //if the function has argument it can only be accessed with action and value in payload

       },
       //function to reset
       reset:(state)=>{
        state.value = 0
       }
    }
})

//actions is required by component inorder to update state
export const {increment,decrement,reset} = CounterSlice.actions

//reducer is required to store to change the state value

export default CounterSlice.reducer