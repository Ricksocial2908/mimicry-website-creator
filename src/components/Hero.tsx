import { motion } from "framer-motion";
import EditableText from "./EditableText";
import { useState } from "react";

const Hero = () => {
  const [videoId, setVideoId] = useState("jfKfPfyJRdk"); // default video ID

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="relative w-full h-full">
          <iframe
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
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

              {/* YouTube Video ID Input */}
              <div className="mt-4">
                <input
                  type="text"
                  value={videoId}
                  onChange={(e) => setVideoId(e.target.value)}
                  placeholder="Enter YouTube Video ID"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;