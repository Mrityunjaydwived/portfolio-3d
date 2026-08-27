import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Cpu } from 'lucide-react';
import type { ProjectItem } from '../../config/portfolioData';
import { NeonBadge } from '../ui/NeonBadge';
import { GithubIcon } from '../ui/Icons';
import { soundFx } from '../../audio/soundEffects';

interface ProjectCardTiltProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCardTilt: React.FC<ProjectCardTiltProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const rotY = ((x - centerX) / centerX) * 9;

    setRotateX(rotX);
    setRotateY(rotY);

    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        soundFx.playClick();
        onSelect(project);
      }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
      }}
      className={`
        relative rounded-3xl bg-slate-900/75 border backdrop-blur-xl p-6 sm:p-7
        transition-all duration-200 cursor-pointer overflow-hidden group flex flex-col justify-between
        ${isHovered 
          ? 'border-cyan-400/60 shadow-[0_20px_40px_-15px_rgba(6,182,212,0.35)]' 
          : 'border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'}
      `}
    >
      {/* Glare Lighting Layer */}
      {isHovered && (
        <div
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12) 0%, transparent 65%)`,
          }}
          className="absolute inset-0 pointer-events-none z-20"
        />
      )}

      {/* Cybernetic Header Preview */}
      <div className="relative mb-5">
        <div className="h-44 sm:h-48 w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 overflow-hidden flex flex-col justify-between p-4 relative group-hover:border-cyan-500/40 transition-colors">
          {/* Futuristic Grid Texture */}
          <div className="absolute inset-0 cyber-grid-dense opacity-30 pointer-events-none" />

          {/* Top Status & Category */}
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
              {project.category}
            </span>
            <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Center Hologram Icon & Title */}
          <div className="flex flex-col items-center justify-center my-auto z-10">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
              <Cpu className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-slate-400 mt-2 tracking-wider">
              {project.metrics?.[0]?.label}: <strong className="text-cyan-300">{project.metrics?.[0]?.value}</strong>
            </span>
          </div>

          {/* Bottom Live Links */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 z-10">
            <span className="text-[11px] text-purple-300 font-medium">CLICK FOR DEEP DIVE</span>
            <span className="text-slate-500">ID // #{project.id}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs text-cyan-400/90 font-mono mt-0.5 font-medium">
            {project.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-300/90 mt-2.5 line-clamp-3 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Technology Badges */}
        <div className="pt-3 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <NeonBadge key={tech} variant="cyan" size="sm">
                {tech}
              </NeonBadge>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono text-slate-400 self-center">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                soundFx.playClick();
                onSelect(project);
              }}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group-hover:underline underline-offset-4"
            >
              Case Study Details →
            </button>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFx.playClick();
                }}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
                title="View Source Code"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFx.playClick();
                }}
                className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-cyan-200 transition-colors"
                title="Live Interactive Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
