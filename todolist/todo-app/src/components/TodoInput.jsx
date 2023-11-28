import React from 'react'

const TodoInput = () => {
  return (
    <div className='todoinput'>
        <input type="text" placeholder='할 일을 입력 후 추가를 누르세요' className='todocell'/>
        <button>추가</button>
    </div>
  )
}

export default TodoInput