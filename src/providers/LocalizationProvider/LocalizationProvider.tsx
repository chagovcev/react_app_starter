import { type FC, type ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

import { useAppSelector } from '@store/hooks';

import { currentLocaleSelector, Locale } from '@features/settings';

import messagesEn from '../../lang/en.json';
import messagesRu from '../../lang/ru.json';

const intlMessages = {
  [Locale.English]: messagesEn,
  [Locale.Russian]: messagesRu,
};

interface ILocalizationProvider {
  children: ReactElement;
}

const LocalizationProvider: FC<ILocalizationProvider> = ({ children }) => {
  const locale = useAppSelector(currentLocaleSelector);

  return (
    <IntlProvider
      messages={intlMessages[locale]}
      locale={locale}
      defaultLocale={Locale.English}
    >
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
