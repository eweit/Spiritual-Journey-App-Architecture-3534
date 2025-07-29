import React from 'react';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
import {BookOpen,Brain,Feather,Compass,Heart,Sparkles,ArrowRight} from 'lucide-react';

const Hub = () => {
  const navigate = useNavigate();
  const {t, language} = useLanguage();

  const categories = [
    {
      id: 'torah',
      title: {en: t('torah'), he: 'תורה וחכמה'},
      description: {en: t('torahDesc'), he: 'לימודים עתיקים ותובנות רבניות'},
      icon: BookOpen,
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      count: 45
    },
    {
      id: 'psychology',
      title: {en: t('psychology'), he: 'פסיכולוגיה'},
      description: {en: t('psychologyDesc'), he: 'תובנות מודרניות על הנפש האנושית'},
      icon: Brain,
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      count: 32
    },
    {
      id: 'poetry',
      title: {en: t('poetry'), he: 'שירה וספרות'},
      description: {en: t('poetryDesc'), he: 'ביטויים יפים של החוויה האנושית'},
      icon: Feather,
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      count: 28
    },
    {
      id: 'philosophy',
      title: {en: t('philosophy'), he: 'פילוסופיה'},
      description: {en: t('philosophyDesc'), he: 'שאלות נצחיות על קיום ומשמעות'},
      icon: Compass,
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
      count: 38
    },
    {
      id: 'spirituality',
      title: {en: t('spirituality'), he: 'רוחניות'},
      description: {en: t('spiritualityDesc'), he: 'פרקטיקות ותובנות לצמיחה רוחנית'},
      icon: Heart,
      color: 'from-pink-500/20 to-pink-600/20',
      borderColor: 'border-pink-500/30',
      count: 41
    },
    {
      id: 'mysticism',
      title: {en: t('mysticism'), he: 'מיסטיקה'},
      description: {en: t('mysticismDesc'), he: 'מסתורין עמוקים וחוויות טרנסנדנטיות'},
      icon: Sparkles,
      color: 'from-indigo-500/20 to-indigo-600/20',
      borderColor: 'border-indigo-500/30',
      count: 23
    }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/echoes?category=${category.id}`);
  };

  return (
    <div className="page-container flex flex-col items-center pb-24">
      {/* Header */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="page-header"
      >
        <h1 className="page-title">
          {t('hub_title')}
        </h1>
        <p className="page-description">
          {t('exploreWisdom')}
        </p>
      </motion.div>

      {/* Featured Quote */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
        className="card w-full max-w-4xl mb-16 border-primary/30"
      >
        <blockquote className="font-cardo text-xl text-white mb-4 italic text-center">
          "The best way to take care of the future is to take care of the present moment."
        </blockquote>
        <cite className="text-primary font-medium text-center block">
          — Thich Nhat Hanh
          {language !== 'en' && <span className="block mt-1 opacity-80">טיק נהאט האן</span>}
        </cite>
      </motion.div>

      {/* Categories Hub Grid - Fixed to Grid Gallery Style */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1 * index}}
              onClick={() => handleCategoryClick(category)}
              className="hub-card border-orange-500/30 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-[25px] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{category.count}</div>
                  <div className="text-xs text-muted">{t('echoes_count')}</div>
                </div>
              </div>
              <h3 className="font-cardo text-xl text-white mb-3 text-center">
                {category.title.en}
                {language !== 'en' && (
                  <span className="block mt-1 text-lg opacity-90">{category.title.he}</span>
                )}
              </h3>
              <p className="text-muted mb-4 text-sm leading-relaxed text-center">
                {category.description.en}
                {language !== 'en' && (
                  <span className="block mt-1 text-xs opacity-80">{category.description.he}</span>
                )}
              </p>
              <div className="flex items-center justify-center">
                <span className="text-primary text-sm font-medium">
                  {t('explore')}
                </span>
                <ArrowRight size={16} className="text-primary ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Weekly Spotlight */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.8}}
        className="mb-16 w-full max-w-4xl"
      >
        <h2 className="font-cardo text-2xl mb-6 flex items-center justify-center text-gradient">
          <Sparkles className="text-primary mr-2" size={24} />
          <span>{t('weeklySpotlight')}</span>
          {language !== 'en' && <span className="text-xl ml-2 opacity-80">זרקור השבוע</span>}
        </h2>
        <div className="card bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/30">
          <p className="text-muted mb-6 text-center leading-relaxed">
            {t('spotlightDesc')}
          </p>
          <div className="text-center">
            <button
              onClick={() => handleCategoryClick({id: 'philosophy'})}
              className="btn-primary"
            >
              {t('explorePhilosophy')}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.9}}
        className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mb-20"
      >
        <div
          onClick={() => navigate('/echoes')}
          className="card cursor-pointer hover-glow border-orange-500/30 p-6"
        >
          <h3 className="font-cardo text-xl mb-3 text-gradient text-center">
            {t('browseAllEchoes')}
            {language !== 'en' && <span className="block mt-1 text-lg opacity-80">עיין בכל ההדים</span>}
          </h3>
          <p className="text-muted text-center">
            {t('browseDesc')}
          </p>
        </div>
        <div
          onClick={() => navigate('/journal')}
          className="card cursor-pointer hover-glow border-orange-500/30 p-6"
        >
          <h3 className="font-cardo text-xl mb-3 text-gradient text-center">
            {t('startReflecting')}
            {language !== 'en' && <span className="block mt-1 text-lg opacity-80">התחל להרהר</span>}
          </h3>
          <p className="text-muted text-center">
            {t('startDesc')}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hub;