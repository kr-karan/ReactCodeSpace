import React, { useCallback, useContext } from 'react'
import { CountContext } from '../../../App'

function ComponentA() {
    const countContext = useContext(CountContext);
  return (
    <div>
      ComponentA
      <button onClick={()=>countContext.CountDispatch('Increment')}>Increment</button>
      <button onClick={()=>countContext.CountDispatch('Decrement')}>Decrement</button>
      <button onClick={()=>countContext.CountDispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
