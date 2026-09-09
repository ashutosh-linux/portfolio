import { ArrowUpRight, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { GithubIcon } from './BrandIcons';
import { getIcon } from '../lib/icons';
import { accents, categoryAccent, cx } from '../lib/accents';

const spotlightFor = {
  cyan: 'rgba(6,182,212,0.16)',
  violet: 'rgba(139,92,246,0.16)',
  emerald: 'rgba(16,185,129,0.16)',
};

/**
 * One repository, rendered as a glass card. The whole card is a link target and
 * the footer button is the explicit affordance — both open the repo in a new tab.
 */
export default function ProjectCard({ project }) {
  const accentKey = categoryAccent[project.category] ?? 'cyan';
  const a = accents[accentKey];
  const Icon = getIcon(project.icon);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.97 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard
        className="flex h-full flex-col p-6"
        spotlight={spotlightFor[accentKey]}
        max={6}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={cx(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105',
              a.bgSoft,
              a.border,
            )}
          >
            <Icon size={19} className={a.text} />
          </div>

          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-1 font-mono text-[10px] tracking-wider text-amber-300 uppercase">
                <Star size={10} />
                Featured
              </span>
            )}
            <span
              className={cx(
                'hidden rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase sm:inline-block',
                a.chip,
              )}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <h3 className="mt-5 text-[17px] leading-snug font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">
          {project.title}
        </h3>

        <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech tags */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-slate-400"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.repoName} on GitHub (opens in a new tab)`}
            className={cx(
              'group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-[13px] font-medium transition-all duration-300',
              'border-white/10 bg-white/[0.04] text-slate-200',
              'hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-200',
            )}
          >
            <GithubIcon size={15} />
            View on GitHub
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            />
          </a>

          {project.secondaryUrl && (
            <a
              href={project.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.secondaryLabel} on GitHub (opens in a new tab)`}
              title={project.secondaryLabel}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-violet-200"
            >
              <ExternalLink size={14} />
              <span className="font-mono text-[11px]">{project.secondaryLabel}</span>
            </a>
          )}
        </div>

        {/* Repo slug */}
        <p className="mt-3 truncate font-mono text-[11px] text-slate-600">
          ashutosh-linux/{project.repoName}
        </p>
      </TiltCard>
    </motion.div>
  );
}
