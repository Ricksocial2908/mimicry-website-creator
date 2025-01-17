import { motion } from "framer-motion";
import EditableText from "./EditableText";

const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <EditableText
            id="hero-chip"
            defaultContent="Complete video editing course"
            className="chip mb-6"
          />
          <EditableText
            id="hero-title"
            defaultContent="Transform your video editing skills with a course crafted by industry experts"
            className="heading-xl mb-6"
            as="h1"
          />
          <EditableText
            id="hero-description"
            defaultContent="Perfect for beginners to pros, master the skills to create stunning visuals through any editing platform."
            className="body-lg mb-8 max-w-2xl mx-auto"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <EditableText
              id="hero-button"
              defaultContent="START TODAY"
              className="inline-block"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;