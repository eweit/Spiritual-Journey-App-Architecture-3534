import React, { useState } from 'react';
import { FeedbackWorkflow } from '@questlabs/react-sdk';
import { MessageCircle, ArrowRight } from 'lucide-react';
import questConfig from '../config/questConfig';
import { useLanguage } from '../context/LanguageContext';

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const EventTracking = () => {
    // Track feedback button click event
    console.log('Feedback button clicked');
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => {
          EventTracking();
          setIsOpen((prev) => !prev);
        }}
        style={{ background: questConfig.PRIMARY_COLOR }}
        className="flex gap-1 rounded-t-md rounded-b-none justify-end items-center px-3 text-14 leading-5 font-semibold py-2 text-white z-50 fixed top-[calc(50%-20px)] -right-10 rotate-[270deg] transition-all h-9 hover:bg-opacity-90 hover:shadow-lg"
      >
        <div className="w-fit h-fit rotate-90 transition-all duration-300">
          <ArrowRight size={16} />
        </div>
        <p className="text-white text-sm font-medium leading-none">
          {language === 'en' ? 'Feedback' : 'משוב'}
        </p>
      </button>

      {/* Feedback Workflow Component */}
      {isOpen && (
        <FeedbackWorkflow
          uniqueUserId={localStorage.getItem('userId') || questConfig.USER_ID}
          questId={questConfig.QUEST_FEEDBACK_QUESTID}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          styleConfig={{
            primaryColor: questConfig.PRIMARY_COLOR,
            backgroundColor: '#1A1A1A',
            textColor: '#F9FAFB',
            borderRadius: '25px'
          }}
        >
          <FeedbackWorkflow.ThankYou />
        </FeedbackWorkflow>
      )}
    </>
  );
};

export default FeedbackButton;