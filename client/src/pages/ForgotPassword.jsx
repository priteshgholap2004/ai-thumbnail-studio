import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail } from "lucide-react";
import { forgotPassword } from "../services/auth.service";
import toast from "react-hot-toast";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await forgotPassword(email);

            toast.success(res.message);

            setEmail("");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Something went wrong."
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
                        className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400"
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

                            Enter your registered email.

                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Email
                            </label>

                            <div className="relative">

                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Enter your email"
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3 pl-14 pr-4 text-white outline-none focus:border-violet-500"
                                />

                            </div>

                        </div>

                        <button
                            disabled={loading}
                            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white hover:scale-[1.01] transition disabled:opacity-60"
                        >
                            {
                                loading
                                    ? "Sending..."
                                    : "Send Reset Link"
                            }
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
};

export default ForgotPassword;