import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-12">
        <Link to="/" className="text-[#00C4A7] hover:text-[#00B396] mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using Flowbase, you agree to be bound by these Terms of Service and all applicable 
              laws and regulations.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily access Flowbase for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-600 mb-4">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The materials on Flowbase are provided on an 'as is' basis. Flowbase makes no warranties, expressed 
              or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or 
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Terms