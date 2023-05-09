/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import myBooksSlice from './books/MyooksSlice';
import categorySlice from './categories/caTegorySlice';

const MyrootReducer = combineReducers({
  books: myBooksSlice,
  myCategories: categorySlice,
});

export default MyrootReducer;
