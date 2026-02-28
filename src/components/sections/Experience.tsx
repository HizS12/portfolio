"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const experiences = [
    {
        role: "Backend Developer Intern",
        company: "Nodalli (Startup)",
        date: "2026 - Present",
        bullets: [
            "Designed and tested automated email reply detection pipelines to accurately identify and track inbound responses across campaign and list-based outreach systems.",
            "Built and debugged asynchronous background workers to process periodic jobs, reducing workflow execution inconsistencies and improving system reliability.",
        ],
    },
    {
        role: "Web Developer Intern",
        company: "TheLuckyElf Inc.",
        date: "Jun 2024 - Aug 2024",
        bullets: [
            "Reduced backend data retrieval latency by 25% by optimizing SQL queries and backend workflows.",
            "Delivered responsive UI components by implementing frontend changes aligned with usability and branding requirements.",
        ],
    },
];

export default function Experience() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto" id="experience">
            <SectionHeader title="Experience" subtitle="My professional journey." />

            <div className="mt-12 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {experiences.map((exp, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        {/* Timeline Line/Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.5)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 z-10" />

                        <motion.div
                            initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? 30 : -30 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <span className="text-sm font-medium text-cyan-400/80">{exp.date}</span>
                            </div>
                            <h4 className="text-md text-gray-400 font-medium mb-6 flex items-center gap-2">
                                {exp.company}
                            </h4>

                            <ul className="space-y-3">
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j} className="text-gray-300 text-sm leading-relaxed flex gap-3">
                                        <span className="text-cyan-500 mt-1 opacity-70">{"→"}</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
