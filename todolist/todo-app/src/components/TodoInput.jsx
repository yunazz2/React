import React, { useState } from 'react'

const TodoInput = () => {

  const insert = () => {

    const inputvalue = document.getElementById('inputcell').value

    // fetch를 사용하여 POST 요청 보내기
    const url = 'http://192.168.30.119:8080/todos'
    const data = {name : inputvalue}
    const init = {
        method  : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    }

    fetch(url, init)
      .then(response => {
        // 서버 응답을 JSON 형식으로 파싱
        return response.json();
      })
      .then(data => {
        // 파싱된 데이터 출력
        console.log(data);
        document.getElementById('inputcell').value='' // 데이터 추가 후 input 비우기
        window.location.reload()
      })
      .catch(error => {
        // 오류 처리
        console.error('Request failed:', error);
    });
  }
  

  return (
    <div className='todoinput'>
        <input type="text" placeholder='할 일을 입력 후 추가 버튼을 누르세요' id='inputcell' className='inputcell'/>
        <button onClick={insert}>추가</button>
    </div>
  )
}

export default TodoInput