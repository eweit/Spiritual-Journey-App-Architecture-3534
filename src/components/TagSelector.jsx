import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Plus, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TagSelector = ({ selectedTags, onTagsChange }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTag, setNewTag] = useState('');
  const { t, language } = useLanguage();

  const suggestedTags = [
    { en: 'gratitude', he: 'הכרת תודה' },
    { en: 'prayer', he: 'תפילה' },
    { en: 'reflection', he: 'הרהור' },
    { en: 'growth', he: 'צמיחה' },
    { en: 'purpose', he: 'מטרה' },
    { en: 'relationships', he: 'מערכות יחסים' },
    { en: 'work', he: 'עבודה' },
    { en: 'family', he: 'משפחה' },
    { en: 'peace', he: 'שלום' },
    { en: 'struggle', he: 'מאבק' },
    { en: 'joy', he: 'שמחה' },
    { en: 'faith', he: 'אמונה' },
    { en: 'doubt', he: 'ספק' },
    { en: 'clarity', he: 'בהירות' },
    { en: 'confusion', he: 'בלבול' }
  ];

  const handleAddTag = (tag) => {
    const tagValue = typeof tag === 'string' ? tag : tag.en;
    if (!selectedTags.includes(tagValue)) {
      onTagsChange([...selectedTags, tagValue]);
    }
  };

  const handleRemoveTag = (tag) => {
    onTagsChange(selectedTags.filter(t => t !== tag));
  };

  const handleCustomTag = (e) => {
    e.preventDefault();
    if (newTag.trim() && !selectedTags.includes(newTag.toLowerCase())) {
      onTagsChange([...selectedTags, newTag.toLowerCase()]);
      setNewTag('');
      setIsAdding(false);
    }
  };

  const getTagDisplay = (tag) => {
    const tagObj = suggestedTags.find(t => t.en === tag);
    return tagObj ? tagObj[language] : tag;
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[25px] py-4 sm:py-6 px-3 sm:px-6">
      {/* Selected Tags */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          {selectedTags.map(tag => {
            const tagObj = suggestedTags.find(t => t.en === tag);
            return (
              <motion.div
                key={tag}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="bg-[#F97316]/15 border border-[#F97316]/30 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 hover:bg-[#F97316]/20 hover:border-[#F97316]/40 transition-all"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-[#F97316] text-xs sm:text-sm">#{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-white transition-colors"
                    aria-label="Remove tag"
                  >
                    <X size={12} />
                  </button>
                </div>
                {tagObj && language !== 'en' && (
                  <span className="text-xs text-[#F97316]/70 mt-0.5 block">
                    {tagObj.he}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Add Custom Tag */}
      {isAdding ? (
        <form onSubmit={handleCustomTag} className="mb-4 sm:mb-6">
          <div className="flex justify-center space-x-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder={t('addCustomTag')}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[25px] px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-[#9CA3AF] focus:border-[#F97316]/50 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 transition-all flex-1 max-w-xs text-sm"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium py-2 px-3 sm:py-3 sm:px-4 rounded-[25px] transition-all text-sm"
            >
              {t('add')}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setNewTag('');
              }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#F97316]/30 text-white py-2 px-3 sm:py-3 sm:px-4 rounded-[25px] transition-all text-sm"
            >
              {t('cancel')}
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center justify-center space-x-1 sm:space-x-2 text-[#F97316] hover:text-[#F97316]/80 transition-colors mb-4 sm:mb-6 mx-auto text-sm"
        >
          <Plus size={16} />
          <span>{t('addCustomTag')}</span>
        </button>
      )}

      {/* Suggested Tags */}
      <div className="text-center">
        <p className="text-[#9CA3AF] text-xs sm:text-sm mb-3 sm:mb-4 font-medium">
          {t('suggestedTags')}
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {suggestedTags
            .filter(tag => !selectedTags.includes(tag.en))
            .slice(0, 9)
            .map(tag => (
              <button
                key={tag.en}
                onClick={() => handleAddTag(tag)}
                className="bg-[#F97316]/10 border border-[#F97316]/20 rounded-full py-1 px-2 sm:py-2 sm:px-3 hover:bg-[#F97316]/15 hover:border-[#F97316]/30 transition-all"
              >
                <span className="text-[#F97316] text-xs">#{tag.en}</span>
                {language !== 'en' && (
                  <span className="text-xs text-[#F97316]/70 mt-0.5 block">
                    {tag.he}
                  </span>
                )}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TagSelector;