import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Books from './books/books';
import Categories from './categories/categories';

const reducerReal = combineReducers({
  Books,
  Categories,
});

const theStore = configureStore({ reducer: reducerReal });

export default theStore;
