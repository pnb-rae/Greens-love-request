import LoveLetter from "@/components/LoveLetter";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const LoveLetterPage = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <LoveLetter onComplete={() => navigate("/timeline")} />
    </PageTransition>
  );
};

export default LoveLetterPage;
