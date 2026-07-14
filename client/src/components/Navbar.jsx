import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          onClick={closeMenu}
          className="flex flex-col"
        >
          <span className="text-2xl font-black tracking-tight">
            <span className="text-violet-500">PNG</span>
            <span className="text-white"> Studios</span>
          </span>

          <span className="text-xs text-slate-400">
            Create Better Content with AI
          </span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">

          <a
            href="#hero"
            className="transition duration-200 hover:text-violet-400"
          >
            Home
          </a>

          <a
            href="#why-png"
            className="transition duration-200 hover:text-violet-400"
          >
            Why PNG Studios
          </a>

          <a
            href="#how-it-works"
            className="transition duration-200 hover:text-violet-400"
          >
            How It Works
          </a>

          <a
            href="#roadmap"
            className="transition duration-200 hover:text-violet-400"
          >
            Roadmap
          </a>

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-4 md:flex">

          <Link
            to="/login"
            className="transition duration-200 text-slate-300 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition duration-200 hover:bg-violet-500"
          >
            Launch Workspace
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">

          <div className="flex flex-col gap-6 px-6 py-6">

            <a
              href="#hero"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#why-png"
              onClick={closeMenu}
              className="transition duration-200 hover:text-violet-400"
            >
              Why PNG Studios
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="transition duration-200 hover:text-violet-400"
            >
              How It Works
            </a>

            <a
              href="#roadmap"
              onClick={closeMenu}
              className="transition duration-200 hover:text-violet-400"
            >
              Roadmap
            </a>

            <Link
              to="/login"
              onClick={closeMenu}
              className="transition duration-200 hover:text-violet-400"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold text-white transition duration-200 hover:bg-violet-500"
            >
              Launch Workspace
            </Link>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;