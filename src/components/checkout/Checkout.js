import React from 'react';
import { checkOutFinal } from '../food/components/ShoppingCard/ShoppingCard'
import './checkout.scss';
import Item from './components/Item'

class Checkout extends React.Component{
    constructor(){
        super()
        this.products = "";
        this.total = 0;
    }
    componentDidMount(){
        if(checkOutFinal===undefined){
            console.log(checkOutFinal);
            // window.location.assign('./food');
        }else{
            this.products = checkOutFinal.map(e=> <Item name={e.name} cost={e.cost} amount={e.amount} key={e.id}/>)
            checkOutFinal.forEach(e=>{
                if(e.amount){
                    this.total += (e.amount*e.cost);
                }else{
                    this.total += e.cost;
                }
            })
            this.total = this.total.toFixed(2);
            this.setState({})
        }
    }
    
    render(){
        return(
            <div className="checkOut">
                <div className="checkOut_summary">
                    <div className="checkOut_summary_title">
                        <h1>Summary</h1>
                    </div>
                    <div className="checkOut_summary_products">
                        {this.products}
                    </div>
                    <hr></hr>
                    <div className="checkOut_summary_total">
                        <p>Total:</p>
                        <p>$ {this.total}</p>
                    </div>
                </div>
                <div className="checkOut_form">
                    <form>
                        <label>
                            <div></div>
                            <input autoComplete="off" required type="text"></input>
                            <p>First Name</p>
                        </label>
                        <label>
                            <div></div>
                            <input autoComplete="off" required type="text"></input>
                            <p>Last Name</p>
                        </label>
                        <label>
                            <div></div>
                            <input autoComplete="off" required type="number"></input>
                            <p>Phone number</p>
                        </label>
                        <label>
                            <div></div>
                            <input autoComplete="off" required type="text"></input>
                            <p>Address</p>
                        </label>
                        <label>
                            <div></div>
                            <input autoComplete="off" required type="text"></input>
                            <p>Postal Code</p>
                        </label>

                        <div>
                            <div>
                                <button>I will pay now</button>
                            </div>
                            <div>
                                <button>I will play upon receipt</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>    
        )
    }
}

export default Checkout