'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

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
        formState: { errors },
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
                toast.success('Message sent successfully!');
            } else {
                toast.error('Failed to send message.');
            }
        } catch (err) {
            toast.error('An unexpected error occurred.');
            console.error('Unexpected error:', err);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 px-6 sm:px-20 bg-gray-950 text-white font-[family-name:var(--font-geist-sans)]"
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    className="text-gray-400 mb-12"
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
                        <label className="block mb-1 text-sm font-medium text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-300">
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
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-300">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            {...register('message', { required: 'Message is required' })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
