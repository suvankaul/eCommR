import ShopActionTypes from './shop.types';

import { firestore, convertCollectionSnapshotToObject} from '../../firebase/firebase.util' 

//WITHOUT THUNK
// export const updateCollections = (collectionsMap) => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

// ASYNC FUNCTIONS
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (collMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collMap
})

export const fetchCollectionsFailure = (err) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: err
})

//WITH THUNK
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('shopCollections')
//         dispatch(fetchCollectionsStart())
//         collectionRef.get().then(snapshot => {
//             const collMap = convertCollectionSnapshotToObject(snapshot);
//             // updateCollections(collMap);
//             dispatch(fetchCollectionsSuccess(collMap))
//         }).catch(e => {
//             dispatch(fetchCollectionsFailure(e.message))
//         })
//     }
// }
