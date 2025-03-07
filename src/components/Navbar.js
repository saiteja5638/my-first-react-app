import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h3>SBP SkillNexus</h3>
            <i class='fab fa-typo3' />
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/Courses'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span class="material-symbols-outlined">
                  collections_bookmark
                </span>
                Courses
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span class="material-symbols-outlined">
                  store
                </span>
                Project Store
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/creater'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span class="material-symbols-outlined">
                  person
                </span>
                Creator
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
              <span class="material-symbols-outlined">
more_vert
</span>
                More
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span class="material-symbols-outlined">
                  login
                </span>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
