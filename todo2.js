import React from 'react';  
import { useState } from 'react';
const ToDoList=(props)=>{
  const[line,setLine]= useState(false);
    const cutIt=()=>{
     setLine(true);
    };
return (
<>
<div className="todo_style" >
<button className="fa-items" onClick={cutIt} 
 >x</button>
<li style={{textDecoration : line?'line-through': 'none'}}>{props.text }</li>
</div>
</>
); 
};
export default ToDoList;


