import React from 'react';
import { motion } from 'framer-motion';

const topRankers = [
    { rank: 1, name: 'Anudeep Durishetty', year: '2017' },
    { rank: 3, name: 'Ronanki Gopalakrishna', year: '2016' },
    { rank: 5, name: 'Srishti Deshmukh', year: '2018' },
    { rank: 7, name: 'Praveen Kumar', year: '2020' }
];

const Celebrations = () => {
    return (
        <section className="py-10 md:py-12 bg-bg-secondary relative overflow-hidden transition-colors duration-500">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -mr-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Hall of Fame</h4>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-text-primary">
                            Celebrating Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Selections</span>
                        </h2>
                        <p className="text-text-secondary text-base font-light leading-relaxed">
                            We take immense pride in consistently producing top rankers in the UPSC Civil Services Examination. A testament to our unwavering dedication and innovative pedagogy.
                        </p>
                    </motion.div>

                    {/* Infinite Marquee Container */}
                    <div className="relative w-full overflow-hidden flex flex-col gap-8 py-4">
                        {/* Gradient Masks (Removed per user request) */}
                        
                        {/* Marquee Row 1 */}
                        <motion.div
                            animate={{ x: [0, -1032] }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            className="flex gap-6 w-max"
                        >
                            {[...topRankers, ...topRankers, ...topRankers, ...topRankers].map((ranker, idx) => (
                                <div
                                    key={`row1-${idx}`}
                                    className="w-64 aspect-[3/4] rounded-3xl overflow-hidden relative group interactive shrink-0 border border-border-color shadow-xl"
                                >
                                    <img src={`https://images.unsplash.com/photo-${1530000000000 + idx * 10000}?auto=format&fit=crop&w=400&q=80`} alt={ranker.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" }} />
                                    {/* Reduced glare on light mode by using neutral dark gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/50 rounded-3xl transition-colors duration-500"></div>
                                    
                                    <div className="absolute top-4 right-4 bg-secondary text-gray-900 text-xs font-black px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(217,119,6,0.5)] transform rotate-3 group-hover:rotate-0 transition-transform">
                                        AIR {ranker.rank}
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-white font-black text-xl mb-1">{ranker.name}</h4>
                                        <p className="text-secondary tracking-widest text-xs font-bold uppercase">CSE {ranker.year}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Marquee Row 2 Removed per user request */}
                    </div>

                    <div className="flex justify-center mt-6 z-20 relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full text-sm bg-secondary text-gray-900 font-black tracking-wide interactive shadow-[0_0_30px_rgba(217,119,6,0.4)] hover:shadow-[0_0_50px_rgba(217,119,6,0.6)] transition-shadow flex items-center gap-3"
                        >
                            View Full List of Selections
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Celebrations;
