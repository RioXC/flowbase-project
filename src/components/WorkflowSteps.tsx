import React, { useState, useRef, useEffect } from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { Database, GitMerge, Cpu } from 'lucide-react';

const Step: React.FC<{
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ number, title, description, icon, isActive, onClick }) => {
  return (
    <div 
      className={`cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105' : 'opacity-70 hover:opacity-90'
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <div className={`h-16 w-16 rounded-full flex items-center justify-center mb-4 z-10 relative transition-colors duration-300 ${
          isActive ? 'bg-[#008798] text-white' : 'bg-gray-100 text-gray-500'
        }`}>
          {icon}
        </div>
      </div>
      <div className={`bg-white rounded-lg p-6 shadow-sm border transition-all duration-300 ${
        isActive ? 'border-[#008798]' : 'border-gray-200'
      }`}>
        <div className={`inline-flex items-center justify-center h-8 w-8 rounded-full font-semibold text-sm mb-4 ${
          isActive ? 'bg-[#008798]/10 text-[#008798]' : 'bg-gray-100 text-gray-500'
        }`}>
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WorkflowSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: 'Ingest & Stitch Data',
      description: 'Connect to all your data sources including spreadsheets, ERPs, and payment processors with our flexible connectors.',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'Build Workflow & Define Rules',
      description: 'Use our visual workflow builder to map your reconciliation process and set up automated rules for common scenarios.',
      icon: <GitMerge className="h-6 w-6" />
    },
    {
      title: 'Deploy AI Agents & Automate',
      description: 'Train specialized AI agents to handle your specific edge cases and fully automate your reconciliation process.',
      icon: <Cpu className="h-6 w-6" />
    }
  ];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} will-change-transform`}>
          <SectionHeading
            title="How It Works"
            subtitle="Set up your automated reconciliation system in three simple steps"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkflowSteps;