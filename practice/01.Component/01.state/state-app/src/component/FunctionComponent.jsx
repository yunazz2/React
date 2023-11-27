import React, { useState } from 'react'

const FunctionComponent = () => {

    // useState 사용하여 상태 정의
    const [name, setName] = useState('LEEYUNA');

    // 버튼 클릭 시
    const handleClick = (newName) => {
        console.log(`Click ${newName}`);
        
        // name 상태 업데이트
        setName(newName)
    }

    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <h2>안뇽 나는 {name}야</h2>
            <button onClick={() => handleClick('LEEYUNA')}>LEEYUNA</button>
            <button onClick={() => handleClick('이유나')}>이유나</button>
        </div>
    )
}

export default FunctionComponent