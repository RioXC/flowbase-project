import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import WorkflowSteps from './components/WorkflowSteps';
import MetricsCounter from './components/MetricsCounter';
import FAQ from './components/FAQ';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white font-sans">
            <Hero />
            <ProblemSolution />
            <Features />
            <WorkflowSteps />
            <MetricsCounter />
            <FAQ />
            <WaitlistForm />
            <Footer />
            <FloatingWaitlistButton />
          </div>
        } />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

function FloatingWaitlistButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('section');
      const waitlist = document.getElementById('waitlist');
      const scrollY = window.scrollY;
      const heroBottom = hero ? hero.getBoundingClientRect().bottom + window.scrollY : 0;
      const waitlistTop = waitlist ? waitlist.getBoundingClientRect().top + window.scrollY : Infinity;
      if (scrollY > heroBottom - 100 && scrollY < waitlistTop - 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return show ? (
    <a href="#waitlist" className="fixed bottom-6 right-8 z-50">
      <button className="px-6 py-3 rounded-full bg-[#008798] text-white text-lg font-bold shadow-lg hover:bg-[#007483] transition-all">
        Join the Waitlist
      </button>
    </a>
  ) : null;
}

export default App;