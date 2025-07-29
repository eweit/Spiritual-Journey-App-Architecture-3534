import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const JournalPromptCard = ({ prompt, onSelect }) => {
  const { language } = useLanguage();

  const prompts = {
    gratitude: {
      en: "What moment today filled your heart with gratitude?",
      he: "איזה רגע היום מילא את לבך בהכרת תודה?"
    },
    growth: {
      en: "How did you grow spiritually this week?",
      he: "איך צמחת רוחנית השבוע?"
    },
    challenge: {
      en: "What challenge taught you something about yourself?",
      he: "איזה אתגר לימד אותך משהו על עצמך?"
    },
    connection: {
      en: "When did you feel most connected to something greater?",
      he: "מתי הרגשת הכי מחובר למשהו גדול יותר?"
    }
  };

  const selectedPrompt = prompts[prompt] || prompts.gratitude;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(selectedPrompt[language])}
      className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-[25px] p-6 cursor-pointer hover:border-orange-500/50 transition-all h-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <Lightbulb className="text-orange-400" size={20} />
          </div>
          <div className="flex-1">
            <p className="text-white font-medium leading-relaxed">
              {selectedPrompt.en}
            </p>
            {language !== 'en' && (
              <p className="text-orange-300/80 text-sm mt-2 leading-relaxed">
                {selectedPrompt.he}
              </p>
            )}
          </div>
        </div>
        <ArrowRight className="text-orange-400 opacity-60 flex-shrink-0 ml-4" size={18} />
      </div>
    </motion.div>
  );
};

export default JournalPromptCard;