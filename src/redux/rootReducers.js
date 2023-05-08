/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import myBookSlice from './books/myBooksSlice.js';
import categoSlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: myBookSlice,
  categories: categoSlice,
});

export default rootReducer;
