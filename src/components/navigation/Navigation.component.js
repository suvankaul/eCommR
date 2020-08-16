import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.style.scss';
import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

class Navigation extends Component{
    render(){
        return(
            <div className="nav-bar">
                <div className="nav-bar-company">
                    <div className="nav-bar-company-logo">
                    <Link to='/'><img src="../../sk.jpg" alt="SK" /></Link>
                    </div>
                    <div className="nav-bar-company-name">
                        <Link to='/'>SK Designs</Link>
                    </div>
                </div>
                <div className="nav-bar-action">
                    <Link to="/shop"><div className="shop">SHOP</div></Link>
                    <Link to="/"><div className="contact">CONTACT US</div></Link>
                    <Link to="/"><div className="signin">SIGN IN</div></Link>
                    <Link to="/"><div className="cart"><FaShoppingBag></FaShoppingBag></div></Link>
                </div>
            </div>
        )
    }
}

export default Navigation;