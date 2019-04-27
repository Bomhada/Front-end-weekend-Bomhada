import React from 'react';

export class Content extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count:0,
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.reset = this.reset.bind(this);
    }

    increaseCount(){
        const current = this.state.count;
        this.setState({
            count: current+1
        })
        // console.log(this.state);
    }
    decreaseCount(){
        const current = this.state.count;
        this.setState({
            count: current-1
        })
        // console.log(this.state);
    }
    reset(){
        const current = this.state.count;
        this.setState({
            count: 0
        })
    }

    render(){
        const {count} = this.state;
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={this.increaseCount}>up</button>
                <button onClick={this.decreaseCount}>down</button>
                <button onClick={this.reset}>reset</button>
            </div>
            )
    }

}