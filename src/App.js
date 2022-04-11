import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Try from './pages/try';
import Carousels from './pages/carousels';

import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    
  </Routes>
);

export default App;
