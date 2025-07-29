import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lock, Eye, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GroupCard = ({ group, showJoinButton = false }) => {
  const { t, language } = useLanguage();

  // Bilingual tags
  const getBilingualTag = (tag) => {
    const bilingualTags = {
      'prayer': 'תפילה',
      'meditation': 'מדיטציה',
      'focus': 'מיקוד',
      'work': 'עבודה',
      'purpose': 'מטרה',
      'balance': 'איזון',
    };
    return bilingualTags[tag] || tag;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="community-card border-primary/20 hover:border-orange-400/30 hover:translate-y-[-4px] transition-all max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-center mb-5 flex-wrap gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/20 rounded-[25px] flex items-center justify-center">
            <Users className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-cardo text-lg text-white mb-1">
              {group.title}
            </h3>
            <div className="flex items-center space-x-2 text-muted text-sm">
              {group.is_anonymous ? <Eye size={16} /> : <Lock size={16} />}
              <span>
                {group.is_anonymous ? t('anonymous') : t('open')} • {group.members} {t('members')}
                {language !== 'en' && <span className="ml-1 opacity-80">חברים</span>}
              </span>
            </div>
          </div>
        </div>
        {showJoinButton && (
          <button className="btn-primary flex items-center space-x-2">
            <span>{t('join')}</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {group.theme_tags.map(tag => (
          <div key={tag} className="dual-lang-tag">
            <span className="text-primary text-xs">#{tag}</span>
            {language !== 'en' && (
              <span className="text-xs text-primary/70 mt-0.5">
                {getBilingualTag(tag)}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GroupCard;