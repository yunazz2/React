import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {

  // ✅ state
  const [todoList, setTodoList] = useState([]); // 빈 배열 상태로 초기화를 시켜놓는다.

  // ✅ Hook
  useEffect(() => {

    // Mount, Update 되는 부분
    // 할 일 목록 요청 [GET]
    fetch('http://192.168.30.119:8080/todos')
      .then((response) => response.json()) // Promise(프로미스)
      .then((data) => setTodoList(data))
      .catch((error) => console.log(error));
    
    // UnMount 될 때 return 호출
    return () => {
      
    }
  }, [])
  

  return (
    <div className="container">
        <TodoHeader/>
        <TodoInput/>
        <TodoList todoList={todoList}/>
        <TodoFooter/>
    </div>
  )
}

export default TodoContainer