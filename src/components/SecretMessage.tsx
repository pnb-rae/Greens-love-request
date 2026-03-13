import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SecretMessage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 text-xs text-muted-foreground/50 hover:text-muted-foreground font-body transition-colors"
      >
        Secret Message 🤫
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-card rounded-2xl p-8 max-w-sm shadow-card text-center"
            >
              <p className="text-lg font-body text-foreground leading-relaxed">
                If you're seeing this… it means you explored the whole website.
                Which means you're curious. Which is already a good sign 😌
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 text-sm text-primary font-body font-semibold"
              >
                Close 💕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SecretMessage;
