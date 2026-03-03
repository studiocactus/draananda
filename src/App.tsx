import React, { useState, useEffect } from 'react'
import {
    Heart,
    Stethoscope,
    User,
    MapPin,
    Phone,
    Instagram,
    MessageSquare,
    ChevronRight,
    Menu,
    X,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    Syringe,
    Dna,
    Sticker,
    Plus,
    Minus,
    ChevronDown,
    Scale,
    Activity,
    ArrowUp
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// --- Components ---

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-700 rounded-full flex items-center justify-center text-white">
                        <Heart className="w-6 h-6" />
                    </div>
                    <div>
                        <span className={`text-xl font-bold tracking-tight leading-none block transition-colors duration-300 ${isScrolled ? 'text-brand-900' : 'text-white'}`}>Dra. Ananda Paris</span>
                        <span className={`text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${isScrolled ? 'text-brand-500' : 'text-white/60'}`}>Nutrologia & Clínica Médica</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
                    <a href="#inicio" className="hover:text-brand-700 transition-colors">Início</a>
                    <a href="#sobre" className="hover:text-brand-700 transition-colors">Sobre</a>
                    <a href="#servicos" className="hover:text-brand-700 transition-colors">Serviços</a>
                    <a href="#lipedema" className="hover:text-brand-700 transition-colors">Lipedema</a>
                    <a href="#contato" className="btn-primary py-2.5 px-6 !text-sm">Agendar Consulta</a>
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-brand-900' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4 text-brand-900 font-medium">
                            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
                            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
                            <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
                            <a href="#lipedema" onClick={() => setIsMobileMenuOpen(false)}>Lipedema</a>
                            <a href="#contato" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Agendar Agora</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#2D1B15]">
            {/* Immersive Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src="/dra-ananda-hero-v3.png"
                    alt="Dra. Ananda Paris background"
                    className="w-full h-full object-cover lg:object-right opacity-80"
                />
                {/* Subtle Overlays for text weight and blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B15] via-[#2D1B15]/40 to-transparent lg:w-1/2" />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#2D1B15] to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 py-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 bg-brand-800/50 backdrop-blur-md border border-white/10 text-brand-100 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-10 shadow-xl"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
                            CRM-SP 187387 | RQE 116808
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-serif text-white leading-[0.9] mb-10 tracking-tighter">
                            A medicina <br />
                            <span className="text-brand-300 relative inline-block">
                                que te ouve.
                                <svg className="absolute -bottom-4 left-0 w-full h-4 text-brand-400/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-brand-100/80 mb-12 max-w-2xl leading-relaxed font-light"
                        >
                            Dra. Ananda Paris: Estratégia clínica de <span className="font-semibold text-white">alto impacto</span> focada em equilíbrio hormonal, vitalidade e emagrecimento consciente em Moema.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-6 mb-20"
                        >
                            <a href="https://wa.me/5511999488449" className="btn-primary !bg-white !text-brand-900 hover:!bg-brand-50 !py-6 !px-12 text-xl shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] group flex items-center justify-center">
                                Agendar Minha Avaliação
                                <ArrowRight className="ml-3 w-7 h-7 transition-transform group-hover:translate-x-2" />
                            </a>
                            <a href="#servicos" className="btn-outline !text-white !border-white/30 hover:!bg-white/10 !py-6 !px-12 text-xl backdrop-blur-md flex items-center justify-center">
                                Ver Tratamentos
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap items-center gap-12"
                        >
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif text-white leading-none">+500</span>
                                <span className="text-xs uppercase tracking-[0.2em] text-brand-300 font-bold mt-2">Pacientes Atendidas</span>
                            </div>
                            <div className="h-12 w-[1px] bg-white/20 hidden sm:block" />
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif text-white leading-none tracking-tight">Especialista</span>
                                <span className="text-xs uppercase tracking-[0.2em] text-brand-300 font-bold mt-2">Nutrologia & Clínica Médica</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-200 font-bold">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-brand-400 to-transparent" />
            </motion.div>
        </section>
    )
}

const ServiceCard = ({ title, icon: Icon, description, items }: any) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-10 rounded-3xl border border-brand-100 shadow-sm hover:shadow-2xl transition-all duration-300"
    >
        <div className="w-16 h-16 bg-brand-50 text-brand-700 rounded-2xl flex items-center justify-center mb-8">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif text-brand-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3 mb-8">
            {items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
        <a href="https://wa.me/5511999488449" className="text-brand-700 font-bold flex items-center gap-2 group">
            Saber Mais
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
    </motion.div>
)

const Testimonials = () => {
    const reviews = [
        {
            name: "Mariana Silva",
            date: "Janeiro 2025",
            text: "O acompanhamento com a Dra. Ananda mudou minha relação com meu corpo. Pela primeira vez, entendi que o emagrecimento não é castigo, é estratégia. Perdi 12kg com saúde!",
            type: "Emagrecimento"
        },
        {
            name: "Patrícia Menezes",
            date: "Fevereiro 2025",
            text: "Sofri anos com dores nas pernas sem saber que era Lipedema. O tratamento humanizado e a dieta anti-inflamatória me devolveram a vontade de caminhar sem sofrer.",
            type: "Tratamento Lipedema"
        },
        {
            name: "Cláudia Rocha",
            date: "Dezembro 2024",
            text: "Minha energia estava no chão. Com o protocolo de injetáveis e o ajuste hormonal, me sinto outra mulher. Mente focada e disposição que eu não tinha há 10 anos.",
            type: "Reposição Hormonal"
        }
    ]

    return (
        <section className="section-padding bg-brand-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-700 font-bold uppercase tracking-widest text-sm block mb-4">Experiências Reais</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-900">O que dizem as pacientes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <div key={star} className="text-accent">
                                            <Heart className="w-4 h-4 fill-current" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-8 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                            </div>
                            <div className="flex items-center justify-between border-t border-brand-50 pt-6">
                                <div>
                                    <h4 className="font-bold text-brand-900">{review.name}</h4>
                                    <p className="text-xs text-brand-500 uppercase tracking-tighter">{review.type}</p>
                                </div>
                                <span className="text-[10px] text-gray-400 font-medium">{review.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-brand-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left group"
            >
                <span className="text-xl font-serif text-brand-900 group-hover:text-brand-700 transition-colors">{question}</span>
                <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-700 text-white rotate-180' : 'bg-brand-100 text-brand-700'}`}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 pb-8 leading-relaxed max-w-4xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQ = () => {
    const faqs = [
        {
            question: "Os tratamentos são cobertos por convênios?",
            answer: "Atendemos de forma particular para garantir o tempo e a personalização necessários para resultados excepcionais. Fornecemos recibos detalhados para que você possa solicitar o reembolso junto ao seu plano de saúde, conforme a cobertura disponível."
        },
        {
            question: "Onde é realizado o atendimento?",
            answer: "Nosso consultório está localizado em Moema, São Paulo, em um ambiente sofisticado e acolhedor, projetado para proporcionar o máximo de conforto, privacidade e segurança durante sua jornada de cuidado."
        },
        {
            question: "Como funciona o acompanhamento após a consulta?",
            answer: "Desenvolvemos um plano personalizado com consultas de acompanhamento estrategicamente programadas. Além disso, mantemos um canal de suporte dedicado para ajustes e dúvidas, garantindo que você tenha suporte contínuo em cada etapa do seu tratamento."
        },
        {
            question: "É possível realizar consultas online?",
            answer: "Sim, realizamos teleconsultas para pacientes de todo o Brasil e do exterior, seguindo as regulamentações vigentes. A primeira avaliação pode ser feita remotamente para definir a estratégia inicial de tratamento."
        }
    ]

    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <span className="text-brand-700 font-bold uppercase tracking-widest text-sm block mb-4">Dúvidas Comuns</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight">Perguntas Frequentes (FAQ)</h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Tem alguma dúvida específica não listada aqui? Sinta-se à vontade para nos chamar diretamente no canal de agendamento.
                        </p>
                        <a href="https://wa.me/5511999488449" className="mt-8 inline-flex items-center text-brand-700 font-bold border-b-2 border-brand-700 pb-1 hover:text-brand-900 hover:border-brand-900 transition-all">
                            Falar com a equipe agora
                        </a>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="divide-y divide-brand-200">
                            {faqs.map((faq, i) => (
                                <FAQItem key={i} {...faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const App = () => {
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 800)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />

            {/* Symptoms Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
                            O emagrecer virou uma batalha?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Sinais que indicam desequilíbrios nutricionais e metabólicos que requerem avaliação médica individualizada.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Ganho de peso resistente",
                            "Inchaços e sensibilidade nas pernas",
                            "Irritabilidade, insônia ou cansaço",
                            "Mente acelerada e ansiedade",
                            "Queda de rendimento físico",
                            "Sintomas de desequilíbrio hormonal"
                        ].map((symptom, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-6 bg-brand-50 rounded-2xl border border-brand-100"
                            >
                                <div className="w-3 h-3 bg-brand-400 rounded-full" />
                                <span className="font-medium text-brand-800">{symptom}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Immersive Consultório (What I Do) Section */}
            <section id="servicos" className="py-32 bg-brand-900 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-brand-300 font-bold uppercase tracking-[0.3em] text-[10px] block mb-4"
                        >
                            Excelência Médica Individualizada
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif text-white leading-tight"
                        >
                            O que realizo no consultório:
                        </motion.h2>
                    </div>

                    {(() => {
                        const servicesList = [
                            {
                                id: 'perda-peso',
                                title: 'Perda de peso com estratégia médica personalizada',
                                desc: 'Uso clínico de medicamentos como Mounjaro, exames de composição corporal (bioimpedância) e plano combinado com nutricionista. Indicado para quem quer perder peso com responsabilidade, sem efeito rebote.',
                                icon: Scale,
                                img: '/servico-emagrecimento.png',
                                badge: 'Foco Metabólico'
                            },
                            {
                                id: 'hormonal',
                                title: 'Reposição Hormonal Feminina e Masculina',
                                subtitle: '(com ou sem implantes)',
                                desc: 'Avaliação completa para entender seu perfil hormonal e indicar o melhor tratamento — com foco em saúde, longevidade e bem-estar emocional.',
                                icon: Dna,
                                img: '/servico-hormonal.png',
                                badge: 'Saúde & Longevidade'
                            },
                            {
                                id: 'lipedema',
                                title: 'Tratamento de Lipedema',
                                desc: 'Abordagem clínica para controlar dor, inchaço e progressão da condição. Tratamento humanizado, com atenção à estética, à saúde vascular e à qualidade de vida.',
                                icon: Activity,
                                img: '/servico-lipedema.png',
                                badge: 'Cuidado Humanizado'
                            },
                            {
                                id: 'injetaveis',
                                title: 'Injetáveis (vitaminas e ativos)',
                                desc: 'Aplicações com foco em imunidade, energia, metabolismo e saúde da pele, de forma prática e eficaz.',
                                icon: Syringe,
                                img: '/servico-injetaveis.png',
                                badge: 'Bem-estar Prático'
                            },
                            {
                                id: 'avaliacoes',
                                title: 'Avaliações clínicas detalhadas',
                                desc: 'Consulta com escuta ativa, anamnese aprofundada e planejamento individualizado.',
                                icon: Stethoscope,
                                img: '/servico-avaliação.png',
                                badge: 'Escuta Ativa'
                            }
                        ];
                        const [activeIdx, setActiveIdx] = useState(0);

                        return (
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                                {/* List Area */}
                                <div className="lg:col-span-6 space-y-4">
                                    {servicesList.map((item, idx) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            onMouseEnter={() => setActiveIdx(idx)}
                                            className={`p-6 rounded-3xl border transition-all duration-500 cursor-pointer ${activeIdx === idx
                                                ? 'bg-white/10 border-white/20 shadow-2xl'
                                                : 'bg-transparent border-transparent opacity-40 hover:opacity-80'
                                                }`}
                                        >
                                            <div className="flex gap-6">
                                                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeIdx === idx ? 'bg-brand-700 text-white' : 'bg-white/10 text-brand-100/60'
                                                    }`}>
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg md:text-xl font-serif text-white mb-2 leading-tight">
                                                        {item.title} <span className="text-brand-300 block md:inline text-sm">{item.subtitle}</span>
                                                    </h3>
                                                    {activeIdx === idx && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            className="text-brand-100/60 leading-relaxed text-sm"
                                                        >
                                                            {item.desc}
                                                        </motion.p>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    <div className="pt-8">
                                        <a href="https://wa.me/5511999488449" className="btn-primary !bg-white !text-brand-900 hover:!bg-brand-50 !py-6 !px-12 text-xl shadow-2xl flex items-center justify-center sm:inline-flex">
                                            Agendar Minha Consulta
                                            <ArrowRight className="ml-3 w-7 h-7" />
                                        </a>
                                    </div>
                                </div>

                                {/* Visual Display Area */}
                                <div className="lg:col-span-6 sticky top-32 hidden lg:block">
                                    <div className="relative aspect-square">
                                        <motion.div
                                            animate={{ rotate: 3 }}
                                            className="absolute inset-0 bg-brand-800 rounded-[5rem] -z-10"
                                        />
                                        <div className="absolute inset-0 border-2 border-white/20 rounded-[5rem] -rotate-3 -z-20" />

                                        <div className="h-full w-full rounded-[4.5rem] overflow-hidden shadow-2xl relative">
                                            <AnimatePresence mode="wait">
                                                <motion.img
                                                    key={activeIdx}
                                                    initial={{ opacity: 0, scale: 1.1 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 1.1 }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                    src={servicesList[activeIdx].img}
                                                    alt={servicesList[activeIdx].title}
                                                    className="w-full h-full object-cover grayscale-[0.2]"
                                                />
                                            </AnimatePresence>
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />

                                            {/* Context Badge */}
                                            <motion.div
                                                key={`badge-${activeIdx}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 whitespace-nowrap"
                                            >
                                                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-300 font-bold text-center">{servicesList[activeIdx].badge}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            <Testimonials />

            {/* About Section */}
            <section id="sobre" className="section-padding bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 border-[12px] border-brand-50 w-full h-full rounded-3xl -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                            <div className="absolute -bottom-6 -right-6 bg-brand-100/50 w-full h-full rounded-3xl -z-20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="/dra-ananda-about.png"
                                    alt="Dra. Ananda Paris"
                                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-8">Conheça a Dra. Ananda</h2>
                            <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                <p>
                                    Sou médica formada em 2015, com residência em Clínica Médica e pós-graduação em Nutrologia. Natural de Vitória (ES), vivo em São Paulo há 8 anos, onde construí minha trajetória com foco no atendimento de mulheres reais.
                                </p>
                                <p>
                                    Depois de atuar em prontos-socorros e UTIs, encontrei na nutrologia o espaço para aplicar a medicina como acredito: com escuta, proximidade e autonomia para o paciente.
                                </p>
                                <p className="font-serif italic text-brand-700 text-xl">
                                    &ldquo;A medicina que acredito une ciência, escuta ativa e um olhar atento para quem está por trás dos sintomas.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />

            {/* CTA Footer */}
            <section id="contato" className="py-32 bg-brand-900 text-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-700/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-200/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-brand-50">Sua jornada para uma vida mais equilibrada começa aqui.</h2>
                            <p className="text-brand-200 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                                Agende sua consulta inicial e descubra como uma estratégia médica personalizada pode transformar sua saúde e vitalidade.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                                <a href="https://wa.me/5511999488449" className="btn-primary !bg-white !text-brand-900 hover:!bg-brand-50 !px-12 !py-5 text-xl w-full sm:w-auto">
                                    <MessageSquare className="mr-3 w-6 h-6" />
                                    Agendar Agora
                                </a>
                                <div className="text-left hidden sm:block">
                                    <p className="text-xs text-brand-300 uppercase tracking-widest font-bold mb-1">Fale Conosco</p>
                                    <p className="text-xl font-medium">(11) 99948-8449</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                            <div className="flex gap-6 items-start">
                                <div className="p-4 bg-brand-800 rounded-2xl text-brand-200">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-2">Presencial</h4>
                                    <p className="text-brand-300 leading-relaxed italic">
                                        Alameda dos Arapanés, 105<br />
                                        Moema, São Paulo - SP
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="p-4 bg-brand-800 rounded-2xl text-brand-200">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-serif mb-2">Atendimento</h4>
                                    <p className="text-brand-300 leading-relaxed">
                                        Segunda a Sexta: 09h às 18h<br />
                                        Especialista em Nutrologia & Clínica Médica
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-brand-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-brand-700 transition-colors border border-white/10"
                        title="Voltar ao topo"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            <footer className="py-20 bg-brand-50/30 border-t border-brand-100/50">
                <div className="container mx-auto px-6 text-center">
                    {/* Branding Area */}
                    <div className="max-w-2xl mx-auto mb-16">
                        <span className="text-4xl font-serif text-brand-900 mb-6 block italic">Dra. Ananda Paris</span>
                        <p className="text-gray-500 text-sm leading-relaxed px-4">
                            Medicina humanizada com foco em nutrologia, emagrecimento e longevidade saudável para mulheres que buscam sua melhor versão.
                        </p>
                    </div>

                    {/* Navigation & Socials Group */}
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mb-16 text-brand-900">
                        <a href="#inicio" className="hover:text-brand-700 transition-all uppercase tracking-widest text-[10px] font-bold">Início</a>
                        <a href="#servicos" className="hover:text-brand-700 transition-all uppercase tracking-widest text-[10px] font-bold">Especialidades</a>
                        <a href="#sobre" className="hover:text-brand-700 transition-all uppercase tracking-widest text-[10px] font-bold">Trajetória</a>
                        <a href="#contato" className="hover:text-brand-700 transition-all uppercase tracking-widest text-[10px] font-bold">Agendamento</a>
                        <span className="w-[1px] h-4 bg-brand-200 hidden sm:block mx-2" />
                        <a href="https://instagram.com/dra.anandaparis" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Legal & Compliance Area */}
                    <div className="pt-12 border-t border-brand-200/40 max-w-4xl mx-auto">
                        <div className="mb-8">
                            <p className="text-brand-900 font-bold tracking-[0.2em] text-[9px] uppercase mb-4 opacity-60">Registro Profissional</p>
                            <p className="text-gray-600 text-[11px] font-serif italic">CRM-SP 187387 | RQE 116808</p>
                        </div>

                        <p className="text-[10px] text-gray-400 leading-relaxed font-light mb-10 max-w-2xl mx-auto italic">
                            Publicação de caráter acadêmico em conformidade com o despacho 143/2019 do Conselho Federal de Medicina, Art. 75. Os resultados apresentados podem variar conforme as características individuais de cada paciente. Não garantimos resultados. Cada conduta é individual e baseada em critérios clínicos.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[9px] text-gray-500 uppercase tracking-[0.4em] font-medium">
                            <span>© 2026 Todos os direitos reservados</span>
                            <span className="hidden md:block opacity-30">•</span>
                            <span>Studio Cactus</span>
                            <span className="hidden md:block opacity-30">•</span>
                            <a href="https://www.denisramos.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-brand-900 transition-colors">denisramos.com.br</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
