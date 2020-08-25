import React from "react";
import Item from './components/Item';
import menu from '../../menu';
import Details from './components/Details';

class Main extends React.Component{

    render(){
        const { filter } = this.props.state;
        let result = menu.map(e => <Item click={this.props.specEject} productDisplay={filter} product={e.product} id={e.id} name={e.name} cost={e.cost} key={e.id}/>) 
        return(
            <div className="mainSection">
                {this.props.state.display ==='items' && result}
                {this.props.state.display === "spec" && <Details addItem={this.props.addItem} detailClose={this.props.detailClose} id={this.props.state.id}/>}
            </div>
        )
    }
}


export default Main;