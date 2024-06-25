// import { createSlice } from "@reduxjs/toolkit";

// const TodoSlice = createSlice({
//     name:'todos',
//     initialState:{
//       addtodo:[],
//       

//     },
//     reducers:{
//             addtodolist : (state, action) => {
//              state.addtodo.unshift(action.payload)
//             },
//             removetodolist: (state, action) => {
//             state.addtodo = state.addtodo.filter((item) => item.id !== action.payload)
//             },
//             updatetodolist: (state,action) => {
//                 const {id, newtodo} = action.payload
//                 const updatelist =state.addtodo.find((item) => item.id === id);
//                 if(updatelist){
//                   updatelist.text = newtodo;
//                 }
//             }
//     }
// })

// export const {addtodolist, removetodolist, updatetodolist } = TodoSlice.actions;
// export default TodoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        addtodo: []
    },
    reducers: {
        addtodolist: (state, action) => {
            state.addtodo.unshift(action.payload)
        },
        removetodolist: (state, action) => {
            state.addtodo = state.addtodo.filter((item) => item.id !== action.payload)
        },
        updatetodolist: (state, action) => {
            const { id, newText } = action.payload
            const todo = state.addtodo.find((item) => item.id === id)
            if (todo) {
                todo.text = newText
            }
        }
    }
})

export const { addtodolist, removetodolist, updatetodolist } = TodoSlice.actions
export default TodoSlice.reducer
