import React, {Component} from 'react'

class Payment extends Component{

    static defaultProps = {
        Payment:0,
        onReset: ()=>{}
    }

    render(){

        const {Payment} = this.props;
        return(
            <div>
                <input />
                <button onClick={this.props.onReset}>초기화</button>
            </div>
        )
    }

}

export default Payment;