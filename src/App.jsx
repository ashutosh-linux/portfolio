import GridBackground from './components/GridBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-200 antialiased">
      <GridBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/** Hairline rule that fades out at both ends. */
function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
    />
  );
}
