import React, { Component } from 'react';
import './SignUp.style.scss';
import { Card } from 'react-bootstrap';
import { auth, createUserProfile } from '../../firebase/firebase.util';

class SignUp extends Component{
    constructor(props){
        super()
        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword: '',
            nameE: false,
            emailE: false,
            passwordE: false,
            passwordMismatchE: false
        }
    }
    // passwordMismatch = false;
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        console.log(this.state)
        if(password !== confirmPassword || displayName.length === 0 || email.length === 0 || email.toLowerCase().indexOf('@')<0){
            if(password !== confirmPassword){
                this.setState({ passwordMismatchE: true} ,() => {
                    if(displayName.length === 0){
                        this.setState({nameE: true} ,() => {
                            if(email.length === 0 || email.toLowerCase().indexOf('@')<0){
                                this.setState({emailE: true} ,() => {
                                })
                            }
                        })
                    }
                })
            }          
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password:'',
                confirmPassword: '',
                inputErrors: false
            })
        }catch (e){
            console.log(e);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value}, () => {})
        
    }
    render(){
        const { displayName, email, password, confirmPassword, nameE, emailE,passwordMismatchE } = this.state;
        return(
            <Card className="sign-up-container">
                <div className="sign-up-header">Don't Have an Account?, Sign Up here !</div>
                <div className="sign-up-body">
                    {/* <form onSubmit={this.handleSubmit}> */}
                    <div>
                        <label>Display Name</label>
                        <input type="text" name="displayName" value={displayName} required onChange={this.handleChange} placeholder="Enter your name..." />
                        {nameE ? <div className="password-mismatch">Please provide a name.</div> : null}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={email} required onChange={this.handleChange} placeholder="Enter your email..." />
                        {emailE ? <div className="password-mismatch">Please provide a valid email address.</div> : null}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} required onChange={this.handleChange} placeholder="Enter your password..."/>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" value={confirmPassword} required onChange={this.handleChange} placeholder="Confirm password..."/>
                        {passwordMismatchE ? <div className="password-mismatch">Passwords don't match. Re-enter your password.</div> : null}
                    </div>    
                    {/* </form> */}
                </div>
                <div className="sign-up-footer">
                    <button className="btn-sign-up" onClick={this.handleSubmit}>Sign Up</button>
                </div>
            </Card>
         )
    }
}

export default SignUp;