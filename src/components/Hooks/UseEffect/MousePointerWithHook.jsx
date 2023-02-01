import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function MousePointerWithHook() {
    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

   const loMousePosition =(e) =>{
    console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() =>{
        console.log("useEffect")
        window.addEventListener('mousemove',loMousePosition)

        return ()=>{
            console.log("component UnmountCode");
            window.removeEventListener('mousemove',loMousePosition)
        }
    },[])
  return (
    <div>
      <h3>X : {X} Y : {Y}</h3>
    </div>
  )
}

export default MousePointerWithHook
