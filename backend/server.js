const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db_config')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000

// DB Connection
connectDB();

// Body-Parser
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//Default Route 
app.get("/", (req,res)=> {
    res.json({
       msg: "WELLCOME TO CRUD API 1.0",
    });
})

// Todo Routes
app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.black.bgWhite);
})