import {
  Mic,
  FileText,
  Clapperboard,
  Image,
} from "lucide-react";

const roadmap = [
  {
    title: "AI Thumbnail Generator",
    status: "Available",
    completed: true,
    icon: Image,
  },
  {
    title: "AI Voice Cleaner",
    status: "Coming Soon",
    completed: false,
    icon: Mic,
  },
  {
    title: "AI Script Generator",
    status: "Coming Soon",
    completed: false,
    icon: FileText,
  },
  {
    title: "AI Video Generator",
    status: "Future",
    completed: false,
    icon: Clapperboard,
  },
];

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="mx-auto max-w-5xl px-6 pt-24 pb-20"
    >
      <div className="text-center">

        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          PRODUCT ROADMAP
        </span>

        <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
          Growing Beyond Thumbnails
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
          PNG Studios is evolving into a complete AI Creator Platform.
          Thumbnail generation is only the beginning.
        </p>

      </div>

      <div className="relative mx-auto mt-16 max-w-4xl pl-10">

        {/* Vertical Line */}
        <div className="absolute left-5 top-4 h-[88%] w-[2px] bg-violet-400/35" />

        <div className="space-y-8">

          {roadmap.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-6"
              >

                {/* Timeline Icon */}
                <div
                  className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${item.completed
                      ? "border-emerald-500 bg-emerald-500/15 group-hover:shadow-emerald-500/30"
                      : "border-violet-500/30 bg-violet-500/10 group-hover:shadow-violet-500/30"
                    }`}
                >
                  <Icon
                    size={18}
                    className={
                      item.completed
                        ? "text-emerald-400"
                        : "text-violet-400"
                    }
                  />
                </div>

                {/* Content */}
                <div
                  className="
                  group
                  max-w-2xl
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/40
                  hover:shadow-2xl
                  hover:shadow-violet-500/20
                "
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${item.status === "Available"
                        ? "bg-emerald-500/15 text-emerald-400 group-hover:bg-emerald-500/25 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                        : item.status === "Coming Soon"
                          ? "bg-yellow-500/15 text-yellow-400 group-hover:bg-yellow-500/25 group-hover:shadow-lg group-hover:shadow-yellow-500/20"
                          : "bg-sky-500/15 text-sky-400 group-hover:bg-sky-500/25 group-hover:shadow-lg group-hover:shadow-sky-500/20"
                        }`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <p className="mt-2 text-slate-400">
                    {item.status}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Roadmap;