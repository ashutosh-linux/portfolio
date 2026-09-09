import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheck, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { certificationTabs } from '../data/portfolio';
import { accents, cx } from '../lib/accents';

export default function Certifications() {
  const [activeId, setActiveId] = useState(certificationTabs[0].id);
  const active = certificationTabs.find((t) => t.id === activeId) ?? certificationTabs[0];
  const a = accents[active.accent];

  const total = certificationTabs.reduce((sum, t) => sum + t.items.length, 0);

  return (
    <section id="certifications" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 — Certifications"
          title="Credentials & verified training."
          subtitle={`${total} certifications across cloud platforms, applied AI, networking, cybersecurity and professional development tracks.`}
          accent="emerald"
        />

        {/* Tabs */}
        <Reveal delay={0.1} className="mt-10">
          <div
            role="tablist"
            aria-label="Certification categories"
            className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
          >
            {certificationTabs.map((tab) => {
              const isActive = tab.id === activeId;
              const ta = accents[tab.accent];
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveId(tab.id)}
                  className={cx(
                    'relative inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-colors',
                    isActive
                      ? cx('text-white', ta.border)
                      : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-200',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="cert-tab"
                      className={cx('absolute inset-0 -z-10 rounded-full', ta.bgSoft)}
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className={cx('h-1.5 w-1.5 rounded-full', ta.dot)} />
                  {tab.label}
                  <span className="font-mono text-[10.5px] text-slate-500">
                    {tab.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {active.items.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={cx(
                    'group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#13141f]/60 p-5 backdrop-blur-lg',
                    'transition-all duration-300 hover:-translate-y-1',
                    a.borderHover,
                  )}
                >
                  <div
                    aria-hidden="true"
                    className={cx(
                      'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                      a.gradient,
                    )}
                  />
                  <div className="relative flex items-start gap-3">
                    <div
                      className={cx(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
                        a.bgSoft,
                        a.border,
                      )}
                    >
                      <BadgeCheck size={17} className={a.text} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14.5px] leading-snug font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] text-slate-400">{item.issuer}</p>
                    </div>
                  </div>

                  <div className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                      <Calendar size={11} />
                      {item.date || 'Completed'}
                    </span>
                    <span className={cx('font-mono text-[10px] tracking-wider uppercase', a.text)}>
                      Verified
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
