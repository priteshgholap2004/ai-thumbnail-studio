import { FileText, Loader2, Copy } from "lucide-react";
import toast from "react-hot-toast";

import AssistantCard from "./AssistantCard";

import { useCreator } from "../../../context/CreatorContext";
import { useThumbnail } from "../../../context/ThumbnailContext";

const DescriptionGenerator = () => {

  const {
    description,
    descriptionLoading,
    getDescription,
  } = useCreator();

  const { prompt } = useThumbnail();

  const handleGenerate = async () => {

    if (!prompt.trim()) {
      toast.error("Please enter a prompt first.");
      return;
    }

    try {

      await getDescription(prompt);

      toast.success("Description generated.");

    } catch {

      toast.error("Failed to generate description.");

    }

  };

  const copyDescription = () => {

    navigator.clipboard.writeText(description);

    toast.success("Description copied.");

  };

  return (

    <AssistantCard
      title="Description"
      description="Generate an SEO-friendly YouTube description."
    >

      <button
        onClick={handleGenerate}
        disabled={descriptionLoading}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white"
      >

        {descriptionLoading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Generating...
          </>
        ) : (
          <>
            <FileText size={18} />
            Generate Description
          </>
        )}

      </button>

      {description && (

        <div className="mt-5 rounded-xl border border-white/10 bg-slate-900/60 p-4">

          <p className="whitespace-pre-wrap text-sm text-white">
            {description}
          </p>

          <button
            onClick={copyDescription}
            className="mt-4 flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-violet-600"
          >
            <Copy size={16} />
            Copy
          </button>

        </div>

      )}

    </AssistantCard>

  );

};

export default DescriptionGenerator;