const PromptForm = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Create Thumbnail
      </h2>

      <div className="space-y-5">

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Prompt
          </label>

          <textarea
            rows={6}
            className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white outline-none focus:border-violet-500"
            placeholder="Describe your thumbnail..."
          />

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Style
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white">

            <option>Modern Creator</option>

            <option>Cyberpunk</option>

            <option>Minimal</option>

            <option>Cinematic</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Aspect Ratio
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-slate-900 p-4 text-white">

            <option>16:9</option>

            <option>1:1</option>

          </select>

        </div>

        <button className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-500">

          Generate Thumbnail

        </button>

      </div>

    </div>
  );
};

export default PromptForm;