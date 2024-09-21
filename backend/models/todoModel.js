const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true 
    },
    description : {
        type : String,
        required : true
    },
    isPublished : {
        type : Boolean,
        required : true,
        default : false
    },
    author :{
        type : String,
        required : true
    }
  },
  {
     timestamps : true
  }
);

module.exports = mongoose.model("Todo", todoSchema)