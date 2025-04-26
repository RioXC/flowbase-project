import React from 'react';
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
          </div>
        } />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;