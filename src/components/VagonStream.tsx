import { useState } from "react";
import { Settings2 } from "lucide-react";
import { useEditable } from "@/contexts/EditableContext";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const VagonStream = () => {
  const { isEditMode, vagonUrl, setVagonUrl } = useEditable();
  const [showSettings, setShowSettings] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragEnd = (event: any, info: any) => {
    setPosition({ x: info.point.x, y: info.point.y });
  };

  return (
    <motion.section
      drag={isEditMode}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      className={`relative ${isEditMode ? 'cursor-move' : ''}`}
      style={{ x: position.x, y: position.y }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Try Our Platform</h2>
          <p className="text-muted-foreground">
            Experience our platform directly in your browser. No downloads required.
          </p>
        </div>
        
        <div className="relative">
          {isEditMode && (
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="absolute -top-12 right-0 z-50 p-2 hover:bg-white/5 rounded-lg"
            >
              <Settings2 className="w-5 h-5" />
            </button>
          )}

          {showSettings && (
            <div className="absolute -top-12 right-12 z-50 p-4 bg-card rounded-lg shadow-lg border border-white/10 w-96">
              <h3 className="text-sm font-medium mb-2">Vagon Stream Settings</h3>
              <Input
                type="text"
                value={vagonUrl}
                onChange={(e) => setVagonUrl(e.target.value)}
                placeholder="Enter Vagon stream URL"
                className="w-full"
              />
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
      </div>
    </motion.section>
  );
};

export default VagonStream;