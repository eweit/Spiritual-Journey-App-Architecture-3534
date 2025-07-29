import React, { createContext, useContext, useState, useEffect } from 'react';
import { format, subDays } from 'date-fns';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [entries, setEntries] = useState([
    {
      id: '1',
      content: 'Today I felt a deep sense of gratitude for the small moments. The morning prayer brought clarity to my scattered thoughts.',
      tags: ['gratitude', 'prayer', 'clarity'],
      mood: 'peaceful',
      saved_echoes: ['echo1'],
      date: format(subDays(new Date(), 1), 'yyyy-MM-dd'),
      created_at: subDays(new Date(), 1)
    },
    {
      id: '2',
      content: 'Struggling with finding balance between work ambitions and spiritual growth. How do I honor both paths?',
      tags: ['balance', 'work', 'growth'],
      mood: 'contemplative',
      saved_echoes: ['echo2'],
      date: format(subDays(new Date(), 3), 'yyyy-MM-dd'),
      created_at: subDays(new Date(), 3)
    }
  ]);

  const [echoes, setEchoes] = useState([
    {
      id: 'echo1',
      type: 'Torah',
      content: 'Who is rich? One who is satisfied with their portion.',
      source: 'Pirkei Avot 4:1',
      tags: ['contentment', 'wealth', 'wisdom'],
      saved: true
    },
    {
      id: 'echo2',
      type: 'Psychology',
      content: 'The privilege of a lifetime is to become who you truly are.',
      source: 'Carl Jung',
      tags: ['authenticity', 'growth', 'purpose'],
      saved: false
    },
    {
      id: 'echo3',
      type: 'Poetry',
      content: 'Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.',
      source: 'Rumi',
      tags: ['love', 'guidance', 'trust'],
      saved: true
    },
    {
      id: 'echo4',
      type: 'Philosophy',
      content: 'The unexamined life is not worth living.',
      source: 'Socrates',
      tags: ['reflection', 'purpose', 'wisdom'],
      saved: false
    }
  ]);

  const [journeys, setJourneys] = useState([
    {
      id: '1',
      week_number: 3,
      weekly_question: 'How do you find sacred moments in ordinary days?',
      suggested_text: 'Consider the Jewish concept of "kedushim" - finding holiness in the everyday. This week, notice three ordinary moments that felt sacred.',
      suggested_practice: 'Each morning, set an intention to pause during one routine activity and find the sacred within it.',
      start_date: format(subDays(new Date(), 14), 'yyyy-MM-dd'),
      is_active: true
    },
    {
      id: '2',
      week_number: 2,
      weekly_question: 'What does it mean to truly listen?',
      suggested_text: 'Explore the Hebrew word "shema" - to hear, listen, and understand. Listening is both an art and a spiritual practice.',
      suggested_practice: 'Practice deep listening in one conversation each day. Notice the difference between hearing words and truly listening.',
      start_date: format(subDays(new Date(), 21), 'yyyy-MM-dd'),
      is_active: false
    }
  ]);

  const [communityGroups, setCommunityGroups] = useState([
    {
      id: '1',
      title: 'Prayer and Focus',
      theme_tags: ['prayer', 'meditation', 'focus'],
      members: 42,
      is_public: true,
      is_anonymous: false
    },
    {
      id: '2',
      title: 'Career vs. Faith',
      theme_tags: ['work', 'purpose', 'balance'],
      members: 28,
      is_public: true,
      is_anonymous: true
    }
  ]);

  const addEntry = (entry) => {
    const newEntry = {
      id: Date.now().toString(),
      ...entry,
      date: format(new Date(), 'yyyy-MM-dd'),
      created_at: new Date()
    };
    setEntries(prev => [newEntry, ...prev]);
    return newEntry;
  };

  const toggleEchoSaved = (echoId) => {
    setEchoes(prev => prev.map(echo => 
      echo.id === echoId ? { ...echo, saved: !echo.saved } : echo
    ));
  };

  const getSavedEchoes = () => {
    return echoes.filter(echo => echo.saved);
  };

  const getActiveJourney = () => {
    return journeys.find(journey => journey.is_active);
  };

  const value = {
    entries,
    echoes,
    journeys,
    communityGroups,
    addEntry,
    toggleEchoSaved,
    getSavedEchoes,
    getActiveJourney,
    setEntries,
    setEchoes,
    setJourneys,
    setCommunityGroups
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};