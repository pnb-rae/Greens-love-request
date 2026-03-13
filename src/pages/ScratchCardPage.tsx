import ScratchCard from "@/components/ScratchCard";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const ScratchCardPage = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <ScratchCard onComplete={() => navigate("/quiz")} />
    </PageTransition>
  );
};

export default ScratchCardPage;
