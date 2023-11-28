import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList}) => {

  // const todoList = [  // 배열을 하나 만들고
  //   {no : 1, name : '할 일1', status : 0},
  //   {no : 2, name : '할 일2', status : 0},
  //   {no : 3, name : '할 일3', status : 0}
  // ]

  return (
    <ul className='todoList'>
      {todoList.map((todo) => { // 콜백 함수
        return <TodoItem key={todo.no} todo = {todo}/>  // props로 todo를 넘겨준다
      })}
    </ul>
  )
}

export default TodoList