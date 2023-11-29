import React from 'react'

const TodoItem = ({todo, onToggle, onDelete}) => {

  let {no, name, status} = todo
  status = status == 1 ? true : false;
  const className = status ? 'todoItem active' : 'todoItem';  // 1129 3교시 끝자락 강의 참고

  return (
    <li className={className}>  {/* active 상태일 때 css를 추가하기 위해 active 추가 */}
      <div className="item">
        <input type="checkbox" id={todo.no} checked={status} onChange={() => onToggle(todo)}/>
        {/* 
          여기서 onToggle 매개 변수를 todo로 넘겨주고 싶어서 익명 함수를 사용한다.
          익명 함수로 사용하지 않으면, 결과값(?)만 반환되기 때문에.
        */}
        <label htmlFor={todo.no}></label>
        <span>{todo.name}</span>
      </div>
      <div className="item">
        <button className='btn' onClick={() => onDelete(no)}>삭제</button>
        {/* onClick={onDelete(no)} 그냥 이 형태로 넘기면 안된다~! 함수 형태로 넘겨야 한다~ */}
      </div>
    </li>
  )
}

export default TodoItem