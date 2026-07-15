import WorkspaceNavbar from "../components/workspace/WorkspaceNavbar";
import PromptForm from "../components/workspace/PromptForm";
import PreviewPanel from "../components/workspace/PreviewPanel";
import HistoryGrid from "../components/workspace/HistoryGrid";

const Workspace = () => {
  return (
    <>
      <WorkspaceNavbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950">
        {/* Background Glow */}

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[220px]" />

        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-violet-500/5 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">

          <div className="mb-6">
            <h1 className="text-3xl font-black text-white">
              PNG Workspace
            </h1>

            <p className="mt-1 text-slate-400">
              Create professional YouTube assets powered by AI.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">

            <div className="lg:col-span-2">
              <PromptForm />
            </div>

            <div className="lg:col-span-3">
              <PreviewPanel />
            </div>

          </div>

          <HistoryGrid />

        </div>
      </main>
    </>
  );
};

export default Workspace;