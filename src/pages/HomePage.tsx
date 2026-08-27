import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Download, Mail, Terminal, 
  Cpu, Layers, ExternalLink, Code2, CheckCircle2, Shield, TrendingUp 
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import { HeroWorkstationCanvas } from '../components/3d/HeroWorkstationCanvas';
import { soundFx } from '../audio/soundEffects';
import { StatCounter } from '../components/ui/StatCounter';
import { NeonBadge } from '../components/ui/NeonBadge';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const personal = portfolioConfig.personal;

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" />
              <span className="font-semibold tracking-wide uppercase">{personal.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Welcome to my digital workspace
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
                Hi, I'm <span className="text-gradient-cyan-purple">{personal.name}</span>
              </h1>
              <p className="text-base sm:text-lg font-mono text-slate-300 font-medium pt-1">
                MERN Stack Developer <span className="text-cyan-400">|</span> AI/ML Engineer <span className="text-purple-400">|</span> Cybersecurity Engineer <span className="text-emerald-400">|</span> Data Analyst
              </p>
            </div>

            {/* Introduction Quote */}
            <p className="text-slate-300/95 text-base sm:text-lg leading-relaxed font-sans max-w-xl">
              {personal.tagline}
            </p>

            {/* Key Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['MERN Stack', 'React.js', 'Node.js', 'PyTorch', 'CNNs', 'Cybersecurity', 'Nmap', 'Pandas', 'Data Analysis', 'DSA'].map((tech) => (
                <NeonBadge key={tech} variant="cyan" size="sm">
                  {tech}
                </NeonBadge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary 1: View My Work */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  navigate('/projects');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-sm font-bold shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Primary 2: Let's Connect */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  navigate('/contact');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white font-mono text-sm font-semibold backdrop-blur-md transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </button>

              {/* Secondary: Download Resume */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  navigate('/resume');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-slate-400 hover:text-cyan-300 font-mono text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Guarantee / Values */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-400 border-t border-slate-900">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clean Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> High Performance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> User Centered
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Laptop / Workstation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/15 to-purple-600/15 rounded-3xl blur-2xl pointer-events-none" />
            <HeroWorkstationCanvas />
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS SECTION */}
      <section className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <StatCounter
            value={personal.stats.projectsCompleted}
            suffix=""
            label="Projects Completed"
            icon={<Cpu className="w-6 h-6" />}
          />
          <StatCounter
            value={personal.stats.technologiesCount}
            suffix="+"
            label="Technologies Mastered"
            icon={<Layers className="w-6 h-6" />}
          />
          <StatCounter
            value={personal.stats.yearsExperience}
            suffix=" Years"
            label="Engineering Experience"
            icon={<Terminal className="w-6 h-6" />}
          />
          <StatCounter
            value={personal.stats.studentsClientsTrained}
            suffix="+"
            label="Students & Clients Trained"
            icon={<Code2 className="w-6 h-6" />}
          />
        </div>
      </section>

      {/* THREE PILLARS / HIGHLIGHTS PREVIEW */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              01 // Core Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
              Engineering with Scalability & Precision
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              navigate('/skills');
            }}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 self-start sm:self-auto group font-medium"
          >
            <span>Explore 3D Skills Universe</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: MERN */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 group">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
              MERN Stack Architecture
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Reactive SPAs, Node/Express microservices, MongoDB schemas, and low-latency WebRTC video & Socket.io channels.
            </p>
          </div>

          {/* Card 2: AI / ML */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 group">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-purple-300 transition-colors">
              AI / ML & Deep Learning
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Training CNNs in PyTorch (97.92% accuracy on melanoma detection) with Grad-CAM visual heat maps and Google Gemini APIs.
            </p>
          </div>

          {/* Card 3: Cybersecurity */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-rose-500/20 backdrop-blur-xl hover:border-rose-400/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] transition-all duration-300 group">
            <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-rose-300 transition-colors">
              Cybersecurity & Defense
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Network vulnerability scanning, Wireshark packet inspection, Nmap reconnaissance, OWASP Top 10 mitigation & zero-trust auth.
            </p>
          </div>

          {/* Card 4: Data Analytics */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-emerald-500/20 backdrop-blur-xl hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 group">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-emerald-300 transition-colors">
              Data Analytics & Insights
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Transforming raw data into predictive insights, automated ETL pipelines, exploratory data analysis (EDA) with Pandas & SQL.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED WORK TEASER CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 space-y-2 max-w-xl">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            Ready to dive deeper?
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Explore {portfolioConfig.projects.length} Real-World Case Studies
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            From high-throughput event streaming engines to real-time AI vision platforms and 3D graphics tools.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <button
            onClick={() => {
              soundFx.playClick();
              navigate('/projects');
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
          >
            <span>Explore All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
