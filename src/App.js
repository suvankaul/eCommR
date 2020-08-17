import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

//Component imports
import Navigation from './components/navigation/Navigation.component'
import Homepage from './modules/homepage/Homepage.component';
import Shop from './modules/Shop/Shop.component';
import SigninAndSignup from './modules/signInAndsignUp/SigninAndSignup.component';
import { auth } from './firebase/firebase.util';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
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
