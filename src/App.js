import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CarListing from './components/CarListing';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/cars" element={<CarListing/>} />
          <Route path="/booking" element={<Booking/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
