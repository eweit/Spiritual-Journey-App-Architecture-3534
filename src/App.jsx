import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import Echoes from './pages/Echoes';
import Journey from './pages/Journey';
import Collection from './pages/Collection';
import Hub from './pages/Hub';
import Community from './pages/Community';
import Insights from './pages/Insights';
import LanguageSwitcher from './components/LanguageSwitcher';
import FeedbackButton from './components/FeedbackButton';
import { UserProvider } from './context/UserContext';
import { DataProvider } from './context/DataContext';
import { LanguageProvider } from './context/LanguageContext';
import questConfig from './config/questConfig';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center card w-80"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <h1 className="font-cardo text-4xl text-gradient mb-3">Ilfa</h1>
          <p className="text-muted text-lg">Preparing your spiritual journey...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
      themeConfig={{
        primaryColor: questConfig.PRIMARY_COLOR,
        secondaryColor: '#FCD34D',
        backgroundColor: '#0A0A0A',
        borderRadius: '25px'
      }}
    >
      <UserProvider>
        <DataProvider>
          <LanguageProvider>
            <Router>
              <div className="min-h-screen" style={{ background: '#0A0A0A' }}>
                <LanguageSwitcher />
                <Navigation />
                <FeedbackButton />
                <main className="page-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/echoes" element={<Echoes />} />
                    <Route path="/journey" element={<Journey />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/hub" element={<Hub />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/insights" element={<Insights />} />
                  </Routes>
                </main>
              </div>
            </Router>
          </LanguageProvider>
        </DataProvider>
      </UserProvider>
    </QuestProvider>
  );
}

export default App;