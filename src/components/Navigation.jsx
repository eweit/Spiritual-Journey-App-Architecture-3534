import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, BarChart3, BookOpen, Lightbulb, Map, Heart, Compass, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', icon: Home, label: t('home') },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/journal', icon: BookOpen, label: t('journal') },
    { path: '/echoes', icon: Lightbulb, label: t('echoes_nav') },
    { path: '/journey', icon: Map, label: t('journey') },
    { path: '/collection', icon: Heart, label: t('collection') },
    { path: '/hub', icon: Compass, label: t('hub') },
    { path: '/community', icon: Users, label: t('community') }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A]/95 backdrop-blur-lg border-t border-[#2A2A2A] z-50">
      <div className="flex items-center justify-around px-1 py-2 overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center p-2 min-w-[60px] flex-shrink-0"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#F97316]/20 rounded-lg border border-[#F97316]/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative z-10 flex flex-col items-center"
              >
                <Icon
                  size={18}
                  className={`mb-1 transition-colors ${
                    isActive ? 'text-[#F97316]' : 'text-[#9CA3AF] hover:text-[#F97316]'
                  }`}
                />
                <span
                  className={`text-xs font-medium transition-colors ${
                    isActive ? 'text-[#F97316]' : 'text-[#9CA3AF] hover:text-[#F97316]'
                  }`}
                >
                  {item.label}
                </span>
              </motion.div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;