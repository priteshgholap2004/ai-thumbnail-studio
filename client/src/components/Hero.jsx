import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroPreviewData from "../constants/heroPreviewData";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [currentPreview, setCurrentPreview] = useState(0);
  const [status, setStatus] = useState("Enhancing Prompt...");

  useEffect(() => {
    const interval = setInterval(() => {

      setStatus("Enhancing Prompt...");

      setTimeout(() => {
        setStatus("Generating Image...");
      }, 900);

      setTimeout(() => {
        setStatus("Ready");
      }, 1800);

      setTimeout(() => {
        setCurrentPreview((prev) => (prev + 1) % heroPreviewData.length);
      }, 2600);

    }, 3500);

    return () => clearInterval(interval);

  }, []);
  const preview = heroPreviewData[currentPreview];
  return (


    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden scroll-mt-16"
    >

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />


      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-14 md:flex-row lg:gap-20">

        {/* LEFT */}

        <div className="flex flex-1 flex-col items-center justify-center md:items-start md:text-left text-center">

          <span className="inline-flex w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 md:self-start self-center">

            PNG Studios

          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">

            Create

            <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">

              YouTube Assets

            </span>

            with AI

          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg">

            Generate professional thumbnails using Gemini for prompt enhancement and FLUX AI for cinematic image generation.

          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row md:justify-start">

            <Link
              to="/register"
              className="w-full rounded-xl bg-violet-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-violet-500 sm:w-auto"
            >
              Launch Workspace
            </Link>

            <button className="w-full rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-violet-500 sm:w-auto">

              View Demo

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="mt-12 flex flex-1 justify-center lg:mt-0 lg:flex-[0.85]">

          <div className="mx-auto w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-xl shadow-2xl">

            <div className="mb-4 flex items-center justify-between">

              <h3 className="font-semibold">

                PNG Studio AI Workspace

              </h3>

              <span className="flex max-w-fit items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-[11px] sm:text-xs font-medium text-green-400">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>

                {status}

              </span>

            </div>

            <div className="space-y-3">

              <div>

                <label className="text-sm text-slate-400">

                  Prompt

                </label>

                <div
                  key={preview.prompt}
                  className="mt-2 animate-fade rounded-xl bg-slate-900 px-4 py-3"
                >
                  {preview.prompt}
                </div>

              </div>

              <div>

                <label className="text-sm text-slate-400">

                  Style

                </label>

                <div
                  key={preview.style}
                  className="mt-2 animate-fade rounded-xl bg-slate-900 px-4 py-3"
                >
                  {preview.style}
                </div>

              </div>

              <button
                className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-violet-600
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-violet-500
                hover:shadow-lg
                hover:shadow-violet-500/30
                active:scale-[0.98]
              "
              >
                Generate Thumbnail

                <ArrowRight size={18} />
              </button>

              <div className="overflow-hidden rounded-2xl bg-slate-900">

                <div className="aspect-video overflow-hidden rounded-xl">

                  <div
                    key={currentPreview}
                    className="animate-fade"
                  >
                    <img
                      src={preview.image}
                      alt={preview.prompt}
                      className="mx-auto aspect-video w-full rounded-xl object-cover"
                    />
                  </div>

                </div>

                <div className="mt-3 flex items-center justify-between text-sm">

                  <span
                    key={preview.time}
                    className="animate-fade text-slate-400"
                  >
                    Generated in {preview.time}
                  </span>

                  <span className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">

                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

                    Ready

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;