import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Server, Database, 
  Cpu, Wrench, Search, Layers, Shield, Cloud 
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import { SkillsUniverseCanvas } from '../components/3d/SkillsUniverseCanvas';
import { soundFx } from '../audio/soundEffects';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const skills = portfolioConfig.skills;

  const categories = [
    'All',
    'Programming',
    'Frontend',
    'Backend',
    'Database',
    'Data & AI',
    'Cybersecurity',
    'DevOps & Cloud',
    'Tools'
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    Programming: <Code2 className="w-4 h-4 text-cyan-400" />,
    Frontend: <Layout className="w-4 h-4 text-sky-400" />,
    Backend: <Server className="w-4 h-4 text-emerald-400" />,
    Database: <Database className="w-4 h-4 text-blue-400" />,
    'Data & AI': <Cpu className="w-4 h-4 text-purple-400" />,
    Cybersecurity: <Shield className="w-4 h-4 text-rose-400" />,
    'DevOps & Cloud': <Cloud className="w-4 h-4 text-amber-400" />,
    Tools: <Wrench className="w-4 h-4 text-teal-400" />
  };

  const filteredSkills = skills.filter((s) => {
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pt-8 sm:pt-12">
      {/* HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          Page 03 // Interactive Technology Matrix
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          3D Skills <span className="text-gradient-cyan-purple">Universe</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
          Explore my technical ecosystem as an interconnected 3D cosmos. Hover or orbit to inspect language proficiency, architectural domains, and related production projects.
        </p>
      </section>

      {/* 3D SKILLS UNIVERSE CANVAS */}
      <section className="relative">
        <SkillsUniverseCanvas activeCategory={selectedCategory} />
      </section>

      {/* CATEGORY SELECTOR & FILTER BAR */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCategory(cat);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {cat !== 'All' && categoryIcons[cat]}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500/50 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none backdrop-blur-md transition-colors"
            />
          </div>
        </div>

        {/* DETAILED SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header with category and level */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                      {categoryIcons[skill.category] || <Code2 className="w-4 h-4 text-cyan-400" />}
                    </span>
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-300 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden mb-3.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Related Projects */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{skill.experienceYears} Years Exp</span>
                {skill.relatedProjects.length > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="text-slate-500">Used in:</span>
                    {skill.relatedProjects.slice(0, 2).map((p) => (
                      <span key={p} className="text-cyan-400 hover:underline">
                        #{p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
