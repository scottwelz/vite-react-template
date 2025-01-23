// src/components/Navbar.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = ({ onToggleSidebar }) => {
    const { currentUser, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const handleLogout = async () => {
        setDropdownOpen(false);
        await logout();
    };

    return (
        <header className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white relative">
            {/* Left: Burger Button */}
            <button
                className="text-white focus:outline-none"
                onClick={onToggleSidebar}
            >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                        d="M4 5h16M4 12h16M4 19h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            {/* Right: User Icon */}
            <div className="relative">
                <button
                    className="flex items-center focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <img
                        src={currentUser?.photoURL || '/default-user-icon.png'}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded shadow-lg py-2">
                        {!currentUser ? (
                            <Link
                                to="/login"
                                className="block px-4 py-2 hover:bg-gray-200"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Log in
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to="/account"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    Account
                                </Link>
                                <button
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
