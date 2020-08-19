import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

//Component imports
import Navigation from './components/navigation/Navigation.component'
import Homepage from './modules/homepage/Homepage.component';
import Shop from './modules/Shop/Shop.component';
import SigninAndSignup from './modules/signInAndsignUp/SigninAndSignup.component';
import { auth, createUserProfile } from './firebase/firebase.util';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    //onAuthStateChanged() function of auth lib keeps track of sign in status of firebase auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if user is signed in
      if(userAuth){
        //get document refrence for current user -> check if user exists in collection, if not create it
        const userRef = await createUserProfile(userAuth);
        //onSnapshot() is the function of documentRef used to get the snapshot of user from the collection
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },() => {
            console.log(this.state)
          })
        })
        
      }
      //if user is signed out set current user = null
      this.setState({ currentUser: userAuth}, () =>{
        console.log(this.state);
      }); 
           
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    console.log(this.state)
  }

  render(){
    return (
      <div >
      <Navigation currentUser={this.state.currentUser}></Navigation>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
