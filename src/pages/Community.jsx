import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useData} from '../context/DataContext';
import {useLanguage} from '../context/LanguageContext';
import {Users, MessageCircle, Heart, Plus, Search, Sparkles, Eye, EyeOff} from 'lucide-react';
import GroupCard from '../components/GroupCard';
import ThreadPreview from '../components/ThreadPreview';

const Community = () => {
  const {communityGroups} = useData();
  const {t, language} = useLanguage();
  const [activeTab, setActiveTab] = useState('discover');
  const [searchTerm, setSearchTerm] = useState('');

  const threads = [
    {
      id: '1',
      question: 'How do you find time for prayer in a busy schedule?',
      participants: 12,
      recent_activity: '2 hours ago',
      echo_count: 3,
      is_anonymous: false
    },
    {
      id: '2',
      question: 'Struggling with faith during difficult times',
      participants: 8,
      recent_activity: '5 hours ago',
      echo_count: 5,
      is_anonymous: true
    }
  ];

  const suggestedGroups = [
    {
      title: {en: 'Similar Reflections Found', he: 'נמצאו הרהורים דומים'},
      description: {en: 'Others have written about prayer and focus like you', he: 'אחרים כתבו על תפילה וריכוז כמוך'},
      group: communityGroups[0],
      match_percentage: 85
    },
    {
      title: {en: 'Career & Purpose Seekers', he: 'מחפשי קריירה ומטרה'},
      description: {en: 'Join others exploring work-life spiritual balance', he: 'הצטרף לאחרים החוקרים איזון רוחני בין עבודה לחיים'},
      group: communityGroups[1],
      match_percentage: 72
    }
  ];

  return (
    <div className="page-container flex flex-col items-center pb-24">
      {/* Header */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="page-header"
      >
        <h1 className="page-title">
          {t('community_title')}
        </h1>
        <p className="page-description">
          {t('notAlone')}
        </p>
      </motion.div>

      {/* Community Stats - Moved to Top */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
        className="stats-grid w-full max-w-4xl mb-12"
      >
        <div className="stats-card flex flex-col items-center">
          <Users className="text-primary mx-auto mb-3" size={28} />
          <div className="text-3xl font-bold text-white mb-2 text-center">127</div>
          <div className="text-sm text-muted text-center">
            {t('activeMembers')}
            {language !== 'en' && <span className="block mt-1 opacity-80">חברים פעילים</span>}
          </div>
        </div>
        <div className="stats-card flex flex-col items-center">
          <MessageCircle className="text-primary mx-auto mb-3" size={28} />
          <div className="text-3xl font-bold text-white mb-2 text-center">43</div>
          <div className="text-sm text-muted text-center">
            {t('activeThreads')}
            {language !== 'en' && <span className="block mt-1 opacity-80">שרשורים פעילים</span>}
          </div>
        </div>
        <div className="stats-card flex flex-col items-center">
          <Heart className="text-primary mx-auto mb-3" size={28} />
          <div className="text-3xl font-bold text-white mb-2 text-center">89</div>
          <div className="text-sm text-muted text-center">
            {t('sharedEchoes')}
            {language !== 'en' && <span className="block mt-1 opacity-80">הדים משותפים</span>}
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
        className="flex space-x-1 bg-card/80 rounded-[25px] p-1 mb-10 max-w-xl mx-auto w-full"
      >
        {[
          {id: 'discover', label: t('discover'), icon: Sparkles, he: 'גלה'},
          {id: 'groups', label: t('groups'), icon: Users, he: 'קבוצות'},
          {id: 'threads', label: t('threads'), icon: MessageCircle, he: 'שרשורים'}
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-[20px] transition-all ${
                activeTab === tab.id ? 'bg-primary text-white' : 'text-muted hover:text-white'
              }`}
            >
              <Icon size={18} />
              <span>
                {tab.label}
                {language !== 'en' && <span className="block text-xs opacity-80">{tab.he}</span>}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Discover Tab */}
      {activeTab === 'discover' && (
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.3}}
          className="space-y-10 w-full max-w-4xl mb-20"
        >
          {/* AI Suggestions Banner */}
          <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="text-primary" size={24} />
              <h2 className="font-cardo text-xl text-gradient">
                {t('suggestedForYou')}
                {language !== 'en' && <span className="block text-lg opacity-80">מוצע עבורך</span>}
              </h2>
            </div>
            <p className="text-muted text-center">
              {t('communityDesc')}
            </p>
          </div>

          {/* Suggested Groups */}
          <div className="community-matches-grid">
            {suggestedGroups.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.1 * index}}
                className="community-match"
              >
                <div className="flex items-center justify-center mb-3 flex-wrap gap-2">
                  <h3 className="font-cardo text-lg text-white">
                    {suggestion.title.en}
                    {language !== 'en' && <span className="block text-sm opacity-80">{suggestion.title.he}</span>}
                  </h3>
                  <span className="text-primary text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
                    {suggestion.match_percentage}% {t('match')}
                  </span>
                </div>
                <p className="text-muted mb-4 text-center">
                  {suggestion.description.en}
                  {language !== 'en' && <span className="block text-sm opacity-80">{suggestion.description.he}</span>}
                </p>
                <GroupCard group={suggestion.group} showJoinButton />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Groups Tab */}
      {activeTab === 'groups' && (
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.3}}
          className="space-y-10 w-full max-w-4xl mb-20"
        >
          {/* Search and Create */}
          <div className="filter-container">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('searchGroups')}
                  className="input-field pl-12"
                />
              </div>
              <button className="btn-primary flex items-center space-x-2">
                <Plus size={18} />
                <span>
                  {t('createGroup')}
                  {language !== 'en' && <span className="block text-xs opacity-80">צור קבוצה</span>}
                </span>
              </button>
            </div>
          </div>

          {/* Groups List */}
          <div className="space-y-8">
            {communityGroups.map(group => (
              <GroupCard key={group.id} group={group} showJoinButton />
            ))}
          </div>
        </motion.div>
      )}

      {/* Threads Tab */}
      {activeTab === 'threads' && (
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.3}}
          className="space-y-10 w-full max-w-4xl mb-20"
        >
          {/* Create Thread */}
          <div className="community-card cursor-pointer hover:border-orange-400/30 hover:translate-y-[-4px] transition-all">
            <div className="flex items-center justify-center space-x-6 flex-wrap gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Plus className="text-primary" size={28} />
              </div>
              <div className="text-center">
                <h3 className="font-cardo text-xl mb-2 text-white">
                  {t('startThread')}
                  {language !== 'en' && <span className="block text-lg opacity-80">התחל שרשור</span>}
                </h3>
                <p className="text-muted">
                  {t('shareQuestion')}
                </p>
              </div>
            </div>
          </div>

          {/* Active Threads */}
          <div className="space-y-8">
            <h2 className="font-cardo text-xl text-center text-gradient">
              {t('activeConversations')}
              {language !== 'en' && <span className="block text-lg opacity-80">שיחות פעילות</span>}
            </h2>
            {threads.map(thread => (
              <ThreadPreview key={thread.id} thread={thread} />
            ))}
          </div>

          {/* Anonymous Toggle Info */}
          <div className="card bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/30">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <EyeOff className="text-purple-400" size={20} />
              <h3 className="font-cardo text-lg text-gradient">
                {t('anonymousSharing')}
                {language !== 'en' && <span className="block text-sm opacity-80">שיתוף אנונימי</span>}
              </h3>
            </div>
            <p className="text-muted text-center">
              {t('anonymousDesc')}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Community;