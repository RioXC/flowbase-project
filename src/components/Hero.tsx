import React from 'react';
import Container from './Container';
import Button from './Button';
import { Workflow } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container className="relative pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#008798] align-middle">Flowbase</span>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-gradient bg-gradient-to-r from-[#00C4A7] via-[#008798] to-[#00C4A7] bg-clip-text text-transparent text-center">
            Agentic workflows for financial clarity
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 text-center">
            Be first to automate your financial back office
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
            <div className="flex items-center">
              <div className="bg-[#00C4A7]/10 p-3 rounded-lg mr-3">
                <svg className="h-5 w-5 text-[#00C4A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm">Instant data ingestion from PDFs, ERPs, spreadsheets</span>
            </div>
            <div className="flex items-center">
              <div className="bg-[#00C4A7]/10 p-3 rounded-lg mr-3">
                <svg className="h-5 w-5 text-[#00C4A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm">Visual workflow builder + natural‐language rules</span>
            </div>
            <div className="flex items-center">
              <div className="bg-[#00C4A7]/10 p-3 rounded-lg mr-3">
                <svg className="h-5 w-5 text-[#00C4A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm">AI agents handle every edge case automatically</span>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a href="#waitlist">
              <Button 
                size="lg" 
                className="bg-[#008798] hover:bg-[#007483] text-white"
              >
                Join the Waitlist
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              Trusted by top SaaS, fintech, manufacturers, marketplaces and logistics companies
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;