import React from 'react';

class Item extends React.Component{
    render(){        
        const { id, name, cost, product} = this.props
        if(this.props.productDisplay===product){
            return(
                <div className="mainSection_itemContainer">
                    <div onClick={this.props.click} className={`mainSection_itemContainer_item ${id}`}>
                        <img className={id} src={require(`../img/${id}.png`)} alt="burger"></img>
                        <div className={`mainSection_itemContainer_item_name ${id}`}>
                            <h1 className={id}>{name}</h1>
                            <p className={id}>$ {cost}</p>
                        </div>
                    </div>
                </div>
                )
        }else{
            return null;
        }
    
    }
}


export default Item;