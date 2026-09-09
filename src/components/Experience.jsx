import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { RevealGroup, RevealItem } from './Reveal';
import { experience } from '../data/portfolio';
import { accents, cx } from '../lib/accents';

export default function Experience() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="05 — Experience"
          title="Virtual internships & milestones."
          subtitle="Structured, evaluated programmes with AICTE partners — each one ending in shipped, reviewed work rather than a certificate alone."
          accent="violet"
        />

        <div ref={trackRef} className="relative mt-14 pl-8 sm:pl-12">
          {/* Rail */}
          <div className="absolute top-2 bottom-2 left-[9px] w-px bg-white/10 sm:left-[17px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-[9px] w-px origin-top bg-gradient-to-b from-cyan-400 via-violet-500 to-emerald-400 sm:left-[17px]"
          />

          <RevealGroup className="space-y-6" stagger={0.12}>
            {experience.map((job) => {
              const a = accents[job.accent];
              return (
                <RevealItem key={job.role}>
                  <div className="relative">
                    {/* Node */}
                    <span
                      className={cx(
                        'absolute top-7 -left-8 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 bg-[#07070a] sm:-left-12',
                        a.border,
                      )}
                    >
                      <span className={cx('h-2 w-2 rounded-full', a.dot)} />
                    </span>

                    <article
                      className={cx(
                        'group relative overflow-hidden rounded-2xl border border-white/10 bg-[#13141f]/60 p-6 backdrop-blur-lg sm:p-7',
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

                      <div className="relative flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={cx(
                              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                              a.bgSoft,
                              a.border,
                            )}
                          >
                            <Briefcase size={18} className={a.text} />
                          </div>
                          <div>
                            <h3 className="text-[16px] leading-snug font-semibold text-white">
                              {job.role}
                            </h3>
                            <p className={cx('mt-1 text-[13px] font-medium', a.textSoft)}>
                              {job.org}
                            </p>
                          </div>
                        </div>

                        {job.period && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] whitespace-nowrap text-slate-400">
                            <Calendar size={11} />
                            {job.period}
                          </span>
                        )}
                      </div>

                      <ul className="relative mt-5 space-y-2.5">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <CheckCircle2
                              size={15}
                              className={cx('mt-0.5 shrink-0', a.text)}
                            />
                            <span className="text-[13.5px] leading-relaxed text-slate-400">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
