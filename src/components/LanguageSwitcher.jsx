import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-[#1A1A1A] border border-[#F97316]/30 rounded-[25px] px-5 py-3 flex items-center space-x-3 hover:bg-[#1E1E1E] hover:border-[#F97316]/50 transition-all duration-300 shadow-lg"
    >
      <Globe size={20} className="text-[#F97316]" />
      <span className="text-[#F97316] font-medium text-lg">
        {language === 'en' ? 'עברית' : 'English'}
      </span>
      <span className="text-sm text-[#9CA3AF]">
        {language === 'en' ? '🇮🇱' : '🇺🇸'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;