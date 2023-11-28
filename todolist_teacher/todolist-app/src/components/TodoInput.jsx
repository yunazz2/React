import React from 'react'

const TodoInput = () => {
  return (
    <div>
      <form className='form'>
        <input placeholder='할 일 입력' className='input'/>
        <button type='submit' className='btn'>추가</button>
      </form>
    </div>
  )
}

export default TodoInput