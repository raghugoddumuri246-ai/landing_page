import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is the duration of the GS Foundation course?",
        answer: "Our GS Foundation course runs for 10-12 months. It covers both Prelims and Mains exhaustively, ensuring you have enough time for multiple revisions and test series before the actual exam."
    },
    {
        question: "Do you provide study material for offline classes?",
        answer: "Yes, comprehensive and updated printed study materials are provided to all offline students. Online students receive high-quality PDFs and can also opt, for an additional fee, to have physical books delivered."
    },
    {
        question: "Is there any EMI option available for fee payment?",
        answer: "Yes, we have partnered with several financial institutions to provide flexible, 0% interest EMI options for our flagship courses."
    },
    {
        question: "How is the test series evaluated?",
        answer: "Our Mains answer copies are evaluated by a dedicated team of subject experts and ex-bureaucrats within 48-72 hours. You receive detailed feedback on structure, content, and presentation, along with model answers."
    },
    {
        question: "Can I switch from Online to Offline mode later?",
        answer: "Yes, students can switch from Online to Offline mode by paying the difference in the fee structure, subject to seat availability in the respective batches."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-32 bg-bg-primary relative border-t border-border-color transition-colors duration-500 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-24 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-5xl font-black mb-4 text-text-primary tracking-tight"
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-base font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Got questions? We've got answers to help you make an informed decision about your preparation journey.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass rounded-3xl overflow-hidden transition-all duration-500 border h-max self-start ${isActive ? 'border-primary/50 shadow-[0_10px_40px_rgba(37,99,235,0.1)]' : 'border-border-color hover:border-text-secondary/30'
                                    }`}
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none interactive group"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className={`text-lg font-bold transition-colors ${isActive ? 'text-primary' : 'text-text-primary group-hover:text-primary'} pr-6 tracking-wide`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-primary text-white' : 'glass border border-border-color text-text-secondary group-hover:bg-bg-secondary group-hover:text-primary'}`}>
                                        {isActive ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 pb-6 pt-0 text-text-secondary text-base font-light leading-relaxed relative">
                                                {/* Inner separator */}
                                                <div className="h-px w-full bg-gradient-to-r from-border-color via-transparent to-transparent mb-4"></div>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-1 rounded-full glass border border-border-color shadow-lg">
                        <p className="text-text-secondary text-sm font-medium inline-block pl-6 pr-4">Still have questions?</p>
                        <button className="px-8 py-3 rounded-full bg-primary hover:bg-accent hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all text-white font-bold ml-2 interactive tracking-wide">
                            Contact Support
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
