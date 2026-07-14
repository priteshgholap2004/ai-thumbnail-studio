const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col items-center gap-8 text-center">

          {/* Logo */}

          <div>

            <h3 className="text-3xl font-black">

              <span className="text-violet-500">PNG</span>{" "}

              <span className="text-white">Studios</span>

            </h3>

            <p className="mt-3 max-w-md text-slate-400">

              Create Better Content with AI. Generate professional YouTube
              thumbnails and creator assets in seconds.

            </p>

          </div>

          {/* Powered By */}

          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">

              Powered By

            </p>

            <div className="flex flex-wrap justify-center gap-3">

              {[
                "React",
                "Express",
                "MongoDB",
                "Gemini AI",
                "FLUX AI",
                "Cloudinary",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Divider */}

          <div className="h-px w-full bg-white/10"></div>

          {/* Bottom */}

          <div className="flex w-full flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">

            <p>

              © 2026 PNG Studios. All rights reserved.

            </p>

            <p>

              Built by <span className="text-slate-300">Pritesh Gholap</span>

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;