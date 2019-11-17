import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>You clicked {count} times</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me
    </button>
    </div>

  )

}

export default App;
