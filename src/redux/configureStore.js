import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books_API';
import categorizReducer from './categories/categories';

const store = configureStore({
  reducer: {
    Books: bookReducer,
    Category: categorizReducer,
  },
});

export default store;
