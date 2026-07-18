import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            setLoading(true);

            const response = await login(formData);

            toast.success(response.message);

            navigate("/workspace");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login failed"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-8">

                <div className="w-full max-w-[430px] rounded-3xl border border-white/10 bg-white/5 px-8 py-5 shadow-2xl backdrop-blur-xl">

                    <Link
                        to="/"
                        className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:-translate-x-1 hover:text-violet-400"
                    >
                        ← Back to Home
                    </Link>

                    <div className="mb-5 text-center">

                        <Link
                            to="/"
                            className="text-3xl font-black"
                        >
                            <span className="text-violet-500">
                                PNG
                            </span>{" "}
                            <span className="text-white">
                                Studios
                            </span>
                        </Link>

                        <p className="mt-1 text-sm text-slate-400">
                            Welcome back. Sign in to continue.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        {/* Email */}

                        <div>

                            <label className="mb-1 block text-sm font-medium text-slate-300">
                                Email
                            </label>

                            <div className="relative">

                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className={`w-full rounded-2xl bg-slate-900 py-3 pl-14 pr-4 text-white outline-none transition-all duration-300 ${errors.email
                                        ? "border border-red-500"
                                        : "border border-white/10 focus:border-violet-500"
                                        }`}
                                />

                            </div>

                            {errors.email && (
                                <p className="mt-2 text-sm text-red-400">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* Password */}

                        <div>

                            <label className="mb-1 block text-sm font-medium text-slate-300">
                                Password
                            </label>

                            <div className="relative">

                                <Lock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className={`w-full rounded-2xl bg-slate-900 py-3 pl-14 pr-12 text-white outline-none transition-all duration-300 ${errors.password
                                        ? "border border-red-500"
                                        : "border border-white/10 focus:border-violet-500"
                                        }`}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-violet-400"
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>

                            </div>

                            {errors.password && (
                                <p className="mt-2 text-sm text-red-400">
                                    {errors.password}
                                </p>
                            )}

                            

                        </div>
                        <div className="flex justify-end">
                                <Link
                                    to="/forgot-password"
                                    className="text-sm text-violet-400 hover:text-violet-300 transition"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                        <button
                            disabled={loading}
                            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-violet-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>

                    </form>

                    <div className="my-4 flex items-center gap-4">

                        <div className="h-px flex-1 bg-white/10" />

                        <span className="text-xs uppercase tracking-wider text-slate-500">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-white/10" />

                    </div>

                    <button
                        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-slate-900 py-2.5 font-medium text-white transition-all duration-300 hover:border-violet-500 hover:bg-slate-800"
                    >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                            G
                        </div>

                        Continue with Google

                    </button>

                    <p className="mt-4 text-center text-sm text-slate-400">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="ml-2 font-semibold text-violet-400 transition hover:text-violet-300"
                        >
                            Create Account
                        </Link>

                    </p>

                </div>

            </div>
        </main>
    );
};

export default Login;