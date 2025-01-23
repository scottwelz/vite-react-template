// src/components/Navigation.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useAuth } from "../context/AuthContext";
import "./BurgerMenu.css"; // Styles for react-burger-menu

const Navigation = () => {
    const { currentUser, handleLogout } = useAuth() || {};
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Burger Menu */}
                <Menu
                    isOpen={menuOpen}
                    onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
                    className="custom-burger-menu"
                >
                    <Link
                        to="/"
                        className="menu-item text-lg font-semibold text-gray-700 hover:text-green-600 transition"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/account"
                        className="menu-item text-lg font-semibold text-gray-700 hover:text-green-600 transition"
                        onClick={toggleMenu}
                    >
                        Account
                    </Link>
                    {!currentUser ? (
                        <Link
                            to="/login"
                            className="menu-item text-lg font-semibold text-gray-700 hover:text-green-600 transition"
                            onClick={toggleMenu}
                        >
                            Log In
                        </Link>
                    ) : (
                        <button
                            onClick={() => {
                                handleLogout();
                                toggleMenu();
                            }}
                            className="menu-item text-lg font-semibold text-gray-700 hover:text-red-500 transition"
                        >
                            Log Out
                        </button>
                    )}
                </Menu>

                {/* App Logo */}
                {/* <Link to="/" className="text-2xl font-bold text-white">
                    MyApp
                </Link> */}

                {/* User Avatar or Login */}
                <div className="relative">
                    {currentUser ? (
                        <Link to="/account">
                            <img
                                src={currentUser?.photoURL || "https://via.placeholder.com/40"}
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="text-lg font-semibold text-grey hover:text-gray-600 transition"
                        >
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navigation;
