"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function Contact() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center" id="contact">
            <SectionHeader title="Let's Talk" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group p-1" // Glow wrapper
            >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col items-center">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Let's build something <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            that actually ships.
                        </span>
                    </h3>

                    <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                        Whether you&apos;re looking to scale your backend systems, automate workflows, or need a technical founder mindset on your project—I&apos;m ready to dive in.
                    </p>

                    <a
                        href="mailto:hizb.patel@torontomu.ca"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-transform mb-12 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>

                    <div className="flex gap-6 justify-center">
                        <a href="https://www.linkedin.com/in/hizb/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors group/icon">
                            <Linkedin className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://github.com/HizS12" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors group/icon">
                            <Github className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
