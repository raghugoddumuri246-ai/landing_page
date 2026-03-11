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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
                    {reasons.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-bg-secondary/40 backdrop-blur-sm p-8 rounded-[2rem] group overflow-hidden relative border border-border-color hover:border-primary/50 hover:bg-bg-secondary/80 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
                        >
                            {/* Large Background Icon */}
                            <div className="absolute -bottom-8 -right-8 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 text-primary">
                                <item.icon size={180} strokeWidth={1} />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex flex-col gap-5 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                        <item.icon size={26} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-text-secondary text-base font-normal leading-relaxed mt-auto relative z-10 group-hover:text-text-primary transition-colors duration-300">
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
