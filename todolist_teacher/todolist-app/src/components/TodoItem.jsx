import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <li className='todoItem'>
      <div className="item">
        <input type="checkbox" id={todo.no}/>
        <label htmlFor={todo.no}></label>
        <span>{todo.name}</span>
      </div>
      <div className="item">
        <button className='btn'>삭제</button>
      </div>
    </li>
  )
}

export default TodoItem