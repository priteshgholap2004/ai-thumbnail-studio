const PreviewPanel = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">

          Live Preview

        </h2>

        <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-400">

          Ready

        </span>

      </div>

      <div className="flex h-[340px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-900">

        <p className="text-slate-500">

          Generated thumbnail will appear here

        </p>

      </div>

    </div>
  );
};

export default PreviewPanel;