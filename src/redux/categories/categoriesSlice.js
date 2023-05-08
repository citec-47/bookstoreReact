import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    chekStatus: (state) => ({ ...state, categories: 'Under construction' }),
  },
});

export const { chekStatus } = categoSlice.actions;

export default categoSlice.reducer;
