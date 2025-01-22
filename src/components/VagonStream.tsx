import { motion } from "framer-motion";
import EditableText from "./EditableText";

const VagonStream = () => {
  return (
    <section id="vagon-stream" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl font-heading font-bold">
              <EditableText
                id="vagon-title"
                defaultContent="Try Our AI Video Generator"
                className="inline-block"
              />
            </h2>
            <p className="text-lg text-white/80">
              <EditableText
                id="vagon-description"
                defaultContent="Experience our powerful AI video generation tools directly in your browser"
                className="inline-block"
              />
            </p>
          </div>
          
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden border border-white/10">
            <iframe
              id="vagonFrame"
              className="absolute inset-0 w-full h-full"
              allow="microphone *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *;"
              src="https://streams.vagon.io/streams/d79f9a66-a548-4e21-9fd6-5e13a3bd5b1b"
              sandbox="allow-pointer-lock allow-scripts allow-same-origin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VagonStream;