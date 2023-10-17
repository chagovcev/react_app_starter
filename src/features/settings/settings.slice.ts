import { createSlice } from '@reduxjs/toolkit';

const themes = ['dark', 'light'] as const;

type themeType = (typeof themes)[number];

const isThemeType = (theme: string): theme is themeType =>
  themes.includes(theme as themeType);

const themeInStorage = localStorage.getItem('theme');

interface IInitialState {
  theme: themeType;
}

const initialState: IInitialState = {
  theme:
    !!themeInStorage && isThemeType(themeInStorage) ? themeInStorage : 'light',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
