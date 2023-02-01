import React, { Component } from 'react'

export default class Childclass extends Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    let {name,age}=this.props.ob
    return (
      <div>
               <h1>{name}</h1>
               <h1>{age}</h1>
        
      </div>
    )
  }
}

Childclass.defaultProps = {
    ob : {
        name:"default",
        age:0
    }
    
}
