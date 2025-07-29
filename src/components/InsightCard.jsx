import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const InsightCard = ({ insight }) => {
  const { language } = useLanguage();

  const getInsightIcon = (type) => {
    switch (type) {
      case 'trend':
        return <TrendingUp className="text-green-400" size={20} />;
      case 'milestone':
        return <Calendar className="text-blue-400" size={20} />;
      case 'reflection':
        return <BookOpen className="text-orange-400" size={20} />;
      default:
        return <TrendingUp className="text-orange-400" size={20} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#1A1A1A] border border-gray-700 rounded-[25px] p-5 hover:border-orange-400/30 transition-all"
    >
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
          {getInsightIcon(insight.type)}
        </div>
        <div className="flex-1">
          <h4 className="text-white font-medium mb-2">
            {insight.title}
            {language !== 'en' && insight.titleHe && (
              <span className="block text-sm opacity-80 mt-1">
                {insight.titleHe}
              </span>
            )}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {insight.description}
            {language !== 'en' && insight.descriptionHe && (
              <span className="block mt-1 opacity-80">
                {insight.descriptionHe}
              </span>
            )}
          </p>
          {insight.date && (
            <div className="text-xs text-gray-500 mt-2">
              {insight.date}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;