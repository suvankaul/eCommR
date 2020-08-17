import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.style.scss';
import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';
import { auth } from '../../firebase/firebase.util';
class Navigation extends Component{
    render(){
        const {currentUser} = this.props;
        return(
            <div className="nav-bar">
                <div className="nav-bar-company">
                    <div className="nav-bar-company-logo">
                    <Link to='/'><img src="../../sk.jpg" alt="SK" /></Link>
                    </div>
                    <div className="nav-bar-company-name">
                        <Link to='/'>SK Clothing</Link>
                    </div>
                </div>
                <div className="nav-bar-action">
                    <Link to="/shop"><div className="shop">SHOP</div></Link>
                    <Link to="/"><div className="contact">CONTACT US</div></Link>
                    { currentUser ? <div className="signin">SIGN OUT</div> : <Link to="/signin"><div className="signin">SIGN IN</div></Link>}
                    
                    <Link to="/"><div className="cart"><FaShoppingBag></FaShoppingBag></div></Link>
                </div>
            </div>
        )
    }
}

export default Navigation;