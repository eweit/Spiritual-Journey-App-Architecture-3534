import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MoodSelector = ({ selectedMood, onMoodChange }) => {
  const { t, language } = useLanguage();

  const moods = [
    {
      id: 'peaceful',
      label: { en: 'Peaceful', he: 'שלווה' },
      color: 'from-green-500/20 to-green-600/20',
      border: 'border-green-500/30',
      hoverBorder: 'hover:border-green-500/50',
      activeBg: 'bg-gradient-to-br from-green-500/20 to-green-600/20',
      activeBorder: 'border-green-500/50'
    },
    {
      id: 'grateful',
      label: { en: 'Grateful', he: 'אסיר תודה' },
      color: 'from-yellow-500/20 to-yellow-600/20',
      border: 'border-yellow-500/30',
      hoverBorder: 'hover:border-yellow-500/50',
      activeBg: 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20',
      activeBorder: 'border-yellow-500/50'
    },
    {
      id: 'contemplative',
      label: { en: 'Contemplative', he: 'מהורהר' },
      color: 'from-blue-500/20 to-blue-600/20',
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/50',
      activeBg: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
      activeBorder: 'border-blue-500/50'
    },
    {
      id: 'joyful',
      label: { en: 'Joyful', he: 'שמח' },
      color: 'from-pink-500/20 to-pink-600/20',
      border: 'border-pink-500/30',
      hoverBorder: 'hover:border-pink-500/50',
      activeBg: 'bg-gradient-to-br from-pink-500/20 to-pink-600/20',
      activeBorder: 'border-pink-500/50'
    },
    {
      id: 'struggling',
      label: { en: 'Struggling', he: 'נאבק' },
      color: 'from-red-500/20 to-red-600/20',
      border: 'border-red-500/30',
      hoverBorder: 'hover:border-red-500/50',
      activeBg: 'bg-gradient-to-br from-red-500/20 to-red-600/20',
      activeBorder: 'border-red-500/50'
    },
    {
      id: 'hopeful',
      label: { en: 'Hopeful', he: 'מלא תקווה' },
      color: 'from-purple-500/20 to-purple-600/20',
      border: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-500/50',
      activeBg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
      activeBorder: 'border-purple-500/50'
    },
    {
      id: 'curious',
      label: { en: 'Curious', he: 'סקרן' },
      color: 'from-orange-500/20 to-orange-600/20',
      border: 'border-[#F97316]/30',
      hoverBorder: 'hover:border-[#F97316]/50',
      activeBg: 'bg-gradient-to-br from-[#F97316]/20 to-[#FB923C]/20',
      activeBorder: 'border-[#F97316]/50'
    },
    {
      id: 'centered',
      label: { en: 'Centered', he: 'ממוקד' },
      color: 'from-indigo-500/20 to-indigo-600/20',
      border: 'border-indigo-500/30',
      hoverBorder: 'hover:border-indigo-500/50',
      activeBg: 'bg-gradient-to-br from-indigo-500/20 to-indigo-600/20',
      activeBorder: 'border-indigo-500/50'
    }
  ];

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[25px] py-4 sm:py-6 px-3 sm:px-6">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {moods.map(mood => (
          <motion.button
            key={mood.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onMoodChange(mood.id)}
            className={`
              p-2 sm:p-3 rounded-[20px] border transition-all text-center
              ${selectedMood === mood.id 
                ? `${mood.activeBg} ${mood.activeBorder} text-white` 
                : `bg-[#1A1A1A] border-[#2A2A2A] text-[#9CA3AF] hover:text-white ${mood.hoverBorder}`
              }
            `}
          >
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm font-medium">{mood.label.en}</span>
              {language !== 'en' && (
                <span className="text-xs mt-0.5 opacity-80">{mood.label.he}</span>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {selectedMood && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 sm:mt-4 p-2 sm:p-3 bg-[#F97316]/10 rounded-[20px] border border-[#F97316]/20"
        >
          <p className="text-[#F97316] text-xs sm:text-sm text-center">
            {t('moodHelp')}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default MoodSelector;