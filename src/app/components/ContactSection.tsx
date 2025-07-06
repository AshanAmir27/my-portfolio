'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';


type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactSection() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                reset();
            } else {
                console.error('Email failed to send');
            }
        } catch (err) {
            console.error('Unexpected error:', err);
        }
    };


    return (
        <section
            id="contact"
            className="py-24 px-6 sm:px-20 bg-white dark:bg-gray-950 font-[family-name:var(--font-geist-sans)]"
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    className="text-gray-600 dark:text-gray-400 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    Let&apos;s connect — whether you want to collaborate or just say hi!
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Name */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            {...register('message', { required: 'Message is required' })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>

                    {isSubmitSuccessful && (
                        <p className="text-green-600 text-sm mt-3">Message sent successfully!</p>
                    )}
                </motion.form>


            </div>
        </section>
    );
}
