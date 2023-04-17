import './NewItem.css';
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const NewItem = (props) => {
  const PRIORITY = ['low','medium','high']
  const {addItem,editState,editItem} = props;
  const [title,Settitle] = useState('');
  const [priority,Setpriority] = useState('');
  const isEdit = Boolean(editState._id);
  console.log(priority);
  const handleClear = () =>{
    Settitle('');
    Setpriority('');
  }
   
  const handleSave = ()=>{
        const obj ={
          title :title,
          priority:priority,
        }
        if(!obj.title) {
          return toast.error('Please Enter the Valid Task')
         
        }
        if(isEdit) {
          obj._id = editState._id
          editItem(obj)
        }else {
          addItem(obj);
          toast.success('Added Successfully');
        }
        Settitle('');
        Setpriority('');
  }
  useEffect(()=>{
      if(editState._id) {
        Settitle(editState.title);
        Setpriority(editState.priority);
      }
  },[editState])
  return (
    <div className='new-item-card' >    
          <span className='checkbox pointer'></span>
          <div className='form-container'>
            <input placeholder='Type Here....' value={title} onChange={(e)=>{Settitle(e.target.value)}}></input>
          {title && <div className='badge-container'>
                {PRIORITY.map((p)=>
                  <div
                    key={p}
                    className={`p-badge ${priority} ${ p==priority && 'selected'}`}
                    onClick={()=>Setpriority(p)}
                    value={p}
                    
                  >{p}
                    </div>)
                }
           </div> }
            <div className='button-tag'>
              <button className='button-save'onClick={handleSave}>Save</button>
              <button className='button-clear' onClick={handleClear}>Clear</button>
            </div>
          </div>
          
    </div>
  );
};

export default NewItem