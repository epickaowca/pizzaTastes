import React from 'react';
import './Shoppingcard.scss';
import Item from './components/Item';
import finish from './img/finish.png';
import exit from './img/exit.png';
import gsap from 'gsap';
import menu from '../../menu';
import { Link } from 'react-router-dom';

let checkOutFinal

class ShoppingCard extends React.Component{
    constructor(){
        super()
        this.result = '';
        this.total = 0;
        this.fastOrder = false;
    }
    updateProducts(){
            let arr = [];
            this.props.card.forEach(e => {
                menu.forEach(menu=>{
                    if(menu.id===e){
                        arr.push(menu)
                    }
                })
            });
            this.result = arr.map(e=><Item deleteItem={this.deleteItem} updateCost={this.updateCost} size={e.size} cost={e.cost} name={e.name} id={e.id} key={e.id} />)
            checkOutFinal = arr;
            setTimeout(()=>{
                this.setState(prev=>{
                    return{
                        fastOrder: true
                    }
                })
            },0)
    }
    
    close=()=>{
        let target = document.querySelector(".shoppingCard");
        let tl = gsap.timeline();
        tl.to(target, .5, {x: "100%", ease: "power3.in"})
    }
    
    updateCost=(id, cost, amount)=>{
        this.setState(prev=>{
            return{
                [id]: {id, cost, amount}
            }
        })
    }
    
    componentDidUpdate(){
        this.total = 0;
            let allCost = document.querySelectorAll(".shoppingCard_product_item_price p ")
            allCost.forEach(e=>{
                this.total = +e.innerHTML.slice(2) + +this.total;
            })
            document.querySelector(".totall").innerHTML='$ '+this.total.toFixed(2);
            if(this.state!==null){
                checkOutFinal.forEach(elem=>{
                    Object.values(this.state).forEach(product=>{
                        if(product.id===elem.id){
                            elem.amount = product.amount;
                        }
                    })
                })
            }
    }

    deleteItem=(id)=>{
        this.props.deleteItem(id)
    }
    render(){
        this.updateProducts();
        return(
            <div className="shoppingCard">
                <img onClick={this.close} className="shoppingCard_exit" src={exit} alt="closeCard"></img>
                <div className="shoppingCard_title">
                    <p>ShoppingCart</p>
                    <hr></hr>
                </div>
                <div className="shoppingCard_product">
                    {this.result}
                </div>
                <div className="shoppingCard_finish">
                    <div className="shoppingCard_finish_total">
                        <p>Shopping Cart Total:</p>
                        <p className="totall">$ 0</p>
                    </div>
                    {
                    this.result.length!==0 && 
                    <Link to="/checkout">
                        <div className="shoppingCard_finish_order">
                            <img src={finish} alt="orderFinish"></img>
                            <hr></hr>
                            <p>Place an Order</p>
                            <p className="shoppingCard_finish_order_howmuch">7 items</p>
                        </div>
                    </Link>
                    }
                </div>
            </div>
        )
    }
}

export { checkOutFinal };
export default ShoppingCard;