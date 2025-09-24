import React from 'react'
import { useState, useEffect } from 'react'


const Resize = () => {

    const [size,setSize] =useState({
        width:window.innerWidth,
        height:window.innerHeight,
    });

    const updateSize=()=>{
        setSize({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    };

    useEffect(()=>{
        window.addEventListener("resize",updateSize);

        return()=>{
            window.removeEventListener("resize",updateSize);
        };
    },[]);

  return (
    <div>
      Resize Component
      <p>Resize the window to see the screen size</p>
      <p style={{color:"red"}}>Width:{size.width}px</p>
      <p style={{color:"red"}}>Height:{size.height}px</p>
    </div>
  )
}

export default Resize
