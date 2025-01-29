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
          
          <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden glass-card">
            <iframe
              id="vagonFrame"
              className="absolute inset-0 w-full h-full"
              allow="microphone *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *;"
              src="https://streams.vagon.io/streams/29e9d1c2-378b-4b37-8223-c9516a25212e"
              sandbox="allow-pointer-lock"
              style={{ border: 'none', background: 'transparent' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VagonStream;