const Badge = ({ children }) => {
  return (
    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
      {children}
    </span>
  );
};

export default Badge;