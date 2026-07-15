import { Link } from "react-router-dom";
import { UserCircle, Coins } from "lucide-react";
import { useEffect, useState } from "react";
import { getProfile } from "../../services/auth.service";

const WorkspaceNavbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();

        if (data?.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 md:px-6">

        <Link
          to="/"
          className="flex flex-col shrink-0"
        >
          <span className="text-lg md:text-2xl font-black leading-none">
            <span className="text-violet-500">PNG</span>{" "}
            <span className="text-white">Studios</span>
          </span>

          <span className="hidden md:block text-xs text-slate-500">
            AI Creator Platform
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-5">

          <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 md:px-4 py-2">

            <Coins
              size={18}
              className="text-yellow-400"
            />

            <span className="font-semibold text-white">
              {user ? `${user.credits} Credits` : "..."}
            </span>

          </div>

          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 md:px-4 py-2 transition hover:bg-white/10">

            <UserCircle
              className="text-violet-400"
              size={22}
            />

            <span className="hidden md:block text-white">
              {user?.name}
            </span>

          </button>

        </div>

      </div>
    </header>
  );
};

export default WorkspaceNavbar;