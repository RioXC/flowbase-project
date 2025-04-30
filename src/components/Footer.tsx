import React from 'react';
import Container from './Container';
import Button from './Button';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-gray-50 text-gray-900 py-12">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="text-3xl font-bold mb-0 text-[#008798]">Save time. Regain trust. Get Flowbase.</h2>
          </div>
        </Container>
      </div>
      
      <div className="bg-black text-gray-400 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/privacy" className="hover:text-[#008798] transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-[#008798] transition-colors">Terms</Link>
              <a href="mailto:hello@getflowbase.com" className="hover:text-[#008798] transition-colors">
                hello@getflowbase.com
              </a>
            </div>
            <div>
              © {new Date().getFullYear()} Flowbase. All rights reserved.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;