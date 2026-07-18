import { Hash, Loader2, Copy } from "lucide-react";
import AssistantCard from "./AssistantCard";
import { useThumbnail } from "../../../context/ThumbnailContext";
import { useCreator } from "../../../context/CreatorContext";
import toast from "react-hot-toast";

const TagsGenerator = () => {
  const { prompt } = useThumbnail();

  const {
    tags,
    tagsLoading,
    getTags,
  } = useCreator();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt first.");
      return;
    }

    try {
      await getTags(prompt);
      toast.success("Tags generated successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to generate tags."
      );
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tags.join(", "));
    toast.success("Tags copied!");
  };

  return (
    <AssistantCard
      icon={<Hash className="text-violet-400" />}
      title="SEO Tags"
      description="Generate optimized YouTube tags."
    >
      <button
        onClick={handleGenerate}
        disabled={tagsLoading}
        className="mb-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50"
      >
        {tagsLoading ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Generating...
          </>
        ) : (
          "Generate Tags"
        )}
      </button>

      {tags.length > 0 && (
        <>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-xl bg-slate-700 px-4 py-2 text-white hover:bg-slate-600"
          >
            <Copy size={16} />
            Copy
          </button>
        </>
      )}
    </AssistantCard>
  );
};

export default TagsGenerator;