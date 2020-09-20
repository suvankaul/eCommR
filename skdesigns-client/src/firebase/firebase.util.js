import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './firebaseConfig';

const firebaseConfig = config;

//--------------------------------------Initialise firebase for project----------------------------------------------------------------
firebase.initializeApp(firebaseConfig);

//----------------Export auth and firestore module from firebase instance for authentication and storage purpose------------------------
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//-----------------------Create a provider that opens a pop up everytime user clicks on sign in with google-----------------------------
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

//--------------export auth sign in pop which takes google sign in as provider to generate pop with google sign in option.--------------
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//-------------------------------Add signed in users to 'USERS' collection in firestore------------------------------------------------
export const createUserProfile = async(userAuth, additionalData) => {
    if(!userAuth) return;
    //document refrence object for CRUD operations 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //document snapshot to get status of object in firestore
    const snapShot = await userRef.get();
    // console.log(snapShot)
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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}

export const addCollectionandDocuments = async(collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        // console.log(newDocRef)
        batch.set(newDocRef,obj);
    })
    return await batch.commit()
}

export const convertCollectionSnapshotToObject = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    // console.log(transformedCollections)

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
    
}


//--------------------------------------------export entire firebase library----------------------------------------------
export default firebase;

