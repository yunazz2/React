import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='todo'>
        <h3>{props.content}</h3>
    </div>
  )
}

export default TodoItem