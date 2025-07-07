'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });

            const handleResize = () =>
                setWindowSize({ width: window.innerWidth, height: window.innerHeight });

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const offset = 40;
    const x1 = useTransform(mouseX, val => (val - windowSize.width / 2) / offset);
    const y1 = useTransform(mouseY, val => (val - windowSize.height / 2) / offset);
    const x2 = useTransform(mouseX, val => (val - windowSize.width / 2) / -offset);
    const y2 = useTransform(mouseY, val => (val - windowSize.height / 2) / -offset);

    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 sm:px-20 py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 font-sans overflow-hidden text-white">
            {/* Background motion blobs */}
            <motion.div
                className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-3xl z-0"
                style={{ x: x1, y: y1, top: '10%', left: '10%' }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-purple-400/30 rounded-full blur-3xl z-0"
                style={{ x: x2, y: y2, bottom: '5%', right: '5%' }}
            />

            {/* Foreground content */}
            <div className="relative z-10 max-w-6xl flex flex-col-reverse sm:flex-row items-center justify-between gap-16 text-center sm:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white">
                        Welcome to <span className="text-blue-600">My Portfolio</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-300">
                        I&apos;m a software engineer passionate about building exceptional web experiences.
                    </p>
                    <div className="mt-10 flex gap-6 justify-center sm:justify-start flex-wrap">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-gray-600 text-white rounded-xl hover:bg-gray-800 transition"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <Image
                        src="/assets/illustration.png"
                        alt="Developer Illustration"
                        width={400}
                        height={400}
                        priority
                    />
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 opacity-60"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [10, 0, 10] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown size={28} />
            </motion.div>
        </section>
    );
}
