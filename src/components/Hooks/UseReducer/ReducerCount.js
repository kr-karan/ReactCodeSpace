import React,{useReducer} from 'react'

const InitialCount = 0;
const reducer = (state,action)=>{
  switch(action){
    case 'Increment' :
      return state + 1;
    case 'Decrement' :
      return state - 1;
    case 'Reset' :
      return InitialCount;

    default :
      return state;
  }
}
function ReducerEx() {

 const [count,dispatch] = useReducer(reducer,InitialCount)

  return (
    <div>
      <h3>
      {count}
      </h3>
      <button onClick={()=>dispatch('Increment')}>Increment</button>
      <button onClick={()=>dispatch('Decrement')}>Decrement</button>
      <button onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ReducerEx
