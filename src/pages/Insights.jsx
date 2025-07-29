import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';
import { Brain, TrendingUp, Target, Calendar } from 'lucide-react';
import InsightCard from '../components/InsightCard';
import ProgressRing from '../components/ProgressRing';

const Insights = () => {
  const { entries } = useData();
  const { t, language } = useLanguage();

  // Mock insights data - in real app this would be calculated from user data
  const insights = [
    {
      type: 'trend',
      title: 'Growing Gratitude Practice',
      titleHe: 'תרגול הכרת תודה גדל',
      description: 'You\'ve mentioned gratitude 40% more this month compared to last month.',
      descriptionHe: 'הזכרת הכרת תודה 40% יותר החודש בהשוואה לחודש שעבר.',
      date: '2 days ago'
    },
    {
      type: 'milestone',
      title: '30-Day Reflection Streak',
      titleHe: 'רצף של 30 יום של הרהור',
      description: 'Congratulations! You\'ve maintained consistent daily reflection.',
      descriptionHe: 'מזל טוב! שמרת על הרהור יומי עקבי.',
      date: '1 week ago'
    },
    {
      type: 'reflection',
      title: 'Common Theme: Purpose',
      titleHe: 'נושא משותף: מטרה',
      description: 'Your recent entries often explore questions of life purpose and meaning.',
      descriptionHe: 'הרשומות האחרונות שלך חוקרות לעתים קרובות שאלות של מטרת חיים ומשמעות.',
      date: '3 days ago'
    }
  ];

  // Mock analytics data
  const analytics = {
    totalEntries: entries.length,
    averageWordsPerEntry: 145,
    mostActiveDay: 'Sunday',
    longestStreak: 21,
    topMoods: ['peaceful', 'contemplative', 'grateful'],
    topTags: ['gratitude', 'prayer', 'growth']
  };

  return (
    <div className="page-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <h1 className="page-title flex items-center justify-center">
          <Brain className="text-orange-400 mr-3" size={48} />
          Insights
          {language !== 'en' && (
            <span className="block text-3xl mt-2 opacity-80">תובנות</span>
          )}
        </h1>
        <p className="page-description">
          Discover patterns and growth in your spiritual journey
        </p>
      </motion.div>

      {/* Analytics Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
      >
        <div className="bg-[#1A1A1A] rounded-[25px] p-6 text-center border border-gray-700">
          <TrendingUp className="text-green-400 mx-auto mb-3" size={24} />
          <div className="text-2xl font-bold text-white mb-1">{analytics.totalEntries}</div>
          <div className="text-sm text-gray-400">Total Entries</div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[25px] p-6 text-center border border-gray-700">
          <Target className="text-blue-400 mx-auto mb-3" size={24} />
          <div className="text-2xl font-bold text-white mb-1">{analytics.averageWordsPerEntry}</div>
          <div className="text-sm text-gray-400">Avg Words</div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[25px] p-6 text-center border border-gray-700">
          <Calendar className="text-purple-400 mx-auto mb-3" size={24} />
          <div className="text-2xl font-bold text-white mb-1">{analytics.longestStreak}</div>
          <div className="text-sm text-gray-400">Longest Streak</div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[25px] p-6 text-center border border-gray-700">
          <div className="text-lg font-bold text-white mb-1">{analytics.mostActiveDay}</div>
          <div className="text-sm text-gray-400">Most Active Day</div>
        </div>
      </motion.div>

      {/* Progress Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#1A1A1A] rounded-[25px] p-8 border border-gray-700 mb-12"
      >
        <h2 className="font-cardo text-2xl text-gradient mb-8 text-center">
          Monthly Progress
        </h2>
        <div className="flex items-center justify-center space-x-12">
          <div className="text-center">
            <ProgressRing progress={75} size={120}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">75%</div>
                <div className="text-xs text-gray-400">Journal Goal</div>
              </div>
            </ProgressRing>
          </div>
          <div className="text-center">
            <ProgressRing progress={60} size={120}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">60%</div>
                <div className="text-xs text-gray-400">Reflection Depth</div>
              </div>
            </ProgressRing>
          </div>
          <div className="text-center">
            <ProgressRing progress={90} size={120}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">90%</div>
                <div className="text-xs text-gray-400">Consistency</div>
              </div>
            </ProgressRing>
          </div>
        </div>
      </motion.div>

      {/* Personal Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="font-cardo text-2xl text-gradient mb-6 text-center">
          Personal Insights
        </h2>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <InsightCard insight={insight} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Theme Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="bg-[#1A1A1A] rounded-[25px] p-6 border border-gray-700">
          <h3 className="font-cardo text-xl text-white mb-4">Top Moods</h3>
          <div className="space-y-3">
            {analytics.topMoods.map((mood, index) => (
              <div key={mood} className="flex items-center justify-between">
                <span className="text-gray-300 capitalize">{mood}</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                    style={{ width: `${(3 - index) * 30 + 40}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[25px] p-6 border border-gray-700">
          <h3 className="font-cardo text-xl text-white mb-4">Common Themes</h3>
          <div className="flex flex-wrap gap-2">
            {analytics.topTags.map((tag, index) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm"
                style={{ opacity: 1 - (index * 0.2) }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Insights;