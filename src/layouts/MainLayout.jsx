// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar onToggleSidebar={handleToggleSidebar} />
            <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
            <div className="flex-1 p-4 bg-gray-50 pt-6 md:pt-8">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
