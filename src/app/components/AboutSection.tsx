'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-24 px-6 sm:px-20 bg-gray-950 text-white font-[family-name:var(--font-geist-sans)]"
        >
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
                {/* Image */}
                <motion.div
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Image
                        src="/assets/illustration2.png"
                        alt="About illustration"
                        width={600}
                        height={600}
                        priority
                        className="rounded-xl shadow-lg w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I&apos;m Ashan Amer, a passionate software engineer who loves building modern web applications
                        with clean UI/UX, robust architecture, and smooth user interactions. My journey
                        began with curiosity about how websites work and turned into a career of turning
                        ideas into reality using code.
                    </p>
                    <p className="mt-4 text-lg text-gray-300">
                        I enjoy working with JavaScript/TypeScript, React, Next.js, and diving into
                        backend systems with Node.js and databases. I&apos;m always learning and exploring new
                        tools to stay on top of modern development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
