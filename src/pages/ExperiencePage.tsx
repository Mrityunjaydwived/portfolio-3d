import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  Award, Terminal, ChevronRight 
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import { NeonBadge } from '../components/ui/NeonBadge';

export const ExperiencePage: React.FC = () => {
  const experiences = portfolioConfig.experience;

  return (
    <div className="space-y-16 sm:space-y-24 pt-8 sm:pt-12">
      {/* HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          Page 05 // Professional Trajectory & Track Record
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Professional <span className="text-gradient-cyan-purple">Experience</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
          A track record of engineering high-impact systems, leading cross-functional developer initiatives, and scaling cloud infrastructure.
        </p>
      </section>

      {/* CINEMATIC VERTICAL TIMELINE */}
      <section className="relative border-l-2 border-slate-800 ml-4 sm:ml-10 pl-6 sm:pl-12 space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Glowing 3D Node Marker */}
            <div className="absolute -left-[35px] sm:-left-[59px] top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.8)] group-hover:scale-125 group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 group-hover:bg-purple-300 transition-colors" />
            </div>

            {/* Experience Panel */}
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl group-hover:border-cyan-500/50 group-hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)] transition-all duration-300 space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {exp.company}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {exp.location}
                  </span>
                  <NeonBadge variant="emerald" size="sm">
                    {exp.type}
                  </NeonBadge>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" /> Key Responsibilities & Leadership
                </h4>
                <ul className="space-y-2 text-sm text-slate-300 font-sans">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Major Achievements */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-emerald-500/20 space-y-2.5">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <Award className="w-4 h-4 text-emerald-400" /> Major Quantified Achievements
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-sans">
                  {exp.achievements.map((a, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <NeonBadge key={t} variant="cyan" size="sm">
                      {t}
                    </NeonBadge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
