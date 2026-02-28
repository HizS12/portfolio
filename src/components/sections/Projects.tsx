"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "../SectionHeader";

const projects = [
    {
        title: "AI Voice Scheduling Agent",
        outcome: "Reduced manual scheduling effort by 70%.",
        tech: ["Python", "LLMs", "Cal.com APIs", "TTS/STT"],
        bullets: [
            "Built an AI voice agent that autonomously handled real phone calls by integrating LLM orchestration and Voice APIs.",
            "Improved booking accuracy and reliability by eliminating incorrect email bookings using conversational guardrails.",
        ],
        impact: "Applied AI / Automation",
        live: "#",
        github: "https://github.com/HizS12",
    },
    {
        title: "AI IDE Pricing Leaderboard",
        outcome: "Helps developers choose cost-efficient LLMs.",
        tech: ["Next.js", "React", "APIs", "Vercel"],
        bullets: [
            "Built a real-time AI model pricing comparison quiz to help developers avoid overpaying for high-end models.",
            "Aggregated model pricing, benchmark metrics, and performance indicators into a unified dashboard.",
        ],
        impact: "Product Analytics Platform",
        live: "#",
        github: "https://github.com/HizS12",
    },
    {
        title: "Uber-Style Ride Allocation System",
        outcome: "Scalable backend simulation for high-demand scenarios.",
        tech: ["Java", "Data Structures", "Concurrency"],
        bullets: [
            "Designed a scalable ride allocation system by implementing priority queues, hash maps, and linked lists in Java.",
            "Optimized concurrent request handling by refining matching logic efficiently.",
        ],
        impact: "Backend Simulation",
        live: "#",
        github: "https://github.com/HizS12",
    },
    {
        title: "Carnival Target Shooting Game",
        outcome: "Real-time interactive graphics gameplay.",
        tech: ["C/C++", "OpenGL"],
        bullets: [
            "Developed a real-time interactive graphics game using C/C++ and OpenGL with smooth rendering.",
        ],
        impact: "OpenGL Graphics",
        live: "#",
        github: "https://github.com/HizS12",
    }
];

export default function Projects() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
            <SectionHeader title="Featured Projects" subtitle="A selection of systems I've built and shipped." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="group relative h-full"
                    >
                        {/* Hover Glow Behind Card */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 will-change-transform" />

                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden will-change-transform"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-cyan-400/80 text-sm mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full inline-block animate-pulse" />
                                    {project.outcome}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tag, j) => (
                                        <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-2 mb-8 text-sm text-gray-400">
                                    {project.bullets.map((bullet, k) => (
                                        <li key={k} className="flex gap-2">
                                            <span className="text-cyan-500 opacity-50 mt-1">{"▹"}</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 mb-6">
                                    <span className="text-xs text-gray-500 block mb-1">Impact</span>
                                    <p className="text-sm font-medium text-gray-200">{project.impact}</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-colors py-2 group/btn">
                                        <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                        Live System
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors py-2 group/btn">
                                        <Github className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
