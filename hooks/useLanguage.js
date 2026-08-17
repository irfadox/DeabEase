import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LANGUAGES = ['ru', 'en', 'ky'];

export const AVAILABLE_LANGUAGES = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
  { code: 'ky', name: 'Кыргызча' },
];

export function useLanguage({
  languages = LANGUAGES,
  defaultLanguage = 'ru',
  storageKey = '@language',
} = {}) {
  const [language, setLanguageState] = useState(defaultLanguage);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem(storageKey);
        if (savedLanguage && languages.includes(savedLanguage)) {
          setLanguageState(savedLanguage);
        }
      } catch (e) {
        console.error('Failed to load language preference', e);
      } finally {
        setLoaded(true);
      }
    };

    loadLanguage();
  }, [languages, storageKey]);

  const setLanguage = useCallback(
    async (newLanguage) => {
      if (!languages.includes(newLanguage)) {
        throw new Error(`Unsupported language: ${newLanguage}`);
      }

      setLanguageState(newLanguage);
      try {
        await AsyncStorage.setItem(storageKey, newLanguage);
      } catch (e) {
        console.error('Failed to save language preference', e);
      }
    },
    [languages, storageKey]
  );

  return { language, setLanguage, loaded };
}
