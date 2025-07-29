import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Heart } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../context/LanguageContext';

const JourneyCard = ({ journey, isExpanded = false }) => {
  const { t } = useLanguage();

  return (
    <motion.div 
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      className={`${isExpanded ? '' : 'card hover-glow max-w-2xl mx-auto'}`}
    >
      <div className="flex items-center justify-center mb-4 flex-wrap gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <Calendar className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="font-cardo text-lg text-white">
              {t('weekOf')} {journey.week_number}
            </h3>
            <p className="text-muted text-sm">
              {format(new Date(journey.start_date), 'MMM d, yyyy')}
            </p>
          </div>
        </div>

        {journey.is_active && (
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
            {t('active')}
          </span>
        )}
      </div>

      <h4 className="font-cardo text-xl text-white mb-4 text-center">
        {journey.weekly_question}
      </h4>

      {isExpanded && (
        <div className="space-y-6 mt-6">
          <div className="bg-[#161616] rounded-[20px] p-5 border border-gray-800">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <BookOpen className="text-primary" size={18} />
              <span className="text-primary text-sm font-medium">{t('reflection')}</span>
            </div>
            <p className="text-muted leading-relaxed text-center">
              {journey.suggested_text}
            </p>
          </div>
          
          <div className="bg-[#161616] rounded-[20px] p-5 border border-gray-800">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Heart className="text-primary" size={18} />
              <span className="text-primary text-sm font-medium">{t('practice')}</span>
            </div>
            <p className="text-muted leading-relaxed text-center">
              {journey.suggested_practice}
            </p>
          </div>
        </div>
      )}

      {!isExpanded && (
        <p className="text-muted line-clamp-2 text-center">
          {journey.suggested_text}
        </p>
      )}
    </motion.div>
  );
};

export default JourneyCard;