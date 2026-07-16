import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search thumbnails..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-500"
      />

    </div>
  );
};

export default SearchBar;