import { X, Download } from "lucide-react";

const ImageModal = ({
  image,
  open,
  onClose,
}) => {

  if (!open || !image) return null;

  const downloadImage = async () => {

    try {

      const response = await fetch(image.imageUrl);

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const filename =
        `PNG-Studios-${
          image.originalPrompt
            .split(" ")
            .slice(0,5)
            .join("-")
        }.jpg`;

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

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">

      <div className="relative w-[92%] max-w-6xl">

        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-red-600"
        >
          <X size={22}/>
        </button>

        <img
          src={image.imageUrl}
          alt=""
          className="max-h-[80vh] w-full rounded-2xl object-contain"
        />

        <button
          onClick={downloadImage}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-500"
        >
          <Download size={20}/>
          Download
        </button>

      </div>

    </div>

  );

};

export default ImageModal;