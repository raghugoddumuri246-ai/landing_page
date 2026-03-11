import React from 'react';
import { motion } from 'framer-motion';

const faculty = [
    { name: 'Srirangam Sriram', subject: 'Indian Economy', experience: '35+ Years', role: 'Founder & Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Vivek Sharma', subject: 'History & Culture', experience: '15+ Years', role: 'Senior Faculty', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Anjali Singh', subject: 'Geography & Environment', experience: '12+ Years', role: 'Subject Expert', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Rahul Pandey', subject: 'Polity & Governance', experience: '10+ Years', role: 'Senior Faculty', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const TeachingExperts = () => {
    return (
        <section className="py-10 md:py-12 bg-bg-secondary relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 -ml-96 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">The Architects of Success</h4>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                            Learn from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Masters</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:flex flex-none items-center gap-3 px-6 py-3 rounded-full border border-border-color hover:border-primary text-text-primary hover:text-primary transition-colors font-bold mt-6 md:mt-0 glass interactive group text-sm"
                    >
                        Meet the entire panel
                        <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {faculty.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative rounded-3xl overflow-hidden group interactive aspect-[4/5] shadow-lg border border-border-color"
                        >
                            {/* Full Image */}
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                            />
                            
                            {/* Gradient Overlay for Text Visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-3xl transition-colors duration-500 pointer-events-none"></div>

                            {/* Floating Top Tag */}
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-xs font-bold text-white shadow-sm border border-white/10">
                                {member.experience}
                            </div>

                            {/* Content at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-primary tracking-widest text-xs font-black uppercase mb-1 drop-shadow-md">
                                    {member.role}
                                </p>
                                <h3 className="text-2xl font-black text-white mb-1 drop-shadow-md">
                                    {member.name}
                                </h3>
                                <p className="text-gray-300 text-sm font-medium tracking-wide">
                                    {member.subject}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <button className="md:hidden mt-10 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border-color text-text-primary text-sm font-bold interactive glass">
                    Meet the entire panel
                </button>
            </div>
        </section>
    );
};

export default TeachingExperts;
