import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MiniGameProps {
  onComplete: () => void;
}

interface Heart {
  id: number;
  x: number;
  y: number;
}

const MiniGame = ({ onComplete }: MiniGameProps) => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [caught, setCaught] = useState(0);
  const [started, setStarted] = useState(false);
  const total = 5;

  const spawnHearts = useCallback(() => {
    const newHearts: Heart[] = Array.from({ length: total }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 75,
      y: 10 + Math.random() * 60,
    }));
    setHearts(newHearts);
  }, []);

  useEffect(() => {
    if (!started) return;
    spawnHearts();
    const interval = setInterval(() => {
      setHearts((prev) =>
        prev.map((h) => ({
          ...h,
          x: Math.max(5, Math.min(85, h.x + (Math.random() - 0.5) * 20)),
          y: Math.max(5, Math.min(70, h.y + (Math.random() - 0.5) * 20)),
        }))
      );
    }, 1200);
    return () => clearInterval(interval);
  }, [started, spawnHearts]);

  const catchHeart = (id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
    const next = caught + 1;
    setCaught(next);
    if (next >= total) {
      setTimeout(onComplete, 800);
    }
  };

  if (!started) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-romantic">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-display text-gradient-romantic mb-6 text-center"
        >
          Unlock The Question 🔐
        </motion.h2>
        <p className="text-muted-foreground font-body text-lg mb-8 text-center max-w-sm">
          Catch 5 floating hearts to unlock the big question!
        </p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStarted(true)}
          className="px-8 py-4 rounded-full bg-gradient-button text-primary-foreground font-body font-semibold text-lg shadow-glow"
        >
          Start the game! 🎮
        </motion.button>
      </section>
    );
  }

  if (caught >= total) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-romantic">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <p className="text-2xl font-body text-foreground mb-6">
            Okay okay… you earned it 🏆
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="px-8 py-4 rounded-full bg-gradient-button text-primary-foreground font-body font-semibold text-lg shadow-glow"
          >
            Reveal the question 💌
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-romantic relative overflow-hidden">
      <h2 className="text-2xl font-display text-gradient-romantic mb-2">
        Catch the hearts! 💕
      </h2>
      <p className="text-muted-foreground font-body mb-4">
        {caught} / {total} caught
      </p>

      <div className="relative w-full max-w-lg h-[60vh] rounded-2xl border-2 border-primary/20 bg-background/50">
        <AnimatePresence>
          {hearts.map((h) => (
            <motion.button
              key={h.id}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                left: `${h.x}%`,
                top: `${h.y}%`,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={() => catchHeart(h.id)}
              className="absolute text-4xl cursor-pointer hover:scale-125 transition-transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              💖
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MiniGame;
