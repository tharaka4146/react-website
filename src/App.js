import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Classes from './components/pages/Classes';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="classes" element={<Classes />} />
          <Route path="products" element={<Products />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;