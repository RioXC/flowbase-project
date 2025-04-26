import React from 'react';
import Container from './Container';
import { AlertTriangle, Clock, XCircle, AlertOctagon } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#008798] mb-8">Reconciliation is broken</h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: <AlertTriangle className="h-6 w-6" />,
                  title: 'Mismatched Transactions',
                  description: 'Hours wasted trying to match transactions across systems'
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: 'Manual Work',
                  description: 'Repetitive tasks eating up valuable team time'
                },
                {
                  icon: <XCircle className="h-6 w-6" />,
                  title: 'Hidden Errors',
                  description: 'Critical mistakes slipping through manual processes'
                },
                {
                  icon: <AlertOctagon className="h-6 w-6" />,
                  title: 'Overtime Closes',
                  description: 'Late nights and weekend work to close books'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#008798] to-teal-400 opacity-10 rounded-2xl"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <img 
                src="/flowbase-flow-diagram.gif"
                alt="Reconciliation workflow diagram"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;