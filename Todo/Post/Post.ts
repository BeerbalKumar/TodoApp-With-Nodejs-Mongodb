import express from "express";
const routes = express.Router();
import addTodo from './../../config/Modal/todoSchema';



routes.get("/tasks", async(req:express.Request,res:express.Response)=>{
    const getTodo = await addTodo.find({})
    res.send({message:getTodo})
})

routes.get("/tasks/:id", async(req:express.Request,res:express.Response)=>{
    const getOneTodo = await addTodo.findOne({_id:req.body.id})
    res.send({message:getOneTodo})
})



routes.post("/tasks", async(req:express.Request,res:express.Response)=>{
    const Todos = await new  addTodo(req.body);
     Todos.save()
     .then(()=>{
         res.send({message:"todo add successfully"})
     })
     .catch((err)=>{
         console.log("some went wrong")
     })
})




routes.delete("/delete/:id",async (req:express.Request,res:express.Response)=>{
    await addTodo.findByIdAndDelete({_id:req.body.id})
    .then(()=>{
        res.send({message:"todo delete successfully"})
    })
    .catch((err)=>{
        console.log("some went wrong")
    })
 })



 routes.put("/update/:id",async (req:express.Request,res:express.Response)=>{

    await addTodo.findByIdAndUpdate({_id:req.body.id},
        {
        title:req.body.title,
        description:req.body.description,
        finish:req.body.finish
    })
    .then(()=>{
        res.send({message:"todo updated successfully"})
    })
    .catch((err)=>{
        console.log("some went wrong")
    })
 })



module.exports = routes;