import { configureStore } from "@reduxjs/toolkit";
import todoinfo from './TodoSlice'
export const appStore = configureStore({
    
    reducer: {
        todos : todoinfo,
    }
})