import React,{useState} from 'react'

function HookCounterWithPre() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount)
    const incrementFive = (prevCount) =>{ 
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
  return (
    <>
    <div>count : {count}</div>
    <div>
        <button onClick={()=> incrementFive(count)}>Click Me For Five</button>
    </div>
    <div>
    <button onClick={()=> setCount(count + 1)}>Click Me For +one</button>
    </div>
    <div>
    <button onClick={()=> setCount(count - 1)}>Click Me For -one</button>
    </div>
    <div>
    <button onClick={()=> setCount(initialCount)}>Click Me Reset</button>
    </div>
    </>
  )
}

export default HookCounterWithPre

// const [count,setCount] = useState(0)