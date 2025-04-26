import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { Workflow, Bot, Database, PieChart, AlertTriangle, Shield } from 'lucide-react';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="h-12 w-12 bg-[#008798]/10 text-[#008798] rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#008798] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to map your business processes and create automated reconciliation workflows.',
      icon: <Workflow className="h-6 w-6" />
    },
    {
      title: 'AI Edge-Case Agents',
      description: 'Specialized AI agents handle complex scenarios like partial payments and bulk payouts automatically.',
      icon: <Bot className="h-6 w-6" />
    },
    {
      title: 'Multi-Source Sync',
      description: 'Seamlessly connect and synchronize data from multiple sources in real-time.',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'Natural-Language Dashboards',
      description: 'Create custom views and reports using simple natural language queries.',
      icon: <PieChart className="h-6 w-6" />
    },
    {
      title: 'Real-Time Anomaly Detection',
      description: 'Instantly identify and flag suspicious patterns and discrepancies.',
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      title: 'Secure Cloud Infrastructure',
      description: 'Enterprise-grade security with SOC 2 compliance and end-to-end encryption.',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Transform your reconciliation process"
          subtitle="Powerful features designed for high-transaction businesses"
          titleColor="#008798"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features