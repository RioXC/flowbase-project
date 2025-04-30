import React from 'react';
import Container from './Container';
import Button from './Button';
import { Workflow } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />
      <Container className="relative pt-14 pb-0 lg:pt-20 lg:pb-0">
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-center mb-8">
            <img src="/flowbase-logo.png" alt="Flowbase Logo" className="w-14 h-14 mr-3" />
            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#008798] text-center">Flowbase</span>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl animate-gradient bg-gradient-to-r from-[#5eead4] via-[#008798] to-[#5eead4] bg-clip-text text-transparent text-center">
            Agentic workflows for financial clarity
          </h1>
          <p className="mt-8 text-2xl leading-10 text-gray-600 text-center font-medium">
            Be first to automate your financial back office
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600 text-lg">
            <div className="flex items-center group transition-transform duration-200 hover:scale-105 cursor-pointer">
              <div className="bg-[#00C4A7]/10 p-4 rounded-lg mr-4 transition-colors duration-200 group-hover:bg-[#00C4A7]/20">
                <svg className="h-7 w-7 text-[#00C4A7] group-hover:text-[#007483] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-base font-semibold transition-colors duration-200 group-hover:text-[#008798] group-hover:font-bold">Instant data ingestion from PDFs, ERPs, spreadsheets</span>
            </div>
            <div className="flex items-center group transition-transform duration-200 hover:scale-105 cursor-pointer">
              <div className="bg-[#00C4A7]/10 p-4 rounded-lg mr-4 transition-colors duration-200 group-hover:bg-[#00C4A7]/20">
                <svg className="h-7 w-7 text-[#00C4A7] group-hover:text-[#007483] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-base font-semibold transition-colors duration-200 group-hover:text-[#008798] group-hover:font-bold">Visual workflow builder + natural‐language rules</span>
            </div>
            <div className="flex items-center group transition-transform duration-200 hover:scale-105 cursor-pointer">
              <div className="bg-[#00C4A7]/10 p-4 rounded-lg mr-4 transition-colors duration-200 group-hover:bg-[#00C4A7]/20">
                <svg className="h-7 w-7 text-[#00C4A7] group-hover:text-[#007483] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-base font-semibold transition-colors duration-200 group-hover:text-[#008798] group-hover:font-bold">AI agents handle every edge case automatically</span>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a href="#waitlist">
              <Button 
                size="lg" 
                className="bg-[#008798] hover:bg-[#007483] text-white"
              >
                Join the Waitlist
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-center text-base text-gray-500 font-medium mb-0">
              Trusted by top SaaS, fintech, manufacturers, marketplaces and logistics companies
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;