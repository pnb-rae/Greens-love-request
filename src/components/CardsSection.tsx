import { motion } from "framer-motion";

interface CardsSectionProps {
  onNext: () => void;
}

const cards = [
  {
    emoji: "✨",
    title: "You're kind of amazing",
    text: "Like… suspiciously amazing.",
  },
  {
    emoji: "🌸",
    title: "You make life more interesting",
    text: "Even normal days feel a little better.",
  },
  {
    emoji: "💖",
    title: "I might like you a lot",
    text: "Okay fine… a LOT lot.",
  },
];

const CardsSection = ({ onNext }: CardsSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-hero">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-display text-gradient-romantic mb-14 text-center"
      >
        A Few Reasons… 💕
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.25, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-gradient-card rounded-2xl p-8 shadow-card text-center cursor-default"
          >
            <span className="text-5xl block mb-4">{card.emoji}</span>
            <h3 className="text-xl font-display text-foreground mb-2">
              {card.title}
            </h3>
            <p className="text-muted-foreground font-body">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-14 px-8 py-4 rounded-full bg-gradient-button text-primary-foreground font-body font-semibold text-lg shadow-soft"
      >
        So what's the big question? 💭
      </motion.button>
    </section>
  );
};

export default CardsSection;
