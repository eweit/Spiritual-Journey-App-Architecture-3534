import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter, Sparkles } from 'lucide-react';
import EchoCard from '../components/EchoCard';

const Echoes = () => {
  const { echoes } = useData();
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const types = ['all', 'Torah', 'Psychology', 'Poetry', 'Philosophy'];
  const allTags = [...new Set(echoes.flatMap(echo => echo.tags))];

  const filteredEchoes = echoes.filter(echo => {
    const matchesSearch = echo.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         echo.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || echo.type === selectedType;
    const matchesTag = selectedTag === 'all' || echo.tags.includes(selectedTag);
    return matchesSearch && matchesType && matchesTag;
  });

  return (
    <div className="page-container flex flex-col items-center pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <h1 className="page-title">
          {t('echoes_title')}
        </h1>
        <p className="page-description">
          {t('discoverWisdom')}
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-4xl mb-8 px-3 sm:px-0"
      >
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('searchEchoes')}
            className="input-field pl-12 text-center"
          />
        </div>

        {/* Filters - Fixed with Dark Theme */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="flex-1 min-w-[180px] max-w-xs">
            <label className="block text-sm text-muted mb-2 text-center font-medium">
              {t('type')}
              {language !== 'en' && <span className="text-xs ml-2 opacity-80">סוג</span>}
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-[#1A1A1A] text-white border border-border rounded-[25px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-500/50 text-center"
            >
              {types.map(type => (
                <option key={type} value={type} className="bg-[#1A1A1A] text-white">
                  {type === 'all' ? t('allTypes') : type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 min-w-[180px] max-w-xs">
            <label className="block text-sm text-muted mb-2 text-center font-medium">
              {t('theme')}
              {language !== 'en' && <span className="text-xs ml-2 opacity-80">נושא</span>}
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full bg-[#1A1A1A] text-white border border-border rounded-[25px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-500/50 text-center"
            >
              <option value="all" className="bg-[#1A1A1A] text-white">{t('allThemes')}</option>
              {allTags.map(tag => (
                <option key={tag} value={tag} className="bg-[#1A1A1A] text-white">
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* AI Suggestion Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card w-full max-w-4xl mb-10 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 px-3 sm:px-6"
      >
        <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
          <Sparkles className="text-primary" size={24} />
          <div className="text-center">
            <h3 className="font-cardo text-lg sm:text-xl text-white mb-2">
              {t('personalizedForYou')}
            </h3>
            <p className="text-muted text-sm sm:text-base">
              {t('echoesAbout')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8 text-center"
      >
        <p className="text-muted text-base sm:text-lg">
          {filteredEchoes.length} {t('echoesFound')}
        </p>
      </motion.div>

      {/* Echoes Grid - Fixed with Proper Spacing and Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-4xl px-3 sm:px-0 mb-20"
      >
        <div className="space-y-6 sm:space-y-8">
          {filteredEchoes.map((echo, index) => (
            <motion.div
              key={echo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#1E1E1E] rounded-[20px] sm:rounded-[25px] p-4 sm:p-6 shadow-md hover:shadow-orange-400/30 transition-all duration-300 hover:translate-y-[-2px] border border-gray-700/50 hover:border-orange-500/30"
            >
              <EchoCard echo={echo} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Empty State */}
      {filteredEchoes.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 mb-20"
        >
          <Search className="text-muted mx-auto mb-4" size={48} />
          <h3 className="font-cardo text-2xl text-white mb-3">
            {t('noEchoesFound')}
          </h3>
          <p className="text-muted text-lg">
            {t('adjustSearch')}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Echoes;