'use client'

import { IconType } from "react-icons";
import { FaReact, FaCss3Alt, FaJs, FaHtml5, FaGit, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import GridContainer from "./GridContainer";
import { motion } from "framer-motion";

type skillsType = {
    icon: IconType;
    level: number;
    name: string;
    color: string;
    hoverBg: string;
    barBg: string;
};

export default function Habilidades() {
    const skills: skillsType[] = [
        {
            name: "HTML",
            level: 95,
            icon: FaHtml5,
            color: "text-[#E34F26]",
            hoverBg: "from-orange-500 to-red-500",
            barBg: "bg-[#E34F26]",
        },
        {
            name: "CSS",
            level: 90,
            icon: FaCss3Alt,
            color: "text-[#1572B6]",
            hoverBg: "from-blue-500 to-cyan-500",
            barBg: "bg-[#1572B6]",
        },
        {
            name: "JavaScript",
            level: 88,
            icon: FaJs,
            color: "text-[#F7DF1E]",
            hoverBg: "from-yellow-400 to-orange-400",
            barBg: "bg-[#F7DF1E]",
        },
        {
            name: "TypeScript",
            level: 85,
            icon: SiTypescript,
            color: "text-[#3178C6]",
            hoverBg: "from-blue-600 to-blue-400",
            barBg: "bg-[#3178C6]",
        },
        {
            name: "React",
            level: 92,
            icon: FaReact,
            color: "text-[#61DAFB]",
            hoverBg: "from-cyan-400 to-blue-500",
            barBg: "bg-[#61DAFB]",
        },
        {
            name: "Next.js",
            level: 85,
            icon: SiNextdotjs,
            color: "text-black dark:text-white",
            hoverBg: "from-slate-700 to-slate-900",
            barBg: "bg-black dark:bg-white",
        },
        {
            name: "Tailwind CSS",
            level: 95,
            icon: SiTailwindcss,
            color: "text-[#38BDF8]",
            hoverBg: "from-sky-400 to-cyan-500",
            barBg: "bg-[#38BDF8]",
        },
        {
            name: "Git",
            level: 80,
            icon: FaGit,
            color: "text-[#F05032]",
            hoverBg: "from-orange-500 to-red-600",
            barBg: "bg-[#F05032]",
        },
        {
            name: "GitHub",
            level: 80,
            icon: FaGithub, 
            color: "text-black dark:text-white",
            hoverBg: "from-zinc-700 to-zinc-900",
            barBg: "bg-black dark:bg-white",
        },
    ];

    return (
        <section id="habilidades" className="w-full min-h-screen flex justify-center">
            <GridContainer className="mx-3 p-5">
                <div className="flex flex-col items-center justify-center ">
                    <div className="mb-5">
                        <span className="px-4 py-1 rounded-2xl text-sm bg-linear-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300">Habilidades</span>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6">
                            <span className="bg-linear-to-r from-cyan-300 via-cyan-600 to-fuchsia-400 bg-clip-text text-transparent">Tecnologias</span>
                        </h2>
                    </div>
                    <div className="flex items-center justify-center mb-14">
                        <p className="text-white font-semibold text-center">Trabalho com as principais tecnologias do ecossistema front-end moderno, criando aplicações rápidas, escaláveis e bem estruturadas.</p>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-32">
                        {
                            skills.map((item, index) => {
                                const Icon = item.icon

                                return (
                                    <div key={index} className="w-full group relative flex flex-col gap-2 p-6 rounded-3xl bg-slate-900/60 border border-white/10 transition-all duration-500 hover:border-gray-500 hover:scale-105 hover:translate-y-0.5">
                                        <div className={`absolute inset-0 blur-xl opacity-0 bg-linear-to-br ${item.hoverBg} group-hover:opacity-15 transition-opacity duration-500`} />

                                        <Icon className={`text-6xl ${item.color}`} />

                                        <h3 className="text-xl text-white mb-3">{item.name}</h3>

                                        <div className="mb-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-slate-400">Nivel</span>
                                                <span className={`${item.color} text-sm font-medium`}>
                                                    {item.level}%
                                                </span>
                                            </div>
                                        </div>

                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full ${item.barBg} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="relative flex flex-col items-center justify-center px-6 py-8 border border-white/10 rounded-3xl bg-slate-900/60">
                    <div className="absolute inset-0 blur-xl bg-white/15 opacity-10"/>
                        <div className="mb-3">
                            <BiCodeAlt className="w-16 h-16 text-cyan-400"/>
                        </div>
                        <div className="mb-5">
                            <h3 className="text-3xl text-white">Sempre Aprendendo e Evoluindo</h3>
                        </div>
                        <div>
                            <p className="text-lg text-white text-center">Estou constantemente estudando novas tecnologias e boas práticas de desenvolvimento. Cada projeto é uma oportunidade de aprendizado e crescimento profissional.</p>
                        </div>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}