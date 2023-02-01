import React, { Component } from 'react'

export default class MousePointerClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         X : 0,
         Y : 0
      }
    }
    loMousePosition = (e)=>{
      // console.log("Hello")
        this.setState({X : e.clientX ,Y : e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.loMousePosition)
    }
  render() {
    return (
      <div>
        <h3>X : {this.state.X} Y : {this.state.Y}</h3>
      </div>
    )
  }
}
