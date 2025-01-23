// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                <h2 className="text-lg font-bold text-gray-700">Menu</h2>
                <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
            <nav className="mt-2">
                <Link
                    to="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    onClick={onClose}
                >
                    Home
                </Link>
                <Link
                    to="/account"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    onClick={onClose}
                >
                    Account
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
