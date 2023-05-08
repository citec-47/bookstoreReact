/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const myCateg = 'Categories';
const initialState = {
  bookName: myCateg,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusCheck: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
