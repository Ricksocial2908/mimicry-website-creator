import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { useEditable } from "@/contexts/EditableContext";
import EditableText from "./EditableText";

const VagonStream = () => {
  const { isEditMode, vagonUrl, setVagonUrl } = useEditable();
  const [showSettings, setShowSettings] = useState(false);

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
          
          <div className="relative">
            {isEditMode && (
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="absolute -top-12 right-0 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}

            {showSettings && (
              <div className="absolute -top-12 right-12 z-50 p-4 bg-card rounded-lg shadow-lg border border-white/10 w-96">
                <h3 className="text-sm font-medium mb-2">Vagon Stream Settings</h3>
                <div className="space-y-2">
                  <label className="text-xs text-white/60">Stream URL</label>
                  <Input
                    type="text"
                    value={vagonUrl}
                    onChange={(e) => setVagonUrl(e.target.value)}
                    placeholder="Enter Vagon stream URL"
                    className="bg-white/10 border-white/20 text-sm"
                  />
                  <p className="text-xs text-white/40">
                    Example: https://streams.vagon.io/streams/your-stream-id
                  </p>
                </div>
              </div>
            )}

            <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden bg-black/20">
              <iframe
                id="vagonFrame"
                className="absolute inset-0 w-full h-full"
                allow="microphone *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *;"
                src={vagonUrl}
                sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VagonStream;