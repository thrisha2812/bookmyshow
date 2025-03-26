import React, { useState } from 'react';
import './app.css';

function app() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div>
      <button onClick={toggleDarkMode} style={buttonStyle}>
        {darkMode ? 'Switch to Light Mode 🌞' : 'Switch to Dark Mode 🌙'}
      </button>
      <h1>Welcome to BookMyShow-2.0</h1>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '20px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
};

export default app;
