import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import BentoProjects from "@/components/BentoProjects";
import ModelPlayground from "@/components/ModelPlayground";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f0f0f0] overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Brutalist Divider */}
        <div className="h-1 bg-black max-w-6xl mx-auto" />

        {/* Digital Me / Model Playground - First interactive section */}
        <ModelPlayground />

        {/* Brutalist Divider */}
        <div className="h-1 bg-black max-w-6xl mx-auto" />

        {/* About Section */}
        <About />

        {/* Brutalist Divider */}
        <div className="h-1 bg-black max-w-6xl mx-auto" />

        {/* Experience & Education */}
        <Experience />

        {/* Brutalist Divider */}
        <div className="h-1 bg-black max-w-6xl mx-auto" />

        {/* Projects */}
        <BentoProjects />

        {/* Brutalist Divider */}
        <div className="h-1 bg-black max-w-6xl mx-auto" />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
