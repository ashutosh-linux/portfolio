import { ArrowUpRight } from 'lucide-react';
import { getIcon } from '../lib/icons';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import Reveal, { RevealGroup, RevealItem } from './Reveal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { GITHUB_URL, GITHUB_USER, LINKEDIN_URL, highlights, profile } from '../data/portfolio';
import { accents, cx } from '../lib/accents';

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="Engineering intelligence into products that ship."
          subtitle={profile.bio}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Identity card */}
          <Reveal>
            <TiltCard className="h-full p-7 sm:p-8" max={5}>
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-violet-500/25 ring-1 ring-white/10">
                  <span className="font-display text-xl font-semibold text-white">AK</span>
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-semibold text-white">{profile.name}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{profile.role}</p>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
                I work at the seam between machine learning research and shipped software —
                building retrieval pipelines that stay honest under pressure, agents that grade
                and correct their own output, and the web surfaces that make all of it usable.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300"
                >
                  <GithubIcon size={15} />
                  @{GITHUB_USER}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-slate-300 transition-colors hover:border-violet-500/50 hover:text-violet-300"
                >
                  <LinkedinIcon size={15} />
                  LinkedIn
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              </div>
            </TiltCard>
          </Reveal>

          {/* Highlights */}
          <RevealGroup className="grid gap-5 sm:grid-cols-1">
            {highlights.map((item) => {
              const Icon = getIcon(item.icon);
              const a = accents[item.accent];
              return (
                <RevealItem key={item.title}>
                  <div
                    className={cx(
                      'group relative overflow-hidden rounded-2xl border border-white/10 bg-[#13141f]/60 p-6 backdrop-blur-lg',
                      'transition-all duration-300 hover:-translate-y-1',
                      a.borderHover,
                    )}
                  >
                    <div
                      className={cx(
                        'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                        a.gradient,
                      )}
                    />
                    <div className="relative flex items-start gap-4">
                      <div
                        className={cx(
                          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                          a.bgSoft,
                          a.border,
                        )}
                      >
                        <Icon size={19} className={a.text} />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-white">{item.title}</h4>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-slate-400">
                          {item.body}
                        </p>
                      </div>
                    </div>
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
