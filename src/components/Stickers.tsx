import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEditable } from "@/contexts/EditableContext";

interface Sticker {
  id: string;
  x: number;
  y: number;
  emoji: string;
}

const STICKER_OPTIONS = ["✨", "🎬", "🎥", "🎮", "🤖", "🎨", "🚀", "💡"];

export const Stickers = () => {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [selectedEmoji, setSelectedEmoji] = useState(STICKER_OPTIONS[0]);
  const { isEditMode } = useEditable();

  const handleClick = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setStickers([
      ...stickers,
      {
        id: crypto.randomUUID(),
        x,
        y,
        emoji: selectedEmoji,
      },
    ]);
  };

  const removeSticker = (id: string) => {
    setStickers(stickers.filter((sticker) => sticker.id !== id));
  };

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      onClick={handleClick}
    >
      {isEditMode && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-card/80 backdrop-blur-sm p-2 rounded-full border border-white/10 shadow-lg">
          <div className="flex gap-2">
            {STICKER_OPTIONS.map((emoji) => (
              <button
                key={emoji}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEmoji(emoji);
                }}
                className={`text-2xl p-2 rounded-full transition-colors ${
                  selectedEmoji === emoji
                    ? "bg-primary text-white"
                    : "hover:bg-white/10"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {stickers.map((sticker) => (
          <motion.div
            key={sticker.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              position: "absolute",
              left: sticker.x,
              top: sticker.y,
              transform: "translate(-50%, -50%)",
            }}
            className="group"
          >
            <span className="text-4xl select-none">{sticker.emoji}</span>
            {isEditMode && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeSticker(sticker.id);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={12} />
              </button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Stickers;