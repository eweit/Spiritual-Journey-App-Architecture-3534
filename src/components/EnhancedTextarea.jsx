import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const EnhancedTextarea = ({ value, onChange, placeholder, label, rows = 5, className = "", ...props }) => {
  const { language } = useLanguage();
  const defaultPlaceholder = language === 'en' ? 
    "Start writing your thoughts here..." : 
    "התחל לכתוב את מחשבותיך כאן...";

  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      {label && (
        <label className="block text-white text-lg font-semibold mb-3 text-center">
          {label}
          {language !== 'en' && (
            <span className="block text-base mt-1 opacity-80">
              מה עבר עליך היום?
            </span>
          )}
        </label>
      )}
      <motion.textarea
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`
          w-full bg-[#1E1E1E] text-white placeholder-gray-400 
          border-2 border-orange-500/60 rounded-[25px] px-6 py-4 
          focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500
          shadow-lg transition-all duration-300 hover:border-orange-500/80 
          hover:shadow-orange-500/20 resize-none font-assistant text-base leading-relaxed
          ${className}
        `}
        placeholder={placeholder || defaultPlaceholder}
        {...props}
      />
      {/* Character count or additional info */}
      <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
        <span>{value?.length || 0} characters</span>
        <span className="text-orange-400/60">Press Enter for new line</span>
      </div>
    </div>
  );
};

export default EnhancedTextarea;