import {
  Sparkles,
  Image,
  Cloud,
  History,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Prompt Enhancement",
    description:
      "Gemini rewrites your ideas into detailed prompts for better thumbnail generation.",
  },
  {
    icon: Image,
    title: "AI Thumbnail Generation",
    description:
      "Generate high-quality thumbnails using FLUX AI in just a few seconds.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description:
      "Every generated thumbnail is securely stored in Cloudinary.",
  },
  {
    icon: History,
    title: "Generation History",
    description:
      "Access, manage and download all your previous AI creations.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          FEATURES
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Everything You Need
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          PNG Studios combines powerful AI models with an intuitive
          workspace to help creators design better YouTube thumbnails.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-violet-600/20 p-4 text-violet-400">
                <Icon size={30} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Features;