
import React from "react";
import './../styles/App.css';
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
       <h2>Enter your name:</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>{name}</p>
    </div>
  )
}

export default App
