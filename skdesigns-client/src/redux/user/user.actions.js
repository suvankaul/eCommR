import UserActionTypes from './user.types';
// functions that return objects

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGNIN_START
})


export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
})

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGNIN_SUCCESS,
    payload: user
})

export const signInFailure = (err) => ({
    type: UserActionTypes.SIGNIN_FAILURE,
    payload: err
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGNOUT_START,
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGNOUT_SUCCESS,
})

export const signOutFailure = (err) => ({
    type: UserActionTypes.SIGNOUT_FAILURE,
    payload: err
})

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGNUP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGNUP_SUCCESS,
    payload: { user, additionalData }
})

export const signUpFailure = (err) => ({
    type: UserActionTypes.SIGNUP_FAILURE,
    payload: err
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})