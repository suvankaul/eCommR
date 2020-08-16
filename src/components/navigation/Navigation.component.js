import React, { Component } from 'react';
import './Navigation.style.scss';
import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

class Navigation extends Component{
    render(){
        return(
            <div className="nav-bar">
                <div className="nav-bar-company">
                    <div className="nav-bar-company-logo">
                        <img src="../../sk.jpg" alt="SK" />
                    </div>
                    <div className="nav-bar-company-name">
                        SK Designs
                    </div>
                </div>
                <div className="nav-bar-action">
                    <div className="shop">SHOP</div>
                    <div className="contact">CONTACT US</div>
                    <div className="signin">SIGN IN</div>
                    <div className="cart"><FaShoppingBag></FaShoppingBag></div>
                </div>
            </div>
        )
    }
}

export default Navigation;