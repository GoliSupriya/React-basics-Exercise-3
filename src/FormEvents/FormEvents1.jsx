import React from 'react'
import { useState } from 'react'

const FormEvents1 = () => {

    const [input,setInput]=useState("");
    const [Newinput,setNewInput]=useState();

    const userDetails=(event)=>{
        setInput(event.target.value);
    }

    const updateInput=(event)=>{
        event.preventDefault();
        setNewInput(input);
    }

  return (
    <div>
        <h1>Form Events1</h1>
        <h2>Hello,{Newinput}</h2>
      <form onSubmit={updateInput}>
        
        <input type="text" placeholder='Enter Characters' onChange={userDetails}/>
        <button type='submit' onClick={updateInput}>Submit</button>
      </form>
    </div>
  )
}

export default FormEvents1
