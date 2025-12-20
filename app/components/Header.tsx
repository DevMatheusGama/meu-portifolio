'use client'

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "Sobre", href: "#sobre" },
        { label: "Habilidades", href: "#habilidades" },
        { label: "Projetos", href: "#projetos" },
        { label: "Contato", href: "#contato" },
    ]
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
            <div className="flex items-center justify-between mx-4 py-4 sm:mx-10 md:mx-16 lg:mx-32">
                <a
                    href="#home"
                    className="flex items-center justify-center border-2 py-2 px-4 border-white/20 rounded-xl bg-linear-to-r from-purple-600/10 to-cyan-600/10 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition">
                    <span className="text-2xl bg-linear-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent font-mono">
                        {"<MG/>"}
                    </span>
                </a>
                <nav className="hidden lg:flex items-center justify-center gap-7">
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <a
                                href={item.href}
                                className="text-white text-lg font-thin"
                            >
                                {item.label}
                            </a>
                            <span
                                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"
                            />
                        </div>
                    ))}
                </nav>
                <a
                    href="#home"
                    className="hidden lg:flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 via-fuchsia-600 to-cyan-600 rounded-xl text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all group"
                >
                    <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
                    Download CV
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-white z-50"
                >
                    {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
                </button>
            </div>
            {
                isOpen && (
                    <div className="flex flex-col gap-5 px-6 py-4 lg:hidden">
                        <nav className="flex flex-col justify-center gap-4">
                            {
                                menuItems.map((item) => (
                                    <a className="text-white text-lg font-thin" href={item.href}>{item.label}</a>
                                ))
                            }
                        </nav>
                        <a
                            href="#home"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 via-fuchsia-600 to-cyan-600 rounded-xl text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all group"
                        >
                            <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
                            Download CV
                        </a>
                    </div>
                )
            }
        </header>
    )
}