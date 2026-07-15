import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { useThumbnail } from "../../context/ThumbnailContext";
import toast from "react-hot-toast";

const PromptForm = () => {
  const {
    generate,
    loading,

    prompt,
    setPrompt,

    style,
    setStyle,

    aspectRatio,
    setAspectRatio,

  } = useThumbnail();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt.");
      return;
    }

    try {
      await generate();

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
    <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 p-5">

      <div className="mb-6">

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

      <div className="space-y-4">

        <div>

          <div className="mb-2 flex items-center justify-between">

            <label className="text-sm font-medium text-slate-300">
              Prompt
            </label>

            <span className="text-xs text-slate-500">
              {prompt.length} / 1000
            </span>

          </div>

          <textarea
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: MrBeast shocked face holding ₹1 Crore with dramatic lighting..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
          />

          <p className="mt-2 text-xs text-slate-500">
            💡 The more detailed your prompt, the better your thumbnail.
          </p>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Style
            </label>

            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white"
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
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white"
            >
              <option>16:9 — YouTube Thumbnail</option>
              <option>9:16 — Shorts / Reels</option>
              <option>1:1 — Instagram Post</option>
              <option>4:5 — Instagram Portrait</option>
              <option>3:2 — Blog Image</option>
            </select>

          </div>

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate Thumbnail
            </>
          )}
        </button>

      </div>

    </div>
  );
};

export default PromptForm;