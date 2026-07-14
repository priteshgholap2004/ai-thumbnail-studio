import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[32px] border border-violet-500/20 bg-gradient-to-br from-violet-900/50 via-slate-900 to-cyan-950/50 px-8 py-20 text-center shadow-2xl">

          {/* Background Glows */}

          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />

          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

          {/* Content */}

          <div className="relative z-10">

            <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              START CREATING TODAY
            </span>

            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">

              Ready to Create Better
              <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                YouTube Content with AI?
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">

              Generate professional thumbnails in seconds using
              <span className="font-semibold text-white"> Gemini </span>
              for prompt enhancement and
              <span className="font-semibold text-white"> FLUX AI </span>
              for cinematic image generation.

            </p>

            <Link
              to="/register"
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-purple-500
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                hover:shadow-violet-500/30
                active:scale-95
              "
            >
              Launch Workspace

              <ArrowRight size={18} />

            </Link>

            <p className="mt-6 text-sm text-slate-400">
              Powered by Gemini • FLUX AI • Cloudinary
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;