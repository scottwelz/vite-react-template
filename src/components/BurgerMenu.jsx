// src/components/BurgerMenu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useAuth } from "../context/AuthContext";

import "./BurgerMenu.css"; // Custom styles for react-burger-menu

const BurgerMenu = () => {
    const { currentUser, handleLogout } = useAuth() || {};
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
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
    );
};

export default BurgerMenu;
