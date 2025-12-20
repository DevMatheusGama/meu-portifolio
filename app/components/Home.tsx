import Image from "next/image";
import GridContainer from "./GridContainer";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
    return (
        <section id="home" className="w-full min-h-screen flex justify-center pt-24">
            <GridContainer className="mt-19 mx-3 p-5">
                <div className="grid grid-cols-1 gap-7 justify-center md:grid-cols-2">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="w-52 flex items-center justify-center gap-2 py-2 px-2 rounded-3xl bg-linear-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 mb-6 backdrop-blur-sm">
                            <HiOutlineSparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-white text-sm font-thin">Desenvolvedor Front-end</span>
                        </div>
                        <div className="text-white mb-6">
                            <h1 className="text-7xl mb-2">Olá! Eu sou</h1>
                            <h1 className="text-7xl bg-linear-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Matheus Gama</h1>
                        </div>
                        <div className="mb-6">
                            <p className="text-xl md:text-2xl text-cyan-300">Desenvolvedor Front-end focado em criar interfaces modernas, responsivas e performáticas com React e Next.js.</p>
                        </div>
                        <div>
                            <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"> Estou em busca da minha primeira oportunidade na área de desenvolvimento. Crio projetos reais usando{" "}
                                <span className="text-purple-400">JavaScript</span>,{" "}
                                <span className="text-blue-400">TypeScript</span>,{" "}
                                <span className="text-cyan-400">React</span>,{" "}
                                <span className="text-fuchsia-400">Next.js</span> e{" "}
                                <span className="text-pink-400">Tailwind</span>, sempre aprendendo e evoluindo para entregar soluções rápidas, funcionais e bem estruturadas.</p>
                        </div>
                        <div
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#projetos"
                                className="group px-8 py-4 bg-linear-to-r from-purple-600 via-fuchsia-600 to-cyan-600 rounded-2xl text-white flex items-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                            >
                                Ver Projetos
                                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contato"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all hover:scale-105"
                            >
                                Entrar em Contato
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative flex items-center justify-center rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl shadow-purple-500/30 h-105 w-full max-w-md">
                            <Image
                                src="/image/application-smartphone-business-graph-analytics-260nw-1583248045.jpg"
                                alt="Gráfico de analytics em smartphone"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}