import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { currentThemeSelector, toggleTheme } from '../../features/themes';
import { type FC } from 'react';

import styles from './Home.module.scss';

const Home: FC = () => {
  const currentTheme = useAppSelector(currentThemeSelector);

  const dispatch = useAppDispatch();
  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.home_page}>
      <h1 className={styles.home_page__title}>This is a Home page</h1>

      <p className={styles.home_page__paragraph}>
        Now is <b>{currentTheme}</b> theme.
      </p>

      <button
        type="button"
        onClick={handleChangeTheme}
        className={styles.home_page__button}
      >
        Change theme
      </button>
    </div>
  );
};

export default Home;
