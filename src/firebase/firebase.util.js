import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAf-3aAANJEcPs_4XxzDp77OOn60ytOn7k",
    authDomain: "sk-clothing.firebaseapp.com",
    databaseURL: "https://sk-clothing.firebaseio.com",
    projectId: "sk-clothing",
    storageBucket: "sk-clothing.appspot.com",
    messagingSenderId: "607764541298",
    appId: "1:607764541298:web:4f9d6b35ddb2d25a39f7eb"
};

//--------------------------------------Initialise firebase for project----------------------------------------------------------------
firebase.initializeApp(firebaseConfig);

//----------------Export auth and firestore module from firebase instance for authentication and storage purpose------------------------
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//-----------------------Create a provider that opens a pop up everytime user clicks on sign in with google-----------------------------
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//--------------export auth sign in pop which takes google sign in as provider to generate pop with google sign in option.--------------
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//-------------------------------Add signed in users to 'USERS' collection in firestore------------------------------------------------
export const createUserProfile = async(userAuth, additionalData) => {
    if(!userAuth) return;
    //document refrence object for CRUD operations 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //document snapshot to get status of object in firestore
    const snapShot = await userRef.get();
    console.log(snapShot)
    //if document doesnt exist in collection, then creating one using documentRef .get() method
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const creationDate = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                creationDate,
                ...additionalData
            })
        } catch (e){
            console.log("Error creating user", e)
        }
    }
    //returning the document refrence for other purpose
    return userRef;
}


//--------------------------------------------export entire firebase library----------------------------------------------
export default firebase;