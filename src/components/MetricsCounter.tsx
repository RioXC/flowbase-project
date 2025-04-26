import React, { useEffect, useState } from 'react';
import Container from './Container';

const MetricsCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const targetCount = 120;

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#008798]">
      <Container>
        <div className="text-center text-white">
          <div className="text-4xl md:text-5xl font-bold mb-2">
            {count}+ <span className="text-teal-200">hours saved</span>
          </div>
          <div className="text-xl text-teal-100">per month on average</div>
        </div>
      </Container>
    </section>
  );
};

export default MetricsCounter