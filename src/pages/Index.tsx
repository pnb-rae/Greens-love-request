import HeroSection from "@/components/HeroSection";
import SecretMessage from "@/components/SecretMessage";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <SecretMessage />
      <HeroSection onNext={() => navigate("/reason")} />
    </PageTransition>
  );
};

export default Index;
