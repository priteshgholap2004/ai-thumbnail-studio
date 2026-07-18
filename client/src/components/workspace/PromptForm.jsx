import { useEffect } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { useThumbnail } from "../../context/ThumbnailContext";
import toast from "react-hot-toast";
import TemplatesBar from "./TemplatesBar";
import { useAuth } from "../../context/AuthContext";

const PromptForm = () => {
  const {
    generate,
    thumbnailLoading,

    prompt,
    setPrompt,

    style,
    setStyle,

    aspectRatio,
    setAspectRatio,

    editingThumbnail,

  } = useThumbnail();

  const { user, checkAuth } = useAuth();

  useEffect(() => {

    if (!editingThumbnail) return;

    setPrompt(editingThumbnail.originalPrompt);

    setStyle(editingThumbnail.style);

    setAspectRatio(editingThumbnail.aspectRatio);

  }, [
    editingThumbnail,
    setPrompt,
    setStyle,
    setAspectRatio,
  ]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt.");
      return;
    }

    if (!user || user.credits < 3) {
      toast.error("You need at least 3 credits to generate a thumbnail.");
      return;
    }

    try {
      await generate();

      await checkAuth();

      setPrompt("");

      toast.success("Thumbnail generated successfully!");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to generate thumbnail."
      );
    }
  };

  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 md:rounded-3xl md:p-5">

      <div className="mb-4">

        <div className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          AI Workspace
        </div>

        <h2 className="mt-3 text-3xl font-black text-white">
          Create Thumbnail
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Describe your idea and let AI generate a professional YouTube thumbnail.
        </p>

      </div>

      <div className="space-y-3">

        <div>

          <div className="mb-4">

            <TemplatesBar onSelect={setPrompt} />

            <div className="mt-3 flex items-center justify-between">

              <label className="text-sm font-medium text-slate-300">
                Prompt
              </label>

              <span className="text-xs text-slate-500">
                {prompt.length} / 1000
              </span>

            </div>

          </div>

          <textarea
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: MrBeast shocked face holding ₹1 Crore with dramatic lighting..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
          />

          <p className="mt-2 text-xs text-slate-500">
            💡 The more detailed your prompt, the better your thumbnail.
          </p>

        </div>

        <button
          onClick={handleGenerate}
          disabled={thumbnailLoading || !user || user.credits < 3}
          className="flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-3.5 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:from-slate-700 disabled:to-slate-700 disabled:text-slate-400 disabled:hover:scale-100"
        >
          {thumbnailLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Generating...
            </>
          ) : user?.credits < 3 ? (
            <>
              <Sparkles size={20} />
              Not Enough Credits
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate Thumbnail
            </>
          )}
        </button>

        <div className="grid gap-3 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Style
            </label>

            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2.5 text-white transition focus:border-violet-500"
            >
              <option>Modern Creator</option>
              <option>Cinematic</option>
              <option>MrBeast Style</option>
              <option>Gaming</option>
              <option>Tech & Coding</option>
              <option>Finance</option>
              <option>Business</option>
              <option>Documentary</option>
              <option>Podcast</option>
              <option>Luxury</option>
              <option>Minimal</option>
              <option>Dark Theme</option>
              <option>Neon</option>
              <option>Anime</option>
              <option>Realistic</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Aspect Ratio
            </label>

            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value.split(" ")[0])}
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2.5 text-white transition focus:border-violet-500"
            >
              <option>16:9 — YouTube Thumbnail</option>
              <option>9:16 — Shorts / Reels</option>
              <option>1:1 — Instagram Post</option>
              <option>4:5 — Instagram Portrait</option>
              <option>3:2 — Blog Image</option>
            </select>

          </div>

        </div>



      </div>

    </div>
  );
};

export default PromptForm;