"use client";

import { motion } from "framer-motion";

export function Elementos() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/3 right-10 w-125 h-125 bg-linear-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl"
                animate={{
                    x: [0, -120, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-20 left-10 w-80 h-80 bg-linear-to-br from-fuchsia-600/30 to-purple-600/30 rounded-full blur-3xl"
                animate={{
                    x: [0, 80, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/4 left-1/2 w-32 h-32 border-4 border-cyan-500/20 rotate-45"
                animate={{
                    rotate: [45, 225, 45],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-purple-500/20"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
}