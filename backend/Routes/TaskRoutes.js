import  express  from "express";
import Todo from "../Model/Todo.js";
import expressAsyncHandler from "express-async-handler";
const TaskRoutes = express.Router();

TaskRoutes.get('/',
    expressAsyncHandler( async (req,res)=>{
        try{
            const list = await Todo.find();
            res.send(list)
        }catch(err){
            console.log('error')
        }
    })
)
TaskRoutes.post('/create',
    expressAsyncHandler(async (req,res)=>{
        try{
            const newToDo = await Todo.create(req.body);
            res.send({newToDo})
        }catch(err) {
            console.log('err')
        }
    })
)
TaskRoutes.get('/id/:id',
expressAsyncHandler(async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        if(todo) {
            res.send({todo})
        }
    }catch(err) {
        console.log("err");
    }
}))

TaskRoutes.delete('/delete/:id',
expressAsyncHandler(async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        console.log(req.params.id)
        if(todo) {
            console.log('entered')
            await Todo.findByIdAndDelete(req.params.id);
            res.send('Deleted')
        }
    }catch(err) {
        console.log('err')
    }
}))
TaskRoutes.patch('/update/:id',
expressAsyncHandler(async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id);
        console.log(todo)
        if(todo) {
            await Todo.findByIdAndUpdate(req.params.id,req.body)
        }
    }catch(err) {
        console.log('errpr')
    }
}))
export default TaskRoutes;