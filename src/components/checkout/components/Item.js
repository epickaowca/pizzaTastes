import React from 'react';

class Item extends React.Component{
    render(){
        const { amount, cost, name } = this.props;
        return(
            <div>
                <p>{ amount ? amount : 1 }x { name }</p>
                <p>$ { amount ? (cost*amount).toFixed(2) : cost }</p>
            </div>
        )
    }
}

export default Item