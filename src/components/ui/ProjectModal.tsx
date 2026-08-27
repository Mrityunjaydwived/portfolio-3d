import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Cpu, CheckCircle, Sparkles, Activity } from 'lucide-react';
import type { ProjectItem } from '../../config/portfolioData';
import { NeonBadge } from './NeonBadge';
import { GithubIcon } from './Icons';
import { soundFx } from '../../audio/soundEffects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900/95 border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Project Case Study // {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
            {/* Tagline & Metrics Grid */}
            <div>
              <p className="text-lg text-cyan-300/90 font-medium leading-relaxed">
                {project.tagline}
              </p>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col"
                    >
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-cyan-400" />
                        {m.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-cyan-300 font-mono mt-1">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Deep Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> System Overview & Purpose
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </div>

            {/* System Architecture */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" /> Technical Architecture
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-mono">
                {project.architecture}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Key Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <span className="text-sm text-slate-300 leading-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <NeonBadge key={t} variant="cyan" size="md">
                    {t}
                  </NeonBadge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="p-6 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="text-xs font-mono text-slate-500">
              Interactive 3D Preview Available
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all font-mono text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                Source Code
              </a>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all font-mono text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
