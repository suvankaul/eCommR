import React, { Component } from 'react';
import './SigninAndSignup.style.scss';
import Navigation from '../../components/navigation/Navigation.component';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

class SigninAndSignup extends Component{
    render(){
        return(
            <div className="sign">
                {/* <Navigation></Navigation> */}
                <div className="sign-container">
                    <SignIn></SignIn>
                    <SignUp></SignUp>
                </div>
            </div>
        )
    }
}

export default SigninAndSignup;