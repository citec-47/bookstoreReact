import { combineReducers } from 'redux';
import myBooksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const myRootReducer = combineReducers({
  books: myBooksSlice,
  categories: categoriesSlice,
});

export default myRootReducer;
