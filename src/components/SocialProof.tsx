import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Trusted by industry leaders"
          subtitle="Join top SaaS, fintech, manufacturers, marketplaces and logistics companies already seeing results"
        />
      </Container>
    </section>
  );
};

export default SocialProof;