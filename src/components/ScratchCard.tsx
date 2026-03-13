import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const SURPRISES = [
  "A cozy movie night with blankets and popcorn 🎬🍿",
  "Stargazing on a rooftop with hot chocolate ✨☕",
  "A sunset picnic at the prettiest spot in town 🌅🧺",
  "Cooking dinner together (yes, even the disasters) 🍝👩‍🍳",
  "A late-night drive with our favorite playlist 🚗🎶",
];

interface ScratchCardProps {
  onComplete: () => void;
}

const ScratchCard = ({ onComplete }: ScratchCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [surprise] = useState(() => SURPRISES[Math.floor(Math.random() * SURPRISES.length)]);
  const isDrawingRef = useRef(false);
  const scratchedRef = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    // Gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    gradient.addColorStop(0, "hsl(330, 70%, 75%)");
    gradient.addColorStop(0.5, "hsl(270, 60%, 75%)");
    gradient.addColorStop(1, "hsl(330, 50%, 80%)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Text overlay
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "bold 20px Quicksand, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch Me! ✨", canvas.offsetWidth / 2, canvas.offsetHeight / 2 + 7);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const cx = x - rect.left;
    const cy = y - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, 25, 0, Math.PI * 2);
    ctx.fill();

    scratchedRef.current += 1;
    if (scratchedRef.current > 60 && !revealed) {
      setRevealed(true);
    }
  }, [revealed]);

  const handleStart = () => { isDrawingRef.current = true; };
  const handleEnd = () => { isDrawingRef.current = false; };
  const handleMove = (x: number, y: number) => {
    if (isDrawingRef.current) scratch(x, y);
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl md:text-5xl text-primary text-center mb-4"
      >
        A Surprise For You
      </motion.h2>
      <p className="font-body text-muted-foreground text-center mb-10">
        Scratch the card to reveal your surprise date idea! 💝
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative w-[320px] h-[200px] md:w-[400px] md:h-[240px] rounded-2xl overflow-hidden shadow-card border border-border select-none"
      >
        {/* Hidden message */}
        <div className="absolute inset-0 bg-card flex items-center justify-center p-6 text-center">
          <p className="font-body font-semibold text-foreground text-lg leading-relaxed">
            {surprise}
          </p>
        </div>

        {/* Scratch canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-pointer touch-none"
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
          onTouchStart={(e) => { handleStart(); scratch(e.touches[0].clientX, e.touches[0].clientY); }}
          onTouchEnd={handleEnd}
          onTouchMove={(e) => { e.preventDefault(); handleMove(e.touches[0].clientX, e.touches[0].clientY); }}
        />
      </motion.div>

      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10"
        >
          <button
            onClick={onComplete}
            className="bg-gradient-button text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-lg shadow-soft hover:shadow-glow transition-shadow"
          >
            One More Thing →
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ScratchCard;
