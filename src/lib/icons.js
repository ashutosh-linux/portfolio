/**
 * Explicit icon registry.
 *
 * Data files reference icons by name, but `import * as Icons from 'lucide-react'`
 * would defeat tree-shaking and drag the entire icon set into the bundle.
 * Registering only what we use keeps the build lean.
 */
import {
  Activity,
  Bot,
  Boxes,
  Brain,
  ChartNoAxesColumn,
  Cloud,
  Code2,
  Gauge,
  Layers,
  PhoneCall,
  Radar,
  ReceiptText,
  RefreshCw,
  School,
  SearchCode,
  Shield,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const iconRegistry = {
  Activity,
  Bot,
  Boxes,
  Brain,
  ChartNoAxesColumn,
  Cloud,
  Code2,
  Gauge,
  Layers,
  PhoneCall,
  Radar,
  ReceiptText,
  RefreshCw,
  School,
  SearchCode,
  Shield,
  ShieldCheck,
  Sparkles,
};

export const getIcon = (name) => iconRegistry[name] ?? Sparkles;
