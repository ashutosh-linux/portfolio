import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, CircleAlert, Copy, Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from '../data/portfolio';
import { cx } from '../lib/accents';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (values) => {
    const next = {};
    if (values.name.trim().length < 2) next.name = 'Please enter at least 2 characters.';
    if (!EMAIL_RE.test(values.email.trim())) next.email = 'Enter a valid email address.';
    if (values.message.trim().length < 12)
      next.message = 'Tell me a little more — 12 characters minimum.';
    return next;
  };

  const update = (field) => (event) => {
    const values = { ...form, [field]: event.target.value };
    setForm(values);
    if (touched[field]) setErrors(validate(values));
  };

  const blur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const found = validate(form);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length) return;

    /* No backend is bundled — hand the message to the visitor's mail client.
       Swap this for a Formspree/EmailJS POST when you wire up a service. */
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n—\n${form.name.trim()}\n${form.email.trim()}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(initialForm);
    setTouched({});
    setTimeout(() => setSent(false), 6000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the address is visible on screen anyway */
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something deliberate."
          subtitle="Open to software engineering, AI/ML and full-stack roles, as well as collaborations on agentic and retrieval-heavy systems."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Direct channels */}
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/10 bg-[#13141f]/60 p-6 backdrop-blur-lg">
              <h3 className="text-[15px] font-semibold text-white">Direct channels</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                Fastest route is email or LinkedIn — I usually reply within a day.
              </p>

              <button
                type="button"
                onClick={copyEmail}
                className="group mt-5 flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left transition-colors hover:border-cyan-500/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10">
                  <Mail size={16} className="text-cyan-400" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[12.5px] break-all text-slate-200">
                    {EMAIL}
                  </span>
                  <span className="block text-[11px] text-slate-500">
                    {copied ? 'Copied to clipboard' : 'Click to copy'}
                  </span>
                </span>
                {copied ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={15} className="text-slate-500 group-hover:text-cyan-300" />
                )}
              </button>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <SocialTile
                  href={GITHUB_URL}
                  label="GitHub"
                  handle={`@${GITHUB_USER}`}
                  hover="hover:border-cyan-500/50 hover:text-cyan-200"
                >
                  <GithubIcon size={16} />
                </SocialTile>
                <SocialTile
                  href={LINKEDIN_URL}
                  label="LinkedIn"
                  handle="ashutosh-kumar625490"
                  hover="hover:border-violet-500/50 hover:text-violet-200"
                >
                  <LinkedinIcon size={16} />
                </SocialTile>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[12px] text-slate-500">
                <MapPin size={13} />
                India · Open to remote &amp; relocation
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5 backdrop-blur-lg">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <p className="text-[13px] font-medium text-emerald-200">
                  Currently available for new roles
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.12}>
            <form
              noValidate
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-[#13141f]/60 p-6 backdrop-blur-lg sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                  onBlur={blur('name')}
                  error={touched.name && errors.name}
                />
                <Field
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={update('email')}
                  onBlur={blur('email')}
                  error={touched.email && errors.email}
                />
              </div>

              <Field
                id="message"
                label="Message"
                textarea
                placeholder="What are you building, and where could I help?"
                value={form.message}
                onChange={update('message')}
                onBlur={blur('message')}
                error={touched.message && errors.message}
                className="mt-5"
              />

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <MagneticButton
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-14px_rgba(6,182,212,0.9)] transition-shadow hover:shadow-[0_14px_48px_-12px_rgba(139,92,246,0.9)]"
                >
                  Send message
                  <Send
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </MagneticButton>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-[13px] text-emerald-300"
                    >
                      <Check size={15} />
                      Opening your mail client…
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <p className="mt-4 text-[11.5px] leading-relaxed text-slate-600">
                This form composes a message in your own mail client — nothing is stored or sent
                by this site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Field({ id, label, error, textarea, className = '', ...rest }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[12.5px] font-medium text-slate-300">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        rows={textarea ? 5 : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cx(
          'w-full rounded-xl border bg-[#0b0c14]/70 px-4 py-3 text-[14px] text-slate-100 transition-colors',
          'placeholder:text-slate-600 focus:outline-none',
          textarea && 'resize-y',
          error
            ? 'border-red-500/50 focus:border-red-400'
            : 'border-white/10 focus:border-cyan-500/60',
        )}
        {...rest}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] text-red-400"
          >
            <CircleAlert size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function SocialTile({ href, label, handle, hover, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        'flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 transition-all duration-300 hover:-translate-y-0.5',
        hover,
      )}
    >
      <span className="shrink-0">{children}</span>
      <span className="min-w-0">
        <span className="block text-[13px] font-medium">{label}</span>
        <span className="block truncate font-mono text-[11px] text-slate-500">{handle}</span>
      </span>
    </a>
  );
}
