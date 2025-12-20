import { IconType } from "react-icons";
import GridContainer from "./GridContainer";
import { FaReact, FaJs, FaServer, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type Tech = {
    icon: IconType;
    color: string;
    name: string;
};

type projectsType = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: Tech[];
    color: string;
    badge: string;
    linkSite: string;
    linkGitHub: string
};

export default function Projetos() {
    const projects: projectsType[] = [
        {
            id: 1,
            title: "E-commerce Completo",
            description:
                "Mini e-commerce desenvolvido com React e Next.js, integrando API de produtos, páginas de listagem e detalhes, fluxo básico de compra e interface totalmente responsiva. O projeto aplicou arquitetura organizada, componentização reutilizável e estilização com Tailwind CSS.",
            image: "/imageProgetos/e-comerce.png",
            color: "from-green-700 to-green-400",
            badge: "⭐ Destaque",
            linkSite: "https://site-agro-zenite.vercel.app/",
            linkGitHub: "https://github.com/DevMatheusGama/Site-agro-zenite",
            tags: [
                { icon: FaReact, color: "text-sky-400", name: "React" },
                { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
                { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind" },
                { icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
                { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
            ],
        },
        {
            id: 2,
            title: "App de Clima",
            description:
                "Aplicativo de clima desenvolvido com React, TypeScript e Tailwind CSS, integrado a uma API externa para exibição de dados meteorológicos em tempo real. Possui busca por cidade, informações detalhadas do clima e interface responsiva, com foco em acessibilidade e boa experiência do usuário.",
            image: "/imageProgetos/appDeClima.png",
            color: "from-sky-500 to-blue-600",
            badge: "🌤️ API",
            linkSite: "https://aplicativo-de-clima-three.vercel.app/",
            linkGitHub: "https://github.com/DevMatheusGama/aplicativo-de-clima",
            tags: [
                { icon: FaReact, color: "text-sky-400", name: "React" },
                { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
                { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind" },
                { icon: FaServer, color: "text-indigo-400", name: "API" },
                { icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
                { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
            ],
        },
        {
            id: 3,
            title: "Lista de Tarefas",
            description:
                "Aplicação de Lista de Tarefas com Autenticação, desenvolvida com React, Next.js e Tailwind CSS, permitindo cadastro, login seguro e gerenciamento de tarefas. O projeto foca em autenticação, rotas protegidas, componentização e integração com banco de dados.",
            image: "/imageProgetos/listaDeTarefa.png",
            color: "from-purple-600 to-pink-600",
            badge: "✅ CRUD",
            linkSite: "https://lista-de-tarefas-opal-six.vercel.app/",
            linkGitHub: "https://github.com/DevMatheusGama/lista-de-tarefas",
            tags: [
                { icon: FaReact, color: "text-sky-400", name: "React" },
                { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
                { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind" },
                { icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
                { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
            ],
        },
    ];

    return (
        <section id="projetos" className="w-full min-h-screen flex justify-center">
            <GridContainer className="mt-24 mx-3 p-5">
                <div className="flex flex-col items-center justify-center ">
                    <div className="mb-5">
                        <span className="px-4 py-1 rounded-2xl bg-linear-to-r  from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm">Projetos</span>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-center">
                            <span className="bg-linear-to-r from-green-400 via-green-400 to-cyan-300 bg-clip-text text-transparent">Meus Trabalhos</span>
                        </h2>
                    </div>
                    <div className="flex items-center justify-center mb-14">
                        <p className="text-white font-semibold text-center">Aqui estão alguns dos projetos que desenvolvi para praticar e evoluir minhas habilidades como desenvolvedor front-end. Cada um representa um aprendizado e demonstra minha capacidade de resolver problemas e transformar conceitos em aplicações funcionais.</p>
                    </div>
                    <div className="w-full flex flex-col gap-24">
                        {
                            projects.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="relative group w-full flex flex-col border-2 border-white/10 md:flex-row overflow-hidden rounded-4xl hover:border-white/40"
                                    >
                                        <div className={`pointer-events-none absolute inset-0 blur-3xl opacity-0 bg-linear-to-br ${item.color} transition-opacity duration-300 group-hover:opacity-10 z-20`}/>
                                        <div className="relative z-10 w-full h-64 md:w-2/5 md:h-auto">
                                            <span className={`absolute top-4 left-4 px-3 py-1 rounded-2xl bg-linear-to-r ${item.color} border border-white/30 text-white font-thin text-sm z-50`}>{item.badge}</span>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover rounded-t-4xl md:rounded-l-4xl md:rounded-r-none transition-all duration-300 hover:scale-115"
                                            />
                                        </div>
                                        <div
                                            className="relative z-10 w-full md:w-3/5 bg-slate-900 p-8 rounded-b-4xl md:rounded-l-none md:rounded-t-4xl transition hover:border-white/40"
                                        >
                                            <h3 className="text-white text-3xl mb-6">{item.title}</h3>

                                            <p className="text-white text-lg mb-8">{item.description}</p>

                                            <div className="flex gap-4 mb-8 flex-wrap">
                                                {item.tags.map((tech) => (
                                                    <tech.icon
                                                        key={tech.name}
                                                        className={`text-3xl ${tech.color}`}
                                                    />
                                                ))}
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
                                                <Link
                                                    href={item.linkSite}
                                                    className={`inline-flex items-center justify-center gap-3 py-3 px-10 rounded-2xl text-white bg-linear-to-r ${item.color} hover:scale-105 transition-transform duration-300`}
                                                >
                                                    <span>Ver Mais</span>
                                                    <FiArrowRight className="text-xl" />
                                                </Link>

                                                <Link
                                                    href={item.linkGitHub}
                                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/20 transition-all"
                                                >
                                                    <FaGithub className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}