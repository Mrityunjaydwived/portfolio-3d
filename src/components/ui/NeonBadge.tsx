import React from 'react';

interface NeonBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'violet' | 'emerald' | 'amber' | 'blue' | 'rose' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export const NeonBadge: React.FC<NeonBadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.35)]',
    violet: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.35)]',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_12px_rgba(245,158,11,0.35)]',
    blue: 'bg-sky-500/10 text-sky-300 border-sky-500/30 hover:border-sky-400 hover:shadow-[0_0_12px_rgba(14,165,233,0.35)]',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/30 hover:border-rose-400 hover:shadow-[0_0_12px_rgba(244,63,94,0.35)]',
    default: 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-500'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium'
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full border backdrop-blur-md
        transition-all duration-200 font-mono select-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
