"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Server, Database, Code, Wrench, Briefcase } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: <Code className="w-5 h-5 text-cyan-400" />,
        skills: ["Python", "Java", "C/C++", "SQL", "JavaScript", "Bash"],
    },
    {
        title: "Frameworks / Tools",
        icon: <Wrench className="w-5 h-5 text-cyan-400" />,
        skills: ["React", "Next.js", "Git", "REST APIs"],
    },
    {
        title: "Automation / Data",
        icon: <Server className="w-5 h-5 text-cyan-400" />,
        skills: ["Cal.com APIs", "Voice Agents", "LLMs", "SQL", "Databases"],
    },
    {
        title: "Productivity & Soft Skills",
        icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
        skills: ["GitHub", "Excel", "Google Suite", "Client Communication", "Strategy"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto" id="skills">
            <SectionHeader title="Technical Arsenal" subtitle="Tools and technologies I use to build scalable systems." />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {skillCategories.map((category, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors relative overflow-hidden group"
                    >
                        {/* Subtle Top Border Highlight on Hover */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, j) => (
                                <span
                                    key={j}
                                    className="px-3 py-1.5 rounded-md text-sm bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 text-gray-300 transition-colors cursor-default border border-transparent hover:border-cyan-500/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
