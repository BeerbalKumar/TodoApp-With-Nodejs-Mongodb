import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    description:{
      type:String,
      required:true
   },
   finish:{
      type:Boolean,
      required:true,
      default:false   }
}) 

const addTodo = mongoose.model("todos",todoSchema)

export default addTodo