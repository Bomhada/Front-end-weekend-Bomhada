import React, { Component } from 'react';
import Beverage from './Beverage'



class BeverageList extends Component {

    static defaultProps = {
        list:[]
    }

    render() {

        const view = this.props.list.map((item, index)=>{
            const{id, url, name, price} = item;
            return <Beverage key={id} id={id} url={url} name={name} price={price}/>
        });

        return (
          <div>
            {view}
         </div>
        )
    }
}

export default BeverageList;
