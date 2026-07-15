const HistoryGrid = () => {
  return (
    <section className="mt-8">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">

          Recent Creations

        </h2>

        <button className="text-violet-400">

          View All

        </button>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {Array.from({ length: 4 }).map((_, index) => (

          <div
            key={index}
            className="aspect-video rounded-2xl border border-white/10 bg-white/5"
          />

        ))}

      </div>

    </section>
  );
};

export default HistoryGrid;