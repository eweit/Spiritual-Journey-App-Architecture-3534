import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../context/LanguageContext';

const JournalEntry = ({ entry, compact = false }) => {
  const { t, language } = useLanguage();

  // Bilingual tags
  const getBilingualTag = (tag) => {
    const bilingualTags = {
      'gratitude': 'הכרת תודה',
      'prayer': 'תפילה',
      'clarity': 'בהירות',
      'balance': 'איזון',
      'work': 'עבודה',
      'growth': 'צמיחה',
    };
    
    return bilingualTags[tag] || tag;
  };

  return (
    <motion.div
      whileHover={{ scale: compact ? 1.02 : 1.01 }}
      className="card"
    >
      <div className="flex items-center justify-center flex-wrap gap-3 mb-4">
        <div className="flex items-center space-x-2 text-muted text-sm">
          <Calendar size={16} />
          <span>{format(new Date(entry.created_at), 'MMM d, yyyy')}</span>
        </div>
        {entry.mood && (
          <span className={`px-3 py-1.5 text-sm rounded-full capitalize ${
            entry.mood === 'peaceful' ? 'bg-green-500/20 text-green-400' :
            entry.mood === 'contemplative' ? 'bg-blue-500/20 text-blue-400' :
            entry.mood === 'grateful' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-primary/20 text-primary'
          }`}>
            {entry.mood}
            {language !== 'en' && (
              <span className="ml-1 opacity-80">
                {entry.mood === 'peaceful' ? '(שלווה)' : 
                 entry.mood === 'contemplative' ? '(מהורהר)' :
                 entry.mood === 'grateful' ? '(אסיר תודה)' : ''}
              </span>
            )}
          </span>
        )}
      </div>
      
      <p className={`text-white leading-relaxed ${compact ? 'line-clamp-4' : ''} mb-4 text-center`}>
        {entry.content}
      </p>
      
      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {entry.tags.slice(0, compact ? 3 : undefined).map(tag => (
            <div key={tag} className="dual-lang-tag">
              <span className="text-primary text-xs">#{tag}</span>
              {language !== 'en' && (
                <span className="text-xs text-primary/70 mt-0.5">
                  {getBilingualTag(tag)}
                </span>
              )}
            </div>
          ))}
          {compact && entry.tags.length > 3 && (
            <span className="text-muted text-xs px-2 py-1">
              +{entry.tags.length - 3} more
            </span>
          )}
        </div>
      )}
      
      {entry.saved_echoes && entry.saved_echoes.length > 0 && (
        <div className="flex items-center justify-center space-x-2 text-muted text-sm">
          <Heart size={16} />
          <span>
            {entry.saved_echoes.length} {t('savedEchoes')}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default JournalEntry;