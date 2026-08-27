import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // in milliseconds
  label: string;
  icon?: React.ReactNode;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '+',
  prefix = '',
  duration = 2000,
  label,
  icon
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, value, duration]);

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
      {/* Background soft glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {icon && (
        <div className="mb-3 p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
          {icon}
        </div>
      )}
      
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono tracking-tight text-white mb-2 flex items-center">
        <span className="text-cyan-400">{prefix}</span>
        <span>{count}</span>
        <span className="text-purple-400">{suffix}</span>
      </div>

      <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide uppercase font-mono text-center">
        {label}
      </p>
    </div>
  );
};
