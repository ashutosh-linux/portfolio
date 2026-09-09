import { ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { GITHUB_URL, GITHUB_USER, LINKEDIN_URL, navLinks } from '../data/portfolio';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const go = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07070a]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Terminal signature */}
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[12px] text-slate-400">
              <Terminal size={13} className="text-cyan-400" />
              <span className="text-emerald-400">$</span>
              <span>whoami</span>
            </div>
            <p className="mt-4 font-mono text-[12.5px] leading-relaxed text-slate-500">
              <span className="text-cyan-400">&gt;</span> ashutosh_kumar
              <br />
              <span className="text-cyan-400">&gt;</span> ai_ml_engineer + full_stack_developer
              <br />
              <span className="text-cyan-400">&gt;</span> status:{' '}
              <span className="text-emerald-400">available</span>
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="text-[13.5px] text-slate-400 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub — ${GITHUB_USER}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-violet-300"
            >
              <LinkedinIcon size={17} />
            </a>
            <button
              type="button"
              onClick={toTop}
              aria-label="Back to top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-mono text-[12px] text-slate-500">
            <span className="text-slate-600">{'// '}</span>
            Designed &amp; Built by Ashutosh Kumar • Powered by React &amp; Tailwind CSS
          </p>
          <p className="font-mono text-[12px] text-slate-600">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
