import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const themes = [Theme.Dark, Theme.Light] as const;

type themeType = (typeof themes)[number];

const isThemeType = (theme: string): theme is themeType =>
  themes.includes(theme as themeType);

export enum Locale {
  English = 'en',
  Russian = 'ru',
}

export const locales = [Locale.English, Locale.Russian] as const;

type localeType = (typeof locales)[number];

const isLocaleType = (locale: string): locale is localeType =>
  locales.includes(locale as localeType);

const themeInStorage = localStorage.getItem('theme');

interface IInitialState {
  theme: themeType;
  locale: localeType;
}

const initialState: IInitialState = {
  theme:
    !!themeInStorage && isThemeType(themeInStorage)
      ? themeInStorage
      : Theme.Light,
  locale: Locale.English,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
    },
    setLocal: (state, action: PayloadAction<string>) => {
      if (isLocaleType(action.payload)) {
        state.locale = action.payload;
      }
    },
  },
});

export const { toggleTheme, setLocal } = settingsSlice.actions;

export default settingsSlice.reducer;
