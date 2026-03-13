import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface BigQuestionProps {
  onYes: () => void;
}

const BigQuestion = ({ onYes }: BigQuestionProps) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const runAway = () => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-hero relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
        className="text-4xl sm:text-6xl font-display text-gradient-romantic text-center mb-4"
      >
        Carren Green…
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-3xl sm:text-5xl font-display text-gradient-romantic text-center mb-12"
      >
        Will you be my girlfriend? ❤️
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5 }}
        className="flex flex-wrap gap-6 items-center justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={onYes}
          className="px-10 py-5 rounded-full bg-gradient-button text-primary-foreground font-body font-bold text-xl shadow-glow animate-pulse-soft"
        >
          YES 💕
        </motion.button>

        <motion.button
          animate={{ x: noPos.x, y: noPos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          onMouseEnter={runAway}
          onTouchStart={runAway}
          onClick={runAway}
          className="px-10 py-5 rounded-full border-2 border-primary/30 bg-muted text-muted-foreground font-body font-bold text-xl"
        >
          No 🙈
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BigQuestion;
