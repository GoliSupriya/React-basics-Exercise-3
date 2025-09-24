import React from 'react'
import {useState} from 'react'
import Cond1 from './Cond1'

function TernaryOperator() {
    const [Morning,setMorning]=useState(true);

    

  return (
    <div>
     <h1>Ternary Operator</h1>
      {// Ternary Operator
    Morning?"Good Morning":"Good Night"}
    <br/>
    {Morning?<h2>Have a nice day</h2>:<Cond1/>}
    <button onClick={()=>setMorning(!Morning)}>Change</button>
    </div>
  )
}

export default TernaryOperator
