import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container" id='navbar-cont'>
                <Link to="/" className="navbar-logo">
                    Business<span>Pro</span>
                </Link>

                <div className="navbar-menu">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="navbar-link">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XMarkIcon /> : <Bars3Icon />}
                </button>

                {isOpen && (
                    <div className="mobile-menu">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;