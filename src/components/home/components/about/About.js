import React from 'react';
import './about.scss';
import checkImg from './img/checkImg.png';
import chefImg from './img/chef.png';

function About(){
    return(
        <div className="about">
            <div className="about_container">
                <div className="about_container_features">
                    <div className="about_container_features_circle">
                        <div>
                            <p>Quality Food</p>
                        </div>
                        <div>
                            <p>Fast Delivery</p>
                        </div>
                        <div>
                            <p>Simple Order</p>
                        </div>
                    </div>
                    <img src={checkImg} alt="checkboxes"></img>
                </div>
                <div className="about_container_bs">
                    <div className="about_container_bs_title">
                        <h1>our chef's specials will blow you'r mind</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    </div>
                    <img className="about_container_bs_chef" src={chefImg} alt="Chef"></img>
                </div>
            </div>
        </div>
    )
}


export default About