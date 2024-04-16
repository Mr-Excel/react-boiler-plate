// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/store/reducers.js';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
