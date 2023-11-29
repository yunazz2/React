import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as api from "../../api/boards.js"

const BoardListContainer = () => {

  const [boardList, setBoardList] = useState([])

  const getBoardList = async () => {
    const response = await api.boardList(); // axios - [GET] - /boards 요청
    setBoardList(response.data)
  } // axios는 비동기니까 코드가 이어지게 하려면 기다려야 하는데 그걸 async & await를 사용해서 한다.

  useEffect(() => {
    getBoardList()
  }, [])  // 빈 배열을 넣는 이유는 계속 무한으로 돌아가지 않게 하기 위해


  return (
    <div>
      <h1>게시글 목록</h1>
      <Link to="/boards/insert">글쓰기</Link>
      <hr />
      <Link to="/boards/10">게시글 조회</Link>
      {/* 임의로 10번 게시글 하드코딩 */}
    </div>
  )
}

export default BoardListContainer