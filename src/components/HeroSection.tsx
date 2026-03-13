import { motion } from "framer-motion";

interface HeroSectionProps {
  onNext: () => void;
}

const HeroSection = ({ onNext }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-hero relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-6xl md:text-7xl font-display text-gradient-romantic text-center leading-tight"
      >
        Hey Carren Green…
        <br />
        I Built You Something ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-lg sm:text-xl text-muted-foreground text-center max-w-md font-body"
      >
        Before you scroll… just know this website exists because someone likes
        you a lot.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-10 px-8 py-4 rounded-full bg-gradient-button text-primary-foreground font-body font-semibold text-lg shadow-glow animate-pulse-soft"
      >
        Okay… I'm curious 👀
      </motion.button>
    </section>
  );
};

export default HeroSection;
