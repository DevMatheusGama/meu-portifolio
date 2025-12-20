'use client'

import { IconType } from "react-icons";
import GridContainer from "./GridContainer";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser'

type contactType = {
    icon: IconType;
    label: string;
    value: string;
    href?: string;
    color: string;
};

type FormData = {
    nome: string;
    email: string;
    mensagem: string
}

const schema = z.object({
    nome: z.string().min(3, "Nome muito curto"),
    email: z.string().email(),
    mensagem: z.string().min(3, "Mensegem muito pequena")
})

export default function Contato() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    function EnviarMensagem(data: FormData) {
        const templateParams = {
            full_name: data.nome,
            email: data.email,
            message: data.mensagem
        }

        emailjs.send("service_q1b099h", "template_yexallo", templateParams, "Ve-78RxqnZy5r1pyT")
            .then((response) => {
                alert(`Sua menseagem foi enviado com suceso ${data.nome}!`)
                reset()
            })
            .catch((error) => {
                console.log(`ERROR: ${error}`)
            })
    }

    const contactInfo: contactType[] = [
        {
            icon: HiOutlineMail,
            label: "Email",
            value: "devmatheusgama@gmail.com",
            color: "from-purple-600 to-fuchsia-600",
        },
        {
            icon: FaGithub,
            label: "GitHub",
            value: "https://github.com/DevMatheusGama",
            href: "https://github.com/DevMatheusGama",
            color: "from-gray-700 to-gray-900",
        },
        {
            icon: FaLinkedin,
            label: "LinkedIn",
            value: "https://www.linkedin.com/in/matheus-gama-48a0b6399/",
            href: "https://www.linkedin.com/in/matheus-gama-48a0b6399/",
            color: "from-blue-600 to-cyan-600",
        },
        {
            icon: FaWhatsapp,
            label: "WhatsApp",
            value: "+55 (74) 74 988611528",
            href: "https://wa.me/5574988611528",
            color: "from-green-600 to-emerald-600",
        },
    ];
    return (
        <section id="contato" className="w-full min-h-screen flex justify-center mt-28">
            <GridContainer className="mx-3 p-5">
                <div className="flex flex-col items-center justify-center ">
                    <div className="mb-5">
                        <span className="px-4 py-1 rounded-2xl bg-linear-to-r  from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm">Contato</span>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-center">
                            <span className="bg-linear-to-r from-green-400 via-green-400 to-cyan-300 bg-clip-text text-transparent">Vamos Conversar!</span>
                        </h2>
                    </div>
                    <div className="flex items-center justify-center mb-32">
                        <p className="text-white font-semibold text-center">Ficarei feliz em conversar com você! Se quiser falar sobre oportunidades, projetos ou colaborar em algo, estou disponível nos canais abaixo.</p>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="w-full">
                            {
                                contactInfo.map((item, index) => {
                                    const Icon = item.icon

                                    const Content = (
                                        <div className="group relative flex items-center gap-4 bg-slate-900 border-2 border-white/10 mb-5 p-5 rounded-3xl cursor-pointer transition-all duration-300 hover:border-white/40 hover:translate-x-1.5">
                                            <div className={`pointer-events-none absolute inset-0 blur-3xl opacity-0 bg-linear-to-br ${item.color} group-hover:opacity-20`} />
                                            <div className={`bg-linear-to-br ${item.color} p-4 rounded-2xl hover:scale-105`}>
                                                <Icon className="text-3xl text-white" />
                                            </div>
                                            <div className="flex flex-col text-white min-w-0">
                                                <h4 className="text-slate-400">{item.label}</h4>
                                                <span className="break truncate">{item.value}</span>
                                            </div>
                                        </div>
                                    );

                                    return item.href ? (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            target="_blank"
                                        >
                                            {Content}
                                        </Link>
                                    ) : (
                                        <div key={index}>
                                            {Content}
                                        </div>
                                    )
                                })};
                        </div>
                        <div className="relative w-ful flex flex-col gap-7 p-10 bg-slate-900 border-2 border-white/10 rounded-4xl">
                            <div className={`pointer-events-none absolute inset-0 blur-3xl opacity-10 bg-black`} />
                            <div>
                                <h3 className="text-white text-3xl mb-2">Envie uma Mensagem</h3>
                                <span className="text-white/60">Responderei o mais breve possível!</span>
                            </div>
                            <form onSubmit={handleSubmit(EnviarMensagem)}>
                                <div className="flex flex-col gap-3 mb-7">
                                    <label htmlFor="nome" className="text-white">Nome Completo</label>
                                    <input
                                        {...register('nome')}
                                        type="text"
                                        id="nome"
                                        placeholder="Nome Completo"
                                        className="p-3 rounded-2xl text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:borde focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                    {errors && (<span className="text-red-500 text-sm">{errors.nome?.message}</span>)}
                                </div>
                                <div className="flex flex-col gap-3 mb-7">
                                    <label htmlFor="email" className="text-white">Email</label>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        id="email"
                                        placeholder="nome@gmail.com"
                                        className="p-3 rounded-2xl text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:borde focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                    />
                                    {errors && (<span className="text-red-500 text-sm">{errors.email?.message}</span>)}
                                </div>
                                <div className="flex flex-col gap-3 mb-7">
                                    <label htmlFor="mensagem" className="text-white">Mensagem</label>
                                    <textarea
                                        {...register('mensagem')}
                                        id="mensagem"
                                        rows={6}
                                        placeholder="Fale sobre oportunidades, projetos ou dúvidas..."
                                        className="p-3 rounded-2xl text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:borde focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    ></textarea>
                                    {errors && (<span className="text-red-500 text-sm">{errors.mensagem?.message}</span>)}
                                </div>
                                <div className="w-full">
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white bg-linear-to-r from-purple-600 via-fuchsia-600 to-cyan-600">
                                        <FaPaperPlane />
                                        <span>Enviar Mensagem</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}