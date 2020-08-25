import React from 'react';
import exit from '../img/exit.png';

class Item extends React.Component{
    constructor(){
        super()
        this.state={
            id: '',
            amount: 1,
            cost: ""
        }
    }
    componentDidMount(){
        this.setState({
            id: this.props.id,
            amount: 1,
            cost: this.props.cost
        })
    }
    amountSystem=(e)=>{
        let res = e.target.innerHTML === "+" ? 1 : -1;
        if(res === -1 && this.state.amount===1) return;
        let newCost = this.props.cost*(this.state.amount+res)
        this.setState(prev=>{
            return{
                amount: prev.amount+res,
                cost: newCost.toFixed(2)
            }
        }, ()=>{
            this.props.updateCost(this.state.id, this.props.cost, this.state.amount)
        })

    }
    render(){
        const { amount } = this.state
        const { cost, name, size, id, deleteItem } = this.props
        
        return(
            <div className="shoppingCard_product_item">
                <button onClick={()=>{
                    deleteItem(id)
                }}>
                    <img src={exit} alt="deleteItem"></img>
                </button>
                <div className="shoppingCard_product_item_price">
                    <p>$ {(cost*amount).toFixed(2)}</p>
                    <div className="shoppingCard_product_item_price_regulation">
                        <div onClick={this.amountSystem}>+</div>
                        <div>{amount}</div>
                        <div onClick={this.amountSystem}>-</div>
                    </div>
                </div>
                <hr></hr>
                <div className="shoppingCard_product_item_product">
                    <div className="shoppingCard_product_item_product_img" style={{backgroundImage: `url(${require(`../../main/img/${id}.png`)})`}}>
                        {/* <img src={require(`../../main/img/${id}.png`)} alt="product"></img> */}
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{size}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;