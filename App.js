import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contacts';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-content">
        <Home />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
