import React from 'react'
import { useState } from 'react'

function UseStateHook() {
    const [count,setCount] = useState(0);
  return (
    <div>
        Count : {count}
      <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default UseStateHook
