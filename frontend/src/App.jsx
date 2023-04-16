import { useEffect, useState } from 'react';
import './App.css'
import NewItem from'./Components/NewItem/NewItem';
import TodoList from './Components/TodoList/TodoList';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const DEFAULT_LIST =[
  {
      title :'Study Js',
      priority:'high',
      id:nanoid()
  },{
    title:'Study Html',
    priority:'medium',
    id:nanoid()
  },{
      title:'Study Css',
      priority:'low',
      id:nanoid()

  }
]
function App() {
  const [list,Setlist] = useState(DEFAULT_LIST);
  const [editState,SeteditState] = useState({});
  console.log(DEFAULT_LIST);
  const deleteItem = (id) =>{
     const filteredList= list.filter((item)=> item.id!==id)
     Setlist([...filteredList])
  }
  const addItem = (item) =>{
    item.id = nanoid();
      Setlist((prev)=>[item,...prev])
      fetch('http://localhost:3000/api/v1/list',{
        method:"POST",
        headers:{
            'Accept':'application/json,text/plain, */*',
            'Content-type':'application/json',
        },
        body:JSON.stringify(item)
      }).then((res)=>res.json().then((data)=>{Setlist((prev)=>[item,...prev])}))
  }
  const triggerEdit = (item) =>{
    SeteditState(item);
  }
  const editItem = (updatedItem) =>{
    const updatedList = list.map((item)=> {
      if(item.id=== updatedItem.id) {
        return updatedItem;
      }
      else {
        return item
      }
    })
    Setlist([...updatedList]);
  }
  useEffect(()=>{
      fetch('http://localhost:3000/').then((res)=>{
        res.json().then((data)=>Setlist(data))
      }).catch(()=>{toast.error('Network error')})
  },[])
  console.log(editState);
  return(
    <div className='app'>
        <h1 className='title'>ToDo List</h1>
        <NewItem addItem={addItem} editState={editState} editItem={editItem}></NewItem>
        <TodoList list={list} deleteItem={deleteItem} triggerEdit ={triggerEdit}></TodoList>
    </div>
  );
}

export default App;
