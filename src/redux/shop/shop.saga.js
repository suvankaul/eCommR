import { takeLatest, call, put, all } from 'redux-saga/effects'; //listens every action of specific type that is passed to it.
import ShopActionTypes from './shop.types'; 
import { firestore, convertCollectionSnapshotToObject } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('shopCollections');
        const snapshot = yield collectionRef.get();
        const collMap = yield call(convertCollectionSnapshotToObject, snapshot);
        yield put(fetchCollectionsSuccess(collMap))
    } catch(e) {
        yield put(fetchCollectionsFailure(e.message))
    }

    //     dispatch(fetchCollectionsStart())
    //     collectionRef.get().then(snapshot => {
    //         const collMap = convertCollectionSnapshotToObject(snapshot);
    //         // updateCollections(collMap);
    //         dispatch(fetchCollectionsSuccess(collMap))
    //     }).catch(e => {
    //         dispatch(fetchCollectionsFailure(e.message))
    //     })
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}