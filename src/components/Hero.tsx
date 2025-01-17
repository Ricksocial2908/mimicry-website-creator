import { motion } from "framer-motion";

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
          <div className="chip mb-6">Complete video editing course</div>
          <h1 className="heading-xl mb-6">
            Transform your video editing skills with a course crafted by industry experts
          </h1>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            Perfect for beginners to pros, master the skills to create stunning visuals through any editing platform.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            START TODAY
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;