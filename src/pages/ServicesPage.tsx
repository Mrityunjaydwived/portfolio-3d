import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Layers, 
  MessageSquare 
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import { ServiceCard3D } from '../components/3d/ServiceCard3D';
import { NeonBadge } from '../components/ui/NeonBadge';
import { soundFx } from '../audio/soundEffects';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const services = portfolioConfig.services;

  const colorMap: Record<string, string> = {
    software: '#00f0ff',
    web: '#38bdf8',
    python: '#8b5cf6',
    data: '#a855f7',
    training: '#10b981',
    consulting: '#f59e0b',
  };

  return (
    <div className="space-y-16 sm:space-y-24 pt-8 sm:pt-12">
      {/* HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          Page 06 // Capabilities & Service Solutions
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          What I <span className="text-gradient-cyan-purple">Offer</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
          End-to-end technical execution tailored for startups, modern engineering teams, and enterprises seeking high performance, clean architecture, and rapid deployment.
        </p>
      </section>

      {/* 6 SERVICES GRID WITH 3D CANVAS ICONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <motion.div
            key={svc.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_10px_35px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-5">
              {/* Header with 3D Geometric Icon */}
              <div className="flex items-center justify-between">
                <ServiceCard3D
                  type={svc.iconType}
                  color={colorMap[svc.iconType] || '#00f0ff'}
                />
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Tier 0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1 font-medium">
                  {svc.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-sans mt-3">
                  {svc.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Key Deliverables
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {svc.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {svc.technologies.map((t) => (
                  <NeonBadge key={t} variant="cyan" size="sm">
                    {t}
                  </NeonBadge>
                ))}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                {svc.idealFor}
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  navigate('/contact');
                }}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-cyan-400 hover:text-white transition-colors"
                title="Inquire about this service"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ENGAGEMENT PROCESS BANNER */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-purple-500/30 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              Workflow & SLA
            </span>
            <h2 className="text-3xl font-bold text-white font-display">
              How We Collaborate
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-2xl font-bold font-mono text-cyan-400">01</span>
              <h4 className="text-base font-bold text-white font-display">Discovery & RFC</h4>
              <p className="text-xs text-slate-300 font-sans">
                Aligning on system requirements, user expectations, and architectural blueprints.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-2xl font-bold font-mono text-purple-400">02</span>
              <h4 className="text-base font-bold text-white font-display">Agile Iteration</h4>
              <p className="text-xs text-slate-300 font-sans">
                Rapid bi-weekly sprint deliverables with active demo reviews and test suites.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-2xl font-bold font-mono text-emerald-400">03</span>
              <h4 className="text-base font-bold text-white font-display">CI/CD & Hardening</h4>
              <p className="text-xs text-slate-300 font-sans">
                Security vulnerability audits, stress benchmarking, and containerized deployment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-2xl font-bold font-mono text-amber-400">04</span>
              <h4 className="text-base font-bold text-white font-display">Support & Scale</h4>
              <p className="text-xs text-slate-300 font-sans">
                Comprehensive documentation, telemetry monitoring, and knowledge handoff.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                soundFx.playClick();
                navigate('/contact');
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-mono text-sm font-bold shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Project Vision</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
