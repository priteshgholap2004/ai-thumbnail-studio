import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { resetPassword } from "../services/auth.service";
import toast from "react-hot-toast";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            formData.password !== formData.confirmPassword
        ) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);

            const res = await resetPassword(
                token,
                formData.password,
                formData.confirmPassword
            );

            toast.success(res.message);

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to reset password"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <main className="min-h-screen bg-slate-950">

            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-8">

                <div className="w-full max-w-[430px] rounded-3xl border border-white/10 bg-white/5 px-8 py-6 shadow-2xl backdrop-blur-xl">

                    <Link
                        to="/login"
                        className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 transition"
                    >
                        ← Back to Login
                    </Link>

                    <div className="mb-6 text-center">

                        <h1 className="text-3xl font-black">
                            <span className="text-violet-500">
                                PNG
                            </span>{" "}
                            <span className="text-white">
                                Studios
                            </span>
                        </h1>

                        <p className="mt-2 text-sm text-slate-400">
                            Create a new password.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                New Password
                            </label>

                            <div className="relative">

                                <Lock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="New password"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3 pl-14 pr-12 text-white outline-none focus:border-violet-500"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-violet-400"
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>

                            </div>

                        </div>

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Confirm Password
                            </label>

                            <div className="relative">

                                <Lock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                />

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm password"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3 pl-14 pr-12 text-white outline-none focus:border-violet-500"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-violet-400"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>

                            </div>

                        </div>

                        <button
                            disabled={loading}
                            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white transition hover:scale-[1.01] disabled:opacity-60"
                        >
                            {loading
                                ? "Updating..."
                                : "Reset Password"}
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
};

export default ResetPassword;