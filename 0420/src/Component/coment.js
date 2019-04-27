
import React, {Component} from 'react';

class Comment extends Component{

    render(){
        const {content} = this.props;
        return(
            <div>
                {content}
            </div>
        );
    }

}

export {
    Comment
}