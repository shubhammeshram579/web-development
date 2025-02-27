import React from 'react'

const TodosItems = ({todo,onDelete}) => {

  return (
    <div style={{display:"flex", alignItems:"center" ,gap:"100px",marginTop:"20px"}}>
        <p>{todo.todo}</p>
        <button onClick={() => onDelete(todo.id)} style={{backgroundColor:"red"}}>remove</button>
    </div>
  )
}

export default TodosItems
