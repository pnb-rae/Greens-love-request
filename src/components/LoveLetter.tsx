import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LETTER = `Hey Carren,

I need to tell you something. I first noticed you on Instagram — your presence caught my attention immediately. But what really made me stop scrolling was seeing how incredibly supportive you were during my hackathon. While I was stressed and trying to make things work, you were there cheering me on.

I've been wanting to reach out ever since. Your smile, your beauty, and most of all, your genuinely good heart — these are things I haven't been able to stop thinking about.

I don't know you well yet, but I really want to. I'd love to learn what makes you laugh, your favorite songs, and what you dream about when no one's watching.

So here's my question — would you let me take you out? Just one evening. Coffee, dinner, a walk, whatever sounds good to you. I promise to make it worth your time.

No pressure, just two people seeing if something clicks.

Hoping you'll say yes,
💕`;

interface LoveLetterProps {
  onComplete: () => void;
}

const LoveLetter = ({ onComplete }: LoveLetterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (skip) {
      setDisplayedText(LETTER);
      setIsComplete(true);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < LETTER.length) {
        setDisplayedText(LETTER.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [skip]);

  return (
    <section className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-card rounded-2xl shadow-card p-8 md:p-12 border border-border relative overflow-hidden"
      >
        {/* Decorative envelope flap */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-button rounded-t-2xl" />

        <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-8">
          A Letter For You
        </h2>

        <div className="font-body text-foreground leading-relaxed whitespace-pre-wrap text-base md:text-lg min-h-[300px]">
          {displayedText}
          {!isComplete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
            />
          )}
        </div>

        {!isComplete && (
          <button
            onClick={() => setSkip(true)}
            className="mt-4 text-muted-foreground text-sm underline hover:text-primary transition-colors"
          >
            Skip animation
          </button>
        )}

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <button
              onClick={onComplete}
              className="bg-gradient-button text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-lg shadow-soft hover:shadow-glow transition-shadow"
            >
              Continue →
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default LoveLetter;
