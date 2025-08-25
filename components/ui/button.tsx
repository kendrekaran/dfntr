import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`relative overflow-hidden transition-transform duration-200 hover:translate-y-[1px] ${className}`}
      style={{
        backgroundColor: 'rgb(99, 91, 255)',
        borderRadius: '12px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px -3px 0px 0px inset',
        border: '2px solid rgba(0, 0, 0, 0.05)',
        padding: '16px 32px',
        fontFamily: '"Inter Tight", "Inter Tight Placeholder", sans-serif',
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: '0.01em',
        color: 'rgb(255, 255, 255)',
        textAlign: 'center',
        cursor: 'pointer',
        borderTop: '2px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '2px solid rgba(0, 0, 0, 0.05)',
        borderLeft: '2px solid rgba(0, 0, 0, 0.05)',
        borderRight: '2px solid rgba(0, 0, 0, 0.05)',
      }}
      {...props}
    >
      <div
        className="absolute top-[-10px] left-[-10px] w-5 h-5"
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          filter: 'blur(18.3px)',
          transform: 'rotate(-28deg)',
          opacity: 1,
        }}
      />
      <div
        className="absolute bottom-[-10px] right-[-10px] w-5 h-5"
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          filter: 'blur(18.3px)',
          transform: 'rotate(-28deg)',
          opacity: 1,
        }}
      />
      {children}
    </button>
  );
};
