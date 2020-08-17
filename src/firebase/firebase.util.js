import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAMtS4iyDDZrbTxPdriw7Dx3g3AkjA6GmY",
    authDomain: "skclothing-988ac.firebaseapp.com",
    databaseURL: "https://skclothing-988ac.firebaseio.com",
    projectId: "skclothing-988ac",
    storageBucket: "skclothing-988ac.appspot.com",
    messagingSenderId: "906178268549",
    appId: "1:906178268549:web:4eefc26d226d1be6f788ec"
};

//Initialise firebase for project
firebase.initializeApp(firebaseConfig);

//Export auth and firestore for authentication and storage
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Create a provider that opens a pop up everytime user clicks on sign in with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//export signInWithGoogle menthod.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//export entire firebase library
export default firebase;