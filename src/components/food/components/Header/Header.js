import React from 'react';
import Nav from './components/Nav';
import shoppingCard from './img/shoppingCart.png';
import { Link } from 'react-router-dom';
import backArrow from './img/backArrow.png';

class Header extends React.Component{

   
    render(){
        return(
            <header>
                <div onClick={this.props.shoppingCardEject} className="shoppingCardImg">
                    {this.props.shopLenght!==0 && <p>{this.props.shopLenght}</p>}
                    
                    <img src={shoppingCard} alt="ShoppingCard"></img>
                </div>
                <div className="backToHome">
                    <Link to="/">
                        <p>Back to home page</p>
                    </Link>
                </div>
                <h1>PizzaTastes</h1>
                <hr></hr>
                <p className="menuP">MENU</p>
                <div onClick={this.props.detailClose} className="HeaderSpec">
                    <button>
                            <img src={backArrow} alt="backToCatalog"></img>
                            <p>Back to catalog</p>
                    </button>
                </div>
                <Nav  filter={this.props.filter}/>
                <hr></hr>
            </header>
        )
    }

}

export default Header;