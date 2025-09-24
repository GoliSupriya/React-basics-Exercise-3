import React from 'react'
import {useState} from 'react'

function ClickEvent() {

    const[number,setNumber]=useState(0);

    // function increment
    const increment=()=>{
        setNumber(number+1);
    }

    // function decrement
    const decrement=()=>{
        if(number>0){
             setNumber(number-1);
        }
    }

    // function reset
    const reset=()=>{
        setNumber(0);
    }

  return (
    <div>
      <h1>Click Events</h1>
      Number : {number}<br/><br/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ClickEvent
