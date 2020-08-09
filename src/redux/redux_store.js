import {createStore, combineReducers} from "redux";
import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogReducer';

let reducers = combineReducers({
    profile: profileReducer, 
    dialog: dialogReducer
});

let store = createStore(reducers);


export default store;