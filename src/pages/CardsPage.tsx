import CardsSection from "@/components/CardsSection";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const CardsPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <CardsSection onNext={() => navigate("/game")} />
    </PageTransition>
  );
};

export default CardsPage;
