import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Archive, Sparkles, ArrowRight } from 'lucide-react';
import JourneyCard from '../components/JourneyCard';

const Journey = () => {
  const { journeys, getActiveJourney } = useData();
  const { t, language } = useLanguage();
  const activeJourney = getActiveJourney();
  const pastJourneys = journeys.filter(j => !j.is_active);

  return (
    <div className="page-container flex flex-col items-center pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <h1 className="page-title">
          {t('journey_title')}
        </h1>
        <p className="page-description">
          {t('guidedReflections')}
        </p>
      </motion.div>

      {/* Journey Container - Centered and Wider */}
      <div className="max-w-[700px] mx-auto px-6 w-full">
        {/* Active Journey - Enhanced Card Style */}
        {activeJourney && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 mt-10"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calendar className="text-primary" size={24} />
              <h2 className="font-cardo text-2xl text-gradient">
                {t('thisWeek')}
                {language !== 'en' && <span className="ml-2 opacity-80">השבוע</span>}
              </h2>
            </div>
            
            <div className="bg-[#1E1E1E] border border-orange-500 rounded-[25px] shadow-md px-6 py-5 mb-12">
              <JourneyCard journey={activeJourney} isExpanded={true} />
            </div>
          </motion.div>
        )}

        {/* Progress Tracker - Enhanced Visual Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-16 border-primary/30 shadow-lg"
        >
          <h3 className="font-cardo text-xl mb-6 text-center text-gradient">
            {t('journeyProgress')}
            {language !== 'en' && <span className="block text-lg opacity-80">התקדמות המסע שלך</span>}
          </h3>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <span className="text-muted">
              {t('weekOf')} {activeJourney?.week_number || 1} {t('ongoingJourney')}
            </span>
            <span className="text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
              {pastJourneys.length + 1} {t('weeksCompleted')}
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((pastJourneys.length + 1) * 10, 100)}%` }}
            />
          </div>
        </motion.div>

        {/* Generate New Journey - Enhanced Card Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card cursor-pointer hover:border-orange-500/40 hover:shadow-orange-500/20 border-primary/30 mb-16 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="text-primary" size={28} />
              </div>
              <div className="text-center">
                <h3 className="font-cardo text-xl mb-2 text-white">
                  {t('generateNewJourney')}
                  {language !== 'en' && <span className="block text-lg opacity-80">צור מסע חדש</span>}
                </h3>
                <p className="text-muted">{t('aiJourney')}</p>
              </div>
            </div>
            <ArrowRight className="text-primary" size={24} />
          </div>
        </motion.div>

        {/* Past Weeks - Grid Layout */}
        {pastJourneys.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Archive className="text-muted" size={24} />
              <h2 className="font-cardo text-2xl text-gradient">
                {t('pastJourneys')}
                {language !== 'en' && <span className="ml-2 opacity-80">מסעות קודמים</span>}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastJourneys.map((journey, index) => (
                <motion.div
                  key={journey.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-[#111] rounded-[25px] p-4 shadow hover:shadow-orange-400/20 transition"
                >
                  <JourneyCard journey={journey} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Journey Philosophy - Enhanced Visual Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 mb-10 shadow-lg"
        >
          <h3 className="font-cardo text-xl mb-6 text-center text-gradient">
            {t('journeyApproach')}
            {language !== 'en' && <span className="block text-lg opacity-80">גישת המסע</span>}
          </h3>
          <div className="space-y-4 text-muted text-center max-w-2xl mx-auto">
            <p className="leading-relaxed">
              {t('journeyDesc1')}
            </p>
            <p className="leading-relaxed">
              {t('journeyDesc2')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;