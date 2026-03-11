import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" ref={containerRef} className="py-10 md:py-12 bg-bg-secondary relative overflow-hidden transition-colors duration-500">
            {/* Tech grid background */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Left Content (Sticky scroll effect) */}
                    <motion.div
                        style={{ y: textY }}
                        className="flex-1 lg:pr-10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-secondary to-transparent"></div>
                            <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Our Legacy</h4>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight text-text-primary">
                            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Excellence</span> in Civil Services
                        </h2>

                        <p className="text-text-secondary text-base mb-6 leading-relaxed font-light">
                            At Sriram IAS, we believe in transforming aspirations into achievements. With a legacy spanning over three decades, our pedagogical approach integrates traditional wisdom with modern, tech-driven learning methodologies to produce the leaders of tomorrow.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-card p-6 rounded-2xl border-l-4 border-l-primary flex items-start gap-4 hover:border-r-4 hover:border-r-transparent transition-all duration-300 group interactive"
                            >
                                <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-bold mb-1 text-base">Innovative Method</h4>
                                    <p className="text-xs text-text-secondary">AI-assisted personalized study plans.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-card p-6 rounded-2xl border-l-4 border-l-secondary flex items-start gap-4 hover:border-r-4 hover:border-r-transparent transition-all duration-300 group interactive"
                            >
                                <div className="bg-secondary/10 p-4 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-bold mb-1 text-base">Expert Faculty</h4>
                                    <p className="text-xs text-text-secondary">Learn from seasoned bureaucrats.</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 text-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold tracking-wide interactive flex items-center gap-2 group"
                        >
                            Discover Our Story
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </motion.button>
                    </motion.div>

                    {/* Right Image/3D Element Representation with Parallax */}
                    <div className="flex-1 relative w-full h-[400px] md:h-[450px] perspective-1000">
                        <motion.div
                            style={{ y: imageY, rotateX: 5, rotateY: -10 }}
                            className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-[2.5rem] transform overflow-visible"
                        >
                            <div className="absolute inset-0 bg-bg-primary rounded-[2.5rem] overflow-hidden border-2 border-border-color shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-colors duration-500">
                                <div className="w-full h-full bg-bg-secondary relative overflow-hidden flex items-center justify-center">

                                    {/* High quality image with parallax */}
                                    <motion.div
                                        className="absolute inset-[-10%] bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-luminosity opacity-40 dark:opacity-20"
                                        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent"></div>

                                    <div className="z-10 text-center">
                                        <motion.div
                                            animate={{ y: [-10, 10, -10] }}
                                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                            className="w-32 h-32 mx-auto glass rounded-full flex items-center justify-center mb-6 border border-primary/30 text-primary shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                                        >
                                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        </motion.div>
                                        <h3 className="text-2xl font-black text-text-primary tracking-wide">Our Campus</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{
                                y: useTransform(scrollYProgress, [0, 1], [0, -100]),
                                x: useTransform(scrollYProgress, [0, 1], [0, -20])
                            }}
                            className="absolute -bottom-8 -left-8 glass-card p-4 rounded-2xl z-20 flex items-center gap-4 shadow-2xl border border-secondary/20 interactive group"
                        >
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(217,119,6,0.5)]">
                                30+
                            </div>
                            <div>
                                <p className="text-text-primary font-black text-lg leading-tight">Years of<br />Legacy</p>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
