import React from 'react'
import { Link } from 'react-router-dom'

// ⛄ 게시글 등록
const BoardInsertContainer = () => {
  return (
    <div>
      <h1>게시글 등록</h1>
      <Link to="/boards">목록</Link>
    </div>
  )
}

export default BoardInsertContainer