import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Navigation.style.scss';
import { FaShoppingCart, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../../firebase/firebase.util';
class Navigation extends Component{
    constructor(){
        super()
        this.state = {
            showSignOut : false
        }
    }
    signOut = () =>{
        auth.signOut()
        this.setState({showSignOut : false})
    }
    render(){
        const {currentUser} = this.props;
        return(
            <div className="nav-bar">
                <div className="nav-bar-company">
                    <div className="nav-bar-company-logo">
                    <Link to='/'><img src="../../sk-circle-logo.png" alt="SK" /></Link>
                    </div>
                    <div className="nav-bar-company-name">
                        <Link to='/'>SK Clothing</Link>
                    </div>
                </div>
                <div className="nav-bar-action">
                    <Link to="/shop"><div className="shop">SHOP</div></Link>
                    <Link to="/"><div className="contact">CONTACT US</div></Link>
                    { currentUser ? <div className="signin"  onClick={() => this.setState(prevState => {return {showSignOut: !prevState.showSignOut}})}>Hi, {currentUser.displayName}</div> : <Link to="/signin"><div className="signin">SIGN IN</div></Link>}
                    
                    <Link to="/"><div className="cart"><FaShoppingBag></FaShoppingBag></div></Link>
                </div>
                {
                    this.state.showSignOut ? 
                    <Card className="sign-out-popup">
                        <div className="signin"  onClick={this.signOut}><FaSignOutAlt className="sign-out-icon"></FaSignOutAlt> SIGN OUT</div>
                    </Card> :
                    null
                }
                
            </div>
        )
    }
}

export default Navigation;