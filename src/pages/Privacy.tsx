import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-12">
        <Link to="/" className="text-[#00C4A7] hover:text-[#00B396] mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including name, email address, 
              and company information when you sign up for our waitlist or contact us.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your company data 
              against unauthorized or unlawful processing, accidental loss, destruction, or damage. Your data 
              is not shared or used in any way outside of your organization.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Privacy;