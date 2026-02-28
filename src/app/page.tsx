import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      {/* Footer minimal */}
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Hizb Patel. Built with Next.js & Framer Motion.
        </p>
      </footer>
    </main>
  );
}
