import React, { useState } from 'react';
import { Container } from './Styles';

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleWindowClick = (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-content')) {
      setShowDropdown(false);
    }
  };

  return (
    <Container>
      <nav>
        <img src="/src/media/logo.png" alt="Logo" />
        <div className="dropdown">
          <button className="dropbtn" onClick={handleDropdownClick}>
            <img src="/src/media/menu.png" alt="Menu" />
          </button>

          <div
            className="dropdown-content"
            style={showDropdown ? { display: 'block' } : { display: 'none' }}
          >
            <a href="#Programacao">Programação</a>
            <a href="#como-chegar">Como Chegar</a>
            <a href="#ingresso">Ingresso</a>
            <a href="#usos-gerais">Usos Gerais</a>
            <a href="#acomodacao">Acomodação</a>
            <a href="#equipes">Equipes</a>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Nav;

