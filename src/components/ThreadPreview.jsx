import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Heart, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ThreadPreview = ({ thread }) => {
  const { t, language } = useLanguage();

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="community-card cursor-pointer hover:border-orange-400/30 hover:translate-y-[-4px] transition-all max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          {thread.is_anonymous ? (
            <EyeOff className="text-muted" size={16} />
          ) : (
            <Eye className="text-muted" size={16} />
          )}
          <span className="text-muted text-sm">
            {thread.is_anonymous ? t('anonymous') : t('open')} • {thread.recent_activity}
          </span>
        </div>
        <div className="flex items-center space-x-4 text-muted text-sm">
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span>{thread.participants}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart size={16} />
            <span>{thread.echo_count}</span>
          </div>
        </div>
      </div>
      <h3 className="font-cardo text-lg text-white mb-4 leading-relaxed text-center">
        {thread.question}
        {language !== 'en' && thread.question.includes('prayer') && (
          <span className="block mt-1 text-sm opacity-80">
            איך אתה מוצא זמן לתפילה בלוח זמנים עמוס?
          </span>
        )}
        {language !== 'en' && thread.question.includes('faith') && (
          <span className="block mt-1 text-sm opacity-80">
            מתמודד עם אמונה בזמנים קשים
          </span>
        )}
      </h3>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center space-x-2 text-primary">
          <MessageCircle size={16} />
          <span className="text-sm font-medium">
            {t('joinConversation')}
            {language !== 'en' && <span className="block text-xs opacity-80">הצטרף לשיחה</span>}
          </span>
        </div>
        <span className="text-muted text-xs">
          {thread.participants} {t('peopleReflecting')}
        </span>
      </div>
    </motion.div>
  );
};

export default ThreadPreview;