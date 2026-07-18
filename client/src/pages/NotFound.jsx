import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">

        <h1 className="text-8xl font-black text-violet-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;