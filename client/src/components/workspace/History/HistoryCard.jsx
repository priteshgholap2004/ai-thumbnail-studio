import { Download, Trash2, Pencil, RotateCw } from "lucide-react";

const HistoryCard = ({
  item,
  onPreview,
  onDownload,
  onDelete,
  onEdit,
  onRegenerate,
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500">

      <img
        src={item.imageUrl}
        alt={item.originalPrompt}
        onClick={() => onPreview(item)}
        className="aspect-video w-full cursor-pointer object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-4">

        <h3 className="truncate font-semibold text-white">
          {item.originalPrompt}
        </h3>

        <div className="mt-2 flex items-center justify-between">

          <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
            {item.style}
          </span>

          <span className="text-xs text-slate-500">
            {item.aspectRatio}
          </span>

        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">

          <button
            onClick={() => onEdit(item)}
            className="rounded-lg bg-slate-700 p-2 text-white transition hover:bg-blue-600"
            title="Edit Prompt"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onRegenerate(item)}
            className="rounded-lg bg-slate-700 p-2 text-white transition hover:bg-green-600"
            title="Regenerate"
          >
            <RotateCw size={18} />
          </button>

          <button
            onClick={() => onDownload(item)}
            className="rounded-lg bg-slate-700 p-2 text-white transition hover:bg-violet-600"
            title="Download"
          >
            <Download size={18} />
          </button>

          <button
            onClick={() => onDelete(item)}
            className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-500"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default HistoryCard;