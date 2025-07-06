'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-600 dark:text-gray-400 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Copyright */}
                <p className="text-sm text-center md:text-left">
                    © {year} Ashan. All rights reserved.
                </p>

                {/* Right: Social Icons */}
                <div className="flex gap-6 text-gray-700 dark:text-gray-300">
                    <a
                        href="https://github.com/AshanAmir27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#333] dark:hover:text-white transition"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ashan-amir-786045211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0077B5] transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://x.com/ashanamir65?t=xq5vszBSzaEpIZ3yuCkIEQ&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1DA1F2] transition"
                        aria-label="Twitter"
                    >
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
