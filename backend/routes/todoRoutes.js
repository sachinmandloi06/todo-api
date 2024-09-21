const express = require('express')
const { getTodos, addTodo, getTodo, updateTodo, removeTodo } = require('../controllers/todoController')


const router = express.Router()

// Method : GET
// Access :  PUBLIC
// EndPoint : /api/todo

router.get("/", getTodos)

// Method : POST
// Access :  PUBLIC
// EndPoint : /api/todo

router.post("/", addTodo)

// Method : GET
// Access :  PUBLIC
// EndPoint : /api/todo/:id

router.get("/:id", getTodo)

// Method : PUT
// Access :  PUBLIC
// EndPoint : /api/todo/:id

router.put("/:id", updateTodo)

// Method : DELETE
// Access :  PUBLIC
// EndPoint : /api/todo/:id

router.delete("/:id", removeTodo)

module.exports = router;