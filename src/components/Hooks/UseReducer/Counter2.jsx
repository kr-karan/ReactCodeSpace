import React,{useReducer} from 'react'

const InitialCount ={
    firstCounter: 0,
    secondCounter : 10
} 
const reducer = (state,action)=>{
  switch(action.type){
    case 'Increment' :
      return {...state ,firstCounter: state.firstCounter + action.value};
    case 'Decrement' :
      return {...state ,firstCounter: state.firstCounter - action.value};
    case 'Increment 5' :
        return {...state ,firstCounter: state.firstCounter + action.value};
    case 'Decrement 5' :
      return {...state ,firstCounter: state.firstCounter - action.value};

    case 'IncrementC2' :
      return {...state ,secondCounter: state.secondCounter + action.value};
    case 'DecrementC2' :
      return {...state ,secondCounter: state.secondCounter - action.value};
    case 'IncrementC2 5' :
        return {...state ,secondCounter: state.secondCounter + action.value};
    case 'DecrementC2 5' :
      return {...state ,secondCounter: state.secondCounter - action.value};
      
    case 'Reset' :
      return InitialCount;

    default :
      return state;
  }
}
function Counter2() {

 const [count,dispatch] = useReducer(reducer,InitialCount)

  return (
    <div>
      <h3>firstCounter : {count.firstCounter}</h3>

      <h3>secondCounter : {count.secondCounter}</h3>

      <button onClick={()=>dispatch({type : 'Increment', value:1})}>Increment</button>
      <button onClick={()=>dispatch({type :'Decrement', value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type :'Increment 5', value:5})}>Increment 5</button>
      <button onClick={()=>dispatch({type :'Decrement 5', value:5})}>Decrement 5</button>
      <button onClick={()=>dispatch({type : 'Reset'})}>Reset</button>

      <button onClick={()=>dispatch({type : 'IncrementC2', value:1})}>IncrementC2</button>
      <button onClick={()=>dispatch({type :'DecrementC2', value:1})}>DecrementC2</button>
      <button onClick={()=>dispatch({type :'IncrementC2 5', value:5})}>IncrementC2 5</button>
      <button onClick={()=>dispatch({type :'DecrementC2 5', value:5})}>DecrementC2 5</button>
    </div>
  )
}

export default Counter2
