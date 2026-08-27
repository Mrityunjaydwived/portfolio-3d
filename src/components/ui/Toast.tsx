import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}

let toastListener: ((toast: ToastMessage) => void) | null = null;

export const showToast = (title: string, message?: string, type: 'success' | 'error' | 'info' = 'success') => {
  if (toastListener) {
    toastListener({
      id: Math.random().toString(36).substring(2, 9),
      type,
      title,
      message
    });
  }
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    toastListener = (newToast: ToastMessage) => {
      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 4000);
    };

    return () => {
      toastListener = null;
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
          error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
          info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
        };

        const borders = {
          success: 'border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)]',
          error: 'border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.25)]',
          info: 'border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
        };

        return (
          <div
            key={toast.id}
            className={`
              pointer-events-auto flex items-start gap-3 p-4 rounded-xl
              bg-slate-950/90 backdrop-blur-xl border ${borders[toast.type]}
              text-slate-100 animate-slide-in transition-all duration-300
            `}
          >
            {icons[toast.type]}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white tracking-wide font-display">{toast.title}</h4>
              {toast.message && (
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-sans">{toast.message}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
