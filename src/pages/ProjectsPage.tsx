import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Filter 
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import type { ProjectItem } from '../config/portfolioData';
import { ProjectCardTilt } from '../components/3d/ProjectCardTilt';
import { ProjectModal } from '../components/ui/ProjectModal';
import { soundFx } from '../audio/soundEffects';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const projects = portfolioConfig.projects;

  const filterTabs = [
    'All',
    'Web',
    'Software',
    'Python',
    'Data',
    'AI',
    'IoT',
    'Other'
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <div className="space-y-16 sm:space-y-24 pt-8 sm:pt-12">
      {/* HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          Page 04 // Production Systems & Software Showcase
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Featured <span className="text-gradient-cyan-purple">Projects</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
          A curated selection of scalable web applications, real-time distributed backends, 3D graphics engines, and machine learning pipelines. Hover cards for 3D parallax or click for deep architectural breakdowns.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {filterTabs.map((tab) => {
          const isActive = selectedFilter === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                soundFx.playClick();
                setSelectedFilter(tab);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </section>

      {/* PROJECTS 3D GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <ProjectCardTilt
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          </motion.div>
        ))}
      </section>

      {/* CASE STUDY MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
