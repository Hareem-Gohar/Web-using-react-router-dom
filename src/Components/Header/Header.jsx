import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navLinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About Us',
            path: '/aboutUs'
        },
        {
            name: 'Contact US',
            path: '/contactUs'
        },
        {
            name: 'Github',
            path: '/github'
        }
    ]

    return (
        <header className="shadow-sm sticky z-50 top-0">
            <nav className="bg-gray-50 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661_640.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-rose-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-amber-800 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                navLinks.map((value, i) => (
                                    <li>
                                        <NavLink
                                            to={value.path}
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${isActive ? 'text-orange-700' : 'text-gray-600'
                                                }`
                                            }
                                        >
                                           {value.name}
                                        </NavLink>
                                    </li>
                                ))
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
