import  express  from "express";
import list from '../data.js';
import Todo from "../Model/Todo.js";


const SeedRouter = express.Router();
SeedRouter.get('/',async(req,res)=>{
    const created = await Todo.insertMany(list);
    res.send({created});
    console.log({created});
})

export default SeedRouter;