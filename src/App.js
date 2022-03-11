import React, { useState } from 'react';
import './App.css';

function App() {
  const [mood, setMood] = useState(true);
  return (
    <div className="App">
      <div className='container'>
        <p className='emoji'>{mood ? '😐' : '😀'}</p>
        <button onClick={() => setMood(!mood)}>Change mood</button>
      </div>
    </div>
  );
}

export default App;