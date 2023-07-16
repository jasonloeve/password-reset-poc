import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional props if needed
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  const buttonClasses = `Button ${className}`;

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
