import { useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/** Motion components are expensive to create — memoise per tag. */
const motionCache = new Map();
function getMotionTag(tag) {
  if (typeof tag === 'string') return motion[tag] ?? motion.div;
  if (!motionCache.has(tag)) {
    motionCache.set(tag, motion.create ? motion.create(tag) : motion(tag));
  }
  return motionCache.get(tag);
}

/**
 * Magnetic hover wrapper — the child drifts toward the cursor and springs back.
 * Renders whatever element you pass via `as` (defaults to a <button>).
 * Disabled for coarse pointers so touch users just get a clean tap.
 */
export default function MagneticButton({
  children,
  as = 'button',
  strength = 0.3,
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 250, damping: 18, mass: 0.4 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const rotate = useTransform(sx, [-40, 40], [-2.5, 2.5]);

  const MotionTag = useMemo(() => getMotionTag(as), [as]);

  const handleMove = (event) => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      style={{ x: sx, y: sy, rotate }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
