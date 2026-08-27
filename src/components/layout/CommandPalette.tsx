import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ArrowRight, FileText, Code2, Cpu, 
  Layers, Briefcase, Mail, ExternalLink, X, GitBranch, Flame 
} from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioData';
import { soundFx } from '../../audio/soundEffects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Navigation Items
  const pages = [
    { title: 'Home', subtitle: 'Hero, 3D Workstation & Overview', path: '/', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { title: 'About Me', subtitle: 'Bio, Milestones & Core Strengths', path: '/about', icon: <Cpu className="w-4 h-4 text-purple-400" /> },
    { title: 'Skills & Tech', subtitle: '3D Skills Universe & Matrix', path: '/skills', icon: <Layers className="w-4 h-4 text-blue-400" /> },
    { title: 'Projects', subtitle: 'Featured 3D Case Studies', path: '/projects', icon: <Briefcase className="w-4 h-4 text-emerald-400" /> },
    { title: 'Experience', subtitle: 'Career Journey & Roles', path: '/experience', icon: <Briefcase className="w-4 h-4 text-amber-400" /> },
    { title: 'Services', subtitle: 'Engineering & Consulting Offerings', path: '/services', icon: <Layers className="w-4 h-4 text-rose-400" /> },
    { title: 'Resume', subtitle: 'Interactive CV & PDF Download', path: '/resume', icon: <FileText className="w-4 h-4 text-cyan-400" /> },
    { title: 'GitHub Universe', subtitle: 'Repositories, Commits & Day-by-Day Strikes', path: '/github', icon: <GitBranch className="w-4 h-4 text-emerald-400" /> },
    { title: 'LeetCode Profile', subtitle: '450+ Solved, Topic Mastery & Submissions', path: '/leetcode', icon: <Flame className="w-4 h-4 text-amber-400" /> },
    { title: 'Contact', subtitle: '3D Globe & Direct Messaging Form', path: '/contact', icon: <Mail className="w-4 h-4 text-emerald-400" /> },
  ];

  // Project quick entries
  const projectItems = portfolioConfig.projects.map((p) => ({
    title: p.title,
    subtitle: `${p.category} // ${p.tagline}`,
    path: '/projects',
    icon: <Briefcase className="w-4 h-4 text-cyan-300" />
  }));

  // Skills quick entries
  const skillItems = portfolioConfig.skills.slice(0, 10).map((s) => ({
    title: s.name,
    subtitle: `${s.category} Skill (${s.level}% proficiency)`,
    path: '/skills',
    icon: <Layers className="w-4 h-4 text-purple-300" />
  }));

  const allItems = [...pages, ...projectItems, ...skillItems];

  const filteredItems = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
        soundFx.playHover();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
        soundFx.playHover();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          soundFx.playClick();
          navigate(filteredItems[selectedIndex].path);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-xl bg-slate-900/95 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden z-10"
        >
          {/* Input Header */}
          <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-950/60">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Search pages, projects, skills, or actions..."
              className="w-full bg-transparent text-white placeholder-slate-500 text-sm font-mono focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono border border-slate-700">
              ESC
            </kbd>
          </div>

          {/* Result List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-slate-500 font-mono text-xs">
                No matching results found for "{query}".
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      navigate(item.path);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'bg-cyan-500/20 text-white border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="font-display font-medium text-sm text-white truncate">
                          {item.title}
                        </div>
                        <div className="font-mono text-xs text-slate-400 truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 text-cyan-400 transition-transform ${
                        isSelected ? 'translate-x-1 opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                );
              })
            )}
          </div>

          {/* Quick Shortcuts Footer */}
          <div className="p-3 border-t border-slate-800/80 bg-slate-950/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={portfolioConfig.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
