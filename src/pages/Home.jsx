// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center w-full h-screen text-center bg-gradient-to-b from-green-100 via-white to-white overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1518967396639-378a1dcc96d5?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Mushroom Cultivation Background"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
                />

                {/* Hero Content */}
                <div className="relative z-10 px-6 py-8 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                        Revolutionize Your Mushroom Cultivation
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Discover scientifically tested formulas and community-tested methods
                        to grow mushrooms efficiently, from home hobbyists to pro-level cultivators.
                    </p>

                    {/* CTAs */}
                    <div className="space-x-4 pb-8">
                        <Link
                            to="/formulas"
                            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700 transition-colors"
                        >
                            Discover Formulas
                        </Link>
                    </div>

                    <Link
                        to="/my-formulas"
                        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700 transition-colors"
                    >
                        My Formulas
                    </Link>
                </div>
            </section>

            {/* Info / Benefits Section */}
            <section className="w-full py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        What We Offer
                    </h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                        Whether you’re a first-time grower or a seasoned expert, our platform
                        is designed to guide you every step of the way. Benefit from:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="mb-3">
                                <span className="text-green-600 text-4xl">🌱</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Proven Substrate Formulas
                            </h3>
                            <p className="text-gray-600 mt-2">
                                High-yield formulas vetted by professional and hobby growers alike.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="mb-3">
                                <span className="text-green-600 text-4xl">📚</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Step-by-Step Guides
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Articles and tutorials to guide your cultivation from start to finish.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="mb-3">
                                <span className="text-green-600 text-4xl">🌐</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Community Driven
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Connect with fellow mushroom enthusiasts, share ideas, and learn from each other.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="mb-3">
                                <span className="text-green-600 text-4xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Track Your Progress
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Log your cultivation runs, document successes, and fine-tune formulas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-12 bg-white">
                <div className="max-w-xl mx-auto text-center px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Ready to Grow Better Mushrooms?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Join our community today and take the guesswork out of mushroom cultivation.
                    </p>

                    <Link
                        to="/signup"
                        className="inline-block px-6 py-3 text-white bg-green-600 rounded-md text-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
