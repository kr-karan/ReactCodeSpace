import React from 'react'
import { useState } from 'react';

function Hooks() {
    const initailCount = 0;
    const [count,setCount] = useState(initailCount);
    // const setCounter = ()=>{
    //     setCount(count + 1);
    // }
    const inceFive = ()=>{
        setCount(prevCount => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
    }
  return (
    
    
    <div>
        Count : {count}
        <button onClick = {()=> setCount(initailCount)} >Reset </button>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        <button onClick={inceFive}>IncrementFive</button>

      {/* <button onClick >ncrement</button>
      <button >Decrement</button> */}

    </div>
  )
}

export default Hooks
