import React from 'react';
import { motion } from 'framer-motion';
import StatsCard from './StatsCard';

const StatsGrid = ({ stats, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 
        w-full max-w-4xl mx-auto
        ${className}
      `}
    >
      {stats.map((stat, index) => (
        <StatsCard
          key={stat.id || index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          labelHe={stat.labelHe}
          color={stat.color}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  );
};

export default StatsGrid;