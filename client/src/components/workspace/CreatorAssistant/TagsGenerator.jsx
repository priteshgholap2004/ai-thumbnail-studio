import { Hash } from "lucide-react";
import AssistantCard from "./AssistantCard";

const TagsGenerator = () => {
  return (
    <AssistantCard
      icon={<Hash className="text-violet-400" />}
      title="SEO Tags"
      description="Generate optimized YouTube tags."
    >
      <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-500">
        Generate Tags
      </button>
    </AssistantCard>
  );
};

export default TagsGenerator;