import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  variant = "primary",
}) => {
  const styles = {
    primary:
      "rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-500 transition",

    secondary:
      "rounded-xl border border-white/10 px-6 py-3 text-white hover:border-violet-500 transition",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={styles[variant]}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
};

export default Button;