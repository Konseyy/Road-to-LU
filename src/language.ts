import { createContext } from 'react';

export const languageContext = createContext<{
  language: 'lv' | 'en';
  toggleLanguage: () => void;
}>({
  language: 'lv',
  toggleLanguage: () => {
    return;
  },
});

type LocalizedTextObject<T extends string[]> = {
  lv: {
    [key in T[number]]: string;
  };
  en: {
    [key in T[number]]: string;
  };
};

export const translations: LocalizedTextObject<['road_to_lu', 'timeline', 'home']> = {
  lv: {
    road_to_lu: 'Mans ceļš uz LU',
    timeline: 'Laika gaitā',
    home: 'Sākums',
  },
  en: {
    road_to_lu: 'My road to LU',
    timeline: 'Timeline',
    home: 'Home',
  },
};
