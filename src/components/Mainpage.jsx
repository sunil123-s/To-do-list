// import React,{useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addtodolist, removetodolist, updatetodolist } from '../Utils/TodoSlice'


// const Mainpage = () => {
//     const [add, setadd] = useState()
//     const dispatch = useDispatch()
//     const [editid, seteditid] = useState(null)
//     const [edittext, setedittext] = useState("")


//     const addlist = useSelector((store) => store.todos.addtodo)
  

//     const addtodo = () => {
//     dispatch(addtodolist({id: Date.now(), text:add}))
//     setadd('')

//     }
//     const removetodo = (id) =>{
//         dispatch(removetodolist(id))
//     }
    
//     const updatetodo = (id, newtodo) => {
//      dispatch(updatetodolist({id,newtodo}))
//      seteditid(null)
//      setedittext('')
//     }

//   return (
//     <>
//        <div className='w-full h-screen bg-gray-400 flex justify-center items-center '>
//          <div className='w-8/12 bg-blue-200 h-5/6 rounded-xl'>
//           <div className='flex justify-center mt-20'>

//             <input className='w-6/12 px-2 py-4 rounded-lg text-lg mr-4' 
//             type="text"
//             value={add}
//             onChange={(e) => setadd(e.target.value)}
//             placeholder='todo-list'
            
//             />
//             <button className='w-1/12 bg-red-500 text-xl p-3 rounded-lg' onClick={addtodo}>Add</button>
//           </div>
//           {addlist.map((item) => 
//           <div key={item.id} className=' flex justify-center mt-6 text-white'>
//             {editid === item.id? (
//               <> 
//               <input 
//               type="text" 
//               value={edittext}
//               onChange={(e) => setedittext(e.target.value)}
//               />
//               <button
//               className='bg-orange-600 rounded-lg px-2 py-2 mr-2'
//               onClick={() => updatetodo(item.id, edittext)}
//               >Save</button>
//               <button
//               className='bg-red-600 rounded-lg px-2 py-2'
//               onClick={() => {
//                   seteditid(null)
//                   setedittext('')
//               }}
//           >Cancel</button>
//     </>
//             ): (
//               <>
//                 <p className='mr-2 w-6/12 font-semibold bg-blue-500 text-xl px-2 py-2 rounded-lg' >{item.text}</p>
//         <button 
//         className='bg-orange-600 rounded-lg px-2 py-2 mr-2'
//         onClick={() => updatetodo(item.id)}>Update</button>

//         <button 
//         className='bg-green-600 rounded-lg px-2 py-2'
//         onClick={() => removetodo(item.id)}>Remove</button>
//               </>
//             )}
        
//           </div>
          
//           )}

//          </div>
//        </div>
//     </>
//   )
// }

// export default Mainpage


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodolist, removetodolist, updatetodolist } from '../Utils/TodoSlice'

const Mainpage = () => {
    const [add, setAdd] = useState('')
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const dispatch = useDispatch()
    const addlist = useSelector((store) => store.todos.addtodo)

    const addtodo = () => {
            dispatch(addtodolist({ id: Date.now(), text: add }))
            setAdd('')
    }

    const removetodo = (id) => {
        dispatch(removetodolist(id))
    }

    const updatetodo = (id, newText) => {
            dispatch(updatetodolist({ id, newText }))
            setEditId(null)
            setEditText('')
        
    }

    return (
        <>
            <div className='w-full h-screen bg-gray-400 flex justify-center items-center '>
                <div className='w-8/12 bg-blue-200 h-5/6 rounded-xl'>
                    <div className='flex justify-center mt-20'>
                        <input
                            className='w-6/12 px-2 py-4 rounded-lg text-lg mr-4'
                            type="text"
                            value={add}
                            onChange={(e) => setAdd(e.target.value)}
                            placeholder='todo-list'
                        />
                        <button className='w-1/12 bg-red-500 text-xl p-3 rounded-lg' onClick={addtodo}>Add</button>
                    </div>
                    {addlist.map((item) =>
                        <div key={item.id} className='flex justify-center mt-6 text-white'>
                            {editId === item.id ? (
                                <>
                                    <input
                                        className='mr-2 w-6/12 font-semibold bg-blue-500 text-xl px-2 py-2 rounded-lg'
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button
                                        className='bg-orange-600 rounded-lg px-2 py-2 mr-2'
                                        onClick={() => updatetodo(item.id, editText)}
                                    >Save</button>
                                    <button
                                        className='bg-red-600 rounded-lg px-2 py-2'
                                        onClick={() => {
                                            setEditId(null)
                                            setEditText('')
                                        }}
                                    >Cancel</button>
                                </>
                            ) : (
                                <>
                                    <p className='mr-2 w-6/12 font-semibold bg-blue-500 text-xl px-2 py-2 rounded-lg'>{item.text}</p>
                                    <button
                                        className='bg-orange-600 rounded-lg px-2 py-2 mr-2'
                                        onClick={() => {
                                            setEditId(item.id)
                                            setEditText(item.text)
                                        }}
                                    >Update</button>
                                    <button
                                        className='bg-green-600 rounded-lg px-2 py-2'
                                        onClick={() => removetodo(item.id)}
                                    >Remove</button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Mainpage;

