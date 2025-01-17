import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { Input } from "./ui/input";
import { useEditable } from "@/contexts/EditableContext";
import EditableText from "./EditableText";
import { useState } from "react";
import Stickers from "./Stickers";

const Hero = () => {
  const { videoId, setVideoId, isEditMode } = useEditable();
  const [showSettings, setShowSettings] = useState(false);

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

      {/* Settings Button */}
      {isEditMode && (
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="absolute top-24 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute top-24 right-16 z-50 p-4 bg-card rounded-lg shadow-lg border border-white/10 w-72">
          <h3 className="text-sm font-medium mb-2">Background Video Settings</h3>
          <div className="space-y-2">
            <label className="text-xs text-white/60">YouTube Video ID</label>
            <Input
              type="text"
              value={videoId}
              onChange={(e) => setVideoId(e.target.value)}
              placeholder="Enter YouTube Video ID"
              className="bg-white/10 border-white/20 text-sm"
            />
            <p className="text-xs text-white/40">
              Example: jfKfPfyJRdk (from youtube.com/watch?v=jfKfPfyJRdk)
            </p>
          </div>
        </div>
      )}

      {/* Stickers Layer */}
      <Stickers />

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
                  defaultContent="Complete AI video generation"
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
                defaultContent="Transform your AI video generation skills with a course crafted by industry experts, perfect for beginners to pros."
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
