import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

const App = () => (
  <div className='App'>
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
    </Routes>
  </div>
);

export default App;
