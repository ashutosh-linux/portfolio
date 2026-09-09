import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MapPin, Sparkles, Terminal } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { LinkedinIcon } from './BrandIcons';
import useCountUp from '../hooks/useCountUp';
import { LINKEDIN_URL, profile, stats } from '../data/portfolio';

const marqueeTech = [
  'LangGraph',
  'RAG',
  'FastAPI',
  'React',
  'PyTorch',
  'AWS',
  'Docker',
  'MongoDB',
  'ChromaDB',
  'FAISS',
  'Azure',
  'Node.js',
];

export default function Hero() {
  const scrollTo = (href) => (event) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* ---------------- Left column ---------------- */}
          <div className="min-w-0">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 py-1.5 pr-4 pl-2.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-emerald-200">{profile.status}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-[2.1rem] leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.06]"
            >
              Architecting <span className="text-gradient-ai">Agentic AI</span>, Autonomous
              Workflows &amp; Production Web Systems.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.heroSubtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton
                as="a"
                href="#projects"
                onClick={scrollTo('#projects')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-[#04121a] shadow-[0_10px_40px_-12px_rgba(6,182,212,0.8)] transition-shadow hover:shadow-[0_14px_50px_-10px_rgba(6,182,212,0.95)]"
              >
                Explore Repositories
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
              >
                <LinkedinIcon size={16} />
                Connect on LinkedIn
                <ArrowUpRight
                  size={16}
                  className="text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                />
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </motion.dl>
          </div>

          {/* ---------------- Right column: terminal card ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-w-0"
          >
            <div className="animate-[float_7s_ease-in-out_infinite] rounded-2xl border border-white/10 bg-[#0b0c14]/80 shadow-[0_30px_90px_-40px_rgba(6,182,212,0.5)] backdrop-blur-xl">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                  <Terminal size={12} />
                  agent_profile.py
                </span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
                <code>
                  <Line>
                    <K>class</K> <C>Engineer</C>:
                  </Line>
                  <Line indent={1}>
                    name = <S>"Ashutosh Kumar"</S>
                  </Line>
                  <Line indent={1}>
                    role = <S>"AI/ML &amp; Full-Stack Developer"</S>
                  </Line>
                  <Line indent={1}>
                    stack = [<S>"Python"</S>, <S>"MERN"</S>, <S>"LangGraph"</S>]
                  </Line>
                  <Line indent={1}>
                    cloud = [<S>"AWS"</S>, <S>"Azure"</S>, <S>"Docker"</S>]
                  </Line>
                  <Line />
                  <Line indent={1}>
                    <K>def</K> <F>build</F>(self, idea):
                  </Line>
                  <Line indent={2}>
                    <M># retrieve → reason → self-correct → ship</M>
                  </Line>
                  <Line indent={2}>
                    <K>return</K> <F>deploy</F>(<F>agentic</F>(idea))
                  </Line>
                  <Line />
                  <Line>
                    <span className="text-emerald-400">&gt;&gt;&gt;</span>{' '}
                    <span className="text-slate-300">status</span>
                  </Line>
                  <Line>
                    <span className="text-emerald-300">
                      "open_to_work: true"
                      <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-emerald-400" />
                    </span>
                  </Line>
                </code>
              </pre>
            </div>

            {/* floating badges */}
            <div className="absolute -top-4 -right-3 hidden rounded-xl border border-violet-500/30 bg-[#13141f]/90 px-3 py-2 backdrop-blur-lg sm:block">
              <div className="flex items-center gap-2 text-[11px] font-medium text-violet-200">
                <Sparkles size={13} />
                Agentic RAG
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden rounded-xl border border-cyan-500/30 bg-[#13141f]/90 px-3 py-2 backdrop-blur-lg sm:block">
              <div className="flex items-center gap-2 text-[11px] font-medium text-cyan-200">
                <MapPin size={13} />
                Building in India
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech marquee */}
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-3">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] tracking-wide text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Stat({ value, suffix, label }) {
  const [count, ref] = useCountUp(value);
  return (
    <div ref={ref} className="bg-[#0b0c14]/60 px-5 py-5 backdrop-blur-sm">
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="font-display text-3xl font-semibold text-white tabular-nums">
          {count}
          <span className="text-cyan-400">{suffix}</span>
        </span>
        <span className="mt-1 block text-[12.5px] leading-snug text-slate-400">{label}</span>
      </dd>
    </div>
  );
}

/* Tiny helpers that keep the code block readable */
const Line = ({ children, indent = 0 }) => (
  <span className="block" style={{ paddingLeft: `${indent * 1.25}rem` }}>
    {children ?? ' '}
  </span>
);
const K = ({ children }) => <span className="text-violet-400">{children}</span>;
const C = ({ children }) => <span className="text-cyan-300">{children}</span>;
const F = ({ children }) => <span className="text-cyan-400">{children}</span>;
const S = ({ children }) => <span className="text-emerald-300">{children}</span>;
const M = ({ children }) => <span className="text-slate-500 italic">{children}</span>;
