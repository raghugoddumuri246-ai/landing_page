import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        text: "The conceptual clarity provided by Sriram Sir in Economy is unmatched. It completely transformed my perspective on the subject and was crucial for my mains score.",
        author: "Pratham Agarwal",
        rank: "AIR 5, CSE 2021",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        text: "The holistic approach to answer writing and real-time personalized feedback in the test series gave me the confidence to handle any bouncer UPSC threw at me.",
        author: "Sneha Jain",
        rank: "AIR 14, CSE 2022",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        text: "What sets Sriram IAS apart is not just the study material, but the ecosystem of excellence. The mentorship program kept me focused during my lowest phases.",
        author: "Rishabh Tripathi",
        rank: "AIR 23, CSE 2020",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

const Testimonials = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="py-10 md:py-12 bg-bg-primary relative border-t border-border-color transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="text-2xl md:text-4xl font-black text-text-primary tracking-tight"
                        >
                            Words of <span className="text-secondary">Success</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden flex flex-col items-center">
                    {/* Fading Edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex gap-6 w-max py-4"
                        animate={{ x: [0, -1032] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    >
                        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="bg-bg-secondary p-6 rounded-2xl relative border border-border-color hover:border-primary/40 transition-colors group shadow-sm flex flex-col w-[350px] shrink-0 interactive"
                            >
                                <div className="flex text-secondary mb-3 gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                
                                <p className="text-text-secondary italic leading-relaxed text-sm font-light mb-5 flex-grow">
                                    "{testimonial.text}"
                                </p>

                                <div className="mt-auto flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 overflow-hidden shrink-0">
                                        <img src={testimonial.img} alt={testimonial.author} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-text-primary">{testimonial.author}</h4>
                                        <p className="text-secondary text-[10px] font-bold tracking-wide uppercase">{testimonial.rank}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
