import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { getIcon } from '../lib/icons';
import { skillFilters, skillGroups } from '../data/portfolio';
import { accents, cx } from '../lib/accents';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? skillGroups : skillGroups.filter((g) => g.id === filter)),
    [filter],
  );

  const totalSkills = useMemo(
    () => skillGroups.reduce((sum, g) => sum + g.skills.length, 0),
    [],
  );

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Technical skills matrix."
          subtitle={`${totalSkills} technologies across language fundamentals, applied AI, full-stack delivery, cloud operations and network security.`}
          accent="violet"
        />

        {/* Filter chips */}
        <Reveal delay={0.1} className="mt-10">
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {skillFilters.map((chip) => {
              const isActive = filter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setFilter(chip.id)}
                  aria-pressed={isActive}
                  className={cx(
                    'relative shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-colors',
                    isActive
                      ? 'border-violet-500/50 text-white'
                      : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-200',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-chip"
                      className="absolute inset-0 -z-10 rounded-full bg-violet-500/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  {chip.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Bento grid */}
        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((group, index) => {
              const Icon = getIcon(group.icon);
              const a = accents[group.accent];
              return (
                <motion.article
                  key={group.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{
                    duration: 0.45,
                    delay: filter === 'all' ? index * 0.06 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cx(
                    'group relative overflow-hidden rounded-2xl border border-white/10 bg-[#13141f]/60 p-6 backdrop-blur-lg',
                    'transition-colors duration-300',
                    a.borderHover,
                    group.span && filter === 'all' && 'lg:col-span-2',
                  )}
                >
                  <div
                    aria-hidden="true"
                    className={cx(
                      'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                      a.gradient,
                    )}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div
                        className={cx(
                          'flex h-10 w-10 items-center justify-center rounded-xl border',
                          a.bgSoft,
                          a.border,
                        )}
                      >
                        <Icon size={18} className={a.text} />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold text-white">{group.title}</h3>
                        <p className="font-mono text-[11px] tracking-wide text-slate-500">
                          {group.skills.length} technologies
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-slate-400">
                      {group.blurb}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li key={skill}>
                          <span
                            className={cx(
                              'inline-block rounded-lg border px-2.5 py-1.5 text-[12.5px] transition-colors',
                              'border-white/10 bg-white/[0.04] text-slate-300',
                              'hover:border-white/25 hover:bg-white/[0.08] hover:text-white',
                            )}
                          >
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
