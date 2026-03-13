import Celebration from "@/components/Celebration";
import PageTransition from "@/components/PageTransition";

const CelebrationPage = () => {
  return (
    <PageTransition>
      <Celebration />
      <footer className="text-center py-8 bg-gradient-celebration font-body text-muted-foreground text-sm">
        Built with courage, hope… and a little bit of chaos. 💕
      </footer>
    </PageTransition>
  );
};

export default CelebrationPage;
