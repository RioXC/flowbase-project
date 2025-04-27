import React, { useState } from 'react';
import Container from './Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900 pr-8">{question}</span>
        <span className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[#008798]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed pl-8 pr-6">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How secure is my data?',
      answer: 'Your data is protected with enterprise-grade security including end-to-end encryption and regular security audits. We maintain strict data privacy standards and never share your information with third parties.'
    },
    {
      question: 'What integrations are supported?',
      answer: 'We support all major ERPs, accounting software, payment processors, and banking platforms. Our flexible connector system allows for custom integrations with any system that provides API access.'
    },
    {
      question: 'When can I start my trial?',
      answer: 'We\'re currently in private beta with select customers. Join our waitlist to be among the first to access Flowbase when we launch publicly. Early access members receive priority onboarding and special pricing.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container className="max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#008798]">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;