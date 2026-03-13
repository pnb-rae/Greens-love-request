import BigQuestion from "@/components/BigQuestion";
import SecretMessage from "@/components/SecretMessage";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <BigQuestion onYes={() => navigate("/celebration")} />
      <SecretMessage />
    </PageTransition>
  );
};

export default QuestionPage;
