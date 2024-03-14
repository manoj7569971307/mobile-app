// App.js
// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Navigate
import Login from './Login';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Use Route without "exact" */}
        <Route path="/homepage" element={<Homepage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
