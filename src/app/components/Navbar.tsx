'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const links = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-[#000000d3] text-white shadow-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    My Portfolio
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-8 text-sm font-medium">
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={handleLinkClick}
                                    className="hover:text-blue-400 transition-colors duration-200"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black text-white text-lg shadow-md border-t border-gray-800">
                    <ul className="flex flex-col gap-4">
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={handleLinkClick}
                                    className="hover:text-blue-400 transition-colors duration-200"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
