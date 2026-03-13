import { motion } from "framer-motion";

const MILESTONES = [
  { emoji: "👀", title: "The First Time I Noticed You", description: "I saw you and thought, 'Wow, I need to know this person.'", date: "That Moment" },
  { emoji: "🤔", title: "The Planning", description: "Spent way too long thinking about how to ask you out.", date: "Recently" },
  { emoji: "💻", title: "Making This Website", description: "Yes, I made an entire website just to ask you out. That's how much I want this to be special.", date: "Right Now" },
  { emoji: "☕", title: "Our First Date?", description: "Imagining us talking for hours, losing track of time...", date: "Hopefully Soon" },
  { emoji: "🌙", title: "Late Night Conversations", description: "I hope we have those 3 AM talks about everything and nothing.", date: "The Future" },
  { emoji: "🦋", title: "The Possibilities", description: "Who knows where this could lead? That's the exciting part.", date: "Up to Us" },
  { emoji: "💫", title: "Right Now", description: "Building up the courage to finally ask you...", date: "Today" },
];

interface MemoryTimelineProps {
  onComplete: () => void;
}

const MemoryTimeline = ({ onComplete }: MemoryTimelineProps) => {
  return (
    <section className="min-h-screen bg-gradient-hero py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl md:text-5xl text-primary text-center mb-16"
      >
        Our Story So Far
      </motion.h2>

      <div className="max-w-2xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

        {MILESTONES.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative flex items-start mb-12 ${
              index % 2 === 0
                ? "md:flex-row md:text-right"
                : "md:flex-row-reverse md:text-left"
            } flex-row`}
          >
            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <div className="bg-card rounded-xl p-5 shadow-card border border-border">
                <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">
                  {milestone.date}
                </span>
                <h3 className="font-display text-xl text-foreground mt-1">
                  {milestone.title}
                </h3>
                <p className="font-body text-muted-foreground mt-1 text-sm">
                  {milestone.description}
                </p>
              </div>
            </div>

            {/* Circle on timeline */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-button flex items-center justify-center text-xl shadow-soft z-10">
              {milestone.emoji}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <button
          onClick={onComplete}
          className="bg-gradient-button text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-lg shadow-soft hover:shadow-glow transition-shadow"
        >
          Keep Going →
        </button>
      </motion.div>
    </section>
  );
};

export default MemoryTimeline;
