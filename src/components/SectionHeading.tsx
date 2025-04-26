import React from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleColor?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
  titleColor,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2
        className={
          title === 'How It Works'
            ? 'text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-gradient bg-gradient-to-r from-[#00C4A7] via-[#008798] to-[#00C4A7] bg-clip-text text-transparent mb-4'
            : `text-3xl sm:text-4xl font-bold mb-4 ${titleColor ? `text-[${titleColor}]` : 'text-gray-900'}`
        }
      >
        {title}
      </h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading