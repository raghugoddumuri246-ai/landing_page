import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CurrentAffairs = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const tilt = useTransform(scrollYProgress, [0, 1], [-20, 10]);

    return (
        <section id="current-affairs" ref={containerRef} className="py-10 md:py-12 bg-bg-primary relative border-y border-border-color transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="glass rounded-[2rem] p-6 md:p-10 lg:p-12 overflow-hidden relative border border-border-color shadow-[0_30px_60px_rgba(0,0,0,0.1)]">

                    {/* Decorative Background for the card */}
                    <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                    <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 mb-8 font-black tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                                LIVE UPDATES
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight text-text-primary tracking-tight">
                                Master the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Current Affairs</span>
                            </h2>

                            <p className="text-text-secondary text-lg font-light mb-8 leading-relaxed max-w-lg">
                                Access our premium, daily updated current affairs analysis completely free. Stay ahead of the curve with simplified explanations of complex global and national issues.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-4 text-text-primary group">
                                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 text-primary border border-border-color group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-base font-medium group-hover:translate-x-2 transition-transform duration-300">Daily crisp PDF summaries of The Hindu & Indian Express</span>
                                </li>
                                <li className="flex items-center gap-4 text-text-primary group">
                                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 text-secondary border border-border-color group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-base font-medium group-hover:translate-x-2 transition-transform duration-300">Weekly video analysis by expert faculty</span>
                                </li>
                                <li className="flex items-center gap-4 text-text-primary group">
                                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 text-accent border border-border-color group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-base font-medium group-hover:translate-x-2 transition-transform duration-300">Monthly compilations and MCQs for revision</span>
                                </li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 interactive text-base"
                                >
                                    Start Reading Free
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ rotateY: tilt, rotateX: useTransform(tilt, t => -t * 0.5) }}
                            className="lg:w-1/2 relative perspective-1000 hidden md:block"
                        >
                            <div className="w-full aspect-video bg-bg-secondary rounded-[2rem] border-2 border-border-color shadow-2xl overflow-hidden p-6 flex flex-col interactive relative group">

                                {/* Glow behind the mockup */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                {/* Mock UI for Current Affairs App/Portal */}
                                <div className="flex justify-between items-center mb-8 pb-6 border-b border-border-color">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]"></div>
                                        <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                                        <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                                    </div>
                                    <div className="text-sm text-text-secondary font-mono tracking-widest font-black uppercase">Today's Headlines</div>
                                </div>

                                <div className="flex-1 space-y-6 overflow-hidden">
                                    {[1, 2, 3].map((item, idx) => (
                                        <motion.div
                                            key={item}
                                            initial={{ x: 50, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                            whileHover={{ scale: 1.02, x: -10 }}
                                            className="flex gap-6 p-4 rounded-2xl bg-bg-primary border border-transparent hover:border-primary/20 hover:shadow-lg cursor-pointer transition-all duration-300"
                                        >
                                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/30 to-accent/10 flex-shrink-0 overflow-hidden relative group/img">
                                                <div className="absolute inset-0 bg-primary/20 group-hover/img:scale-150 transition-transform duration-700 rounded-full blur-xl"></div>
                                            </div>
                                            <div className="flex-1 flex flex-col justify-center">
                                                <div className="h-5 w-3/4 bg-text-primary/20 rounded-md mb-3"></div>
                                                <div className="h-4 w-full bg-text-secondary/20 rounded-md mb-2"></div>
                                                <div className="h-4 w-1/2 bg-text-secondary/20 rounded-md"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Overlay gradient */}
                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-secondary to-transparent pointer-events-none"></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentAffairs;
