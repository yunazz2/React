import React from 'react'
import { Link } from 'react-router-dom'

const BoardListContainer = () => {
  return (
    <div>
        <h1>게시글 목록</h1>
        <Link to="/boards/insert">글쓰기</Link>
        <hr />
        <Link to="/boards/10">게시글 조회(10)</Link>
    </div>
  )
}

export default BoardListContainer