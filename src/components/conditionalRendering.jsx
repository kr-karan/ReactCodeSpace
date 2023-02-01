import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
  constructor(){
    super()
    this.state ={
        isLog: false
    }
  }
    render() {
        return this.state.isLog ?  (<div> Hello Vishwas</div>) : (<div> Hello Guest</div>) 

        //2nd Method
        
        // if(this.state.isLog){
        //     return(<div>
        //         Hello Vishwas
        //         </div>)
            
        // }else{
        //     return(<div>
        //         Hello guest
        //         </div>)
            
        // }

  }
}
