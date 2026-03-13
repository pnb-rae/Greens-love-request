import MiniGame from "@/components/MiniGame";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <MiniGame onComplete={() => navigate("/love-letter")} />
    </PageTransition>
  );
};

export default GamePage;
