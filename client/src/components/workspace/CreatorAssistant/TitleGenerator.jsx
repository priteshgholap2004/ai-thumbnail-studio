import { Sparkles, Loader2, Copy } from "lucide-react";
import toast from "react-hot-toast";

import AssistantCard from "./AssistantCard";

import { useCreator } from "../../../context/CreatorContext";
import { useThumbnail } from "../../../context/ThumbnailContext";

const TitleGenerator = () => {
  const {
  titles,
  titlesLoading,
  getTitles,
} = useCreator();

  const { prompt } = useThumbnail();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt first.");
      return;
    }

    try {
      await getTitles(prompt);

      toast.success("Titles generated successfully.");
    } catch{
      toast.error("Failed to generate titles.");
    }
  };

  const copyTitle = (title) => {
    navigator.clipboard.writeText(title);

    toast.success("Title copied.");
  };

  return (
    <AssistantCard
      title="Suggested Titles"
      description="Generate high CTR YouTube titles."
    >
      <button
        onClick={handleGenerate}
        disabled={titlesLoading}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-50"
      >
        {titlesLoading  ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Generating...
          </>
        ) : (
          <>
            <Sparkles size={18} />
            Generate Titles
          </>
        )}
      </button>

      {titles.length > 0 && (
        <div className="mt-5 space-y-3">
          {titles.map((title, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 p-3"
            >
              <p className="text-sm text-white">{title}</p>

              <button
                onClick={() => copyTitle(title)}
                className="rounded-lg bg-slate-700 p-2 transition hover:bg-violet-600"
              >
                <Copy size={16} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
    </AssistantCard>
  );
};

export default TitleGenerator;