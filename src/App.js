import './App.css';
import { useReducer } from 'react';
import MousePointerClass from './components/Hooks/UseEffect/MousePointerClass';
import MousePointerWithHook from './components/Hooks/UseEffect/MousePointerWithHook';
import MouseContainer from './components/Hooks/UseEffect/Mousecontainer';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/conditionalRendering';
import Hooks from './components/hooks';
import UseStateHook from './components/Hooks/UseState/HookCounter';
import HookCounterWithPre from './components/Hooks/UseState/HookCounterWithPre';
import HookCounterthree from './components/Hooks/UseState/HookCounterthree';
import HooksArray from './components/Hooks/UseState/HooksArray';
import HookOne from './components/Hooks/UseEffect/HookOne';
import HookOneClass from './components/Hooks/UseEffect/HookOneClass';
// import ExAxios from './components/Hooks/UseEffect/ExAxios';
import React from 'react';
import ReducerEx from './components/Hooks/UseReducer/ReducerCount';
import Parentclass from './components/parentclass';
import Counter2 from './components/Hooks/UseReducer/Counter2';
import ComponentA from './components/Hooks/UseContext&UseReducer/ComponentA';
import ComponentB from './components/Hooks/UseContext&UseReducer/ComponentB';
import ComponentC from './components/Hooks/UseContext&UseReducer/ComponentC';
import FetchUseState from './components/Hooks/Usestate&UseReducer/fetchUseState';
import FetchReducer from './components/Hooks/Usestate&UseReducer/fetchReducer';
import ChildComponent from './components/childComponent';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


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
export const CountContext = React.createContext();

function App() {

  const [count,dispatch] = useReducer(reducer,InitialCount)
  return (
   <div id = "root">
   {/* <Hooks /> */}
   {/* <ParentComponent/>
   <ConditionalRendering /> */}
   {/* <UseStateHook/> */}
   {/* <HookCounterWithPre /> */}
   {/* <HookCounterthree/> */}
   {/* <HooksArray/> */}
   {/* <HookOne/> */}
   {/* <HookOneClass/> */}
   {/* <MousePointerClass/> */}
   {/* <MousePointerWithHook/> */}
   {/* <MouseContainer/> */}
   {/* <ExAxios/> */}
   {/* <UserContext.Provider value = {'vishwas'}>
    <ChannelContext.Provider value ={'CodeEvaluation'}>
        {/* <ComponentC /> */}
        {/* <ComponentD /> */}
        {/* <ComponentA/>
    </ChannelContext.Provider> */}
   {/* </UserContext.Provider>  */}
   {/* <ReducerEx/> */}
   {/* <Parentclass/> */}
   {/* <ReducerEx /> */}
   {/* <Counter2/> */}
   {/* {count}
    <CountContext.Provider value = {{countState : count, CountDispatch : dispatch}}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
    </CountContext.Provider> */}
    {/* <div>ch */}
{/* <ChildComponent/> */}
<ParentComponent/>
   </div>
  );
}

export default App;
