import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookss';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    Books: bookReducer,
    Category: categoryReducer,
  },
});

export default store;
