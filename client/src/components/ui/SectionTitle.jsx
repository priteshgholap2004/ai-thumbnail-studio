const SectionTitle = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

        {badge}

      </span>

      <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

        {title}

      </h2>

      <p className="mt-6 text-lg text-slate-400">

        {description}

      </p>

    </div>
  );
};

export default SectionTitle;