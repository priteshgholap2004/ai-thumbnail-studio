const AssistantCard = ({
  icon,
  title,
  description,
  children,
}) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-5 flex items-center gap-3">

        <div className="rounded-xl bg-violet-500/10 p-3">
          {icon}
        </div>

        <div>

          <h3 className="font-bold text-white">
            {title}
          </h3>

          <p className="text-sm text-slate-400">
            {description}
          </p>

        </div>

      </div>

      {children}

    </div>
  );
};

export default AssistantCard;