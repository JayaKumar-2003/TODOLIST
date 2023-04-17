import './TodoListItem.css';
import React, { useState } from 'react';


const TodoListItem = (props) => {
    const {item,
    onDelete,index,onEdit} = props;
    const {title,priority,_id} = item;
    const [check,Setcheck]= useState(false);
  
  return (
    <div className={`item-card ${priority}`} >
       {check ? <span className="material-symbols-outlined pointer"onClick={()=>Setcheck(!check)}>select_check_box</span>: <span className='checkbox pointer'onClick={()=>Setcheck(!check)}></span>}
         <div className={`card-title ${check &&'strike'}`}>{title}</div>
            <div className={`badge ${priority}`}>
                {priority}
            </div>
            <div className='button'>
            <span className="material-symbols-outlined pointer" onClick={()=>{onEdit(item)}}>edit</span>
            <span className="material-symbols-outlined pointer"onClick={()=>onDelete(_id)}>delete</span>
            </div>
    </div>
    
  )
}

export default TodoListItem;