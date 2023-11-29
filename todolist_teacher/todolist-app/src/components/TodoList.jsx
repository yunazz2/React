import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList, onToggle, onDelete}) => {


  return (
    <ul className='todoList'>
      {todoList.map((todo) => { // 콜백 함수
        return <TodoItem key={todo.no} todo = {todo} onToggle={onToggle} onDelete={onDelete}/>  // props로 todo를 넘겨준다
      })}
    </ul>
  )
}

export default TodoList