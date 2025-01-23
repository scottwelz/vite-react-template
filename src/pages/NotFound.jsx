// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left side / mushroom background */}
            <div className="hidden md:flex w-1/2 bg-green-100 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1569535344092-d6a4c0464aa0?w=2000&q=80&auto=format&fit=crop"
                    alt="Mushroom background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-white/20 to-white/0 mix-blend-multiply" />
            </div>

            {/* Right side / content */}
            <div className="flex w-full md:w-1/2 items-center justify-center p-8">
                <div className="max-w-md w-full space-y-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-800">404</h1>
                    <p className="text-gray-600">
                        Oops! This page doesn’t exist. Let’s get you back on track.
                    </p>
                    <Link
                        to="/"
                        className="mt-4 inline-block px-6 py-2 text-white bg-green-600 rounded-md shadow hover:bg-green-700 transition-colors font-semibold"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
