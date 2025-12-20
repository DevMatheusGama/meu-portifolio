import { FiTarget } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import GridContainer from "./GridContainer";
import { IconType } from "react-icons";

type Item = {
    icon: IconType;
    title: string;
    description: string;
    color: string;
};

export default function Sobre() {
    const highlights: Item[] = [
        {
            icon: FiTarget,
            title: "Focado",
            description: "Em busca da primeira oportunidade",
            color: "from-purple-500 to-fuchsia-500",
        },
        {
            icon: HiOutlineLightningBolt,
            title: "Rápido",
            description: "Aprendizado e adaptação ágil",
            color: "from-cyan-500 to-blue-500",
        },
        {
            icon: FaHeart,
            title: "Apaixonado",
            description: "Por tecnologia e desenvolvimento",
            color: "from-pink-500 to-rose-500",
        },
        {
            icon: FaTrophy,
            title: "Determinado",
            description: "Projetos completos e funcionais",
            color: "from-yellow-500 to-orange-500",
        },
    ];
    return (
        <section id="sobre" className="w-full min-h-screen flex justify-center">
            <GridContainer className="mx-3 p-5">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-5">
                        <span className="px-4 py-1 rounded-2xl text-sm bg-linear-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 text-purple-300">Sobre Mim</span>
                    </div>
                    <div className="mb-11">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6">
                            <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Quem Sou Eu</span>
                        </h2>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-2">
                        <div>
                            <div className="relative w-full flex flex-col gap-3 bg-slate-900/60 backdrop-blur-sm border-2 border-white/10 rounded-4xl p-11">
                                <div className={`absolute inset-0 rounded-3xl blur-xl bg-white opacity-4`}/>
                                <h2 className="text-white text-4xl mb-5">Desenvolvedor em Evolução 🚀</h2>
                                <p className="text-white mb-3">Sou um <span className="text-blue-400">desenvolvedor front-end</span> focado em criar interfaces modernas, funcionais e responsivas, utilizando tecnologias como React, Next.js e Tailwind CSS.</p>
                                <p className="text-white mb-3">Mesmo sem experiência profissional formal, já desenvolvi projetos completos que simulam cenários reais, como <span className="text-pink-500">e-commerce</span>, <span className="text-cyan-300">app de clima</span> e <span className="text-green-400">lista de tarefas</span>, aplicando boas práticas de componentização e organização de código.</p>
                                <p className="text-white mb-3">Estou em constante aprendizado, buscando evoluir tecnicamente e acompanhar novas tecnologias do ecossistema front-end.</p>
                                <p className="text-purple-400">Meu objetivo é conquistar minha primeira oportunidade na área, contribuindo com soluções de qualidade e evoluindo junto com a equipe.</p>
                                <div className="flex flex-wrap gap-4 mt-5">
                                    <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm">#AutoDidata</span>
                                    <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm">#Determinado</span>
                                    <span className="px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 text-sm">#Criativo</span>
                                    <span className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm">#Proativo</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 self-center gap-6 md:flex-row md:grid-cols-2">
                            {
                                highlights.map((item, index) => {
                                    const Icon = item.icon

                                    return (
                                        <div key={index} className={`group relative bg-slate-900/60 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-6 transition-all duration-500 hover:translate-y-1 hover:border-gray-500`}>
                                            <div
                                                className={`absolute inset-0 rounded-3xl blur-xl opacity-0 bg-linear-to-br ${item.color} group-hover:opacity-10 transition-opacity duration-500`}
                                            />
                                            <span className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4`}>
                                                <Icon className="w-7 h-7" />
                                            </span>
                                            <h3 className="text-white text-2xl font-light mb-1">{item.title}</h3>
                                            <p className="text-gray-400 font-thin">{item.description}</p>
                                        </div>
                                    )
                                }
                                )}
                        </div>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}