import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  {
    question: "What's your ideal first date vibe?",
    options: ["Coffee & deep conversation ☕", "Fun activity like mini golf 🎳", "Scenic walk at sunset 🌅", "Dinner at a cozy spot 🍽️"],
  },
  {
    question: "Pick a superpower that fits your personality:",
    options: ["Reading minds (but only good thoughts)", "Teleportation anywhere instantly", "Making anyone laugh instantly", "Never spilling coffee on yourself"],
  },
  {
    question: "What's your current mood about this website?",
    options: ["Intrigued & curious 👀", "A little surprised but smiling 🦋", "Secretly hoping this was coming 💕", "Already texting my friends about it ✨"],
  },
  {
    question: "Quick — pick your spirit animal:",
    options: ["Curious cat 🐱", "Loyal dog 🐶", "Wise owl 🦉", "Majestic fox 🦊"],
  },
  {
    question: "What's something you want me to know about you?",
    options: ["I love trying new things", "I'm a great listener", "I have surprisingly good taste in music", "I'm 100% worth getting to know"],
  },
];

interface LoveQuizProps {
  onComplete: () => void;
}

const LoveQuiz = ({ onComplete }: LoveQuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    setAnswers((prev) => [...prev, index]);

    setTimeout(() => {
      if (currentQ + 1 < QUESTIONS.length) {
        setCurrentQ((q) => q + 1);
      } else {
        setFinished(true);
      }
    }, 400);
  };

  const q = QUESTIONS[currentQ];

  return (
    <section className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 py-12">
      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg w-full"
          >
            {/* Progress */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-body text-sm text-muted-foreground">
                Question {currentQ + 1} / {QUESTIONS.length}
              </span>
              <span className="font-body text-sm text-primary font-semibold">
                Getting to know you ✨
              </span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full mb-8 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-button rounded-full"
                initial={{ width: `${(currentQ / QUESTIONS.length) * 100}%` }}
                animate={{ width: `${((currentQ + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-8">
              {q.question}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((option, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleAnswer(i)}
                  className="p-4 rounded-xl bg-card border-2 border-border hover:border-primary/50 font-body font-medium text-foreground shadow-soft transition-all text-left"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg px-4"
          >
            <div className="text-7xl mb-6">✨💫✨</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Perfect!
            </h2>
            <p className="font-body text-xl text-foreground mb-6">
              I already know we're going to have a great time together.
            </p>
            <p className="font-body text-muted-foreground mb-10">
              Every answer tells me something new. I can't wait to learn the rest in person.
            </p>
            <button
              onClick={onComplete}
              className="bg-gradient-button text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-lg shadow-soft hover:shadow-glow transition-shadow"
            >
              One last thing →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LoveQuiz;
