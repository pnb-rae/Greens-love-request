import { motion } from "framer-motion";
import { useMusic } from "./MusicProvider";

const MusicToggle = () => {
  const { playing, toggle } = useMusic();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={toggle}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center text-xl border border-border hover:shadow-glow transition-shadow"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? "🔊" : "🔇"}
    </motion.button>
  );
};

export default MusicToggle;
