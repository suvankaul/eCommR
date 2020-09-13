import React, { Component } from 'react';
import './SigninAndSignup.style.scss';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';
import Particles from 'react-particles-js';
class SigninAndSignup extends Component{
    render(){
        let particleConfig = {
            particles: { 
                number: { 
                    value: 200, 
                    density: { 
                        enable: true, 
                        value_area: 500, 
                    } 
                }, 
                color : {
                    value: '#00102a',
                    opacity: 1
                },
                "line_linked": {
                    "enable": false,
                    "distance": 200,
                    "color": "#00102a",
                    "opacity": 1,
                    "width": 1
                  }
            }, 
        }
        return(
            <div className="sign">
                {/* <Navigation></Navigation> */}
                <div className="particle-js">
                <Particles height="600px" params={particleConfig} /> 
                </div>
                <div className="sign-container">
                    <SignIn></SignIn>
                    <SignUp></SignUp>
                </div>
            </div>
        )
    }
}

export default SigninAndSignup;