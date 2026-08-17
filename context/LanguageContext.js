import React, { createContext, useContext } from 'react';
import { useLanguage, LANGUAGES, AVAILABLE_LANGUAGES } from '../hooks/useLanguage';

const LanguageContext = createContext();

export { LANGUAGES, AVAILABLE_LANGUAGES };

export function LanguageProvider({ children }) {
  const { language, setLanguage, loaded } = useLanguage({
    languages: LANGUAGES,
    defaultLanguage: 'ru',
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage, loaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
