const Card = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;