import { createSlice } from '@reduxjs/toolkit';

const initialState = { myBooks: [] };

const myBookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addMyBooks: (state, action) => {
      state.myBooks.push(action.payload);
    },
  },
  removedBooks: (state, action) => {
    state.books = state.books.filter((book) => book.id !== action.payloaded);
  },
});

export const { addMyBooks, removedBooks } = myBookSlice.actions;

export default myBookSlice.reducer;
