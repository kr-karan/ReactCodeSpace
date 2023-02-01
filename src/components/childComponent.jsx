// import React, { Component } from 'react'

// export default class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={()=>{this.props.greethandler('child')}}>Greet Parent</button>
//       </div>
//     )
//   }
// }
import React, { useState } from 'react'

function ChildComponent(props) {
  const [values,setValues] = useState('childName');
  return (
    <div>
      <input type ="text" onChange={e =>setValues(e.target.value)}></input>
       <button onClick={()=> props.greethandler(values)}>Greet Parent</button>
       <button onClick={()=> props.changeName(values)}>Change Name</button>
    </div>
  )
}

export default ChildComponent
