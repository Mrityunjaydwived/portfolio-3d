import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Code2, GraduationCap, Users, Kanban, 
  Sparkles, Award, Compass, Heart, Terminal, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import { StatCounter } from '../components/ui/StatCounter';
import { NeonBadge } from '../components/ui/NeonBadge';

export const AboutPage: React.FC = () => {
  const { personal, whatIBring, milestones } = portfolioConfig;

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
    Code2: <Code2 className="w-6 h-6 text-purple-400" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-400" />,
    Users: <Users className="w-6 h-6 text-blue-400" />,
    Kanban: <Kanban className="w-6 h-6 text-amber-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-rose-400" />,
  };

  return (
    <div className="space-y-24 sm:space-y-32 pt-8 sm:pt-12">
      {/* PAGE HEADER & HIGH-IMPACT TECHNICAL NARRATIVE */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          Page 02 // Engineering Architecture & Technical Identity
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
            Architecting Intelligent, Resilient & <span className="text-gradient-cyan-purple">Fortified Systems</span>
          </h1>

          {/* Core Technical Pillars Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              ⚡ MERN Stack Developer
            </span>
            <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold">
              🧠 AI / ML & Deep Learning
            </span>
            <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold">
              🛡️ Cybersecurity Engineer
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
              📊 Data Analyst
            </span>
          </div>
        </div>

        {/* Technical Manifesto */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl space-y-4 shadow-xl">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans font-medium">
            I am a multi-disciplinary Computer Science Engineer, <strong className="text-white">Gold Medal Winner (8.66 CGPA)</strong>, and former <strong className="text-cyan-300">UG-Inbound Research Scholar at IIT Indore (Jan 2025 – May 2025, Top 5 Selection)</strong>.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            My engineering capability bridges <strong className="text-cyan-300">high-throughput MERN stack distributed platforms</strong> (Node.js microservices, WebRTC peer streams, reactive React frontends) with <strong className="text-purple-300">state-of-the-art Deep Learning neural models</strong> (PyTorch CNNs achieving 97.92% train accuracy in skin cancer classification). Concurrently, I fortify every deployment with <strong className="text-rose-300">proactive Cybersecurity defenses</strong> (packet inspection, penetration testing, zero-trust cryptographic protocols) and extract predictive intelligence through <strong className="text-emerald-300">Data Analytics</strong>.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm font-mono border-t border-slate-800/80 pt-3">
            &gt; Core Mantra: Computational rigor, zero-bottleneck architecture, defensive engineering, and tangible real-world impact.
          </p>
        </div>
      </section>

      {/* ANIMATED STATISTICS ROW */}
      <section>
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
            icon={<Code2 className="w-6 h-6" />}
          />
          <StatCounter
            value={personal.stats.yearsExperience}
            suffix=" Years"
            label="Years of Experience"
            icon={<Award className="w-6 h-6" />}
          />
          <StatCounter
            value={personal.stats.studentsClientsTrained}
            suffix="+"
            label="Students / Clients Trained"
            icon={<GraduationCap className="w-6 h-6" />}
          />
        </div>
      </section>

      {/* WHAT I BRING SECTION */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            What I Bring
          </h2>
          <p className="text-slate-400 text-sm font-sans">
            A balanced synthesis of computational rigor, product vision, and empathetic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIBring.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 w-fit mb-5 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                  {iconMap[card.icon] || <Cpu className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {card.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {card.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3D ANIMATED TIMELINE: CAREER & EDUCATION MILESTONES */}
      <section className="space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            Chronology & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Milestones & Career Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Glowing Node on Timeline */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-cyan-300" />
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl group-hover:border-cyan-500/40 group-hover:bg-slate-900/80 transition-all duration-300 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold">
                    {m.year}
                  </span>
                  <NeonBadge variant="violet" size="sm">
                    {m.tag}
                  </NeonBadge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {m.title}
                  </h3>
                  <h4 className="text-sm font-mono text-cyan-400/90 font-medium">
                    {m.subtitle}
                  </h4>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY, GOALS & INTERESTS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Engineering Philosophy */}
        <div className="p-7 rounded-3xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-xl space-y-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 w-fit">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Engineering Philosophy
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans italic border-l-2 border-cyan-400 pl-3">
            "{personal.philosophy}"
          </p>
        </div>

        {/* Future Goals */}
        <div className="p-7 rounded-3xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-xl space-y-4">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/30 w-fit">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Mission & Goals
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {personal.goals}
          </p>
        </div>

        {/* Tech Interests */}
        <div className="p-7 rounded-3xl bg-slate-900/60 border border-emerald-500/20 backdrop-blur-xl space-y-4">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 w-fit">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Passions & Explorations
          </h3>
          <ul className="space-y-2 text-xs font-mono text-slate-300">
            {personal.interests.map((int, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{int}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
