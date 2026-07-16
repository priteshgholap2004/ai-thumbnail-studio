import { FileText } from "lucide-react";
import AssistantCard from "./AssistantCard";

const DescriptionGenerator = () => {
  return (
    <AssistantCard
      icon={<FileText className="text-violet-400" />}
      title="Description"
      description="Create an SEO-friendly video description."
    >
      <button className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-500">
        Generate Description
      </button>
    </AssistantCard>
  );
};

export default DescriptionGenerator;