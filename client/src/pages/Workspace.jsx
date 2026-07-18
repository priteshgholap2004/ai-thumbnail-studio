import WorkspaceNavbar from "../components/workspace/WorkspaceNavbar";
import PromptForm from "../components/workspace/PromptForm";
import PreviewPanel from "../components/workspace/PreviewPanel";
import HistoryGrid from "../components/workspace/History/HistoryGrid";

import { useEffect } from "react";
import { useThumbnail } from "../context/ThumbnailContext";

import CreatorAssistant from "../components/workspace/CreatorAssistant/CreatorAssistant";
import { useAuth } from "../context/AuthContext";

const Workspace = () => {
  const { fetchHistory } = useThumbnail();

  const { user } = useAuth();

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);
  return (
    <>
      <WorkspaceNavbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950">
        {/* Background Glow */}

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[220px]" />

        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-violet-500/5 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-8">

          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-medium text-violet-400">
                👋 Welcome back
              </p>

              <h1 className="mt-1 text-3xl font-black text-white">
                {user?.name}
              </h1>

              <p className="mt-2 text-slate-400">
                Ready to create your next AI thumbnail?
              </p>

            </div>

            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-4">

              <p className="text-sm text-slate-400">
                Available Credits
              </p>

              <h2 className="mt-1 text-3xl font-black text-white">
                {user?.credits}
              </h2>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

            <div className="lg:col-span-2">
              <PromptForm />
            </div>

            <div className="lg:col-span-3">
              <PreviewPanel />
            </div>

          </div>

          <CreatorAssistant />

          <HistoryGrid />

        </div>
      </main>
    </>
  );
};

export default Workspace;