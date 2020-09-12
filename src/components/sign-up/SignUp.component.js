import React, { Component } from 'react';
import './SignUp.style.scss';
import { Card, Spinner } from 'react-bootstrap';
// import { auth, createUserProfile } from '../../firebase/firebase.util';

import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux';

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
            passwordMismatchE: false,
            signUpProgress: false
        }
    }
    // passwordMismatch = false;
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;
        this.setState({signUpProgress: true});
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
        signUpStart({email, password, displayName})
        // try{
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfile(user, { displayName });
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password:'',
        //         confirmPassword: '',
        //         inputErrors: false
        //     })
        // }catch (e){
        //     console.log(e);
        // }
    }

    componentWillUnmount = () => this.setState({signUpProgress: false})

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value}, () => {})
        
    }
    render(){
        const { displayName, email, password, confirmPassword, nameE, emailE,passwordMismatchE, signUpProgress } = this.state;
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
                    <button className="btn-sign-up" onClick={this.handleSubmit}>{signUpProgress ? <Spinner className="loader" animation="border" /> : null}Sign Up</button>
                </div>
            </Card>
         )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);