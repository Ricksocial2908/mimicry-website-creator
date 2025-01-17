import { motion } from "framer-motion";
import EditableText from "./EditableText";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/fd0bc9a6-38f9-4273-b9d9-a0bf8cce72c5.png)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight">
                <EditableText
                  id="hero-title-1"
                  defaultContent="Complete video editing"
                  className="block"
                />
                <EditableText
                  id="hero-title-2"
                  defaultContent="course"
                  className="block"
                />
                <EditableText
                  id="hero-title-3"
                  defaultContent="for all levels"
                  className="text-primary"
                />
              </h1>
              
              <EditableText
                id="hero-description"
                defaultContent="Transform your video editing skills with a course crafted by industry experts, perfect for beginners to pros."
                className="text-lg md:text-xl text-white/80 max-w-2xl"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors uppercase"
              >
                <EditableText
                  id="hero-button"
                  defaultContent="START TODAY"
                  className="inline-block"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;