import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md';
  
  const variantStyles = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 shadow-sm',
    secondary: 'bg-white text-teal-500 hover:bg-gray-50 shadow-sm',
    outline: 'bg-transparent border-2 hover:bg-teal-500/10',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;