import { create } from 'zustand';

// Definiere die Typen für den Zustand
interface LanguageState {
  language: 'de' | 'en'; // Erlaubte Sprachen
  toggleLanguage: () => void; // Funktion zum Umschalten der Sprache
}

// Erstelle den Zustand mit Typisierung
const useLanguageStore = create<LanguageState>((set) => ({
  language: 'de', // Standardmäßig Deutsch
  toggleLanguage: () => set((state) => ({
    language: state.language === 'de' ? 'en' : 'de',
  })),
}));

export default useLanguageStore;