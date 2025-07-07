'use client';

import { Code, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
    {
        icon: <Code size={28} />,
        title: 'Frontend Development',
        description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
        icon: <Server size={28} />,
        title: 'Backend Development',
        description: 'Node.js, Express, REST APIs, MongoDB, MySQL',
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Responsive Design',
        description: 'Mobile-first, Accessibility, Modern UI/UX practices',
    },
];

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="bg-gray-950 py-24 px-6 sm:px-20 text-white font-[family-name:var(--font-geist-sans)]"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    My Skills
                </motion.h2>
                <motion.p
                    className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Here are some technologies and domains I work with regularly.
                </motion.p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-gray-900 rounded-xl shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-blue-400 mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {skill.title}
                            </h3>
                            <p className="text-gray-300">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
