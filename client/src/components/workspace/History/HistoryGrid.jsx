import { useState, useEffect } from "react";
import ImageModal from "../ImageModal";
import { Trash2, Download } from "lucide-react";
import { useThumbnail } from "../../../context/ThumbnailContext";
import DeleteModal from "../DeleteModal";
import HistoryCard from "./HistoryCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const HistoryGrid = () => {


  const {
    history,
    loading,
    fetchHistory,
    removeThumbnail,
    setThumbnail,
    setEditingThumbnail,
    regenerate,
  } = useThumbnail();

  const [selectedImage, setSelectedImage] = useState(null);

  const [search, setSearch] = useState("");

  const [selectedStyle, setSelectedStyle] = useState("All");

  const styles = [
    ...new Set(history.map((item) => item.style)),
  ];

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [thumbnailToDelete, setThumbnailToDelete] = useState(null);

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

  const filteredHistory = history.filter((item) => {

    const matchesSearch =
      `${item.originalPrompt} ${item.style}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStyle =
      selectedStyle === "All" ||
      item.style === selectedStyle;

    return matchesSearch && matchesStyle;

  });

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <section className="mt-10">

      <div className="mb-5">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <FilterBar
          styles={styles}
          selected={selectedStyle}
          onSelect={setSelectedStyle}
        />

      </div>

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

          {filteredHistory.map((item) => (

            <HistoryCard
              key={item._id}
              item={item}

              onPreview={(image) => {
                setThumbnail(image);
                setSelectedImage(image);
              }}

              onDownload={downloadImage}

              onDelete={(image) => {
                setThumbnailToDelete(image._id);
                setShowDeleteModal(true);
              }}

              onEdit={(image) => {

                setEditingThumbnail(image);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

              }}

              onRegenerate={async (image) => {

                try {

                  await regenerate(image);

                } catch (err) {

                  console.error(err);

                }

              }}
            />

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