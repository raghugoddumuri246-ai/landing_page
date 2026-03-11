import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Celebrations from './components/Celebrations';
import WhyChooseUs from './components/WhyChooseUs';
import TeachingExperts from './components/TeachingExperts';
import CurrentAffairs from './components/CurrentAffairs';
import OfflineCentres from './components/OfflineCentres';
import Testimonials from './components/Testimonials';
import VideosCorner from './components/VideosCorner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen font-sans selection:bg-primary selection:text-white transition-colors duration-500">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <AboutUs />
        <Courses />
        <Celebrations />
        <WhyChooseUs />
        <TeachingExperts />
        <CurrentAffairs />
        <OfflineCentres />
        <Testimonials />
        <VideosCorner />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
