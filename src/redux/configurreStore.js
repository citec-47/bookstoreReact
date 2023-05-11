import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookss';
import categoryRiducer from './categories/categories';

const store = configureStore({
  reducer: {
    Books: bookReducer,
    Category: categoryRiducer,
  },
});

export default store;
