import {RootState} from "../../store";

export const currentThemeSelector = (state: RootState) => state.theme.theme;
