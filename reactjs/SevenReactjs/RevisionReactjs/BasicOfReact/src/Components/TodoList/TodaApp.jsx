import React, { useState } from 'react'
import TodoList from "./TodoList.jsx"

const TodaApp = () => {
    const [ todoI ,setTodoI] = useState("");
    const [todoList ,setTodolist] = useState([])
    const [todoList2 ,setTodolist2] = useState([])


    const onsubmit = (e) => {
        e.preventDefault()
        let itemlist = {id: Math.random(), todo:todoI}
        setTodolist((values) => ([...values, itemlist]))
    }

    // console.log(todoList)

    const deletebtn = (id) => {
        setTodolist((prev) => todoList.filter((item) => (item.id !== id)))

    }


    const editbtn = (id) =>{
     const fins = todoList.filter((item) => (item.id === id))

     const newresponse = fins.map((i) => {
      if(i.id === id){
        return i.todo = todoI
      }
      return i
     })

     setTodolist2(newresponse)

     console.log(fins)
    }


  return (
    <div className='flex items-center justify-start flex-col min-h-screen mt-10'>
      TodaApp
      <div className='flex items-center justify-center gap-5'>
        <input type="text" name='item' id='item' value={todoI} onChange={(e) => setTodoI(e.target.value)} />
        <button onClick={onsubmit}>addlist</button>
      </div>

      <div>
        {todoList.map((item) => (
            <TodoList data={item} key={item.id} deletebtn={deletebtn} editbtn={editbtn} />
        ))}
      </div>
    </div>
  )
}

export default TodaApp
