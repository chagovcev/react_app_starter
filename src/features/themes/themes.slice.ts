import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  theme: 'dark' | 'light';
}

const initialState: IInitialState = {
  theme: 'light',
};
export const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themesSlice.actions;

export default themesSlice.reducer;
