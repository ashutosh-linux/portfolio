import Reveal from './Reveal';
import { accents, cx } from '../lib/accents';

/**
 * Consistent section header: mono eyebrow, display title, supporting line.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent = 'cyan',
  align = 'left',
  className = '',
}) {
  const a = accents[accent] ?? accents.cyan;
  const centered = align === 'center';

  return (
    <Reveal className={cx('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div
          className={cx(
            'mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1',
            'font-mono text-[11px] tracking-[0.18em] uppercase',
            a.chip,
          )}
        >
          <span className={cx('h-1.5 w-1.5 rounded-full', a.dot)} />
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-[17px]">{subtitle}</p>
      )}

      <div
        className={cx(
          'mt-6 h-px w-24 bg-gradient-to-r',
          centered ? 'mx-auto' : '',
          accent === 'cyan' && 'from-cyan-500/70 to-transparent',
          accent === 'violet' && 'from-violet-500/70 to-transparent',
          accent === 'emerald' && 'from-emerald-500/70 to-transparent',
        )}
      />
    </Reveal>
  );
}
