/**
 * Tailwind requires complete, statically-analysable class strings, so accent
 * variants are declared here as full class names rather than interpolated.
 */
export const accents = {
  cyan: {
    text: 'text-cyan-400',
    textSoft: 'text-cyan-300',
    bg: 'bg-cyan-500',
    bgSoft: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    borderHover: 'hover:border-cyan-500/50',
    ring: 'ring-cyan-500/30',
    glow: 'shadow-[0_0_40px_-12px_rgba(6,182,212,0.55)]',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    dot: 'bg-cyan-400',
    chip: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
  violet: {
    text: 'text-violet-400',
    textSoft: 'text-violet-300',
    bg: 'bg-violet-500',
    bgSoft: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    borderHover: 'hover:border-violet-500/50',
    ring: 'ring-violet-500/30',
    glow: 'shadow-[0_0_40px_-12px_rgba(139,92,246,0.55)]',
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
    dot: 'bg-violet-400',
    chip: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  },
  emerald: {
    text: 'text-emerald-400',
    textSoft: 'text-emerald-300',
    bg: 'bg-emerald-500',
    bgSoft: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    borderHover: 'hover:border-emerald-500/50',
    ring: 'ring-emerald-500/30',
    glow: 'shadow-[0_0_40px_-12px_rgba(16,185,129,0.55)]',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    dot: 'bg-emerald-400',
    chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
};

/** Map a project category to an accent key. */
export const categoryAccent = {
  ai: 'cyan',
  backend: 'violet',
  cloud: 'violet',
  security: 'emerald',
  fullstack: 'emerald',
};

export const cx = (...parts) => parts.filter(Boolean).join(' ');
