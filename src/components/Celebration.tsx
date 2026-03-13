import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const Celebration = () => {
  useEffect(() => {
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f472b6", "#c084fc", "#fbbf24", "#fb7185"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#f472b6", "#c084fc", "#fbbf24", "#fb7185"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-celebration relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="text-center z-10"
      >
        <h2 className="text-5xl sm:text-7xl font-display text-gradient-romantic mb-6">
          See you soon! 🎉
        </h2>
        <p className="text-xl sm:text-2xl text-foreground font-body mb-4">
          I promise this was only <em>slightly</em> crazy.
        </p>
        <p className="text-lg text-muted-foreground font-body mb-10">
          Now we officially have a story that started with a website.
        </p>

        <div className="flex justify-center gap-3 text-4xl mb-10">
          {["❤️", "✨", "🎉", "😊", "💖"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
            >
              {e}
            </motion.span>
          ))}
        </div>

        <p className="text-lg font-body text-foreground italic">
          Can't wait for our first date! 😉
        </p>
      </motion.div>
    </section>
  );
};

export default Celebration;
