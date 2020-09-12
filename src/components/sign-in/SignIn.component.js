import React, { useEffect, useState } from 'react';
import './SignIn.style.scss';
// import { withRouter } from 'react-router-dom';
import { Card, Spinner } from 'react-bootstrap';

// import { signInWithGoogle, auth } from '../../firebase/firebase.util';
import { createStructuredSelector } from 'reselect';
import { connect} from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const [signinProgress, setSignInProgress] = useState(false)
    // constructor(props){
    //     super()
    //     this.state = {
    //         email: '',
    //         password:'',
    //         errorMessage: '',
    //         signinProgress: false
    //     }
    // }

    // componentWillUnmount = () => (this.setState({signinProgress: false}))  
    useEffect(() => {
        return setSignInProgress(false)
    },[])  

    const handleSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = userCredentials;
        // this.setState({signinProgress: true})
        setSignInProgress(true)

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        // this.setState({ [name] : value})
        setCredentials({...userCredentials, [name]: value })
    }

    const { email, password } = userCredentials;

    return(
        <Card className="sign-in-container">
            <div className="sign-in-header">Already Have an Account?, Sign In here !</div>
            <div className="sign-in-body">
                {/* <form onSubmit={this.handleSubmit}> */}
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={email} required onChange={handleChange} placeholder="Enter your email..." />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} required onChange={handleChange} placeholder="Enter your password..."/>
                        {errorMessage.length !== 0 ? <div className="password-mismatch">{errorMessage}</div> : null}
                    </div>
                    
                {/* </form> */}
            </div>
            <div className="sign-in-footer">
                <button className="btn-sign-in" onClick={handleSubmit}>{signinProgress ? <Spinner className="loader" animation="border" /> : null} Sign In</button>
                <button className="btn-sign-in-google" onClick={googleSignInStart}>Sign In with Google</button>
            </div>
        </Card>
     )
    // render(){
    //     const { googleSignInStart } = this.props;
    //     const { email, password, errorMessage, signinProgress } = this.state;
    //      return(
    //         <Card className="sign-in-container">
    //             <div className="sign-in-header">Already Have an Account?, Sign In here !</div>
    //             <div className="sign-in-body">
    //                 {/* <form onSubmit={this.handleSubmit}> */}
    //                     <div>
    //                         <label>Email</label>
    //                         <input type="email" name="email" value={email} required onChange={this.handleChange} placeholder="Enter your email..." />
    //                     </div>
    //                     <div>
    //                         <label>Password</label>
    //                         <input type="password" name="password" value={password} required onChange={this.handleChange} placeholder="Enter your password..."/>
    //                         {errorMessage.length !== 0 ? <div className="password-mismatch">{errorMessage}</div> : null}
    //                     </div>
                        
    //                 {/* </form> */}
    //             </div>
    //             <div className="sign-in-footer">
    //                 <button className="btn-sign-in" onClick={this.handleSubmit}>{signinProgress ? <Spinner className="loader" animation="border" /> : null} Sign In</button>
    //                 <button className="btn-sign-in-google" onClick={googleSignInStart}>Sign In with Google</button>
    //             </div>
    //         </Card>
    //      )
    // }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);