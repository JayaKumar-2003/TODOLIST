import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    title:String,
    isCompleted:Boolean,
    priority:String,
})

const Todo = mongoose.model('Todo',TodoSchema);

export default Todo;