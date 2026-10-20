"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import Image from "next/image";

const storyText =
    "I am a 4th-year Computer Science student at Toronto Metropolitan University with a strong focus on backend systems, APIs, and AI automation. Currently a Backend Developer Intern at Nodalli, I specialize in building automated pipelines, optimizing SQL queries, and utilizing LLM orchestration to handle complex workflows. I enjoy bridging the technical side with tangible real-world results.";

export default function About() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto" id="about">
            <SectionHeader title="About Me" subtitle="The story behind the code." />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side: Story */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Bridging Tech & Strategy
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-lg font-light flex gap-4 flex-col">
                        <span>{storyText}</span>
                        <span>
                            When I&apos;m not writing code, I&apos;m likely exploring new frameworks, refining architecture, or finding ways to make systems more efficient and robust.
                        </span>
                    </p>

                    <ul className="space-y-4 pt-4">
                        {[
                            "Backend Development (Python, Java, C/C++)",
                            "REST APIs & SQL Databases",
                            "AI Voice Agents & LLM Orchestration",
                            "Concurrent Request Handling"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex items-center gap-3 text-gray-200"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right side: Large Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,240,255,0.15)] group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-70" />
                    <Image
                        src="/profile.jpeg"
                        alt="Hizb Patel"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </div>
        </section>
    );
}
