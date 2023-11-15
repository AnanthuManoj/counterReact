import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";


// to create store
export const store =configureStore({
    // reducer can on update value of state in store
    // reducer key is predefined (object which can hold more than one reducer)
    reducer:{
         counter:CounterSlice
    }
})