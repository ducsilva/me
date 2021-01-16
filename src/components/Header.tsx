import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [navbarPositionFixed, setNavbarPositionFixed] = useState(false);

  const scrollEvent = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setNavbarPositionFixed(false);
      } else if (!navbarPositionFixed) {
        setNavbarPositionFixed(true);
      }
    });
  };

  useEffect(() => {
    scrollEvent();
  }, []);

  return (
    <header
      id="navbar"
      className={`default-container ${
        navbarPositionFixed ? 'navbar-fixed' : ''
      }`}
    >
      <div className="wrapper">
        <Link href="/">
          <a className="navbar-logo" title="Home page">
            <img src="/logo.svg" alt="Logo" />
            <h1 className="navbar-logo-title">Github Profiles</h1>
          </a>
        </Link>

        <nav>
          <ul className="navbar-links">
            <li>
              <a
                href="https://www.linkedin.com/in/vieira-lucas/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my LinkedIn Profile"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lukazovic"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit my Github Profile"
              >
                Github
              </a>
            </li>
            <li>
              <Link href="/search">
                <a title="Create your own Profile">Create Profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
