import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {

  // ✅ state
  const [todoList, setTodoList] = useState([]); // 빈 배열 상태로 초기화를 시켜놓는다.
  const [input, setInput] = useState('')

  // ✅ Hook
  useEffect(() => {

    // ✅ Mount, Update 되는 부분
    // ⭐ 할 일 목록 요청 [GET]
    fetch('http://192.168.30.119:8080/todos')
      .then((response) => response.json()) // Promise(프로미스)
      .then((data) => setTodoList(data))
      .catch((error) => console.log(error));
      console.log('[GET] - /todos - 할 일 목록 요청');
    
    // ✅ UnMount 될 때 return 호출
    return () => {
      
    }
  }, [])


  // ⭐ 할 일 추가 [POST]
  const onSubmit = () => {
    console.log('할 일 : ' + input);

    if(input == '') {
      alert('할 일을 입력해주세요.')
      return
    }

    const data = {
      name : input, // 할 일 제목
      status : 0,   // 완료 여부 (미완료 - 0 / 완료 - 1)
    }

    const init = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data)
    };

    // 새로 등록된 할 일 데이터
    fetch('http://192.168.30.119:8080/todos',init)
      .then((response) => response.json()) // Promise(프로미스)
      .then((data) => setTodoList([data, ...todoList]))
      // state로 관리하고있는게 todoList 배열이예요
      // 기존에 [1, 2, 3, 4, 5] 이런식으로 데이터가 있었겠죠
      // 새로 등록될 data를 [data, 1, 2, 3, 4, 5] 이렇게 추가를 해줄거예요
      .catch((error) => console.log(error));

    setInput('')  // 기존에 입력한 state는 비워주자
  }


  // ✅ TodoInput에 내려줄 데이터
  const onChange = (e) => {
    setInput(e.target.value);
  }

  // ✅ 할 일 완료 여부 수정(우선 TodoList에 내려 줄 것 -> TodoList에서는 TodoItem에 onToggle을 또 내려줄 것)
  const onToggle = (todo) => {
    console.log('할 일 완료 여부 처리');
    console.log(todo);

    // PUT 요청
    const data = {
      no : todo.no,
      name : todo.name,
      status : todo.status ? 0 : 1,  // status가 true이면 false로 바꾸고
    }

    const init = {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data),
    }

    // 할 일 status 수정
    fetch('http://192.168.30.119:8080/todos',init)
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // 할 일 완료 처리 후,
    // => 현재 클릭한 할 일의 완료 여부를 toggle
    /*
    let updatedTodoList = todoList.map((item) => {
      return item.no === todo.no ? {...item, status : !item.status} : item;
    })

    // => 완료된 할 일은 아래쪽으로, 완료되지 않은 할 일은 위쪽으로 정렬
    let sortedTodoList = updatedTodoList.sort((a, b) => {
      // 정렬 기준
      // 1. 완료 여부 - 0(미완료), 1(완료) (오름 차순)
      // 2. 할 일 번호(no)로 내림차순
      return a.status - b.status == 0 ? b.no - a.no : a.status - b.status;
    })
    */

    // return을 안 쓴다면 (item) => {item} 이렇게 안써줘도 된대..
    // 위에 할 일 완료 처리 후 코드랑 동일 함. 아래처럼 한 번에 써도 가능
    const sortedTodoList
          = todoList.map((item) => item.no === todo.no ? {...item, status : !item.status} : item)
                    .sort((a, b) => a.status = b.status == 0 ? b.no - a.no : a.status - b.status)

    setTodoList(sortedTodoList)
    
  }

  // ✅ 할 일 삭제 - [DELETE]
  // 우선 TodoList에 내려 줄 것 -> TodoList에서는 TodoItem에 onDelete를 또 내려줄 것
  const onDelete = (no) => {

    const init = {
      method : 'DELETE',
    }

    fetch(`http://192.168.30.119:8080/todos/${no}`,init)
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // 화면에서 삭제된 할 일 아이템 제거
    const updatedTodoList = todoList.filter((todo) => todo.no != no)

    setTodoList(updatedTodoList)
  }
  

  // 전체 삭제


  // 화면
  return (
    <div className="container">
        <TodoHeader/>
        <TodoInput onSubmit={onSubmit} onChange={onChange} input={input}/>  {/* onSubmit이라는 속성으로 onSubmin을 props로 TodoInput에 내려준다. */}
        <TodoList todoList={todoList} onToggle={onToggle} onDelete={onDelete}/>
        <TodoFooter/>
    </div>
  )
}

export default TodoContainer