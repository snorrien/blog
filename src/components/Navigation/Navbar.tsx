import React, { useState } from 'react';

interface NavigationProps {
  toggleMenu: () => void;
}

  const Navbar: React.FC<NavigationProps> = ({ toggleMenu }) => {
    
    return (
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler ms-2"
          type="button"
          onClick={toggleMenu}>
          <span className="navbar-toggler-icon" ></span>
        </button>
      </nav>
    );
  };

export default Navbar;