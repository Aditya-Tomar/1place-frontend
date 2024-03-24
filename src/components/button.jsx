import React from 'react';

const Button = ({ backgroundColor, borderColor, textColor, onClick, children }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#007bff', // Default background color blue
    borderColor: borderColor || '#007bff', // Default border color blue
    color: textColor || '#ffffff', // Default text color white
    borderRadius: '20px', // Round corners
    padding: '10px 20px', // Adjust padding as needed
    border: '1px solid',
    cursor: 'pointer',
    fontSize: '14px',
    outline: 'none',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;