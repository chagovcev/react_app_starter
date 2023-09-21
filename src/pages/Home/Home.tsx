import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { currentThemeSelector, toggleTheme } from '../../features/themes';
import { type FC } from 'react';

import './Home.scss';

const Home: FC = () => {
  const currentTheme = useAppSelector(currentThemeSelector);

  const dispatch = useAppDispatch();
  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="home-page">
      <h1 className="home-page__title">This is a Home page</h1>

      <p className="home-page__paragraph">
        Now is <b>{currentTheme}</b> theme.
      </p>

      <button
        type="button"
        onClick={handleChangeTheme}
        className="home-page__button"
      >
        Change theme
      </button>
    </div>
  );
};

export default Home;
