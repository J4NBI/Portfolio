'use client'
// components/LanguageSwitcher.js
import useLanguageStore from '../lib/useLanguageStore';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button className='text-lg mx-4' onClick={toggleLanguage}>
      {language === 'de' ? '🇬🇧' : '🇩🇪'}
      {/* {language === 'de' ? 'Eng' : 'DE'} */}
    </button>
  );
};

export default LanguageSwitcher;