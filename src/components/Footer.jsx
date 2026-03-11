import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const Footer = () => {
    return (
        <footer className="bg-bg-secondary pt-10 pb-6 border-t border-border-color relative overflow-hidden transition-colors duration-500">
            {/* Dynamic Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -mt-[75px]"></div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
                >

                    {/* Brand Col */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6 cursor-pointer interactive">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-xl shadow-lg border border-white/20 text-white">
                                S
                            </div>
                            <span className="text-2xl font-black tracking-tight text-text-primary">Sriram <span className="text-secondary">IAS</span></span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 font-light pr-4">
                            Empowering aspirants to achieve the pinnacle of administrative excellence through innovative pedagogy, expert curriculum, and unwavering dedication since 1985.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, color: "hover:bg-blue-600 hover:text-white" },
                                { Icon: Twitter, color: "hover:bg-sky-500 hover:text-white" },
                                { Icon: Instagram, color: "hover:bg-pink-600 hover:text-white" },
                                { Icon: Youtube, color: "hover:bg-red-600 hover:text-white" },
                                { Icon: Linkedin, color: "hover:bg-blue-700 hover:text-white" }
                            ].map((social, i) => (
                                <a key={i} href="#" className={`w-10 h-10 rounded-full glass border border-border-color flex items-center justify-center text-text-primary transition-all duration-300 interactive ${social.color} hover:scale-110 shadow-sm`}>
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Col 1 */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <h4 className="text-text-primary font-black mb-6 tracking-widest uppercase text-xs border-b border-border-color pb-3 inline-block self-start">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Offline Centres', 'Success Stories', 'Gallery', 'Contact Us'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-3 group font-medium interactive">
                                        <span className="w-4 h-px bg-border-color group-hover:bg-primary group-hover:w-6 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Links Col 2 */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <h4 className="text-text-primary font-black mb-6 tracking-widest uppercase text-xs border-b border-border-color pb-3 inline-block self-start">Top Courses</h4>
                        <ul className="space-y-3">
                            {['GS Foundation (Prelims + Mains)', 'Optional Subjects', 'Integrated Test Series', 'Interview Guidance', 'Current Affairs Program'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-text-secondary hover:text-secondary transition-colors text-sm flex items-center justify-between group font-medium interactive">
                                        {link}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-secondary" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter / App Col */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <h4 className="text-text-primary font-black mb-4 tracking-widest uppercase text-xs">Stay Updated</h4>
                        <p className="text-text-secondary text-xs mb-4 font-light">Subscribe to our newsletter for daily current affairs updates.</p>
                        <div className="flex relative mb-8 interactive w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-bg-primary border border-border-color rounded-xl py-3 pl-4 pr-12 text-sm text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner placeholder-text-secondary/50"
                            />
                            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg group">
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>

                        <h4 className="text-text-primary font-black mb-4 tracking-widest uppercase text-xs">Download App</h4>
                        <div className="flex flex-col gap-3">
                            <button className="w-full bg-bg-primary hover:bg-glass-bg border border-border-color rounded-lg p-2.5 flex items-center justify-center gap-3 transition-all interactive hover:border-primary/40 shadow-sm group">
                                <svg className="w-6 h-6 text-text-primary group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.56.09 2.75.69 3.51 1.76-3.2 1.87-2.67 5.96.48 7.15-.75 1.83-1.66 3.12-2.57 4.06zm-4.73-13.8c-.3-2.15 1.48-4.06 3.61-4.28.38 2.32-1.74 4.31-3.61 4.28z" /></svg>
                                <div className="text-left leading-none">
                                    <div className="text-[9px] text-text-secondary font-bold tracking-wider mb-0.5">Download on</div>
                                    <div className="text-xs font-black text-text-primary">App Store</div>
                                </div>
                            </button>
                            <button className="w-full bg-bg-primary hover:bg-glass-bg border border-border-color rounded-lg p-2.5 flex items-center justify-center gap-3 transition-all interactive hover:border-primary/40 shadow-sm group">
                                <svg className="w-6 h-6 text-green-500 scale-110" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414L14.7779 13.9118C14.4751 13.7541 14.1032 13.7844 13.8299 13.9882L11 16.0392L6.15555 11.1948L8.20649 8.36495C8.41031 8.0916 8.44062 7.71968 8.28292 7.4169L6.8533 4.67185C6.67167 4.32398 6.27041 4.14885 5.89269 4.25418C4.54286 4.6315 3.32766 5.37877 2.38531 6.42593C1.35703 7.56846 0.741699 9.02055 0.741699 10.5833C0.741699 16.3353 5.40636 21 11.1584 21C12.7211 21 14.1732 20.3847 15.3157 19.3564C16.3629 18.414 17.1102 17.1988 17.4875 15.849C17.5928 15.4713 17.4177 15.07 17.0698 14.8884L17.523 15.3414Z" /><path d="M11 16.0391L13.8299 13.9881C14.1032 13.7843 14.4751 13.7541 14.7779 13.9117L21.3621 17.3391C22.1852 17.7677 22.4636 18.8055 21.9363 19.5694C20.4851 21.6702 18.0673 23.0031 15.3168 23.0031C10.7027 23.0031 6.7461 19.866 5.48047 15.5898L11 16.0391Z" /><path d="M6.15555 11.1948L8.20649 8.36495C8.41031 8.0916 8.44062 7.71968 8.28292 7.41689L4.85558 0.832709C4.42696 0.00962329 3.38914 -0.268798 2.62529 0.258416C0.524458 1.70965 -0.80838 4.12745 -0.80838 6.87799C-0.80838 11.4921 2.32865 15.4487 6.60488 16.7143L6.15555 11.1948Z" /></svg>
                                <div className="text-left leading-none">
                                    <div className="text-[9px] text-text-secondary font-bold tracking-wider mb-0.5">GET IT ON</div>
                                    <div className="text-xs font-black text-text-primary">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </motion.div>

                </motion.div>

                <div className="border-t border-border-color pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-secondary text-xs font-semibold tracking-wide">
                        &copy; {new Date().getFullYear()} Sriram IAS Coaching Academy. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs font-bold tracking-wide text-text-secondary">
                        <a href="#" className="hover:text-primary transition-colors interactive">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors interactive">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors interactive">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
