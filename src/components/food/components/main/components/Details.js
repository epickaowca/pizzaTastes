import React from 'react';
import backArrow from '../../Header/img/backArrow.png';
import menu from '../../../menu';

class Details extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    
 

    componentDidMount(){
        menu.forEach(e=>{
            if(e.id===this.props.id){
                this.setState({
                    name: e.name,
                    cost: e.cost,
                    size: e.size,
                    energy: e.energy,
                    protein: e.protein,
                    fats: e.fats,
                    carbo: e.carbo
                })
            }
        })
    }

    render(){

       const { size, energy, protein, fats, carbo, name, cost } = this.state;
       const { detailClose, id } = this.props
        return(
            <div className="mainSection_details">
                <div className="mainSection_details_back">
                    <button onClick={detailClose}>
                        <img src={backArrow} alt="go back"></img>
                        <p>Back to catalog</p>
                    </button>
                </div>
                <div className="mainSection_details_main">
                    <div className="mainSection_details_main_img">
                        <img src={require(`../img/${id}.png`)} alt="product"></img>
                    </div>
                    <div className="mainSection_details_main_descr">
                        <h1>{name}</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
                    </div>
                </div>
                <p className="mainSection_details_price"> $ {cost}</p>
                <div className="mainSection_details_button">
                    <button>Order now</button>
                    <button onClick={()=>{
                        this.props.addItem(id);
                        detailClose();
                        }}>Add to shopping card</button>
                </div>
                <hr></hr>
                <div className="mainSection_details_spec">
                    <div>
                        <p>size</p>
                        <p>{size}</p>
                    </div>
                    <div>
                        <p>energy</p>
                        <p>{energy}</p>
                    </div>
                    <div>
                        <p>protein</p>
                        <p>{protein}</p>
                    </div>
                    <div>
                        <p>fats</p>
                        <p>{fats}</p>
                    </div>
                    <div>
                        <p>carbo</p>
                        <p>{carbo}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details