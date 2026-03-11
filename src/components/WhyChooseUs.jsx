import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, BookOpen, Users, Compass } from 'lucide-react';

const reasons = [
    { title: "Legacy of Excellence", desc: "Over 35 years of unparalleled success in Civil Services.", icon: Award },
    { title: "AI-Powered Analytics", desc: "Track progress with intelligent performance metrics.", icon: Zap },
    { title: "Curated Study Material", desc: "Crisp, relevant, and highly updated resources.", icon: BookOpen },
    { title: "Elite Faculty Panel", desc: "Mentorship by ex-bureaucrats and subject experts.", icon: Users },
    { title: "Strategic Methodology", desc: "Targeted approach ensuring max output per hour.", icon: Compass },
    { title: "Holistic Development", desc: "Focusing on interview skills and personality.", icon: CheckCircle2 }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-20 bg-bg-primary relative border-t border-border-color transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 glass mb-6"
                    >
                        <span className="text-sm font-bold tracking-widest text-primary uppercase">The Ecosystem</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-text-primary tracking-tight"
                    >
                        Why Choose <span className="text-primary">Sriram IAS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary text-base max-w-2xl font-light mx-auto leading-relaxed"
                    >
                        We are not just a coaching institute; we are an ecosystem designed for success in the most competitive exam on Earth. Experience the perfect blend of tradition and technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reasons.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 md:p-10 rounded-3xl hover:bg-glass-bg transition-all duration-300 group overflow-hidden relative interactive border border-border-color hover:border-primary/40 shadow-sm flex flex-col"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 bg-bg-secondary border border-border-color rounded-2xl flex items-center justify-center mb-6 text-primary shadow-inner group-hover:text-white group-hover:bg-primary transition-all duration-300 transform group-hover:scale-105">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-text-primary mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary text-base font-light leading-relaxed mt-auto relative z-10">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
