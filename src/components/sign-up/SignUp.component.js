import React, { Component } from 'react';
import './SignUp.style.scss';
import { Card } from 'react-bootstrap';

class SignUp extends Component{
    render(){
         return(
            <Card className="sign-up-container">
                <div className="sign-up-header">HEADER</div>
                <div className="sign-up-body">BODY</div>
                <div className="sign-up-footer">FOOTER</div>
            </Card>
         )
    }
}

export default SignUp;