import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'emerald' | 'blue' | 'none';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  hoverEffect = true,
  onClick
}) => {
  const glowStyles = {
    cyan: 'border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    violet: 'border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    emerald: 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    blue: 'border-sky-500/30 shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:border-sky-400/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]',
    none: 'border-slate-800/80 hover:border-slate-700'
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border 
        transition-all duration-300
        ${glowStyles[glowColor]}
        ${hoverEffect ? 'hover:-translate-y-1 hover:bg-slate-900/80 cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Corner High-Tech Accents */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg pointer-events-none" />
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-purple-400/60 rounded-br-lg pointer-events-none" />
      {children}
    </div>
  );
};
