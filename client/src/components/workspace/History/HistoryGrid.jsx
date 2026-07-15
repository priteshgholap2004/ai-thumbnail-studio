import { useState, useEffect } from "react";
import ImageModal from "../ImageModal";
import { Trash2, Download } from "lucide-react";
import { useThumbnail } from "../../../context/ThumbnailContext";
import DeleteModal from "../DeleteModal";

const HistoryGrid = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [thumbnailToDelete, setThumbnailToDelete] = useState(null);

  const {
    history,
    loading,
    fetchHistory,
    removeThumbnail,
    setThumbnail,
  } = useThumbnail();

  useEffect(() => {
    fetchHistory();
  }, []);

  const downloadImage = async (item) => {
    try {
      const response = await fetch(item.imageUrl);

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;

      const filename = `PNG-Studios-${item.originalPrompt
        .split(" ")
        .slice(0, 5)
        .join("-")}.jpg`;

      link.download = filename;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(blobUrl);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="mt-10">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Recent Creations
        </h2>

        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
          {history.length} Images
        </span>

      </div>

      {loading && history.length === 0 ? (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >

              <div className="aspect-video bg-slate-700" />

              <div className="space-y-3 p-4">

                <div className="h-5 rounded bg-slate-700" />

                <div className="h-4 w-2/3 rounded bg-slate-700" />

              </div>

            </div>

          ))}

        </div>

      ) : history.length === 0 ? (

        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 py-16 text-center">

          <h3 className="text-xl font-semibold text-white">
            No thumbnails yet
          </h3>

          <p className="mt-2 text-slate-400">
            Generate your first AI thumbnail to see it here.
          </p>

        </div>

      ) : (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {history.map((item) => (

            <div
              key={item._id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500"
            >

              <img
                src={item.imageUrl}
                alt={item.originalPrompt}
                onClick={() => {
                  setThumbnail(item);
                  setSelectedImage(item);
                }}
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

                <div className="mt-4 flex justify-end gap-2">

                  <button
                    onClick={() => downloadImage(item)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 transition hover:bg-violet-600"
                  >
                    <Download size={18} className="text-white" />
                  </button>

                  <button
                    onClick={() => {
                      setThumbnailToDelete(item._id);
                      setShowDeleteModal(true);
                    }}
                    className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-500"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

      <ImageModal
        image={selectedImage}
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />

      <DeleteModal
        open={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setThumbnailToDelete(null);
        }}
        onConfirm={async () => {
          await removeThumbnail(thumbnailToDelete);

          setShowDeleteModal(false);
          setThumbnailToDelete(null);
        }}
      />

    </section>
  );
};

export default HistoryGrid;