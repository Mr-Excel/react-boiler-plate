// rootReducer.js
import { combineReducers } from 'redux';
import genericReducer from '@/store/generic.slice.js';

const rootReducer = combineReducers({
    generic: genericReducer,
});

export default rootReducer;
