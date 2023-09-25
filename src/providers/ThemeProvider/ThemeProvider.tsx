import { type FC, type ReactElement, useEffect } from 'react';

import { currentThemeSelector } from '../../features/themes';
import { useAppSelector } from '../../store/hooks';
import { LS_THEME } from '../../constants';

interface IThemeProvider {
  children: ReactElement;
}
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const theme = useAppSelector(currentThemeSelector);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(LS_THEME, theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
