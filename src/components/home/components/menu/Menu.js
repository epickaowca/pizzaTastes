import React from 'react';
import menuImg from './img/menuImg.png';
import arrowImg from './img/arrowRight.png';
import './menu.scss';
import { Link } from 'react-router-dom';
import burger from './img/burger.png';
import pizza from './img/pizza.png';

class Menu extends React.Component{
    menu=(id)=>{
        this.props.menu(id);
    }
    render(){
        return(
            <div className="menu">
                <div className="menu_container">
                    <div className="menu_container_info">
                        <div className="menu_container_info_h1">
                            <h1>Easy-to-use intuitive, food order</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                        </div>
                        <div className="menu_container_info_link">
                            <Link to="/food">
                                <p>Go for food</p>
                                <img src={arrowImg} alt="link"></img>
                            </Link>                        
                        </div>
                    </div>
                    <img className="menu_container_imgMenu" src={menuImg} alt="menuIlustraiton"></img>
                </div>
                <div className="menu_catalog">
                        <div>
                            <Link to="/food">
                                <span>Burgers</span>
                                <img src={burger} alt="burger"></img>
                            </Link>
                        </div>
                        <div>
                            <Link to="/food">
                                <span>Pizzas</span>
                                <img src={pizza} alt="pizza"></img>
                            </Link>
                        </div>
                </div>
                
            </div>
        )
    }
}



export default Menu;