import { Link } from "react-router-dom";
import { UserCircle, Coins, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const WorkspaceNavbar = () => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 md:h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex flex-col shrink-0">
          <span className="text-base md:text-2xl font-black leading-none">
            <span className="text-violet-500">PNG</span>{" "}
            <span className="text-white">Studios</span>
          </span>

          <span className="hidden md:block text-xs text-slate-500">
            AI Creator Platform
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 md:px-4 py-2">
            <Coins size={18} className="text-yellow-400" />

            <span className="font-semibold text-white">
              {user ? `${user.credits} Credits` : "..."}
            </span>
          </div>

          <div ref={menuRef} className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 md:px-4 py-2 transition hover:bg-white/10"
            >
              <UserCircle className="text-violet-400" size={22} />

              <span className="hidden md:block text-white">
                {user?.name?.split(" ")[0]}
              </span>
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-xl">
                <div className="border-b border-white/10 p-4">
                  <p className="font-semibold text-white">{user?.name}</p>

                  <p className="break-all text-sm text-slate-400">
                    {user?.email}
                  </p>
                </div>

                <button
                  onClick={async () => {
                    setShowMenu(false);
                    await logout();
                  }}
                  className="flex w-full items-center gap-2 px-4 py-3 text-red-400 hover:bg-white/5"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkspaceNavbar;