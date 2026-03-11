import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const centres = [
    {
        city: 'Old Rajinder Nagar, Delhi',
        address: '11B, Bada Bazar Marg, Old Rajinder Nagar, New Delhi - 110060',
        phone: '+91 98111 22233',
        email: 'orn@sriramias.com'
    },
    {
        city: 'Mukherjee Nagar, Delhi',
        address: 'A-20, Commercial Complex, Dr. Mukherjee Nagar, Delhi - 110009',
        phone: '+91 98111 44455',
        email: 'mkn@sriramias.com'
    },
    {
        city: 'Hyderabad, Telangana',
        address: 'Ashok Nagar X Roads, Hyderabad - 500029',
        phone: '+91 98111 66677',
        email: 'hyd@sriramias.com'
    }
];

const OfflineCentres = () => {
    return (
        <section id="centres" className="py-10 md:py-12 bg-bg-secondary relative overflow-hidden transition-colors duration-500">
            {/* Background Animated Map Pattern */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-cover pointer-events-none"
                style={{ filter: "invert(1) grayscale(100%)" }} // Makes the SVG compatible with dark mode easily for this specific map URL
            ></motion.div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-secondary/30 glass mb-6"
                    >
                        <MapPin className="text-secondary w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-bold tracking-widest text-secondary uppercase">Global Standards, Local Presence</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-text-primary tracking-tight"
                    >
                        Find Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-secondary">Offline Centres</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary text-base font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Experience our legendary pedagogy in person. State-of-the-art infrastructure designed to foster intense focus and competitive spirit.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {centres.map((centre, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            whileHover={{ y: -15 }}
                            className="glass p-6 md:p-8 rounded-[2rem] border-2 border-border-color hover:border-secondary/40 transition-all duration-300 group relative overflow-hidden interactive shadow-xl"
                        >
                            {/* Animated Map Glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-all duration-500 pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-bg-primary border border-border-color flex items-center justify-center text-secondary shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-text-primary group-hover:text-secondary transition-colors">{centre.city}</h3>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-glass-bg transition-colors border border-transparent hover:border-border-color">
                                    <Navigation className="w-6 h-6 mt-1 text-primary shrink-0" />
                                    <span className="text-text-secondary text-sm font-medium leading-relaxed">{centre.address}</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-glass-bg transition-colors border border-transparent hover:border-border-color">
                                    <Phone className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-text-primary text-sm font-bold">{centre.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-glass-bg transition-colors border border-transparent hover:border-border-color">
                                    <Mail className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-text-primary text-sm font-bold">{centre.email}</span>
                                </div>
                            </div>

                            <button className="mt-8 w-full py-3 rounded-xl bg-bg-primary hover:bg-secondary text-text-primary hover:text-gray-900 border border-border-color transition-all duration-300 font-bold flex items-center justify-center gap-2 relative z-10 shadow-lg interactive group/btn tracking-wide text-sm">
                                Get Directions
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfflineCentres;
