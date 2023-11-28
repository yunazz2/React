import React from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {
  return (
    <div className='container'>
      <div className='todocontainer'>
          <TodoHeader/>
          <TodoInput/>
          <TodoList/>
          <TodoFooter/>
      </div>
    </div>
  )
}

export default TodoContainer