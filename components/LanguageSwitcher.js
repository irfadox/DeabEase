import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LanguageSwitcher({ languages, language, onChange, fontSize = 14 }) {
  return (
    <View style={styles.container}>
      {languages.map((lang) => {
        const isSelected = language === lang.code;
        return (
          <TouchableOpacity
            key={lang.code}
            style={[styles.option, isSelected && styles.optionSelected]}
            onPress={() => onChange(lang.code)}
            activeOpacity={0.7}
          >
            <Text style={[styles.optionText, { fontSize }, isSelected && styles.optionTextSelected]}>
              {lang.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  option: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  optionSelected: {
    backgroundColor: '#00BFA5',
    borderColor: '#00BFA5',
  },
  optionText: {
    color: '#333',
    fontWeight: '500',
  },
  optionTextSelected: {
    color: 'white',
    fontWeight: '600',
  },
});
