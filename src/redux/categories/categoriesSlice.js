import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    chekStatus: (state) => ({ ...state, categories: 'Under construction' }),
  },
});

export const { chekStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
