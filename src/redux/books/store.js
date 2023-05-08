/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './books/bookSlice';
import categoriesReducer from './bookCategories/categoriesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    name: categoriesReducer,
  },
});

export default store;
