import {
  Brain,
  Database,
  Cloud,
  Cpu,
  Server,
  Sparkles,
} from "lucide-react";

const tech = [
  {
    icon: Brain,
    name: "Gemini AI",
  },
  {
    icon: Sparkles,
    name: "FLUX AI",
  },
  {
    icon: Cloud,
    name: "Cloudinary",
  },
  {
    icon: Database,
    name: "MongoDB",
  },
  {
    icon: Server,
    name: "Express",
  },
  {
    icon: Cpu,
    name: "React",
  },
];

const TrustedTech = () => {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <p className="mb-10 text-center text-sm uppercase tracking-[0.35em] text-slate-500">
          Powered By
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">

          {tech.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500/40 hover:bg-white/10"
              >
                <Icon
                  size={32}
                  className="mb-4 text-violet-400"
                />

                <span className="text-sm font-medium text-slate-300">
                  {item.name}
                </span>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default TrustedTech;