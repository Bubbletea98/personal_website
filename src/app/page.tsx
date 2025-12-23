import Navigation from "@/components/Navigation";
import NeuralParticles from "@/components/NeuralParticles";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import BentoProjects from "@/components/BentoProjects";
import ModelPlayground from "@/components/ModelPlayground";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-abyss-950 overflow-hidden">
      {/* Interactive Neural Network Background */}
      <NeuralParticles 
        particleCount={60} 
        connectionDistance={120} 
        mouseInfluence={150} 
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Divider */}
        <div className="h-px neural-line max-w-6xl mx-auto" />

        {/* About Section */}
        <About />

        {/* Divider */}
        <div className="h-px neural-line max-w-6xl mx-auto" />

        {/* Experience & Education */}
        <Experience />

        {/* Divider */}
        <div className="h-px neural-line max-w-6xl mx-auto" />

        {/* Projects */}
        <BentoProjects />

        {/* Divider */}
        <div className="h-px neural-line max-w-6xl mx-auto" />

        {/* Model Playground */}
        <ModelPlayground />

        {/* Divider */}
        <div className="h-px neural-line max-w-6xl mx-auto" />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* Background gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-abyss-950 to-transparent" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-abyss-950 to-transparent" />
        
        {/* Side gradients for vignette effect */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-abyss-950/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-abyss-950/50 to-transparent" />
      </div>
    </main>
  );
}

