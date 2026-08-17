import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { SettingsProvider } from './context/SettingsContext';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <AppNavigator />
      </SettingsProvider>
    </LanguageProvider>
  );
}
