import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import MagneticButton from './MagneticButton';
import { GITHUB_URL, LINKEDIN_URL, navLinks, profile } from '../data/portfolio';
import { cx } from '../lib/accents';

const RESUME_URL = `${import.meta.env.BASE_URL}Ashutosh-Kumar-Resume.pdf`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');

  /* Elevate the header once the page moves. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight the section currently in view. */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (event, href) => {
    event.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-[#07070a]/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => go(e, '#hero')}
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-slate-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="transition-colors group-hover:text-cyan-300">{profile.logo}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className={cx(
                    'relative rounded-lg px-3.5 py-2 text-sm transition-colors',
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg border border-cyan-500/25 bg-cyan-500/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Quick links */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <IconLink href={GITHUB_URL} label="GitHub profile">
              <GithubIcon size={17} />
            </IconLink>
            <IconLink href={LINKEDIN_URL} label="LinkedIn profile">
              <LinkedinIcon size={17} />
            </IconLink>
          </div>

          <MagneticButton
            as="a"
            href={RESUME_URL}
            download
            className="group hidden items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-400/70 hover:bg-cyan-500/20 sm:inline-flex"
          >
            <Download size={15} className="transition-transform group-hover:translate-y-0.5" />
            Resume
          </MagneticButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-cyan-500/50 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#07070a]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => go(e, link.href)}
                    className="block rounded-lg px-3 py-3 text-[15px] text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3 flex items-center gap-2 border-t border-white/10 pt-4">
                <IconLink href={GITHUB_URL} label="GitHub profile">
                  <GithubIcon size={17} />
                </IconLink>
                <IconLink href={LINKEDIN_URL} label="LinkedIn profile">
                  <LinkedinIcon size={17} />
                </IconLink>
                <a
                  href={RESUME_URL}
                  download
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200"
                >
                  <Download size={15} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-300"
    >
      {children}
    </a>
  );
}
