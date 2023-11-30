package com.joeun.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joeun.server.dto.Board;
import com.joeun.server.mapper.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boradMapper;
    
    @Override
    public List<Board> list() throws Exception {
        List<Board> boardList = boradMapper.list();
        return boardList;
    }

    @Override
    public Board select(int no) throws Exception {
        Board board = boradMapper.select(no);
        return board;
    }

    @Override
    public int insert(Board board) throws Exception {
        int result = boradMapper.insert(board);
        return result;
    }

    @Override
    public int update(Board board) throws Exception {
        int result = boradMapper.update(board);
        return result;
    }

    @Override
    public int delete(int no) throws Exception {
        int result = boradMapper.delete(no);
        return result;
    }

    @Override
    public int updateViews(int count, int no) throws Exception {
        int result = boradMapper.updateViews(count, no);
        return result;
    }
}
