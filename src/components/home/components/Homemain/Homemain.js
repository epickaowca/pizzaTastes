import React from 'react';
import pizzasharing from './img/pizzaSharing.png'
import arrowDown from './img/arrowDown.png';
import './homemain.scss';
import { Link } from 'react-router-dom';
import gsap from "gsap";

class Homemain extends React.Component{
    constructor(){
        super()
        this.NMEject = false;
    }
    navMobile=()=>{

        let xHelper = this.NMEject===true ? "100%": "0%";
        const tl = gsap.timeline();
        let nav = document.querySelector(".HomeMain nav");
        tl.to(nav, 1, {x: xHelper});
        this.NMEject = !this.NMEject;
    }

    navHelper=(e)=>{
        this.props.nav(e);
        this.navMobile();
    }
    render(){
        return(
            <div className="HomeMain">
                <div className="HomeMain_container">

                    <header>
                        <button onClick={this.navMobile}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <nav>
                            <ul>
                                <li onClick={this.navMobile}>home</li>
                                <li onClick={this.navHelper}>about</li>
                                <li onClick={this.navHelper}>menu</li>
                                <li onClick={this.navHelper}>contact</li>
                            </ul>
                        </nav>
                    </header>
                    <div className="HomeMain_container_main">
                        <div className="HomeMain_container_main_title">
                            <h1>PizzaTastes</h1>
                            <p>Best pizza in the worl, fast delivery, fresh vegetables, ease order interaction</p>
                            <Link to="/food">
                                <button>Go for food</button>
                            </Link>
                        </div>
                        <img className="HomeMain_container_main_pizzaSharing" src={pizzasharing} alt="pizzaSharing"></img>
                    </div>
                    
                    <button className="HomeMain_container_arrowDown">
                        <img onClick={this.props.arrowNav} src={arrowDown} alt="moveDown"></img>
                    </button>

                </div>
            </div>
        )
    }
}

export default Homemain