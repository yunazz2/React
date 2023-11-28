import React from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {
  return (
    <div className="container">
        <TodoHeader/>
        <TodoInput/>
        <TodoList/>
        <TodoFooter/>
    </div>
  )
}

export default TodoContainer