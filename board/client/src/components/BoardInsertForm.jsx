import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BoardInsertForm = ({onInsert}) => {   // props를 내려 받고 등록이랑 연결해주기

    // ⭐ state 설정 => value에 설정할 값들
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [content, setContent] = useState('')

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeWriter = (e) => {
        setWriter(e.target.value)
    }
    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {
        onInsert(title, writer, content)
    }

    return (
    <div>
        <h1>게시글 등록</h1>
        <table>
            <tbody>
                <tr>
                    <td>제목</td>
                    <td>
                        <input type="text" value={title} onChange={handleChangeTitle} />
                    </td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>
                        <input type="text" value={writer} onChange={handleChangeWriter} />
                    </td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>
                        <textarea cols="40" rows="5"
                            value={content}
                            onChange={handleChangeContent}
                        ></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            {/** title, writer, content가 매개 변수로 BoardInsertContainer로 넘어 감 */}
            {/* <button onClick={() => onInsert(title, writer, content)}>등록</button> */}
            {/* 위처럼 작성해도 되고, 코드가 이렇게 길어지는게 싫다! 하면 아래처럼 작성하여 함수를 위에 정의를 해줘도 된다. */}
            <button onClick={onSubmit}>등록</button>
            <Link to="/boards">목록</Link>
        </div>
    </div>
  )
}

export default BoardInsertForm