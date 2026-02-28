"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
                scrolled ? "py-4" : "py-6 mt-4"
            )}
        >
            <div className="container mx-auto px-6 flex justify-center pointer-events-auto">
                <nav
                    className={cn(
                        "flex items-center gap-1 px-2 py-1.5 rounded-full transition-colors duration-300",
                        scrolled ? "bg-white/5 border border-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
                    )}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-2 px-4 py-2 rounded-full text-sm font-semibold bg-white text-black hover:scale-105 active:scale-95 transition-transform"
                    >
                        Let&apos;s Talk
                    </a>
                </nav>
            </div>
        </motion.header>
    );
}
