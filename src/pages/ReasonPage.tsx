import ReasonSection from "@/components/ReasonSection";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const ReasonPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <ReasonSection onNext={() => navigate("/cards")} />
    </PageTransition>
  );
};

export default ReasonPage;
