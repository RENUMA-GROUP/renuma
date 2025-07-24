import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg'; // ✅ Logo import करो

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333', color: '#fff', justifyContent: 'space-between' }}>
      
      {/* ✅ Logo Section */}
      <div style={{ marginRight: '20px' }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Link>
      </div>

      {/* ✅ Durga Construction Name */}
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Durga Construction
      </div>

      {/* ✅ Menu Links */}
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
