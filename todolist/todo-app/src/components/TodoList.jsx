import React from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {
    
    const TodoList = [
        {content : '이 부분을'},
        {content : '이제 SQL에서'},
        {content : '가지고 와야 하는데'},
        {content : '어떻게 가져온담'}
    ];


  return (
    <div>
        {
          TodoList.map((todos, index) => {
            return <TodoItem key = {index} content = {todos.content} />
          })
        }
    </div>
  )
}

export default TodoList