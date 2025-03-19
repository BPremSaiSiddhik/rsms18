import React from 'react';

export const Alert = ({ variant = 'info', children }) => {
  const alertStyles = {
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    success: 'bg-green-100 text-green-800 border-green-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    destructive: 'bg-red-100 text-red-800 border-red-300',
  };

  return (
    <div
      className={`p-4 mb-4 border-l-4 ${alertStyles[variant] || alertStyles.info}`}
      role="alert"
    >
      {children}
    </div>
  );
};

export const AlertDescription = ({ children }) => {
  return <p className="mt-2">{children}</p>;
};
