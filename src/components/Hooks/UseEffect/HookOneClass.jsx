import React, { Component } from 'react'
//Example for class Component
export default class HookOneClass extends Component {
    constructor(props) {
      super(props)
    const initialCount = 0;
      this.state = {
         count: 0,
         text : ''
      }
    }
    
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log("ComponentDidMount rendered for button");
            document.title = `clicked ${this.state.count} times`
        }
    }
  render() {

    return (
      <div>
        <input type = 'text' value = {this.state.text} onChange={(e) => this.setState({text:e.target.value})}/>
        <button onClick={()=>this.setState({count :this.state.count + 1})}>clicked {this.state.count} times</button>

      </div>
    )
  }
}
