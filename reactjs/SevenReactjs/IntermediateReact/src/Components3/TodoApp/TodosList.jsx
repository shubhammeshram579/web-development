import React, { useState } from 'react'
import TodosItems from "./TodosItems.jsx"

const TodosList = () => {
    const [todos ,setTodos] = useState([])
    const [todo,setTodo] = useState("");



    // form hnadel btn
    const handelSumbit  = (e) =>  {
        e.preventDefault();
        let todosdata = {id: Math.random(), todo}
        setTodos((values) => ([...values,todosdata]))
        setTodo("")
    }


    // delete todo task
    const handelDelte = (id) => {
        setTodos(todos.filter((to) => (to.id !== id)))
    }

  return (
    <div style={{padding:"100px"}}>
        <div>
            <input style={{border:"1px solid #111"}} type="text" name="todo" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='enter task'/>
            <button style={{backgroundColor:"green" ,padding:"2px 3px"}} onClick={handelSumbit}>addTask</button>
        </div>

        {todos.map((items,index) => (
             <TodosItems key={items.id} todo={items} onDelete={handelDelte}/>
        ))}
    </div>
  )
}

export default TodosList
