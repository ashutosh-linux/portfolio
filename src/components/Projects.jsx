import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import MagneticButton from './MagneticButton';
import { GithubIcon } from './BrandIcons';
import { GITHUB_URL, projectFilters, projects } from '../data/portfolio';
import { cx } from '../lib/accents';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const map = { all: projects.length };
    for (const p of projects) map[p.category] = (map[p.category] ?? 0) + 1;
    return map;
  }, []);

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="03 — Projects"
            title="Repositories, shipped and open."
            subtitle="Agentic pipelines, retrieval systems, evaluation harnesses and full-stack platforms. Every card links straight to its source on GitHub."
          />

          <Reveal delay={0.15}>
            <MagneticButton
              as="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-[13.5px] font-medium text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-cyan-200"
            >
              <GithubIcon size={16} />
              All repositories
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </MagneticButton>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.1} className="mt-10">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {projectFilters.map((chip) => {
              const isActive = filter === chip.id;
              const count = counts[chip.id] ?? 0;
              if (!count) return null;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setFilter(chip.id)}
                  aria-pressed={isActive}
                  className={cx(
                    'relative inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-colors',
                    isActive
                      ? 'border-cyan-500/50 text-white'
                      : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-200',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-chip"
                      className="absolute inset-0 -z-10 rounded-full bg-cyan-500/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  {chip.label}
                  <span
                    className={cx(
                      'font-mono text-[10.5px]',
                      isActive ? 'text-cyan-300' : 'text-slate-600',
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1400 }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
