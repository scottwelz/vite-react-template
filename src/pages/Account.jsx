// src/pages/Account.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Account = () => {
    const { currentUser } = useAuth() || {};

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left side / mushroom background */}
            <div className="hidden md:flex w-1/2 bg-green-100 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1612536167893-e45ea82010ba?w=2000&q=80&auto=format&fit=crop"
                    alt="Mushroom background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-white/20 to-white/0 mix-blend-multiply" />
            </div>

            {/* Right side / content */}
            <div className="flex w-full md:w-1/2 items-center justify-center p-8">
                <div className="max-w-md w-full space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Your Account</h2>
                        <p className="mt-2 text-gray-600">
                            Manage your profile, preferences, and mushroom cultivation progress.
                        </p>
                    </div>

                    {/* Example account details */}
                    <div className="bg-white rounded shadow p-4">
                        <p className="text-gray-700">
                            <span className="font-semibold">Email:</span> {currentUser?.email || 'N/A'}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">User ID:</span> {currentUser?.uid || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
