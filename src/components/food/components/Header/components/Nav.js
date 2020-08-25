import React from 'react';
import { ReactComponent as Pizza } from "../img/pizza.svg";
import { ReactComponent as Burger } from "../img/burger.svg";
import { ReactComponent as Drink } from "../img/drink.svg";
import { ReactComponent as Adds } from "../img/adds.svg";

class Nav extends React.Component{

    navFunction = (e)=>{
        if(e.target.id===""){
            return;
        }else{
            let allTarget = document.querySelectorAll(".clsP");
            allTarget.forEach(e=>{
                e.style.boxShadow = "none";
            })
            let target = document.querySelector(`#${e.target.id}`);
                target.style.boxShadow= "inset -3px -3px 7px #fff, inset 3px 3px 5px rgba(94,104,121,0.288)"

            this.props.filter(e.target.id)
        }
    }

    render(){   
        return(
            <nav>
                <div>
                    <div onClick={this.navFunction}>
                        <div className="clsP" id="pizzaP"></div>
                        <Pizza />
                    </div>
                    <div onClick={this.navFunction}>
                        <div className="clsP" id="burgerP"></div>
                        <Burger />
                    </div>
                    <div onClick={this.navFunction}>
                        <div className="clsP" id="drinkP"></div>
                        <Drink />
                    </div>
                    <div onClick={this.navFunction}>
                        <div className="clsP" id="addsP"></div>
                        <Adds />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;