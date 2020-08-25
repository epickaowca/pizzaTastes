import React from 'react';
import Homemain from './components/Homemain/Homemain';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Contact from './components/contact/Contact';

class Home extends React.Component{
    arrowNav=()=>{
        const target = document.querySelector(".about").offsetTop;
        window.scrollTo({top: target, behavior: 'smooth'});
    }
    nav=e=>{
        const target = document.querySelector(`.${e.target.innerHTML}`).offsetTop;
        window.scrollTo({top: target, behavior: 'smooth'});
    }
    render(){
        return(
            <div>
                <Homemain nav={this.nav} arrowNav={this.arrowNav} />
                <About />
                <Menu/>
                <Contact />
            </div>
        )
    }
}

export default Home;