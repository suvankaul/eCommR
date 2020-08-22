import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.scss';

//React redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
//Component imports
import Navigation from './components/navigation/Navigation.component'
import Homepage from './modules/homepage/Homepage.component';
import Shop from './modules/Shop/Shop.component';
import SigninAndSignup from './modules/signInAndsignUp/SigninAndSignup.component';
import { auth, createUserProfile } from './firebase/firebase.util';

class App extends Component {
  // commented for implementation of redux
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    //onAuthStateChanged() function of auth lib keeps track of sign in status of firebase auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user is signed in
      if(userAuth){
        //get document refrence for current user -> check if user exists in collection, if not create it
        const userRef = await createUserProfile(userAuth);
        //onSnapshot() is the function of documentRef used to get the snapshot of user from the collection
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // },() => {
          //   console.log(this.state)
          //   this.props.history.push('/shop')
          // })
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        
      }
      //if user is signed out set current user = null
      // this.setState({ currentUser: userAuth}, () =>{
      //   console.log(this.state);
      // }); 
      setCurrentUser(userAuth)
           
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log(this.state)
  }

  render(){
    return (
      <div >
      <Navigation></Navigation>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(withRouter(App));
