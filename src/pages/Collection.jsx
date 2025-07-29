import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useData} from '../context/DataContext';
import {useLanguage} from '../context/LanguageContext';
import {Calendar, Heart, BookOpen, Filter, Grid, List} from 'lucide-react';
import {format} from 'date-fns';
import JournalEntry from '../components/JournalEntry';
import EchoCard from '../components/EchoCard';

const Collection = () => {
  const {entries, getSavedEchoes} = useData();
  const {t, language} = useLanguage();
  
  const [viewMode, setViewMode] = useState('timeline');
  const [filterType, setFilterType] = useState('all');
  const [selectedMood, setSelectedMood] = useState('all');
  
  const savedEchoes = getSavedEchoes();
  const allMoods = [...new Set(entries.map(entry => entry.mood).filter(Boolean))];
  
  const filteredEntries = entries.filter(entry => {
    if (selectedMood === 'all') return true;
    return entry.mood === selectedMood;
  });
  
  const groupedByDate = filteredEntries.reduce((groups, entry) => {
    const date = entry.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(entry);
    return groups;
  }, {});
  
  const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(b) - new Date(a));
  
  return (
    <div className="page-container flex flex-col items-center pb-24">
      {/* Header */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="page-header"
      >
        <h1 className="page-title">
          {t('collection_title')}
        </h1>
        <p className="page-description">
          {t('journeyReflection')}
        </p>
      </motion.div>
      
      {/* Stats Overview */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12"
      >
        <div className="stats-card flex flex-row items-center">
          <BookOpen className="text-primary mx-4 flex-shrink-0" size={28} />
          <div className="flex flex-col items-start">
            <div className="text-2xl font-bold text-white mb-1">{entries.length}</div>
            <div className="text-sm text-muted">
              {t('entries')}
              {language !== 'en' && <span className="ml-1 opacity-80">רשומות</span>}
            </div>
          </div>
        </div>
        
        <div className="stats-card flex flex-row items-center">
          <Heart className="text-primary mx-4 flex-shrink-0" size={28} />
          <div className="flex flex-col items-start">
            <div className="text-2xl font-bold text-white mb-1">{savedEchoes.length}</div>
            <div className="text-sm text-muted">
              {t('savedEchoes')}
              {language !== 'en' && <span className="ml-1 opacity-80">הדים שמורים</span>}
            </div>
          </div>
        </div>
        
        <div className="stats-card flex flex-row items-center">
          <Calendar className="text-primary mx-4 flex-shrink-0" size={28} />
          <div className="flex flex-col items-start">
            <div className="text-2xl font-bold text-white mb-1">{sortedDates.length}</div>
            <div className="text-sm text-muted">
              {t('daysActive')}
              {language !== 'en' && <span className="ml-1 opacity-80">ימים פעילים</span>}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Controls */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
        className="filter-container w-full max-w-4xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* View Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('timeline')}
              className={`filter-button rounded-[25px] flex items-center space-x-2 ${viewMode === 'timeline' ? 'bg-primary/20 text-primary border-primary/30' : ''}`}
            >
              <List size={20} />
              <span>{t('timeline')}</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`filter-button rounded-[25px] flex items-center space-x-2 ${viewMode === 'grid' ? 'bg-primary/20 text-primary border-primary/30' : ''}`}
            >
              <Grid size={20} />
              <span>{t('grid')}</span>
            </button>
          </div>
          
          {/* Content Filter */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-select min-w-[150px]"
          >
            <option value="all">{t('allContent')}</option>
            <option value="entries">{t('journalEntries')}</option>
            <option value="echoes">{t('savedEchoes')}</option>
          </select>
          
          {/* Mood Filter */}
          {filterType !== 'echoes' && (
            <select
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
              className="filter-select min-w-[150px]"
            >
              <option value="all">{t('allMoods')}</option>
              {allMoods.map(mood => (
                <option key={mood} value={mood}>
                  {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </option>
              ))}
            </select>
          )}
        </div>
      </motion.div>
      
      {/* Content Display */}
      <div className="space-y-16 w-full max-w-4xl mb-20">
        {/* Saved Echoes Section */}
        {(filterType === 'all' || filterType === 'echoes') && savedEchoes.length > 0 && (
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
          >
            <h2 className="font-cardo text-2xl mb-8 flex items-center justify-center text-gradient">
              <Heart className="text-primary mr-2" size={24} />
              <span>{t('savedEchoes')}</span>
              {language !== 'en' && <span className="text-xl ml-2 opacity-80">הדים שמורים</span>}
            </h2>
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-8' : 'space-y-8'}>
              {savedEchoes.map(echo => (
                <EchoCard key={echo.id} echo={echo} />
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Journal Entries Section */}
        {(filterType === 'all' || filterType === 'entries') && (
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
          >
            <h2 className="font-cardo text-2xl mb-8 flex items-center justify-center text-gradient">
              <BookOpen className="text-primary mr-2" size={24} />
              <span>{t('journalEntries')}</span>
              {language !== 'en' && <span className="text-xl ml-2 opacity-80">רשומות יומן</span>}
            </h2>
            {viewMode === 'timeline' ? (
              <div className="space-y-12">
                {sortedDates.map(date => (
                  <div key={date}>
                    <h3 className="font-cardo text-lg text-primary mb-6 text-center">
                      {format(new Date(date), 'EEEE, MMMM d, yyyy')}
                    </h3>
                    <div className="space-y-6">
                      {groupedByDate[date].map(entry => (
                        <JournalEntry key={entry.id} entry={entry} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEntries.map(entry => (
                  <JournalEntry key={entry.id} entry={entry} compact />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
      
      {/* Empty State */}
      {entries.length === 0 && savedEchoes.length === 0 && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className="text-center py-16 mb-20"
        >
          <BookOpen className="text-muted mx-auto mb-4" size={48} />
          <h3 className="font-cardo text-2xl text-white mb-3">
            {t('emptyCollection')}
          </h3>
          <p className="text-muted text-lg mb-6">
            {t('startBuilding')}
          </p>
          <button className="btn-primary">
            {t('startWriting')}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Collection;