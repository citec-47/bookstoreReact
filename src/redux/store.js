import { configureStore } from '@reduxjs/toolkit';

import myRootReducer from './rootReducers';

const myStore = configureStore({ reducer: myRootReducer });
export default myStore;
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
