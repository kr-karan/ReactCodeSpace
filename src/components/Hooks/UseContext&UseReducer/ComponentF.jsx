import React,{useContext} from 'react'
import { CountContext } from '../../../App';

function ComponentF() {
    const countContext = useContext(CountContext);
    return (
     
        <div>
        ComponentF
        <button onClick={()=>countContext.CountDispatch('Increment')}>Increment</button>
        <button onClick={()=>countContext.CountDispatch('Decrement')}>Decrement</button>
        <button onClick={()=>countContext.CountDispatch('Reset')}>Reset</button>
      </div>
    )
}

export default ComponentF
