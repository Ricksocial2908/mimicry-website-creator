import { motion } from "framer-motion";
import { ChevronRight, Edit } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Curriculum from "@/components/Curriculum";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { useEditable } from "@/contexts/EditableContext";

const Index = () => {
  const { isEditMode, toggleEditMode } = useEditable();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Ed.
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">ABOUT</a>
            <a href="#curriculum" className="text-sm hover:text-primary transition-colors">CURRICULUM</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">PRICING</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleEditMode}
              className={`p-2 rounded-lg transition-colors ${
                isEditMode ? 'bg-primary text-white' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <Edit size={20} />
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              JOIN NOW
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </nav>
      
      <main className="pt-20">
        <Hero />
        <About />
        <Curriculum />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default Index;