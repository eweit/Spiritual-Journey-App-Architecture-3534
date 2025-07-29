import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const StatsCard = ({ icon, value, label, labelHe, color = "text-[#F97316]", delay = 0, className = "" }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`
        bg-[#1A1A1A] 
        rounded-[25px] 
        p-8 
        shadow-lg 
        hover:shadow-[#F97316]/20 
        transition-all 
        duration-300 
        text-center 
        flex 
        flex-col 
        items-center 
        justify-center 
        border 
        border-[#2A2A2A] 
        hover:border-[#F97316]/30 
        hover:transform 
        hover:-translate-y-1 
        group 
        cursor-pointer 
        min-h-[200px]
        ${className}
      `}
    >
      {/* Icon */}
      <div className={`text-4xl mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}>
        {typeof icon === 'string' ? icon : icon}
      </div>

      {/* Value */}
      <div className="text-white text-3xl font-bold mb-3 group-hover:text-[#F97316] transition-colors">
        {value}
      </div>

      {/* Label */}
      <div className="text-sm text-[#9CA3AF] font-medium">
        {label}
        {language !== 'en' && labelHe && (
          <span className="block mt-1 opacity-80 text-xs">
            {labelHe}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatsCard;