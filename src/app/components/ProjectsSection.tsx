'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: 'JYH Transcript Agency',
        description:
            'A sleek and modern transcript request platform designed for educational institutions. Built with Next.js, Tailwind CSS, and Framer Motion, it supports dark mode, responsive layouts, and engaging animations to enhance user experience.',
        image: '/assets/project1.PNG',
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
        link: 'https://your-portfolio-link.com',
    }
    ,
    {
        title: 'Residential Portal',
        description:
            'A full-stack web application for managing residential communities. Features include real-time resident collaboration, service requests, announcements, and a dynamic drag-and-drop dashboard UI. Built with Next.js, Node.js, and MySQL.',
        image: '/assets/residential-portal.PNG',
        tech: ['Next.js', 'Node.js', 'MySQL', 'TypeScript'],
        link: 'https://your-residential-portal-link.com',
    }

    // Add more projects here...
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="py-24 px-6 sm:px-20 bg-gray-50 dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Featured Projects
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                    Here are a few projects I’ve worked on recently.
                </p>

                <div className="grid gap-12 sm:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    width={600}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6 text-left">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">
                                    {project.description}
                                </p>
                                <ul className="flex flex-wrap mt-4 gap-2 text-sm text-blue-600 dark:text-blue-400">
                                    {project.tech.map((tech, i) => (
                                        <li key={i} className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        Visit Project →
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
