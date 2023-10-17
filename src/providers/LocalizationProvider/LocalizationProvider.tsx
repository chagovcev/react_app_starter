import { type FC, type ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

import messagesEn from '../../lang/en.json';
import messagesRu from '../../lang/ru.json';

export const LOCALES = {
  ENGLISH: 'en',
  RUSSIAN: 'ru',
};

const intlMessages = {
  [LOCALES.ENGLISH]: messagesEn,
  [LOCALES.RUSSIAN]: messagesRu,
};

interface ILocalizationProvider {
  children: ReactElement;
}

const LocalizationProvider: FC<ILocalizationProvider> = ({ children }) => {
  const locale = LOCALES.RUSSIAN;

  const messages = intlMessages[locale];
  console.log('messages', messages);

  return (
    <IntlProvider
      messages={intlMessages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
