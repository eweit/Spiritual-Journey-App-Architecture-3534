import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WisdomQuoteCard = ({ quote, featured = false }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        ${featured 
          ? 'bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/30' 
          : 'bg-[#1A1A1A] border-gray-600'
        } 
        border rounded-[25px] p-8 shadow-lg 
        hover:border-orange-400/50 transition-all
        max-w-3xl mx-auto
      `}
    >
      <div className="flex items-start justify-between mb-6">
        <Quote className="text-orange-400 opacity-70" size={28} />
        <div className="flex space-x-3">
          <button className="p-2 rounded-full bg-gray-700/50 hover:bg-orange-500/20 transition-colors">
            <Heart size={18} className="text-gray-300 hover:text-orange-400" />
          </button>
          <button className="p-2 rounded-full bg-gray-700/50 hover:bg-orange-500/20 transition-colors">
            <Share2 size={18} className="text-gray-300 hover:text-orange-400" />
          </button>
        </div>
      </div>
      
      <blockquote className="text-white text-xl font-cardo italic mb-6 leading-relaxed text-center">
        "{quote.content}"
      </blockquote>
      
      <div className="flex items-center justify-between mt-8">
        <cite className="text-orange-400 font-medium">
          — {quote.author}
        </cite>
        <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
          {quote.category}
        </span>
      </div>
      
      {quote.tags && (
        <div className="flex flex-wrap justify-center gap-2 mt-6 pt-4 border-t border-gray-700">
          {quote.tags.map(tag => (
            <span key={tag} className="text-xs text-orange-300 bg-orange-500/10 px-3 py-1.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default WisdomQuoteCard;