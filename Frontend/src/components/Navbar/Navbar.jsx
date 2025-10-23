import { Link } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="header-top">
        <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        <h1 className="college-name">
          CUSAT
          <span className="subtext">
            Cochin University Of Science And Technology | Established 1971
          </span>
        </h1>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/academic" onClick={() => setMenuOpen(false)}>ACADEMIC</Link></li>
        <li><Link to="/library" onClick={() => setMenuOpen(false)}>LIBRARY</Link></li>
        <li><Link to="/admission" onClick={() => setMenuOpen(false)}>ADMISSION</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;