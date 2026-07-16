const FilterBar = ({
  styles,
  selected,
  onSelect,
}) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">

      <button
        onClick={() => onSelect("All")}
        className={`rounded-full px-4 py-2 text-sm transition ${
          selected === "All"
            ? "bg-violet-600 text-white"
            : "bg-white/5 text-slate-300 hover:bg-white/10"
        }`}
      >
        All
      </button>

      {styles.map((style) => (

        <button
          key={style}
          onClick={() => onSelect(style)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            selected === style
              ? "bg-violet-600 text-white"
              : "bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          {style}
        </button>

      ))}

    </div>
  );
};

export default FilterBar;