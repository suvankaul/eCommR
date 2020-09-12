import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { auth, googleProvider, createUserProfile, getCurrentUser} from '../../firebase/firebase.util';

import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure} from './user.actions';

export function* getSnapShotFromUserAuth(user, additionalData){
    try{
        const userRef = yield call(createUserProfile, user, additionalData);
        const userSnapshot = yield userRef.get();
        console.log(userRef, userSnapshot)
        yield put(signInSuccess({ id:userSnapshot.id, ...userSnapshot.data() })) 
    } catch(err) {
        yield put(signInFailure(err))
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    } catch(err) {
        yield put(signInFailure(err))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: {email, password}}){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    } catch (err){
        yield put(signInFailure(err))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth)
    } catch (err){
        yield put(signInFailure(err))
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(err) {
        yield put(signOutFailure(err))
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGNOUT_START, signOut)
}

export function* signUp({payload: {email, password, displayName}}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName }}))
    }catch (err){
        yield put(signUpFailure(err))
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGNUP_START,signUp)
}

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGNUP_SUCCESS , signInAfterSignUp)
}



export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
}