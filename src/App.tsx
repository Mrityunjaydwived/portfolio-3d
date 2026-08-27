import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { BackgroundParticles } from './components/layout/BackgroundParticles';
import { CommandPalette } from './components/layout/CommandPalette';
import { ToastContainer } from './components/ui/Toast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ServicesPage } from './pages/ServicesPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { GithubPage } from './pages/GithubPage';
import { LeetCodePage } from './pages/LeetCodePage';

// Scroll to top helper on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animated route transitions container
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/github" element={<GithubPage />} />
          <Route path="/leetcode" element={<LeetCodePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      
      <div className="relative min-h-screen flex flex-col bg-[#050811] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Custom Glow Cursor (desktop) */}
        <CustomCursor />

        {/* Ambient 3D Particle Background & Cyber Grid */}
        <BackgroundParticles />
        <div className="fixed inset-0 cyber-grid opacity-40 pointer-events-none z-0" />

        {/* Fixed Glassmorphism Navbar */}
        <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pb-20 flex flex-col">
          <AnimatedRoutes />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Command Palette (Ctrl+K) */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />

        {/* Interactive Toast Notifications */}
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
