import React, { Component } from 'react';
import ChildComponent from './childComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ParentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
        this.changeName = this.changeName.bind(this);
  
    }
    changeName(nameFromChild){
        this.setState ({
            ParentName: nameFromChild
        })
    }
    greetParent(childName) {
        alert(`Hello  ${this.state.ParentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.ParentName}
                </div>
                <ChildComponent changeName={this.changeName}  greethandler={this.greetParent}/> 
            </div>
        )
    }
}
