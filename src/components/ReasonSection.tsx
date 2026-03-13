import { motion } from "framer-motion";

interface ReasonSectionProps {
  onNext: () => void;
}

const lines = [
  "I could have sent a text.",
  "I could have said it in person.",
  "But where's the fun in that?",
  "",
  "So I did what any slightly crazy person would do…",
  "I built a website. 💻❤️",
];

const ReasonSection = ({ onNext }: ReasonSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-romantic relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-display text-gradient-romantic mb-10 text-center"
      >
        Why This Website Exists
      </motion.h2>

      <div className="max-w-lg text-center space-y-3">
        {lines.map((line, i) =>
          line === "" ? (
            <div key={i} className="h-4" />
          ) : (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl text-foreground font-body"
            >
              {line}
            </motion.p>
          )
        )}
      </div>

      <div className="flex gap-4 text-3xl mt-8">
        {["❤️", "✨", "💫", "😊", "💖"].map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
          >
            {e}
          </motion.span>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-10 px-8 py-4 rounded-full bg-gradient-button text-primary-foreground font-body font-semibold text-lg shadow-soft"
      >
        Wait… what are you asking? 🤔
      </motion.button>
    </section>
  );
};

export default ReasonSection;
