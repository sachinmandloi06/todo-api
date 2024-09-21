const expressAsyncHandler = require("express-async-handler")
const Todo = require("../models/todoModel")

const getTodos = expressAsyncHandler(async(req,res) => {
    
     const todos = await Todo.find()
     
     if(!todos){
        res.status(404)
        throw new Error("Todos Not Found !!")
     }

     res.status(200).json(todos);

})

const getTodo = expressAsyncHandler(async(req,res) => {
    
    const todo = await Todo.findById(req.params.id);
    
    if(!todo){
       res.status(404)
       throw new Error("Todo Not Found !!")
    }

    res.status(200).json(todo);

})

const addTodo = expressAsyncHandler( async(req,res) => {
    const {title, description, isPublished , author} = req.body

    if(!title || !description || !author){
        res.status(401)
        throw new Error('Please Fill All Details!')
    }
    
  //  Save Todo In DB
  const newTodo = await Todo.create({
    title,
    description,
    isPublished,
    author,
  });

  if(!newTodo){
    res.status(401)
    throw new Error("Unable To Create Todo")
  }

  res.status(201).json(newTodo)

})

const updateTodo = expressAsyncHandler(async(req,res) => {
    
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id , req.body , {new : true})
    
    if(!updatedTodo){
       res.status(401)
       throw new Error("Todo Not Updated !!")
    }

    res.status(200).json(updatedTodo);

})

const removeTodo = expressAsyncHandler(async(req,res) => {
    
    await Todo.findByIdAndDelete(req.params.id)
    res.json({
        success : true,
    });
    
})

module.exports = {getTodos,getTodo,addTodo,updateTodo,removeTodo}