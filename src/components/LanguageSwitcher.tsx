'use client'
// components/LanguageSwitcher.js
import useLanguageStore from '../lib/useLanguageStore';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button className='text-2xl mx-4' onClick={toggleLanguage}>
      {language === 'de' ? '🇬🇧' : '🇩🇪'}
    </button>
  );
};

export default LanguageSwitcher;