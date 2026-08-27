import React, { useState } from 'react';
import { 
  FileText, Download, Copy, Check, 
  Mail, MapPin, Phone,
  Award, Trophy, ExternalLink
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import { soundFx } from '../audio/soundEffects';
import { showToast } from '../components/ui/Toast';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '../components/ui/Icons';

export const ResumePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { personal, experience, education, certifications, projects, achievements } = portfolioConfig;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  const handleCopyResumeText = () => {
    soundFx.playSuccess();
    const resumeText = `
${personal.name}
Phone: ${personal.phone} | Email: ${personal.email}
LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}
Twitter / X: ${personal.twitter} | Instagram: ${personal.instagram}
YouTube: ${personal.youtube} | Facebook: ${personal.facebook}
Location: ${personal.location}

PROFESSIONAL SUMMARY
${personal.longBio}

EDUCATION
${education
  .map(
    (ed) => `
• ${ed.degree} - ${ed.institution} (${ed.period})
  ${ed.grade}
`
  )
  .join('')}

TECHNICAL SKILLS
• Programming: Python, C/C++, Java, Data Structures and Algorithms (DSA), Agile Methodology
• Application Languages: HTML, CSS, JavaScript, React.js, Node.js, Express.js, SQL, PHP, LaTeX
• Databases & Cloud: MySQL Workbench, XAMPP, Firebase, phpMyAdmin, MongoDB, AWS
• Machine Learning Tools: NumPy, Pandas, Matplotlib, TensorFlow, PyTorch, Seaborn, Gemini API

EXPERIENCE
${experience
  .map(
    (e) => `
${e.role} — ${e.company} (${e.period})
Location: ${e.location}
${e.responsibilities.map((r) => `• ${r}`).join('\n')}
Key Achievements:
${e.achievements.map((a) => `• ${a}`).join('\n')}
`
  )
  .join('\n')}

KEY PROJECTS
${projects
  .map(
    (p) => `
• ${p.title}
  ${p.description}
  Technologies: ${p.technologies.join(', ')}
  Repository: ${p.githubUrl}
`
  )
  .join('\n')}

ACHIEVEMENTS & HONORS
${achievements.map((a) => `• ${a}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    showToast('Resume Copied as Plain Text', 'Ready to paste into job application portals', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pt-8 sm:pt-12">
      {/* HEADER & ACTION TOOLBAR (Hidden in Print) */}
      <section className="no-print space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <FileText className="w-3.5 h-3.5" />
          Page 07 // Curriculum Vitae & Verified Credentials
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Interactive <span className="text-gradient-cyan-purple">Resume</span>
            </h1>
            <p className="text-slate-400 text-sm font-mono mt-1">
              Curated for recruiters, engineering leaders, and admissions committees.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleCopyResumeText}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-mono transition-all"
              title="Copy plain text format"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-mono font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* RESUME PAPER / GLASS CONTAINER */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-2xl p-6 sm:p-12 shadow-2xl space-y-10">
        
        {/* RESUME HEADER */}
        <header className="border-b border-slate-800 pb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                {personal.name}
              </h2>
              <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium mt-1">
                MERN Stack Developer | AI/ML Engineer | Cybersecurity Engineer | Data Analyst
              </p>
              <p className="text-xs font-mono text-purple-300 mt-1">
                UG-Inbound Scholar (8th Sem) @ Indian Institute of Technology (IIT), Indore (Jan 2025 – May 2025)
              </p>
              <p className="text-xs font-mono text-emerald-300 mt-0.5">
                Gold Medalist (8.66 CGPA) @ Government Engineering College, Rewa
              </p>
            </div>

            <div className="text-xs font-mono text-slate-300 space-y-1.5 md:text-right shrink-0">
              <div className="flex items-center md:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${personal.email}`} className="hover:underline text-cyan-300">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-slate-300">
                  linkedin.com/in/mrityunjaydwivedi09
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline text-slate-300">
                  github.com/mrityunjaydwived
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <TwitterIcon className="w-3.5 h-3.5 text-sky-400" />
                <a href={personal.twitter} target="_blank" rel="noreferrer" className="hover:underline text-slate-300">
                  @mrityunjayvl1
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <InstagramIcon className="w-3.5 h-3.5 text-rose-400" />
                <a href={personal.instagram} target="_blank" rel="noreferrer" className="hover:underline text-slate-300">
                  @mrityunjaydwivedi01
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <YoutubeIcon className="w-3.5 h-3.5 text-red-400" />
                <a href={personal.youtube} target="_blank" rel="noreferrer" className="hover:underline text-slate-300">
                  @MrMrityunjayDwivedi
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
        </header>

        {/* EDUCATION TABLE */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Education
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-cyan-300">
                  <th className="py-2.5 px-3 font-semibold">Degree / Certificate</th>
                  <th className="py-2.5 px-3 font-semibold">Institute / Board</th>
                  <th className="py-2.5 px-3 font-semibold">CGPA / Percentage</th>
                  <th className="py-2.5 px-3 font-semibold">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-3 font-medium text-white">B.Tech (Computer Science) - Graduation</td>
                  <td className="py-3 px-3">Rewa Engineering College, Rewa (Gold Medal Winner)</td>
                  <td className="py-3 px-3 font-mono font-bold text-emerald-400">8.66 CGPA</td>
                  <td className="py-3 px-3 font-mono">2021 - 25</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-3 font-medium text-white">Senior Secondary (12th Board)</td>
                  <td className="py-3 px-3">Board of Secondary Education MP</td>
                  <td className="py-3 px-3 font-mono font-bold text-cyan-400">93.60%</td>
                  <td className="py-3 px-3 font-mono">2020 - 21</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-3 font-medium text-white">High School (10th Board)</td>
                  <td className="py-3 px-3">Board of Secondary Education MP</td>
                  <td className="py-3 px-3 font-mono font-bold text-purple-400">94.40%</td>
                  <td className="py-3 px-3 font-mono">2018 - 19</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors bg-purple-500/5">
                  <td className="py-3 px-3 font-medium text-purple-200">UG-Inbound Scholar (8th Semester)</td>
                  <td className="py-3 px-3 text-purple-300">Indian Institute of Technology (IIT), Indore</td>
                  <td className="py-3 px-3 font-mono font-bold text-purple-300">Top 5 Selection</td>
                  <td className="py-3 px-3 font-mono text-purple-300">Jan 2025 - May 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Technical Skills Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-cyan-300 block mb-1">Frontend Engineering:</strong>
              <span className="text-slate-300">React.js, Next.js, TypeScript, Redux Toolkit, Zustand, Axios, TanStack Query, Tailwind CSS, Bootstrap, Material UI, HTML5, CSS3, Antigravity.js</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-emerald-300 block mb-1">Backend & Microservices:</strong>
              <span className="text-slate-300">Node.js, Express.js, FastAPI, Flask, PHP, Apache, Mongoose, Sequelize, Prisma ORM, WebRTC, Socket.io, GraphQL, Apollo Server, JWT, Helmet</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-blue-300 block mb-1">Databases & Vector Storage:</strong>
              <span className="text-slate-300">MongoDB, PostgreSQL, MySQL, Redis, SQLite, Oracle DB, Pinecone, ChromaDB, Milvus, Snowflake, BigQuery, Firebase</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-purple-300 block mb-1">AI / ML & Deep Learning:</strong>
              <span className="text-slate-300">PyTorch, TensorFlow, Keras, Scikit-learn, XGBoost, LightGBM, Hugging Face Transformers, LangChain, OpenAI API, Gemini API, MLflow, Streamlit, SageMaker</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-amber-300 block mb-1">Data Analytics & BI:</strong>
              <span className="text-slate-300">Microsoft Power BI Desktop, Tableau, Microsoft Excel (Modeling), DAX & M, Pandas, NumPy, SciPy, Statsmodels, Matplotlib, Seaborn, Plotly, dbt</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <strong className="text-rose-300 block mb-1">Cybersecurity & DevOps:</strong>
              <span className="text-slate-300">Kali Linux, Metasploit, Burp Suite, Nmap, Wireshark, Snort, Splunk, ELK, Active Directory, AWS, Azure, GCP, Docker, Kubernetes, Terraform, CI/CD</span>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2.5 border-l-2 border-slate-800 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-slate-300 font-sans list-disc list-inside">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Major & Minor Engineering Projects
          </h3>
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-white font-display">{p.title}</h5>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                      {p.category}
                    </span>
                  </div>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">{p.longDescription}</p>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
                  <span className="text-cyan-300 font-semibold">Stack:</span>
                  <span>{p.technologies.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS & AWARDS */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Key Achievements & Academic Honors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {achievements.map((ach, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/50 border border-emerald-500/20 flex items-start gap-2.5">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-sans">{ach}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Certifications & Recognitions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white font-display">{cert.name}</h5>
                  <p className="text-[11px] font-mono text-slate-400">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
