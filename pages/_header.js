import { useState, useEffect } from 'react';

const Header = () => {
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
        <a className="navbar-logo" href="/">
          <img src="/logo.svg" alt="Logo" />
          <h1 className="navbar-logo-title">Github Projects</h1>
        </a>

        <ul className="navbar-links">
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Create Profile</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
