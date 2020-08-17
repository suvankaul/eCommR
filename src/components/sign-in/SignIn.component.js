import React, { Component } from 'react';
import './SignIn.style.scss';
import { Card } from 'react-bootstrap';

import { signInWithGoogle } from '../../firebase/firebase.util'

class SignIn extends Component{
    constructor(props){
        super()
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password:''})
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value})
    }

    render(){
        const { email, password } = this.state;
         return(
            <Card className="sign-in-container">
                <div className="sign-in-header">Already Have an Account?, Sign In here !</div>
                <div className="sign-in-body">
                    {/* <form onSubmit={this.handleSubmit}> */}
                        <div><label>Email</label><input type="email" name="email" value={email} required onChange={this.handleChange} placeholder="Enter your email..." /></div>
                        <div><label>Password</label><input type="password" name="password" value={password} required onChange={this.handleChange} placeholder="Enter your password..."/></div>
                        
                    {/* </form> */}
                </div>
                <div className="sign-in-footer">
                    <button className="btn-sign-in" onClick={this.handleSubmit}>Sign In</button>
                    <button className="btn-sign-in-google" onClick={signInWithGoogle}>Sign In with Google</button>
                </div>
            </Card>
         )
    }
}

export default SignIn;