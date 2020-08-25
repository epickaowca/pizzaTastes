import React from 'react';
import phone from './img/phone.png';
import envelope from './img/envelope.png';
import location from './img/location.png';
import './contact.scss';
import fb from './img/fb.png';
import insta from './img/instegram.png';
import twitter from './img/twitter.png';
import yt from './img/yt.png';
import { Link } from 'react-router-dom';

class Contact extends React.Component{
    
    eject=(e)=>{
        const target = document.querySelectorAll(`${e} p`);
        const img = document.querySelector(`${e} img`)
        target.forEach(e=>{
            if(e.style.display==="" || e.style.display==="none"){
                e.style.display="block"
                img.style.transform = "rotate(180deg)";    
            }else{
                img.style.transform = "rotate(0deg)";    
                e.style.display="none"
            
            }
        })
    }

    render(){
        return(
            <div className="contact">
                <div className="contact_container">
                    <h1>Go for food or contact first</h1>
                    <div className="contact_container_main">
                        <div className="contact_container_main_food">
                            <Link to="/food">
                                <button>Go for food</button>
                            </Link>
                            <p>Our menu is waiting for you</p>
                        </div>
                        <div className="contact_container_main_contact">
                            <div>
                                <div>
                                    <img src={phone} alt="phone"></img>
                                </div>
                                <p>555-555-5555</p>
                            </div>
                            <div>
                                <div>
                                    <img src={envelope} alt="envelope"></img>
                                </div>
                                <p>pizzaMax@pizzaMax.com </p>
                            </div>
                            <div>
                                <div>
                                    <img src={location} alt="location"></img>
                                </div>
                                <p>3069  Pennsylvania Avenue</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="contact_footer">

                    <p>© 2020 PizzaTastes - All Rights Reserved</p>
                    <div className="contact_footer_rights">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="contact_footer_socials">
                        <img src={fb} alt="facebook"></img>
                        <img src={twitter} alt="twitter"></img>
                        <img src={insta} alt="instagram"></img>
                        <img src={yt} alt="youtube"></img>
                    </div>

                </footer>

            </div>
        )
    }
}



export default Contact;