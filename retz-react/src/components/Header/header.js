import React, { useState } from 'react';
import ReactLogo from '../../Logo.png';
import '../Styles/header.css';

function Header() {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  // État pour la page courante
  const [currentPage, setCurrentPage] = useState('Accueil'); 

  // Fonction pour mettre à jour la page courante
  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header className="headerContainer">
        <img className="logo" src={ReactLogo} alt="logo React" />
        <ul className='header-ul'>
          <li className={currentPage === 'Accueil' ? 'active' : ''}>
            <a className='header-a' href="https://retz-o-lution-informatique.fr" onClick={() => handleMenuClick('Accueil')}>Accueil</a>
          </li>
          <li className={currentPage === 'Dépannage' ? 'active' : ''}>
            <a className='header-a' href="#" onClick={() => handleMenuClick('Dépannage')}>Dépannage</a>
          </li>
          <li
            className={`scrolling-menu ${isSubMenuVisible ? 'active' : ''}`}
            onMouseEnter={() => setSubMenuVisible(true)}
            onMouseLeave={() => setSubMenuVisible(false)}
          >
            <a className='header-a' href="#">Web</a>
            <ul className="under-menu">
              <li><a className='header-a' href='#'>Conception de sites Web</a></li>
              <li><a className='header-a' href='#'>Conception d'applications Web</a></li>
              <li><a className='header-a' href='#'>Portfolio</a></li>
            </ul>
          </li>
          <li className={currentPage === 'Tarifs' ? 'active' : ''}>
            <a className='header-a' href="#" onClick={() => handleMenuClick('Tarifs')}>Tarifs</a>
          </li>
          <li className={currentPage === 'Contact' ? 'active' : ''}>
            <a className='header-a' href="#" onClick={() => handleMenuClick('Contact')}>Contact</a>
          </li>
          <li className={currentPage === 'À propos' ? 'active' : ''}>
            <a className='header-a' href="#" onClick={() => handleMenuClick('À propos')}>À propos</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
