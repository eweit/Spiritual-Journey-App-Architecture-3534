import React from 'react';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {useUser} from '../context/UserContext';
import {useData} from '../context/DataContext';
import {useLanguage} from '../context/LanguageContext';
import {Plus,Sparkles,Calendar,TrendingUp} from 'lucide-react';
import JourneyCard from '../components/JourneyCard';
import EchoCard from '../components/EchoCard';

const Home = () => {
  const navigate = useNavigate();
  const {user} = useUser();
  const {entries, getSavedEchoes, getActiveJourney} = useData();
  const {t, language} = useLanguage();
  
  const savedEchoes = getSavedEchoes();
  const activeJourney = getActiveJourney();
  const recentEntries = entries.slice(0, 3);
  
  const stats = [
    {label: t('savedEchoes'), value: savedEchoes.length, icon: Sparkles},
    {label: t('journal_entries'), value: entries.length, icon: TrendingUp},
    {label: t('journeyWeek'), value: user.journey_week, icon: Calendar}
  ];
  
  return (
    <div className="page-container flex flex-col items-center">
      {/* Header with centered greeting */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="opening-text-container w-full max-w-3xl"
      >
        <h1 className="font-cardo text-2xl text-white mb-6 mt-2">
          {t('greeting')} {user.name}
        </h1>
        <p className="text-muted text-lg leading-relaxed">
          {t('heartStirring')}
          {language !== 'en' && (
            <span className="block mt-2 opacity-80">מה מתרחש בלבך היום?</span>
          )}
        </p>
      </motion.div>

      {/* Quick Entry Card - Centered and Prominent */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
        className="w-full max-w-2xl mb-8"
      >
        <div 
          className="card cursor-pointer hover-glow border-primary/20 flex flex-col items-center py-12 rounded-[25px] bg-gradient-to-br from-[#1A1A1A] to-[#111111]"
          onClick={() => navigate('/journal')}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6">
            <Plus className="text-primary" size={36} />
          </div>
          <h3 className="font-cardo text-3xl mb-4 text-white">{t('newEntry')}</h3>
          <p className="text-muted text-lg max-w-md text-center leading-relaxed">
            {t('captureThoughts')}
            {language !== 'en' && (
              <span className="block mt-2 text-base opacity-80">לכוד את מחשבותיך והרהוריך</span>
            )}
          </p>
        </div>
      </motion.div>

      {/* Stats Grid - Horizontal Row */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
        className="stats-grid w-full max-w-4xl"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3 + index * 0.1}}
              className="card hover-lift flex flex-row items-center p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon className="text-primary" size={24} />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-muted text-sm leading-relaxed">
                  {stat.label}
                  {language !== 'en' && stat.label === t('journal_entries') && (
                    <span className="ml-1 opacity-80">רשומות יומן</span>
                  )}
                  {language !== 'en' && stat.label === t('savedEchoes') && (
                    <span className="ml-1 opacity-80">הדים שמורים</span>
                  )}
                  {language !== 'en' && stat.label === t('journeyWeek') && (
                    <span className="ml-1 opacity-80">שבוע המסע</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Section Divider */}
      <div className="section-divider w-full max-w-4xl"></div>

      {/* Active Journey */}
      {activeJourney && (
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.4}}
          className="mb-16 w-full max-w-4xl"
        >
          <h2 className="font-cardo text-3xl text-center mb-8 text-white">
            {t('thisWeekJourney')}
            {language !== 'en' && (
              <span className="block mt-1 text-xl opacity-80">המסע של השבוע</span>
            )}
          </h2>
          <JourneyCard journey={activeJourney} />
        </motion.div>
      )}

      {/* Section Divider */}
      <div className="section-divider w-full max-w-4xl"></div>

      {/* Recent Activity */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.5}}
        className="mb-16 w-full max-w-4xl"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-cardo text-3xl text-gradient">
            {t('recentReflections')}
            {language !== 'en' && (
              <span className="block mt-1 text-xl opacity-80">הרהורים אחרונים</span>
            )}
          </h2>
          <button
            onClick={() => navigate('/collection')}
            className="text-primary hover:text-primary/80 transition-colors text-lg font-medium rounded-full px-4 py-1 border border-primary/30 hover:bg-primary/10"
          >
            {t('viewAll')}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.1 * index}}
              className="card hover-lift"
            >
              <p className="text-white mb-4 line-clamp-4 leading-relaxed">
                {entry.content}
              </p>
              <div className="flex items-center justify-center flex-wrap gap-2 mb-3">
                {entry.tags.slice(0, 3).map(tag => (
                  <div key={tag} className="dual-lang-tag">
                    <span className="text-primary text-xs">#{tag}</span>
                    {language !== 'en' && (
                      <span className="text-xs text-primary/70 mt-0.5">
                        {tag === 'gratitude' ? 'הכרת תודה' : tag === 'prayer' ? 'תפילה' : tag === 'clarity' ? 'בהירות' : tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              {entry.mood && (
                <span className="text-muted text-sm capitalize bg-muted/10 px-3 py-1 rounded-full">
                  {entry.mood}
                  {language !== 'en' && (
                    <span className="ml-1 opacity-80">
                      {entry.mood === 'peaceful' ? '(שלווה)' : entry.mood === 'contemplative' ? '(מהורהר)' : ''}
                    </span>
                  )}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section Divider */}
      <div className="section-divider w-full max-w-4xl"></div>

      {/* Saved Echoes Preview */}
      {savedEchoes.length > 0 && (
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.6}}
          className="w-full max-w-4xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-cardo text-3xl text-gradient">
              {t('savedWisdom')}
              {language !== 'en' && (
                <span className="block mt-1 text-xl opacity-80">חכמה שמורה</span>
              )}
            </h2>
            <button
              onClick={() => navigate('/echoes')}
              className="text-primary hover:text-primary/80 transition-colors text-lg font-medium rounded-full px-4 py-1 border border-primary/30 hover:bg-primary/10"
            >
              {t('exploreMore')}
            </button>
          </div>
          <div className="space-y-8">
            {savedEchoes.slice(0, 2).map(echo => (
              <EchoCard key={echo.id} echo={echo} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;