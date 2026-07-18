const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-5">

        <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-violet-500"></div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-white">
            PNG Studios
          </h2>

          <p className="text-sm text-slate-400">
            Loading...
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loader;