import { Sparkles } from "lucide-react";
import AssistantCard from "./AssistantCard";

const TitleGenerator = () => {
  return (
    <AssistantCard
      icon={<Sparkles className="text-violet-400" />}
      title="Suggested Titles"
      description="Generate high CTR YouTube titles."
    >
      <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-500">
        Generate Titles
      </button>
    </AssistantCard>
  );
};

export default TitleGenerator;