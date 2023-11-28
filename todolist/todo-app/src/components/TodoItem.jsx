import React from 'react'

const TodoItem = (props) => {
  return (
    <>
      <p className='todo'>{props.content}</p>
    </>
  )
}

export default TodoItem