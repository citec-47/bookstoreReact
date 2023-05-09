import { combineReducers } from 'redux';
import myBooksSlice from './books/booksSlice';
import categorySlice from './categories/categoriesSlice';

const myRootReducer = combineReducers({
  books: myBooksSlice,
  categories: categorySlice,
});

export default myRootReducer;
