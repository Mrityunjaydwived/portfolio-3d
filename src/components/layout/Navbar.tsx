import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Volume2, VolumeX, Sparkles, 
  FileText, Search, Terminal
} from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioData';
import { soundFx } from '../../audio/soundEffects';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Services', path: '/services' },
    { name: 'Resume', path: '/resume' },
    { name: 'GitHub', path: '/github' },
    { name: 'LeetCode', path: '/leetcode' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleAudioToggle = () => {
    const unmuted = soundFx.toggleMute();
    setIsMuted(!unmuted);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo / Personal Brand (Shifted to the left with ample room) */}
        <NavLink
          to="/"
          onClick={() => soundFx.playClick()}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-3 group shrink-0 mr-auto lg:mr-4"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
              <Terminal className="w-5 h-5" />
            </div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-base sm:text-lg text-white tracking-wide whitespace-nowrap">
                {portfolioConfig.personal.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            </div>
            <span className="text-[10.5px] font-mono text-cyan-400/90 block -mt-0.5 tracking-wider uppercase whitespace-nowrap">
              MERN • AI/ML • CyberSec • Data Analyst
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-900/60 p-1 xl:p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shrink-0">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className={`relative px-2.5 xl:px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(6,182,212,1)]" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search / Command Palette (Ctrl+K) */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenCommandPalette();
            }}
            onMouseEnter={() => soundFx.playHover()}
            title="Open Command Palette (Ctrl+K)"
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-all duration-200"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => soundFx.playHover()}
            title={isMuted ? 'Enable Sound Effects' : 'Mute Sound Effects'}
            className={`p-2 rounded-xl border transition-all duration-200 ${
              !isMuted
                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                : 'bg-slate-900/80 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Resume CTA Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              navigate('/resume');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6 space-y-3 animate-fade-in shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => soundFx.playClick()}
                  className={`px-4 py-3 rounded-xl text-sm font-mono flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                      : 'bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                </NavLink>
              );
            })}
          </div>

          <div className="flex gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                onOpenCommandPalette();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              Search
            </button>
            <button
              onClick={() => {
                navigate('/resume');
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-semibold"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
