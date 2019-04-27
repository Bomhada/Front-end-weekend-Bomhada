
import React, {Component} from 'react';

class Countlist extends Component{

    constructor(props){
        super(props)
        this.state = {
            number: 0,
            result:0,
        }
        this.onClick = this.onClick.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
    }

    onClick(){
        this.setState({
            result: this.state.number
        })
    }

    onNumberChange(e){
        console.log(e.target.value)
        this.setState({
            number: e.target.value
        })
    }

    render(){
        const {number} = this.state;

        return (
        <div>
            <div>
                <input value={this.state.number} onChange={this.onNumberChange}></input>
                <button onClick={this.onClick}>Click</button>
            </div>
            <h1>
                {number}
            </h1>
        </div>
        )
    }

}

export{
    Countlist
};
// import {Countlist} from './Countlist'
