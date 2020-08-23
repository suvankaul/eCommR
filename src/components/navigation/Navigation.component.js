import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Navigation.style.scss';
import { FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../../firebase/firebase.util';
import NavigationCart from '../navigation-cart/NavigationCart.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCardVisibility } from '../../redux/cart/cart.selector';
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

    componentWillMount = () => {
        console.log(this.props.currentUser)
    }
    render(){
        const {currentUser, hidden} = this.props;
        return(
            <div className="nav-bar">
                <div className="nav-bar-company">
                    <div className="nav-bar-company-logo">
                    <Link to='/'><img src={require("../../assets/logo.PNG")} alt="skClothes" /></Link>
                    </div>
                    <div className="nav-bar-company-logo-small">
                    <Link to='/'><img src={require("../../assets/favicon.png")} alt="skC" /></Link>
                    </div>
                </div>
                <div className="nav-bar-action">
                    <Link to="/shop"><div className="shop">SHOP</div></Link>
                    <Link to="/"><div className="contact">CONTACT US</div></Link>
                    { currentUser ? <div className="signin"  onClick={() => this.setState(prevState => {return {showSignOut: !prevState.showSignOut}})}>Hi, {currentUser.displayName}</div> : <Link to="/signin"><div className="signin">SIGN IN</div></Link>}
                    
                    <NavigationCart />
                </div>
                {
                    this.state.showSignOut ? 
                    <Card className="sign-out-popup">
                        <div className="signin"  onClick={this.signOut}><FaSignOutAlt className="sign-out-icon"></FaSignOutAlt> SIGN OUT</div>
                    </Card> :
                    null
                }
                {
                    hidden ? null : <CartDropdown />
                }
                            
            </div>
        )
    }
}

// state : root-reducer object
// function returns value of state directly into our component
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// })

//use destructuring instead of state
// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
//     currentUser,
//     hidden
// })

//using reselect
// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCurrentUser(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCardVisibility
})

export default connect(mapStateToProps)(Navigation);