import React from 'react'
import { useState} from 'react'

const MouseEvents = () => {

    const [isHovered, setIsHovered]=useState('Not Hover');

   const handleMouseOver=()=>{
        setIsHovered('Hovered');
   }

   const handleMouseOut=()=>{
        setIsHovered('Not Hover');
   }
  return (
    <div>
      <h1>Mouse Events</h1>
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{isHovered}</button>
    </div>
  )
}

export default MouseEvents
