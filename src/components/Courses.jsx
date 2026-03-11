import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const courses = [
    {
        title: 'GS Foundation Course',
        duration: '12 Months',
        mode: 'Online / Offline',
        description: 'Comprehensive coverage of General Studies for Prelims and Mains with integrated answer writing.',
        features: ['Daily Answer Writing', 'Expert Faculty', 'Current Affairs Updated'],
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        )
    },
    {
        title: 'Optional Subjects',
        duration: '5 Months',
        mode: 'Online / Offline',
        description: 'Specialized coaching for Sociology, Public Administration, PSIR, and Geography options.',
        features: ['In-depth Analysis', 'Previous Year Questions', 'Mock Tests'],
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        )
    },
    {
        title: 'Integrated Test Series',
        duration: 'Year Long',
        mode: 'Online',
        description: 'Simulated examination environments with AI-driven analytics and personalized feedback.',
        features: ['Detailed Evaluation', 'Video Discussions', 'Performance Tracker'],
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        )
    }
];

// Interactive 3D Card Component
const CourseCard = ({ course, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(event) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, z: 100 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="perspective-1000 w-full"
        >
            <motion.div
                className="glass-card relative overflow-hidden rounded-3xl p-6 border border-border-color h-full flex flex-col group interactive"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                {/* Animated Background Glow that follows mouse */}
                <motion.div
                    className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none"
                    style={{ x, y, left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }}
                />

                <div className="mb-6 inline-flex p-3 rounded-2xl glass border border-border-color text-primary shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:scale-110 group-hover:text-white group-hover:bg-primary transition-all duration-300">
                    {course.icon}
                </div>

                <h3 className="text-2xl font-black mb-2 text-text-primary group-hover:text-primary transition-colors">{course.title}</h3>

                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-text-secondary mb-4">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-border-color">
                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-border-color">
                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        {course.mode}
                    </span>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed font-light line-clamp-3 text-sm">
                    {course.description}
                </p>

                <ul className="mb-10 space-y-3 mt-auto">
                    {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                            <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button className="w-full py-3 rounded-xl glass hover:bg-primary border border-primary/30 hover:border-transparent text-primary hover:text-white transition-all font-bold mt-auto flex items-center justify-center gap-2 group/btn text-sm">
                    Explore Course
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </motion.div>
        </motion.div>
    );
}

const Courses = () => {
    const [activeCourse, setActiveCourse] = useState(0);

    return (
        <section id="courses" className="py-10 md:py-12 bg-bg-primary relative transition-colors duration-500 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] -mr-96 -mt-96 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 glass mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-sm font-bold tracking-widest text-primary uppercase">Elite Programs</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black mb-4 text-text-primary tracking-tight"
                    >
                        Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Courses</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary text-base font-light leading-relaxed"
                    >
                        Hover or click to expand. Choose from our meticulously crafted programs designed to give you a strategic edge in the UPSC examination.
                    </motion.p>
                </div>

                {/* Highly Interactive Flex Accordion */}
                <div className="flex flex-col lg:flex-row gap-4 w-full mt-10 h-auto lg:h-[550px]">
                    {courses.map((course, index) => {
                        const isActive = activeCourse === index;
                        return (
                            <motion.div
                                key={index}
                                layout
                                transition={{ layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
                                onClick={() => setActiveCourse(index)}
                                onHoverStart={() => setActiveCourse(index)}
                                className={`relative rounded-[2rem] overflow-hidden cursor-pointer flex flex-col justify-end bg-bg-secondary border border-border-color shadow-xl hover:border-primary/50 group transition-all duration-500 ease-in-out ${
                                    isActive ? 'flex-[4] lg:flex-[5] bg-bg-primary/30' : 'flex-1 opacity-80 hover:opacity-100 lg:min-w-[120px] min-h-[120px]'
                                }`}
                            >
                                {/* Background Image */}
                                <motion.div 
                                    className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-1000"
                                    animate={{ scale: isActive ? 1.05 : 1 }}
                                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                                >
                                    <img 
                                        src={course.image} 
                                        alt={course.title} 
                                        className={`w-full h-full object-cover filter transition-all duration-1000 ${isActive ? 'grayscale-0' : 'grayscale'}`}
                                    />
                                </motion.div>

                                {/* Background Gradient for text visibility */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/90 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-90'}`}></div>
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeGlow" 
                                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
                                    />
                                )}

                                {/* Content Container */}
                                <div className={`relative z-10 w-full h-full flex flex-col ${isActive ? 'p-8 lg:p-10' : 'p-6 items-center justify-center'}`}>
                                    
                                    {/* Icon - Always visible, animates position */}
                                    <motion.div 
                                        layout
                                        className={`transition-all duration-500 ${isActive ? 'mb-6 p-4 bg-bg-primary border border-border-color shadow-sm rounded-2xl self-start' : 'p-3 bg-transparent'}`}
                                    >
                                        <div className={`text-primary ${isActive ? 'scale-125' : 'scale-100'}`}>
                                            {course.icon}
                                        </div>
                                    </motion.div>

                                    {/* Inactive State Title (Rotated on Desktop) */}
                                    {!isActive && (
                                        <motion.div 
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }} 
                                            className="hidden lg:flex w-full h-full items-center justify-center mt-8"
                                        >
                                            <h3 className="text-xl font-bold text-text-primary whitespace-nowrap -rotate-90 origin-center tracking-wider">
                                                {course.title}
                                            </h3>
                                        </motion.div>
                                    )}
                                    {!isActive && (
                                        <motion.div 
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }} 
                                            className="flex lg:hidden mt-2 text-center"
                                        >
                                            <h3 className="text-sm font-bold text-text-primary">
                                                {course.title}
                                            </h3>
                                        </motion.div>
                                    )}

                                    {/* Active State Full Content */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="flex flex-col h-full"
                                        >
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="px-3 py-1 rounded-full bg-bg-primary border border-border-color text-text-primary font-bold text-xs tracking-wide shadow-sm">
                                                    {course.duration}
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-bg-primary border border-border-color text-text-primary font-bold text-xs tracking-wide shadow-sm">
                                                    {course.mode}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-3xl md:text-4xl font-black text-text-primary mb-4 leading-tight">
                                                {course.title}
                                            </h3>
                                            
                                            <p className="text-text-secondary text-sm md:text-base mb-8 max-w-xl leading-relaxed font-light">
                                                {course.description}
                                            </p>
                                            
                                            <ul className="space-y-3 mt-auto mb-8">
                                                {course.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-text-secondary">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(217,119,6,0.8)]"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold interactive hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all w-max group/btn mt-auto">
                                                Explore Details
                                                <svg className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Courses;
