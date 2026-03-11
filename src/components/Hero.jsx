import React, { useCallback, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesConfig = {
        fullScreen: { enable: false, zIndex: 0 },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
            },
        },
        particles: {
            color: {
                value: theme === 'dark' ? ["#2563eb", "#fbbf24", "#ffffff"] : ["#1e3a8a", "#d97706", "#3b82f6"],
            },
            links: {
                color: theme === 'dark' ? "#3b82f6" : "#2563eb",
                distance: 150,
                enable: true,
                opacity: theme === 'dark' ? 0.3 : 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: 0.6,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
            },
            life: {
                duration: {
                    sync: false,
                    value: 3
                },
                count: 0,
            }
        },
        detectRetina: true,
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-bg-primary transition-colors duration-500"
        >
            {/* Particle Background */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Particles id="tsparticles" init={particlesInit} options={particlesConfig} className="w-full h-full" />
            </div>

            {/* Decorative Orbs with Parallax */}
            <motion.div style={{ y: y2 }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-0 pointer-events-none"></motion.div>
            <motion.div style={{ y: y1 }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] -z-0 pointer-events-none"></motion.div>

            <motion.div
                style={{ opacity, scale, y: y1 }}
                className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center"
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block px-5 py-2 rounded-full border border-border-color glass mb-8"
                    >
                        <span className="text-sm font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            India's Premier Coaching
                        </span>
                    </motion.div>

                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-text-primary"
                        >
                            Crack UPSC with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                                Innovative Learning
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-base md:text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Experience a futuristic approach to civil services preparation. Expert guidance, AI-driven analytics, and comprehensive study materials.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-base shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all flex items-center gap-3 group interactive relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative z-10">Start Free Trial</span>
                            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full glass hover:bg-glass-bg border border-border-color text-text-primary font-bold text-base transition-all flex items-center gap-3 group interactive"
                        >
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                            Watch Video
                        </motion.button>
                    </motion.div>
                </div>

                {/* Stats Section Parallax Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                    className="mt-16 w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 glass-card rounded-3xl p-6 border border-border-color"
                >
                    <div className="text-center group">
                        <h3 className="text-3xl font-black text-text-primary mb-1 group-hover:text-primary transition-colors">500+</h3>
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-[0.2em]">Selections</p>
                    </div>
                    <div className="text-center group lg:border-l border-border-color">
                        <h3 className="text-3xl font-black text-text-primary mb-1 group-hover:text-secondary transition-colors">50+</h3>
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-[0.2em]">Expert Faculty</p>
                    </div>
                    <div className="text-center group lg:border-l border-border-color">
                        <h3 className="text-3xl font-black text-text-primary mb-1 group-hover:text-primary transition-colors">10M+</h3>
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-[0.2em]">Video Views</p>
                    </div>
                    <div className="text-center group lg:border-l border-border-color">
                        <h3 className="text-3xl font-black text-text-primary mb-1 group-hover:text-secondary transition-colors">4.9/5</h3>
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-[0.2em]">Student Rating</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
