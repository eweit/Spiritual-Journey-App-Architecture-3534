import React from 'react';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {useData} from '../context/DataContext';
import {useLanguage} from '../context/LanguageContext';
import {BookOpen, Heart, Calendar, TrendingUp, Target, Award, Flame} from 'lucide-react';
import ProgressRing from '../components/ProgressRing';
import WisdomQuoteCard from '../components/WisdomQuoteCard';
import JournalPromptCard from '../components/JournalPromptCard';
import StatsGrid from '../components/StatsGrid';

const Dashboard = () => {
  const navigate = useNavigate();
  const {entries, getSavedEchoes, getActiveJourney} = useData();
  const {t, language} = useLanguage();
  
  const savedEchoes = getSavedEchoes();
  const activeJourney = getActiveJourney();
  
  // Calculate streaks and stats
  const journalStreak = 7; // Mock data - calculate actual streak
  const weeklyGoal = 5;
  const weeklyProgress = Math.min((entries.length / weeklyGoal) * 100, 100);
  
  const dashboardStats = [
    {
      id: 'streak',
      icon: <ProgressRing progress={weeklyProgress} size={60} strokeWidth={4}>
        <Flame className="text-orange-400" size={20} />
      </ProgressRing>,
      value: journalStreak,
      label: 'Day Streak',
      labelHe: 'רצף ימים',
      color: 'text-orange-400'
    },
    {
      id: 'echoes',
      icon: '💫',
      value: savedEchoes.length,
      label: 'Saved Echoes',
      labelHe: 'הדים שמורים',
      color: 'text-blue-400'
    },
    {
      id: 'journey',
      icon: '🗺️',
      value: `Week ${activeJourney?.week_number || 1}`,
      label: 'Current Journey',
      labelHe: 'המסע הנוכחי',
      color: 'text-purple-400'
    }
  ];
  
  const featuredQuote = {
    content: "The privilege of a lifetime is to become who you truly are.",
    author: "Carl Jung",
    category: "Psychology",
    tags: ["authenticity", "growth", "purpose"]
  };
  
  const handlePromptSelect = (promptText) => {
    navigate('/journal', {state: {promptText}});
  };
  
  return (
    <div className="page-container flex flex-col items-center">
      {/* Welcome Header - Improved centering */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="opening-text-container w-full max-w-3xl text-center mx-auto mb-12"
      >
        <h1 className="font-cardo text-4xl text-gradient mb-4">
          Welcome back to your journey
          {language !== 'en' && (
            <span className="block text-2xl mt-2 opacity-80">
              ברוך שובך למסע שלך
            </span>
          )}
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Continue your path of reflection and growth
        </p>
      </motion.div>
      
      {/* Enhanced Stats Overview - With improved spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
        {dashboardStats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.1 * index}}
            className="card hover-lift flex flex-row items-center p-6"
          >
            <div className="flex-shrink-0 mr-4">
              {typeof stat.icon === 'string' ? (
                <div className="text-4xl">{stat.icon}</div>
              ) : (
                stat.icon
              )}
            </div>
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-muted text-sm">
                {stat.label}
                {language !== 'en' && stat.labelHe && (
                  <span className="ml-1 opacity-80">
                    {stat.labelHe}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Wisdom - Improved spacing and centering */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
        className="mb-16 w-full max-w-3xl mx-auto"
      >
        <h2 className="font-cardo text-2xl text-gradient mb-8 text-center">
          Today's Reflection
          {language !== 'en' && (
            <span className="block text-xl mt-1 opacity-80">
              ההרהור היומי
            </span>
          )}
        </h2>
        <WisdomQuoteCard quote={featuredQuote} featured={true} />
      </motion.div>

      {/* Section Divider */}
      <div className="section-divider w-full max-w-4xl mx-auto"></div>

      {/* Journal Prompts - Improved spacing and layout */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
        className="mb-16 w-full max-w-4xl mx-auto"
      >
        <h2 className="font-cardo text-2xl text-gradient mb-8 text-center">
          Writing Prompts
          {language !== 'en' && (
            <span className="block text-xl mt-1 opacity-80">
              רמזי כתיבה
            </span>
          )}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <JournalPromptCard prompt="gratitude" onSelect={handlePromptSelect} />
          <JournalPromptCard prompt="growth" onSelect={handlePromptSelect} />
          <JournalPromptCard prompt="challenge" onSelect={handlePromptSelect} />
          <JournalPromptCard prompt="connection" onSelect={handlePromptSelect} />
        </div>
      </motion.div>

      {/* Section Divider */}
      <div className="section-divider w-full max-w-4xl mx-auto"></div>

      {/* Quick Actions - Improved layout and spacing */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.4}}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mb-16"
      >
        <div
          onClick={() => navigate('/journal')}
          className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-[25px] p-8 cursor-pointer hover:border-orange-500/50 transition-all text-center flex flex-col items-center justify-center"
        >
          <BookOpen className="text-orange-400 mb-6" size={48} />
          <h3 className="font-cardo text-2xl text-white mb-3">Start Writing</h3>
          <p className="text-gray-400 max-w-xs mx-auto">Begin today's reflection and capture your thoughts</p>
        </div>
        <div
          onClick={() => navigate('/echoes')}
          className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-[25px] p-8 cursor-pointer hover:border-blue-500/50 transition-all text-center flex flex-col items-center justify-center"
        >
          <Award className="text-blue-400 mb-6" size={48} />
          <h3 className="font-cardo text-2xl text-white mb-3">Discover Wisdom</h3>
          <p className="text-gray-400 max-w-xs mx-auto">Explore new insights and spiritual teachings</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;