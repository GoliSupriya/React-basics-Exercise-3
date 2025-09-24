import React from 'react'
import { useState } from 'react'

const FormEvents = () => {

    let [userName,setUserName]=useState("");

    const getUserName=(event)=>{
        setUserName(event.target.value);
    }
  return (
    <div>
      <h1>Form Events</h1>
      <form>
        <h2>{userName}</h2>
        <input type="text" placeholder='Enter your name' onChange={getUserName}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormEvents
