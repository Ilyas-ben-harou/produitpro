import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    const panier = useSelector((state) => state.panier.panier);
    const totalProducts = panier.reduce((acc, item) => acc + item.qte, 0);

    return (
        <div className="bg-gray-800 p-4 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                {/* Logo Section */}
                <h3 className="text-white text-2xl font-bold">MyStore</h3>

                {/* Navigation Links */}
                <div className="flex items-center space-x-6">
                    <Link to="/">
                        <button className="border-2 font-semibold border-white bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-900 hover:border-blue-900 hover:text-white transition">
                            List Products
                        </button>
                    </Link>

                    <Link to="/panier">
                        <button className="relative flex items-center border-2 font-semibold border-white bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-900 hover:border-blue-900 hover:text-white transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            {panier.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {totalProducts}
                                </span>
                            )}
                        </button>
                    </Link>
                </div>
            </div>

            {/* Page Content */}
            <div className="mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default NavBar;
