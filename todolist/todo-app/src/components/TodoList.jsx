import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {

    const [TodoListData, setTodoListData] = useState([])
    // TodoListData를 빈 배열로 만들고 시작

    useEffect(() => { // 컴포넌트의 라이프사이클 이벤트를 처리하기 위한 hook
      // fetch를 사용하여 GET 요청 보내기
      fetch('http://192.168.30.119:8080/todos')
      .then(response => {
        // 서버 응답을 JSON 형식으로 파싱
        return response.json();
      })
      .then(data => {
        // 파싱된 데이터 출력
        console.log(data);
        setTodoListData(data);
      })
      .catch(error => {
        // 오류 처리
        console.error('Request failed:', error);
      });
    }, [])
    

    // 상태 수정
    const clickLabel = (no, status, name) => {
      status = (status === 1)? 0 : 1
      
      const url = `http://192.168.30.119:8080/todos`
      const data = {no : no, status : status, name : name}
      const init = {
        method  : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      }

      // fetch를 사용하여 POST 요청 보내기
      fetch(url, init)
          .then(response => {
              // 서버 응답을 JSON 형식으로 파싱
              console.log(response);
              return response.text()      // Promise
          })
          .then((data) => {
              console.log(data);
              window.location.reload()
          })
          .catch(error => {
          // 오류 처리
          console.error('Request failed:', error);
          });
    }

    // 할 일 삭제
    const clickDelete = (no) => {
      const url = `http://192.168.30.119:8080/todos/${no}`
      const init = {
          method  : 'DELETE',
      }

      // fetch를 사용하여 PUT 요청 보내기
      fetch(url, init)
          .then(response => {
              // 서버 응답을 JSON 형식으로 파싱
              console.log(response);
              return response.text()      // Promise
          })
          .then((data) => {
              console.log(data);
              window.location.reload()
          })
          .catch(error => {
          // 오류 처리
          console.error('Request failed:', error);
          });
    }


    return (
      <div className='todolist'>
          {
            TodoListData.map((todos, index) => {
              return (
                <div className='list'>
                  <label className={todos.status === 1 ? 'labelChecked' : 'labelCheck'} onClick={() => clickLabel(todos.no, todos.status, todos.name)}></label>
                  <div>{todos.name}</div><button onClick={() => clickDelete(todos.no)}>삭제</button>
                </div>
              )
            })
          }
      </div>
    )
}

export default TodoList