import React, { useState, useEffect } from 'react';
import './SignUp.style.scss';
import { Card, Spinner } from 'react-bootstrap';
// import { auth, createUserProfile } from '../../firebase/firebase.util';

import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux';
// import { FaTruckMonster } from 'react-icons/fa';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName : '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [userCredentialsError, setUserCredentialsError] = useState({
        nameE: '',
        emailE: '',
        passwordE: '',
        passwordMismatchE: ''
    })

    const [signUpProgress, setSignUpProgress] = useState(false)
    // constructor(props){
    //     super()
    //     this.state = {
    //         displayName: '',
    //         email: '',
    //         password:'',
    //         confirmPassword: '',
    //         nameE: false,
    //         emailE: false,
    //         passwordE: false,
    //         passwordMismatchE: false,
    //         signUpProgress: false
    //     }
    // }
    // passwordMismatch = false;
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = userCredentials;
        // const { signUpStart } = this.props;
        setSignUpProgress(true)
        // this.setState({signUpProgress: true});
        // console.log(this.state)
        if(password !== confirmPassword || displayName.length === 0 || email.length === 0 || email.toLowerCase().indexOf('@')<0){
            if(password !== confirmPassword){
                setUserCredentialsError({passwordMismatchE: true},() =>{
                    if(displayName.length === 0){
                        setUserCredentialsError({nameE: true},() =>{
                            if(email.length === 0 || email.toLowerCase().indexOf('@')<0){
                                setUserCredentialsError({emailE: true})
                            }
                        })
                    }
                })
                // this.setState({ passwordMismatchE: true} ,() => {
                //     if(displayName.length === 0){

                //         this.setState({nameE: true} ,() => {
                //             if(email.length === 0 || email.toLowerCase().indexOf('@')<0){
                //                 this.setState({emailE: true} ,() => {
                //                 })
                //             }
                //         })
                //     }
                // })
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

    // componentWillUnmount = () => this.setState({signUpProgress: false})
    useEffect(() => {
        return () => setSignUpProgress(false);
    },[])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({...userCredentials, [name]: value})
        // this.setState({ [name] : value}, () => {})
        
    }
    const { displayName, email, password, confirmPassword } = userCredentials
    const { nameE, emailE, passwordE, passwordMismatchE } = userCredentialsError;
    return(
        <Card className="sign-up-container">
            <div className="sign-up-header">Don't Have an Account?, Sign Up here !</div>
            <div className="sign-up-body">
                {/* <form onSubmit={this.handleSubmit}> */}
                <div>
                    <label>Display Name</label>
                    <input type="text" name="displayName" value={displayName} required onChange={handleChange} placeholder="Enter your name..." />
                    {nameE ? <div className="password-mismatch">Please provide a name.</div> : null}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} required onChange={handleChange} placeholder="Enter your email..." />
                    {emailE ? <div className="password-mismatch">Please provide a valid email address.</div> : null}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} required onChange={handleChange} placeholder="Enter your password..."/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} required onChange={handleChange} placeholder="Confirm password..."/>
                    {passwordMismatchE ? <div className="password-mismatch">Passwords don't match. Re-enter your password.</div> : null}
                </div>    
                {/* </form> */}
            </div>
            <div className="sign-up-footer">
                <button className="btn-sign-up" onClick={handleSubmit}>{signUpProgress ? <Spinner className="loader" animation="border" /> : null}Sign Up</button>
            </div>
        </Card>
     )
    // render(){
    //     const { displayName, email, password, confirmPassword, nameE, emailE,passwordMismatchE, signUpProgress } = this.state;
    //     return(
    //         <Card className="sign-up-container">
    //             <div className="sign-up-header">Don't Have an Account?, Sign Up here !</div>
    //             <div className="sign-up-body">
    //                 {/* <form onSubmit={this.handleSubmit}> */}
    //                 <div>
    //                     <label>Display Name</label>
    //                     <input type="text" name="displayName" value={displayName} required onChange={this.handleChange} placeholder="Enter your name..." />
    //                     {nameE ? <div className="password-mismatch">Please provide a name.</div> : null}
    //                 </div>
    //                 <div>
    //                     <label>Email</label>
    //                     <input type="email" name="email" value={email} required onChange={this.handleChange} placeholder="Enter your email..." />
    //                     {emailE ? <div className="password-mismatch">Please provide a valid email address.</div> : null}
    //                 </div>
    //                 <div>
    //                     <label>Password</label>
    //                     <input type="password" name="password" value={password} required onChange={this.handleChange} placeholder="Enter your password..."/>
    //                 </div>
    //                 <div>
    //                     <label>Confirm Password</label>
    //                     <input type="password" name="confirmPassword" value={confirmPassword} required onChange={this.handleChange} placeholder="Confirm password..."/>
    //                     {passwordMismatchE ? <div className="password-mismatch">Passwords don't match. Re-enter your password.</div> : null}
    //                 </div>    
    //                 {/* </form> */}
    //             </div>
    //             <div className="sign-up-footer">
    //                 <button className="btn-sign-up" onClick={this.handleSubmit}>{signUpProgress ? <Spinner className="loader" animation="border" /> : null}Sign Up</button>
    //             </div>
    //         </Card>
    //      )
    // }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);