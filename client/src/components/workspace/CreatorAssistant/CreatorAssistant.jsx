import TitleGenerator from "./TitleGenerator";
import DescriptionGenerator from "./DescriptionGenerator";
import TagsGenerator from "./TagsGenerator";
import ThumbnailScore from "./ThumbnailScore";
import PublishingChecklist from "./PublishingChecklist";

const CreatorAssistant = () => {
  return (
    <section className="mt-10">

      <div className="mb-6">

        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-400">
          AI Creator Assistant
        </span>

        <h2 className="mt-3 text-3xl font-black text-white">
          Optimize Your Content
        </h2>

        <p className="mt-2 text-slate-400">
          Generate titles, descriptions, tags and optimize your video before publishing.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <TitleGenerator />

        <DescriptionGenerator />

        <TagsGenerator />

        <ThumbnailScore />

      </div>

      <div className="mt-6">

        <PublishingChecklist />

      </div>

    </section>
  );
};

export default CreatorAssistant;