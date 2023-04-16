import './TodoList.css';
import React, { useState } from 'react';
import TodoListItem from './TodoListItem/TodoListItem';


const TodoList = (props) => {
 const {list,deleteItem,triggerEdit} = props;

  return (
    <div>
       {list.length?(list.map((item,index)=> <TodoListItem key={index} item={item} index ={index} onDelete={deleteItem} onEdit={triggerEdit}></TodoListItem>)) 
       :(<span>no</span>)}
    </div>
  )
}

export default TodoList;