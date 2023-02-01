import React,{useContext} from 'react'
import { CountContext } from '../../../App';

function ComponentD() {
    const countContext = useContext(CountContext);
  return (
   
      <div>
      ComponentD
      <button onClick={()=>countContext.CountDispatch('Increment')}>Increment</button>
      <button onClick={()=>countContext.CountDispatch('Decrement')}>Decrement</button>
      <button onClick={()=>countContext.CountDispatch('Reset')}>Reset</button>
    </div>
  )
    
}

export default ComponentD
