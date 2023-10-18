import { type ChangeEvent, type FC } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { Button } from '@components';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useGetTodosQuery } from '@store/api';

import {
  currentThemeSelector,
  toggleTheme,
  setLocal,
  locales,
} from '@features/settings';

import styles from './Home.module.scss';

const Home: FC = () => {
  const currentTheme = useAppSelector(currentThemeSelector);
  const dispatch = useAppDispatch();

  const {
    // data
    isLoading,
    isError,
  } = useGetTodosQuery(undefined);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLangChange = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLocal(value));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className={styles.home_page}>
      <h1 className={styles.home_page__title}>
        <FormattedMessage id="HomePageTitle" />
      </h1>

      <p className={styles.home_page__paragraph}>
        Now is <b>{currentTheme}</b> theme.
      </p>

      <p>
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>

      <select
        onChange={(e) => {
          handleLangChange(e);
        }}
      >
        {locales.map((locale, index) => (
          <option key={index} value={locale}>
            {locale}
          </option>
        ))}
      </select>

      <Button type="button" onClick={handleChangeTheme} label="Change theme" />
    </div>
  );
};

export default Home;
