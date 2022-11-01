import React from 'react'
import { useState } from 'react';
import TodoList from './components/ToDoList/ToDoList';
import './App.css';
function App() {
  const [inputList,setInputList]=useState("Buy Apple"); 
  const[Items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=()=>{
    setItems((oldItems)=>
    {
    return [...oldItems,inputList];  
    });
    setInputList("");
  };
  return (
    <> 
 <div className="main_div">
  <div className="center_div">
    <br/>
    <h1>ToDoList</h1>
    <br/>
    <input type="text" placeholder="Add a item" onChange={itemEvent} value={inputList}/>
    <button onClick={listOfItems}>+</button>
    <ol>
      {/* <li>{inputList}</li> */}
          {Items.map((itemval,index)=>{
          return <TodoList key ={index} id={index} text ={itemval} 
          />
          })}
    </ol> 
 </div>
 </div>
    </>
  );
}
export default App;

