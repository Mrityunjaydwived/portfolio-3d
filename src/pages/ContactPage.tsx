import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Send, MapPin, 
  MessageSquare, Check, Copy, Terminal, 
  CheckCircle2, Clock, ShieldCheck 
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioData';
import { ContactGlobeCanvas } from '../components/3d/ContactGlobeCanvas';
import { soundFx } from '../audio/soundEffects';
import { showToast } from '../components/ui/Toast';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/ui/Icons';

export const ContactPage: React.FC = () => {
  const { contactInfo, personal } = portfolioConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.directEmail);
    setCopiedEmail(true);
    soundFx.playSuccess();
    showToast('Direct Email Copied', contactInfo.directEmail, 'success');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Missing Fields', 'Please fill out your name, email, and message.', 'error');
      return;
    }

    setIsSubmitting(true);
    soundFx.playClick();

    try {
      const response = await fetch('https://formsubmit.co/ajax/dwivedibandhavesh@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject || `Portfolio Transmission from ${formData.name}`,
          message: formData.message,
          _captcha: "false",
          _template: "table"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        soundFx.playSuccess();
        showToast('Email Transmitted Successfully!', 'Your message has been delivered directly to dwivedibandhavesh@gmail.com.', 'success');

        // Confetti celebration
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#38bdf8', '#8b5cf6', '#a855f7', '#10b981']
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Server returned an error status');
      }
    } catch {
      // Fallback: Open mailto client directly with pre-filled content so message is never lost
      window.location.href = `mailto:dwivedibandhavesh@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

      setIsSubmitted(true);
      showToast('Opened Mail Client', 'Your email client has been opened with your pre-filled message for dwivedibandhavesh@gmail.com.', 'success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pt-8 sm:pt-12">
      {/* HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          Page 08 // Global Telemetry & Direct Messaging
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
          Let's Build Something <span className="text-gradient-cyan-purple">Amazing Together.</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
          {contactInfo.subtitle}
        </p>
      </section>

      {/* TWO COLUMN INTERACTIVE SECTION: FORM + 3D GLOBE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form & Channels */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Contact Form */}
          <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent" />

            <h3 className="text-xl font-bold text-white font-display mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" /> Send a Direct Message
            </h3>
            <p className="text-xs font-mono text-slate-400 mb-6">
              Encrypted channel // Direct to developer terminal
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white font-display">Transmission Confirmed!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
                  Your message has been delivered to my personal inbox. Expect a response within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project scope, goals, timeline, or technical requirements..."
                    required
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-sm font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Encrypting & Transmitting...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Box */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Primary Email</span>
                <span className="text-sm font-mono text-cyan-300 font-semibold truncate block">
                  {contactInfo.directEmail}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>

            {/* Location Box */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Base Location</span>
                <span className="text-sm font-mono text-slate-200 font-semibold">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
              Connect Across Platforms
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 font-mono text-xs group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 text-cyan-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-slate-200">GitHub</span>
                  <span className="text-[10px] text-slate-400 truncate block">mrityunjaydwived</span>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 font-mono text-xs group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 text-purple-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-slate-200">LinkedIn</span>
                  <span className="text-[10px] text-slate-400 truncate block">mrityunjaydwivedi09</span>
                </div>
              </a>

              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 font-mono text-xs group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 text-sky-400 group-hover:scale-110 transition-transform">
                  <TwitterIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-slate-200">Twitter / X</span>
                  <span className="text-[10px] text-slate-400 truncate block">@mrityunjayvl1</span>
                </div>
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 font-mono text-xs group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 text-rose-400 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-slate-200">Instagram</span>
                  <span className="text-[10px] text-slate-400 truncate block">@mrityunjaydwivedi01</span>
                </div>
              </a>

              <a
                href={personal.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-red-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 font-mono text-xs group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 text-red-400 group-hover:scale-110 transition-transform">
                  <YoutubeIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-slate-200">YouTube</span>
                  <span className="text-[10px] text-slate-400 truncate block">@MrMrityunjayDwivedi</span>
                </div>
              </a>

              <a
                href={personal.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-2.5 font-mono text-xs group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 text-blue-400 group-hover:scale-110 transition-transform">
                  <FacebookIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-slate-200">Facebook</span>
                  <span className="text-[10px] text-slate-400 truncate block">Mrityunjay Dwivedi</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Globe & Telemetry Mesh */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,1)]" />
                <span className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                  Global Connection Telemetry
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                ACTIVE ORBITS // 3D
              </span>
            </div>

            <ContactGlobeCanvas />

            {/* Telemetry Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Response Time</span>
                <span className="text-sm font-mono text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5" /> &lt; 24 Hours
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Remote Friendly</span>
                <span className="text-sm font-mono text-cyan-400 font-bold flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Global Timezones
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
