import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles.css';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
      <nav className="navbar">
        <Link to="/">
              <img src="/pictures/logo1.png" className="logo" alt="BéƠi Coffee Logo" />
        </Link>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar_links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Menu</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact/Catering</NavLink></li>
        </ul>
      </div>
      <div className="icons">
        <a href="#"><img src="/pictures/magnifying-glass-solid.svg" style={{cursor: 'pointer'}} className="search_box" alt="Search" /></a>
        <a href="#"><img src="/pictures/user-solid.svg" style={{cursor: 'pointer'}} className="user" alt="User" /></a>
        <div className="items_counter">
          <Link to="/cart"><img src="/pictures/cart-shopping-solid.svg" style={{cursor: 'pointer'}} className="order" alt="Cart" /></Link>
          <div className="no_count">{totalItems}</div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

