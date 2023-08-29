import React from 'react'

const TodoList = ({todoList, deleteHandler}) => {
  return (
    <div>
    {todoList.map((todo, index)=>
    <div key={index}>
        <h5 className='mt-5 font-semibold'>{todo}  &nbsp; <button onClick={()=>deleteHandler(index)} className='bg-red-500 font-semibold rounded-md px-1 text-white'>Delete</button></h5>
    </div>
    )}
      
    </div>
  )
}

export default TodoList
