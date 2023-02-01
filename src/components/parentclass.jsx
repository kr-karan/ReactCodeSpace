import React, { Component } from 'react'
import Childclass from './childclass'

export default class Parentclass extends Component {
    constructor() {
      super()
    
      this.state = {
         name: "Parent"
      }
    }
    
    
  render() {
    const stu = {
        name : "Karan",
        age : 20
    }
    return (
      <div>
        hello from parent - {this.state.name}
        <Childclass/>
      </div>
    )
  }
}
