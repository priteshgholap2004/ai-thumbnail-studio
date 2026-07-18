import { CheckCircle2 } from "lucide-react";
import { useThumbnail } from "../../../context/ThumbnailContext";
import { useCreator } from "../../../context/CreatorContext";

const PublishingChecklist = () => {
  const { thumbnail } = useThumbnail();

  const {
    titles,
    description,
    tags,
  } = useCreator();

  const checklist = [
    {
      label: "Thumbnail Ready",
      completed: !!thumbnail,
    },
    {
      label: "Title Ready",
      completed: titles.length > 0,
    },
    {
      label: "Description Ready",
      completed: description.length > 0,
    },
    {
      label: "Tags Ready",
      completed: tags.length > 0,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="mb-5 text-xl font-bold text-white">
        Publishing Checklist
      </h3>

      <div className="space-y-3">
        {checklist.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 ${
              item.completed ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {item.completed ? (
              <CheckCircle2
                className="text-green-500"
                size={18}
              />
            ) : (
              <span>○</span>
            )}

            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishingChecklist;