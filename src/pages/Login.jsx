// src/pages/Login.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser } = useAuth() || {};
    const from = location.state?.from || "/";

    useEffect(() => {
        if (currentUser) {
            navigate(from, { replace: true });
        }
    }, [currentUser, from, navigate]);

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate(from, { replace: true });
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left Side / Mushroom Background */}
            <div className="hidden md:flex w-1/2 bg-green-100 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1542913235-1f46ce06443d?q=80&w=2489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Mushroom background"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-white/20 to-white/0 mix-blend-multiply" />
            </div>

            {/* Right Side / Login Form */}
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center p-8 bg-white">
                <div className="max-w-md w-full space-y-6">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                        <p className="mt-2 text-gray-600">
                            Log in to continue or <span className="font-semibold">cultivate</span> your progress.
                        </p>
                    </div>

                    {/* Login Buttons */}
                    <div className="space-y-4">
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition"
                        >
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                                alt="Google Logo"
                                className="w-5 h-5"
                            />
                            <span className="text-gray-700 font-medium">Sign in with Google</span>
                        </button>
                    </div>

                    {/* Optional Email/Password Login */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                        />
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                            type="password"
                            id="password"
                            placeholder="••••••••"
                        />
                        <button
                            onClick={() => alert("Implement Email/Password Sign In")}
                            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Footer Links */}
                    <div className="text-sm text-gray-500 text-center mt-6">
                        <a href="/forgot-password" className="hover:underline">
                            Forgot your password?
                        </a>
                        {" | "}
                        <a href="/signup" className="hover:underline">
                            Sign up for an account
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
