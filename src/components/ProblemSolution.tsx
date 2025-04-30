import React, { useRef, useEffect, useState } from 'react';
import Container from './Container';
import { AlertTriangle, Clock, XCircle, AlertOctagon } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
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
    <section className="py-8 sm:py-12 bg-white">
      <Container>
        <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'} will-change-transform`}>
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
            
              <div className="relative bg-white rounded-2xl p-1 shadow-xl border border-gray-200">
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