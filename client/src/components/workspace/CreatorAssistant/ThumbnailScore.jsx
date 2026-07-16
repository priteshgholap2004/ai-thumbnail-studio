import { Star } from "lucide-react";
import AssistantCard from "./AssistantCard";

const ThumbnailScore = () => {
  return (
    <AssistantCard
      icon={<Star className="text-yellow-400" />}
      title="Thumbnail Score"
      description="AI quality analysis."
    >
      <div className="rounded-xl border border-dashed border-white/10 py-8 text-center text-slate-500">
        Coming Soon
      </div>
    </AssistantCard>
  );
};

export default ThumbnailScore;