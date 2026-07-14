import {
  PencilLine,
  Sparkles,
  Image,
  Download,
} from "lucide-react";

import FadeInSection from "../components/common/FadeInSection";

const steps = [
  {
    number: "01",
    title: "Write Your Prompt",
    description:
      "Describe the thumbnail you want in simple natural language.",
    icon: PencilLine,
  },
  {
    number: "02",
    title: "AI Prompt Intelligence",
    description:
      "Gemini enhances your prompt for better image quality.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Generate Thumbnail",
    description:
      "FLUX AI creates a professional YouTube thumbnail.",
    icon: Image,
  },
  {
    number: "04",
    title: "Save & Download",
    description:
      "Your thumbnail is stored in Cloudinary and ready to use.",
    icon: Download,
  },
];

const HowItWorks = () => {
  return (
    <section
  id="how-it-works"
  className="mx-auto max-w-7xl px-6 pt-24 pb-20"
>
      <FadeInSection>

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Create Thumbnails in 4 Simple Steps
            </h2>

            <p className="mt-5 text-lg text-slate-400">
              A streamlined AI workflow that transforms your idea into a
              professional YouTube thumbnail in just a few clicks.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-18 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    min-h-[235px]
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-violet-500/30
                    hover:bg-gradient-to-br
                    hover:from-violet-500/10
                    hover:to-transparent
                    hover:shadow-2xl
                    hover:shadow-violet-500/10
                  "
                >

                  {/* Top */}

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 ring-1 ring-violet-500/20 transition group-hover:bg-violet-500/20">

                      <Icon
                        size={24}
                        className="text-violet-400"
                      />

                    </div>

                    <span className="text-5xl font-black text-slate-800/70">
                      {step.number}
                    </span>

                  </div>

                  {/* Content */}

                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </FadeInSection>
    </section>
  );
};

export default HowItWorks;