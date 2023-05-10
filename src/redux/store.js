import { configureStore } from '@reduxjs/toolkit';

import myRootReducer from './rootReducers';

const myStore = configureStore({ reducer: myRootReducer });
export default myStore;
