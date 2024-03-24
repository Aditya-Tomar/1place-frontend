import React from 'react';

const Button = ({ backgroundColor, borderColor, textColor, icon, text, onClick }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#007bff', // Default background color blue
    borderColor: borderColor || '#007bff', // Default border color blue
    color: textColor || '#ffffff', // Default text color white
    borderRadius: '20px', // Round corners
    padding: '10px 20px', // Adjust padding as needed
    border: '2px solid',
    cursor: 'pointer',
    fontSize: '16px',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </button>
  );
};

export default Button;