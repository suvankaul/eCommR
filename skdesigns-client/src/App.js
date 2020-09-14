import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.scss';
import { Spinner } from 'react-bootstrap';
//React redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

//Component imports
import Navigation from './components/navigation/Navigation.component'
import Homepage from './modules/homepage/Homepage.component';
import Shop from './modules/Shop/Shop.component';
import SigninAndSignup from './modules/signInAndsignUp/SigninAndSignup.component';
import Checkout from './modules/checkout/Checkout.component';

// import { auth, createUserProfile, addCollectionandDocuments } from './firebase/firebase.util';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions';
// import { selectCollectionsForOverview } from './redux/shop/shop.selector';
const App = ({ checkUserSession, currentUser}) => {
  const [loading, setLoading] = useState(true);

  // commented for implementation of redux
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // }
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  },[checkUserSession])


  useEffect(() => {
    setLoading(!loading)
  }, [])

  // componentDidMount(){
  //   // const { checkUserSession } = this.props;
  //   checkUserSession();
  //   //onAuthStateChanged() function of auth lib keeps track of sign in status of firebase auth
  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   //   //if user is signed in
  //   //   if(userAuth){
  //   //     //get document refrence for current user -> check if user exists in collection, if not create it
  //   //     const userRef = await createUserProfile(userAuth);
  //   //     //onSnapshot() is the function of documentRef used to get the snapshot of user from the collection
  //   //     userRef.onSnapshot(snapShot => {
  //   //       console.log(snapShot.data())
  //   //       // this.setState({
  //   //       //   currentUser: {
  //   //       //     id: snapShot.id,
  //   //       //     ...snapShot.data()
  //   //       //   }
  //   //       // },() => {
  //   //       //   console.log(this.state)
  //   //       //   this.props.history.push('/shop')
  //   //       // })
  //   //       setCurrentUser({
  //   //         id: snapShot.id,
  //   //         ...snapShot.data()
  //   //       })
  //   //     })
        
  //   //   }
  //   //   //if user is signed out set current user = null
  //   //   // this.setState({ currentUser: userAuth}, () =>{
  //   //   //   console.log(this.state);
  //   //   // }); 
  //   //   setCurrentUser(userAuth)  
  //   //   //To add shop collection items once
  //   //   // addCollectionandDocuments('shopCollections', collectionOverview.map(({title, items}) => ({title, items})))         
  //   // })
  // }

  // componentWillUnmount(){
  //   this.unsubscribeFromAuth();
  //   // console.log(this.state)
  // }
  return (
    loading ? 
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
     :
      <div >
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={Shop} />
            {/* <Route path='/signin' component={SigninAndSignup} /> */}
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path='/signin' render={() =>currentUser ? <Redirect to='/' /> : <SigninAndSignup /> } />
          </Switch>
      </div>
  )
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionOverview: selectCollectionsForOverview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
