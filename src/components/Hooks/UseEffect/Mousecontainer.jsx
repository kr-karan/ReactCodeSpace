import React from 'react'
import { useState } from 'react'
import MousePointerWithHook from './MousePointerWithHook';

function MouseContainer() {
    const [display,setDisplay] = useState(true);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)} >Click Me</button>
        {display && <MousePointerWithHook/>}
    </div>
  )
}

export default MouseContainer
