const express = require('express')
const Sequelize = require('sequelize');             // ✅ Sequelize 추가
const Todo = require('../models/todo')            // ✅ Todo 모델 import
const router = express.Router()

// 할 일 목록
router.get('/', async (req, res) => {
    console.log('할 일 목록...');
    let todoList = []
    try {
        const todoList = await Todo.findAll({   // findAll이 DB에 접근하는 서비스임플 + Mapper까지 다 하는거라고 보면 됨
            order: [
                ['status', 'ASC'],
                ['upd_date', 'DESC'],
            ],
        });
        res.json(todoList);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

// 👩‍💻 할 일 등록
router.post('/', async (req, res) => {
    console.log('할 일 등록...');
    // 구조분해할당
    const { name } = req.body;
    const todo = { name };

    console.log(name);

    let result = 0
    try {
        result = await Todo.create(todo)           // ✅ 데이터 등록
        if(result)  // result 객체 자체가 넘어와서 null이면 else로 감
            res.json(result)
        else
            res.status(200)
    } catch (error) {
        console.log(error);
    }

    console.log(`등록 result : ${result}`);
});

// 할 일 수정
router.put('/', async (req, res) => {
    console.log('할 일 수정...');
    const { name, status, no } = req.body;

    let result = 0
    try {
        if(no == -1) {
            await Todo.update(
                { status: 1, upd_date: Sequelize.literal('now()') }, // 업데이트할 필드와 값을 지정
                { where: {} } // 모든 조건 없이 전체 데이터 업데이트
            );
        }
        else {
            result = await Todo.update({
                name: name,
                status: status,
                upd_date: Sequelize.literal('now()')
            }, {
                where: {no: no}
            })
        }
    } catch (error) {
        console.log(error);
    }
});

// 할 일 삭제
router.delete('/:id', async (req, res) => {
    console.log('할 일 삭제');
    let id = req.params.id

    let result = 0
    try {
        if(id == -1) {
            result = await Todo.destroy({ where: {} }); // 모든 데이터 삭제
        }
        else {
            result = await Todo.destroy({
                where: { no : id }
            })
        }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;
  