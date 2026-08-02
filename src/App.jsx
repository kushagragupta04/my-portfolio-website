import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import V1App from './v1/App';
import V2App from './v2/App';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/v1" element={<V1App />} />
        <Route path="/*" element={<V2App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
