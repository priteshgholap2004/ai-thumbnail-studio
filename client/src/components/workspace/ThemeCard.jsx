const ThemeCard = ({
  title,
  icon,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border p-3 transition-all duration-300
      ${
        selected
          ? "border-violet-500 bg-violet-500/20"
          : "border-white/10 bg-white/5 hover:border-violet-500/40 hover:bg-white/10"
      }`}
    >
      <div className="text-2xl">{icon}</div>

      <p className="mt-2 text-sm font-medium text-white">
        {title}
      </p>
    </button>
  );
};

export default ThemeCard;