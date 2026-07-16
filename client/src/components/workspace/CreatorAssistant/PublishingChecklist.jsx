import { CheckCircle2 } from "lucide-react";

const PublishingChecklist = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h3 className="mb-5 text-xl font-bold text-white">
        Publishing Checklist
      </h3>

      <div className="space-y-3">

        <div className="flex items-center gap-3 text-slate-300">
          <CheckCircle2 className="text-green-500" size={18} />
          Thumbnail Ready
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          ○ Title Pending
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          ○ Description Pending
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          ○ Tags Pending
        </div>

      </div>

    </div>
  );
};

export default PublishingChecklist;