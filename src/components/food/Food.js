import React from 'react';
import './food.scss';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import ShoppingCard from './components/ShoppingCard/ShoppingCard';
import gsap from 'gsap';

class Food extends React.Component{
    constructor(){
        super()
        this.state={
            filter: "pizzaP",
            display: "items",
            id: "",
            card: [],
        }
    }

    addItem=(id)=>{
            let pass = true;
            this.state.card.forEach(e=>{
                if(e===id){
                    pass = false;
                }
            })
            if(pass===true){
                let arr = this.state.card;
                arr.push(id)
                this.setState(prev=>{
                    return{
                        card: arr
                    }
                })
            }
        

    }

    filter=(filtr)=>{
        this.setState({
            filter: filtr
        })
    }

    shoppingCardEject=()=>{
        let target = document.querySelector(".shoppingCard");
        let tl = gsap.timeline();
        tl.to(target, .5, {x: "0", ease: "power1.out"})
    }

    specEject=(e)=>{
        document.querySelector(".menuP").style.display="none";
        document.querySelector("nav").style.display="none";
        document.querySelector(".HeaderSpec").style.display="flex";
        let length = e.target.classList.length;
        let target = e.target.classList[length-1];
        this.setState(prev=>{
            return{
                display: "spec",
                id: target,
            }
        })
    }

    detailClose=()=>{
        document.querySelector(".HeaderSpec").style.display="none";
        document.querySelector(".menuP").style.display="block";
        document.querySelector("nav").style.display="block";
        this.setState(prev=>{
            return{
                display: "items" 
            }
        })
    }

    deleteItem=(id)=>{
        let arrHelper = [];
        this.state.card.forEach(e=>{
            if(e!==id){
                arrHelper.push(e);
            }
        })
        this.setState(prev=>{
            return{
                card : arrHelper
            }
        })
    }



    render(){
        return(
            <div>
                {}
                <div className="foodMainContainer">

                    <Header shopLenght={this.state.card.length} detailClose={this.detailClose} shoppingCardEject={this.shoppingCardEject} filter={this.filter} />
                    <Main orderNow={this.orderNow} addItem={this.addItem} detailClose={this.detailClose} specEject={this.specEject}  state={this.state} />
                    <ShoppingCard deleteItem={this.deleteItem} card={this.state.card}/>

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Food