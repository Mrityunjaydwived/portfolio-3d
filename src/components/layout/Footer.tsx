import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Terminal, Mail, ArrowUp, Copy, Check 
} from 'lucide-react';
import { portfolioConfig } from '../../config/portfolioData';
import { soundFx } from '../../audio/soundEffects';
import { showToast } from '../ui/Toast';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon, FacebookIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.personal.email);
    setCopied(true);
    soundFx.playSuccess();
    showToast('Email Copied to Clipboard', portfolioConfig.personal.email, 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl z-20">
      {/* Laser Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-900">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {portfolioConfig.personal.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-sans">
              {portfolioConfig.personal.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              {portfolioConfig.personal.availability}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm font-mono text-slate-400">
              <li>
                <NavLink to="/about" className="hover:text-cyan-400 transition-colors">
                  01 // About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="hover:text-cyan-400 transition-colors">
                  02 // 3D Skills Universe
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-cyan-400 transition-colors">
                  03 // Featured Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="hover:text-cyan-400 transition-colors">
                  04 // Career Journey
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-cyan-400 transition-colors">
                  05 // Services & Offerings
                </NavLink>
              </li>
              <li>
                <NavLink to="/github" className="hover:text-cyan-400 transition-colors">
                  06 // GitHub Universe
                </NavLink>
              </li>
              <li>
                <NavLink to="/leetcode" className="hover:text-cyan-400 transition-colors">
                  07 // LeetCode Engine
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className="hover:text-cyan-400 transition-colors">
                  08 // Interactive Resume
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Direct Communication
            </h4>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono w-full"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span className="truncate">{portfolioConfig.personal.email}</span>
            </button>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={portfolioConfig.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 text-slate-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter / X (@mrityunjayvl1)"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 text-slate-400 hover:text-white transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram (@mrityunjaydwivedi01)"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-rose-500/40 text-slate-400 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube (@MrMrityunjayDwivedi)"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioConfig.personal.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook (Mrityunjay Dwivedi)"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 text-slate-400 hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <NavLink
                to="/contact"
                title="Contact Page"
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {portfolioConfig.personal.name}. Built with React, Three.js & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyan-400/80">LATENCY: &lt; 15ms</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-cyan-400 transition-colors"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
