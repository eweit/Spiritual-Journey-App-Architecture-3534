import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { Heart, BookOpen, Share } from 'lucide-react';

const EchoCard = ({ echo }) => {
  const { toggleEchoSaved } = useData();
  const { t, language } = useLanguage();

  const handleSave = () => {
    toggleEchoSaved(echo.id);
  };

  // Bilingual tags if available
  const getTagDisplay = (tag) => {
    const bilingualTags = {
      'contentment': { en: 'contentment', he: 'הסתפקות' },
      'wealth': { en: 'wealth', he: 'עושר' },
      'wisdom': { en: 'wisdom', he: 'חוכמה' },
      'authenticity': { en: 'authenticity', he: 'אותנטיות' },
      'growth': { en: 'growth', he: 'צמיחה' },
      'purpose': { en: 'purpose', he: 'מטרה' },
      'love': { en: 'love', he: 'אהבה' },
      'guidance': { en: 'guidance', he: 'הדרכה' },
      'trust': { en: 'trust', he: 'אמון' },
      'reflection': { en: 'reflection', he: 'הרהור' }
    };
    return bilingualTags[tag] ? bilingualTags[tag][language] || tag : tag;
  };

  return (
    <div className="w-full">
      <div className="flex items-start justify-between mb-4 sm:mb-5">
        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#F97316]/20 text-[#F97316] text-xs sm:text-sm rounded-full font-medium border border-[#F97316]/30">
          {echo.type}
        </span>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={handleSave}
            className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 ${
              echo.saved 
                ? 'bg-[#F97316]/20 text-[#F97316] hover:bg-[#F97316]/30 border border-[#F97316]/30' 
                : 'bg-[#1A1A1A] text-[#9CA3AF] hover:text-[#F97316] hover:bg-[#F97316]/10 border border-[#2A2A2A] hover:border-[#F97316]/30'
            }`}
            aria-label={echo.saved ? "Unsave quote" : "Save quote"}
          >
            <Heart size={16} fill={echo.saved ? 'currentColor' : 'none'} />
          </button>
          
          <button className="p-2 sm:p-2.5 rounded-full bg-[#1A1A1A] text-[#9CA3AF] hover:text-[#F97316] hover:bg-[#F97316]/10 transition-all duration-300 border border-[#2A2A2A] hover:border-[#F97316]/30"
            aria-label="Share quote"
          >
            <Share size={16} />
          </button>
        </div>
      </div>

      <blockquote className="font-cardo text-lg sm:text-xl text-white mb-4 sm:mb-5 italic leading-relaxed text-center">
        "{echo.content}"
      </blockquote>

      <div className="flex items-center justify-center mb-4 sm:mb-5">
        <cite className="text-[#F97316] font-medium text-center text-sm sm:text-base">
          — {echo.source}
        </cite>
      </div>

      <div className="flex items-center justify-center space-x-2 text-[#9CA3AF] mb-4">
        <BookOpen size={12} />
        <span className="text-xs">{t('echo')}</span>
      </div>

      {echo.tags && echo.tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4 sm:pt-5 border-t border-[#2A2A2A]">
          {echo.tags.map(tag => (
            <div key={tag} className="bg-[#F97316]/10 border border-[#F97316]/20 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 hover:bg-[#F97316]/15 hover:border-[#F97316]/30 transition-all">
              <span className="text-[#F97316] text-xs">#{tag}</span>
              {language !== 'en' && (
                <span className="text-xs text-[#F97316]/70 mt-0.5 block">
                  {getTagDisplay(tag)}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EchoCard;