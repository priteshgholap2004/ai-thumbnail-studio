import { AlertTriangle } from "lucide-react";

const DeleteModal = ({
  open,
  onClose,
  onConfirm,
}) => {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-[90%] max-w-md rounded-3xl border border-white/10 bg-slate-900 p-6">

        <div className="mb-5 flex justify-center">

          <div className="rounded-full bg-red-500/20 p-4">

            <AlertTriangle
              size={34}
              className="text-red-500"
            />

          </div>

        </div>

        <h2 className="text-center text-2xl font-bold text-white">
          Delete Thumbnail?
        </h2>

        <p className="mt-3 text-center text-slate-400">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 py-3 text-white transition hover:bg-white/10"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteModal;