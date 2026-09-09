import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cx } from '../lib/accents';

/**
 * Glassmorphic surface with a subtle 3D tilt and a spotlight that tracks the
 * cursor. Pointer effects are skipped on touch devices.
 */
export default function TiltCard({
  children,
  className = '',
  spotlight = 'rgba(6,182,212,0.16)',
  max = 7,
  glow = true,
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlightBg = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${spotlight}, transparent 65%)`;

  const onMove = (event) => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    const rect = el.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;
    mx.set(localX);
    my.set(localY);
    px.set(localX / rect.width);
    py.set(localY / rect.height);
  };

  const onLeave = () => {
    setHovered(false);
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      className={cx(
        'group relative overflow-hidden rounded-2xl',
        'border border-white/10 bg-[#13141f]/60 backdrop-blur-lg',
        'transition-colors duration-300 hover:border-cyan-500/50',
        glow &&
          'transition-shadow hover:shadow-[0_18px_60px_-24px_rgba(6,182,212,0.45)]',
        className,
      )}
    >
      {/* cursor spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBg, opacity: hovered ? 1 : 0 }}
      />
      {/* top hairline highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <div className="relative" style={{ transform: 'translateZ(18px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
