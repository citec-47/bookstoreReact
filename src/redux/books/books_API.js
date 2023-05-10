import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_LINK = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/X8JnkuOPMOkJQ3tlKNbU/books';

const ADD_BOOK_STORE = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK_STORE = 'bookstore/src/redux/books/REMOVE_BOOK';
const GET_BOOK_STORE = 'bookstore/src/redux/books/GET_BOOK';

export const addBook = createAsyncThunk(ADD_BOOK_STORE, async (elements) => {
  const {
    id, title, author, category,
  } = elements;
  await axios.post(API_LINK, {
    item_id: id, title, author, category,
  });
  return elements;
});

export const removeMyBook = createAsyncThunk(REMOVE_BOOK_STORE, async (id) => {
  await axios.delete(`${API_LINK}/${id}`);
  return id;
});

const rendermYBooks = (res) => Object.entries(res.data).map((arr) => {
  const [id, [{ title, author, category }]] = arr;
  return {
    id, title, author, category,
  };
});

export const fetchMyBooks = createAsyncThunk(GET_BOOK_STORE,
  async () => {
    const getbookItems = await axios.get(API_LINK);
    return rendermYBooks(getbookItems);
  });

const deleteBook = (state, bookID) => state.filter((book) => book.id !== bookID.payload);
const bookReducerSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMyBooks.fulfilled, (state, action) => {
      const items = state;
      items.status = 'success';
      items.books = action.payload;
    });
    builder.addCase(removeMyBook.fulfilled, (state, action) => {
      const items = state;
      items.status = 'successful';
      items.books = deleteBook(items.books, action);
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      const items = state;
      items.status = 'successful';
      items.books = [
        ...state.books,
        action.payload,
      ];
    });
  },
});

export default bookReducerSlice.reducer;
