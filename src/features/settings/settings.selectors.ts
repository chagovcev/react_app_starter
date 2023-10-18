import { type RootState } from '@store';

export const currentThemeSelector = (state: RootState) => state.settings.theme;
export const currentLocaleSelector = (state: RootState) =>
  state.settings.locale;
