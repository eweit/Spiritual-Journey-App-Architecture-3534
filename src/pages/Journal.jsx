import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { Save, Sparkles, Tag, Heart } from 'lucide-react';
import EnhancedTextarea from '../components/EnhancedTextarea';
import TagSelector from '../components/TagSelector';
import MoodSelector from '../components/MoodSelector';
import EchoCard from '../components/EchoCard';

const Journal = () => {
  const location = useLocation();
  const { addEntry, echoes } = useData();
  const { t, language } = useLanguage();

  // Get prompt text from navigation state (from Dashboard prompts)
  const initialPrompt = location.state?.promptText || '';
  const [content, setContent] = useState(initialPrompt);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const suggestedEchoes = echoes.slice(0, 3);

  const handleSave = async () => {
    if (!content.trim()) return;
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const entry = {
      content: content.trim(),
      tags: selectedTags,
      mood: selectedMood,
      saved_echoes: []
    };
    addEntry(entry);
    setContent('');
    setSelectedTags([]);
    setSelectedMood('');
    setShowSuggestions(true);
    setIsSaving(false);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    if (e.target.value.length > 50) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="page-container flex flex-col items-center pb-24">
      {/* Header - Made more compact for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="opening-text-container w-full max-w-2xl"
        style={{ borderRadius: '20px', padding: '1.5rem' }}
      >
        <h1 className="font-cardo text-3xl sm:text-4xl text-gradient mb-2">
          {t('journal_title')}
        </h1>
        <p className="text-muted text-base sm:text-lg leading-relaxed">
          {t('expressHeart')}
          {language !== 'en' && (
            <span className="block mt-1 opacity-80">בטא את מה שבלבך</span>
          )}
        </p>
      </motion.div>

      {/* Question Prompt - Styled as a text prompt box with smaller padding on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="w-full max-w-3xl mb-4 sm:mb-6 px-3 sm:px-0"
      >
        <div className="bg-[#1E1E1E] border border-orange-500 rounded-[20px] px-4 sm:px-6 py-4 text-white text-sm sm:text-base shadow-md w-full">
          What's been on your mind this week?
        </div>
      </motion.div>

      {/* Enhanced Writing Area with Dark Background - Adjusted padding for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-3xl px-3 sm:px-0"
      >
        <textarea 
          value={content}
          onChange={handleContentChange}
          rows={6}
          className="w-full bg-[#1E1E1E] text-white placeholder-gray-400 border border-orange-500 rounded-[20px] px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-md transition resize-none"
          placeholder={`${t('journalPlaceholder')}\n\n${language !== 'en' ? 'מה מתרחש בלבך היום? שתף את מחשבותיך, תפילותיך, שאלותיך או תובנותיך...' : ''}`}
        />

        {/* Character count or additional info - Smaller on mobile */}
        <div className="flex justify-between items-center mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400 px-1">
          <span>{content?.length || 0} characters</span>
          <span className="text-orange-400/60">Press Enter for new line</span>
        </div>

        {/* Save Button - Centered and proper size for mobile */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <button
            onClick={handleSave}
            disabled={!content.trim() || isSaving}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 sm:space-x-3 px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
          >
            {isSaving ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} />
              </motion.div>
            ) : (
              <Save size={18} />
            )}
            <span>{isSaving ? t('saving') : t('saveEntry')}</span>
          </button>
        </div>
      </motion.div>

      {/* Selectors with Headers - Stacked on mobile, side by side on larger screens */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-8 mb-10 md:mb-16 w-full max-w-4xl mt-6 md:mt-8 px-3 sm:px-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-sm text-gray-400 mb-2 px-2">Tags</h4>
          <TagSelector selectedTags={selectedTags} onTagsChange={setSelectedTags} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm text-gray-400 mb-2 px-2">Mood</h4>
          <MoodSelector selectedMood={selectedMood} onMoodChange={setSelectedMood} />
        </motion.div>
      </div>

      {/* Section Divider - Smaller margin on mobile */}
      <div className="section-divider w-full max-w-4xl my-8 md:my-12"></div>

      {/* AI Echo Suggestions - Adjusted for mobile */}
      {showSuggestions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10 md:mb-16 w-full max-w-4xl px-3 sm:px-0"
        >
          <div className="flex items-center justify-center space-x-2 mb-4 md:mb-6">
            <Sparkles className="text-primary" size={18} />
            <h2 className="font-cardo text-xl md:text-2xl text-gradient">
              {t('suggestedEchoes')}
              {language !== 'en' && <span className="text-base md:text-lg ml-2 opacity-80">הדים מוצעים</span>}
            </h2>
          </div>
          <p className="text-muted text-sm md:text-base mb-5 md:mb-8 text-center max-w-2xl mx-auto">
            {t('echoesResonance')}
          </p>
          <div className="space-y-5 md:space-y-8">
            {suggestedEchoes.map(echo => (
              <EchoCard key={echo.id} echo={echo} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Writing Tips - Adjusted for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card w-full max-w-4xl mx-3 sm:mx-0 px-3 sm:px-6 py-4 sm:py-6"
      >
        <h3 className="font-cardo text-lg sm:text-xl mb-3 sm:mb-6 flex items-center justify-center text-gradient">
          <Heart className="text-primary mr-2" size={18} />
          <span>{t('reflectionPrompts')}</span>
          {language !== 'en' && <span className="text-base ml-2 opacity-80">רמזים להרהור</span>}
        </h3>
        <div className="space-y-2 sm:space-y-3 text-muted text-sm sm:text-base text-center max-w-2xl mx-auto">
          <p className="leading-relaxed">{t('prompt1')}</p>
          <p className="leading-relaxed">{t('prompt2')}</p>
          <p className="leading-relaxed">{t('prompt3')}</p>
          <p className="leading-relaxed">{t('prompt4')}</p>
          <p className="leading-relaxed">{t('prompt5')}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Journal;