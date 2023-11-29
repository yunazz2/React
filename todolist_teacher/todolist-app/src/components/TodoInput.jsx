import React, { useState } from 'react'

const TodoInput = ({onSubmit, onChange, input}) => {

  // const [input, setInput] = useState('') 여기서 이렇게 작성하면 컨테이너 밖으로 보내는게 안된다나.... 해서 Container에서 작성해서 여기로 내려줄 것임

  return (
    <div>
      <form className='form'>
        <input placeholder='할 일 입력' className='input' onChange={onChange} value={input}/>
        {/*
          onChange를 쓰는 이유는 이게 없이 그냥 value=input만 있으면 텍스트 입력이 안 됨.
          input 칸에 텍스트를 입력해서 변화하는것을 컨테이너에서 감지하고, 그걸 value로 받고 넘겨야 하기 때문에 씀.
        */}
        <button type='submit' className='btn' onClick={onSubmit}>추가</button>
      </form>
    </div>
  )
}

export default TodoInput