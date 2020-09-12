import React, { Component } from 'react';
import './SignIn.style.scss';
// import { withRouter } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';

// import { signInWithGoogle, auth } from '../../firebase/firebase.util';
import { createStructuredSelector } from 'reselect';
import { connect} from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component{
    
    constructor(props){
        super()
        this.state = {
            email: '',
            password:'',
            errorMessage: '',
            signinProgress: false
        }
    }

    componentWillUnmount = () => (this.setState({signinProgress: false}))    

    handleSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;
        this.setState({signinProgress: true})

        //************WITH REDUX-SAGA*************/
        emailSignInStart(email, password)

        //***WITHOUT SAGA******/
        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email: '', password:''},() => {
        //         this.setState({signinProgress: false})
        //         // this.props.history.push('/shop');
        //         // console.log(this.props.history);
        //     })
        // } catch(e){
        //     console.log(e);
        //     this.setState({errorMessage: e.message})
        // }
        
    }

    //***WITHOUT SAGA******/
    // handleGoogleSubmit = (event) => {
    //     signInWithGoogle.then(() => (this.props.history.push('/shop')))
                
    // }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name] : value})
    }

    render(){
        const { googleSignInStart } = this.props;
        const { email, password, errorMessage, signinProgress } = this.state;
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
                    <button className="btn-sign-in" onClick={this.handleSubmit}>{signinProgress ? <Spinner className="loader" animation="border" /> : null} Sign In</button>
                    <button className="btn-sign-in-google" onClick={googleSignInStart}>Sign In with Google</button>
                </div>
            </Card>
         )
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);