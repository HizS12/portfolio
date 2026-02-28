"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center mb-16", className)}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            >
                {title}
                <span className="text-[var(--color-cyan-DEFAULT)]">.</span>
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-gray-400 text-lg max-w-2xl text-center"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
