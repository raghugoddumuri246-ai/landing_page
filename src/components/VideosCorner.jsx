import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const videos = [
    {
        title: "How to read The Hindu for UPSC?",
        speaker: "Sriram Sir",
        thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "14:20"
    },
    {
        title: "UPSC CSE 2024 Strategy & Roadmap",
        speaker: "Expert Panel",
        thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "45:10"
    },
    {
        title: "Decoding the Ethics Paper (GS IV)",
        speaker: "Dr. Vivek Sharma",
        thumbnail: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "28:45"
    }
];

const VideosCorner = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const cardsY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-16 md:py-20 bg-bg-secondary relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-1 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                            <h4 className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs">Video Library</h4>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                            Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Resources</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex flex-none items-center gap-3 px-6 py-3 text-sm rounded-full bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white border border-red-500/20 hover:border-transparent transition-all font-bold tracking-wide mt-6 md:mt-0 interactive group shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                    >
                        Explore More on YouTube
                        <PlayCircle size={24} className="group-hover:scale-110 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Featured Video (First Item) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 group cursor-pointer interactive relative"
                    >
                        <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 blur-[50px] transition-colors duration-500 pointer-events-none rounded-3xl"></div>
                        <div className="relative rounded-[2rem] overflow-hidden aspect-video bg-bg-primary border-4 border-transparent group-hover:border-red-500/30 transition-colors duration-500 mb-6 shadow-2xl">
                            <img src={videos[0].thumbnail} alt={videos[0].title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-red-600/90 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(220,38,38,0.8)] border border-white/20">
                                    <PlayCircle size={48} className="ml-1" fill="currentColor" />
                                </div>
                                <div className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-widest rounded-md mb-4 w-max">Featured Masterclass</div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-red-400 transition-colors leading-tight">
                                    {videos[0].title}
                                </h3>
                                <div className="flex items-center gap-4">
                                    <p className="text-gray-300 text-sm font-medium">
                                        By <span className="font-bold text-white uppercase tracking-wide">{videos[0].speaker}</span>
                                    </p>
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    <p className="text-gray-300 text-sm font-mono font-bold tracking-widest">{videos[0].duration}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Up Next List */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <h4 className="text-text-primary font-black text-xl mb-2 flex items-center gap-2">
                            <PlayCircle className="text-red-500 w-5 h-5" /> Up Next
                        </h4>
                        {videos.slice(1).map((video, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ delay: idx * 0.15, duration: 0.5 }}
                                whileHover={{ x: -10 }}
                                className="group cursor-pointer interactive flex gap-4 p-3 rounded-2xl hover:bg-bg-primary border border-transparent hover:border-border-color transition-all duration-300"
                            >
                                <div className="relative w-32 md:w-40 shrink-0 rounded-xl overflow-hidden aspect-video bg-bg-primary">
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-colors duration-500">
                                        <PlayCircle size={24} className="text-white/80 group-hover:text-red-500 transition-colors" fill="currentColor" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono text-white font-bold">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center py-1">
                                    <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-red-500 transition-colors leading-snug line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-text-secondary text-xs font-medium">
                                        {video.speaker}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <button className="md:hidden mt-8 w-full flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 font-bold interactive text-sm">
                    Explore YouTube
                    <PlayCircle size={20} />
                </button>
            </div>
        </section>
    );
};

export default VideosCorner;
