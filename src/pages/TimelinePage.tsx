import MemoryTimeline from "@/components/MemoryTimeline";
import PageTransition from "@/components/PageTransition";
import { useNavigate } from "react-router-dom";

const TimelinePage = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <MemoryTimeline onComplete={() => navigate("/scratch-card")} />
    </PageTransition>
  );
};

export default TimelinePage;
