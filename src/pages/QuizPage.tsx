import LoveQuiz from "@/components/LoveQuiz";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <LoveQuiz onComplete={() => navigate("/question")} />
    </PageTransition>
  );
};

export default QuizPage;
