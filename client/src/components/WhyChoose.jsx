import {
  Sparkles,
  Image,
  ShieldCheck,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "AI Prompt Intelligence",
    text: "Transform simple ideas into detailed prompts using Gemini AI.",
  },
  {
    icon: Image,
    title: "Professional Quality",
    text: "Generate cinematic YouTube thumbnails using FLUX AI.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    text: "Every generated thumbnail is safely stored in Cloudinary.",
  },
  {
    icon: Zap,
    title: "Fast Workflow",
    text: "Generate thumbnails in seconds with a streamlined AI pipeline.",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why-png"
      className="py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            WHY PNG STUDIOS
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Built for Modern Content Creators
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            PNG Studios combines powerful AI models with an intuitive workspace
            so you can focus on creating content instead of designing thumbnails.
          </p>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                min-h-[150px]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
                hover:bg-white/10
                hover:shadow-xl
                hover:shadow-violet-500/10
                "
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 ring-1 ring-violet-500/20 transition group-hover:bg-violet-500/20">

                  <Icon
                    size={28}
                    className="text-violet-400"
                  />

                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;