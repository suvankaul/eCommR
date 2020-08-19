import React, { Component } from 'react';
import './SignIn.style.scss';
import { Card } from 'react-bootstrap';

import { signInWithGoogle, auth } from '../../firebase/firebase.util'

class SignIn extends Component{
    constructor(props){
        super()
        this.state = {
            email: '',
            password:'',
            errorMessage: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''})
        } catch(e){
            console.log(e);
            this.setState({errorMessage: e.message})
        }
        
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value})
    }

    render(){
        const { email, password, errorMessage } = this.state;
         return(
            <Card className="sign-in-container">
                <div className="sign-in-header">Already Have an Account?, Sign In here !</div>
                <div className="sign-in-body">
                    {/* <form onSubmit={this.handleSubmit}> */}
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" value={email} required onChange={this.handleChange} placeholder="Enter your email..." />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" value={password} required onChange={this.handleChange} placeholder="Enter your password..."/>
                            {errorMessage.length !== 0 ? <div className="password-mismatch">{errorMessage}</div> : null}
                        </div>
                        
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