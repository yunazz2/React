import React from 'react'
import { Link } from 'react-router-dom'

const BoardInsertContainer = () => {
  return (
    <div>
      <h1>게시글 작성</h1>
      <Link to="/boards">목록</Link>
    </div>
  )
}

export default BoardInsertContainer