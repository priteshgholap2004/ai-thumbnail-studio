import { useState } from "react";
import {
  Loader2,
  Download,
  ImageIcon,
} from "lucide-react";
import { useThumbnail } from "../../context/ThumbnailContext";
import ImageModal from "./ImageModal";

const PreviewPanel = () => {
  const { thumbnail, loading } = useThumbnail();

  const [open, setOpen] = useState(false);

  const downloadImage = async () => {
    if (!thumbnail) return;

    try {
      const response = await fetch(thumbnail.imageUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const filename = `PNG-Studios-${thumbnail.originalPrompt
        .split(" ")
        .slice(0, 5)
        .join("-")}.jpg`;

      const link = document.createElement("a");

      link.href = url;
      link.download = filename;

      document.body.appendChild(link);
      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">
          Live Preview
        </h2>

        <span
          className={`rounded-full px-4 py-1 text-sm ${loading
            ? "bg-yellow-500/20 text-yellow-400"
            : "bg-emerald-500/20 text-emerald-400"
            }`}
        >
          {loading ? "Generating..." : "Ready"}
        </span>

      </div>

      <div className="flex h-[260px] w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/10 bg-slate-900 md:h-[340px]">

        {loading ? (

          <div className="flex flex-col items-center gap-4">

            <Loader2
              size={42}
              className="animate-spin text-violet-500"
            />

            <div className="text-center">

              <p className="font-medium text-white">
                AI is generating your thumbnail
              </p>

              <p className="mt-2 text-sm text-slate-400">
                This usually takes 10–20 seconds.
              </p>

            </div>

          </div>

        ) : thumbnail ? (

          <img
            src={thumbnail.imageUrl}
            alt="Generated Thumbnail"
            onClick={() => setOpen(true)}
            className="h-full w-full cursor-zoom-in object-contain transition duration-300 hover:scale-[1.01]"
          />

        ) : (

          <div className="flex w-full max-w-xs flex-col items-center px-4 text-center">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10">

              <ImageIcon
                size={42}
                className="text-violet-400"
              />

            </div>

            <h3 className="text-lg font-semibold text-white">
              No Thumbnail Yet
            </h3>

            <p className="mt-2 w-full text-sm leading-6 text-slate-400">
              Enter a prompt and click
              <span className="font-medium text-violet-400">
                {" "}Generate Thumbnail
              </span>
              {" "}to preview your AI image.
            </p>

          </div>

        )}

      </div>

      {thumbnail && !loading && (

        <button
          onClick={downloadImage}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500"
        >
          <Download size={18} />
          Download Thumbnail
        </button>

      )}

      <ImageModal
        image={thumbnail}
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
};

export default PreviewPanel;