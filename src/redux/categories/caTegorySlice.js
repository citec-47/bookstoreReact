/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    chekStatus: (state) => ({ ...state, categories: 'Under construction' }),
  },
});

export const { chekStatus } = categorySlice.actions;

export default categorySlice.reducer;
