import collections from '../../shoppingData';
const INITIAL_STATE = {collections};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: return state;
    }
}

export default shopReducer;